/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SKU, InventoryMetrics } from '../types';
import { HelpCircle, Layers, Calendar, ChevronRight } from 'lucide-react';

interface InventoryStatusProps {
  skus: SKU[];
  setSkus: React.Dispatch<React.SetStateAction<SKU[]>>;
  metrics: InventoryMetrics[];
}

export default function InventoryStatus({ skus, setSkus, metrics }: InventoryStatusProps) {
  
  const handleUpdateStock = (id: string, field: 'onHand' | 'inboundQty' | 'inboundArrivalDays', val: number) => {
    const value = Math.max(0, val);
    setSkus((prev) =>
      prev.map((sku) => {
        if (sku.id === id) {
          return { ...sku, [field]: value };
        }
        return sku;
      })
    );
  };

  // Aggregated Values
  const totalOnHandUnits = skus.reduce((sum, s) => sum + s.onHand, 0);
  const totalInboundUnits = skus.reduce((sum, s) => sum + s.inboundQty, 0);
  const totalOnHandValue = metrics.reduce((sum, m) => sum + m.onHandValue, 0);
  const totalInboundValue = metrics.reduce((sum, m) => sum + m.inboundValue, 0);

  return (
    <div className="space-y-8 animate-[fadeUp_220ms_var(--ease-decel)_both]">
      
      {/* Page Header */}
      <div className="flex flex-col space-y-1">
        <h2 className="serif-heading text-[var(--text-page-title)] font-bold text-[color:var(--color-primary)]">
          Sheet 3｜Real-Time Inventory Status
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl font-light">
          Review current warehouse holdings (On Hand) and shipping pipeline schedules. Adjust on-hand levels to test your supply chain risk tolerances.
        </p>
      </div>

      {/* Aggregate Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card p-5">
          <div className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">On Hand Quantity</div>
          <div className="mt-1 text-[24px] serif-heading font-bold text-[color:var(--color-primary)]">
            {totalOnHandUnits.toLocaleString('en-US')} <span className="text-xs text-gray-400 font-mono">UNITS</span>
          </div>
        </div>

        <div className="card p-5">
          <div className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">In-Transit Quantity</div>
          <div className="mt-1 text-[24px] serif-heading font-bold text-blue-600">
            +{totalInboundUnits.toLocaleString('en-US')} <span className="text-xs text-gray-400 font-mono">UNITS</span>
          </div>
        </div>

        <div className="card p-5">
          <div className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">On Hand Value (At Cost)</div>
          <div className="mt-1 text-[24px] serif-heading font-bold text-[color:var(--color-primary)]">
            ${totalOnHandValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>

        <div className="card p-5">
          <div className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">Pipeline Value (At Cost)</div>
          <div className="mt-1 text-[24px] serif-heading font-bold text-blue-600">
            ${totalInboundValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
      </div>

      {/* Main Stock Table */}
      <div className="card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="serif-heading text-[16px] font-bold text-[color:var(--color-primary)]">
            Warehouse Holdings &amp; Pipeline Editor
          </h3>
          <span className="text-[10px] font-mono text-gray-400 uppercase">
            All Costs evaluated using Sheet 1 rules
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 h-[44px]">
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)]">SKU / Product</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Unit Cost</th>
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right bg-amber-50/20">Current Stock (On Hand)</th>
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right bg-blue-50/10">Inbound Qty (Open PO)</th>
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right bg-blue-50/10">Inbound Arrival (Days)</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Available Inventory</th>
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Capital Value (On-Hand)</th>
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Capital Value (Inbound)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13px]">
              {skus.map((sku) => {
                const metric = metrics.find(m => m.skuId === sku.id);
                const totalAvailable = sku.onHand + sku.inboundQty;
                
                return (
                  <tr key={sku.id} className="h-[40px] hover:bg-gray-50 transition-colors">
                    {/* SKU Name */}
                    <td className="px-6 font-medium text-[color:var(--color-primary)]">
                      <div className="flex flex-col">
                        <span>{sku.name}</span>
                        <span className="text-[10px] text-gray-400 font-mono">{sku.id}</span>
                      </div>
                    </td>

                    {/* Cost */}
                    <td className="px-4 text-right font-mono text-gray-500">
                      ${sku.unitCost.toFixed(2)}
                    </td>

                    {/* Current Stock (Editable) */}
                    <td className="px-6 text-right bg-amber-50/10">
                      <input
                        type="number"
                        id={`input-stock-onhand-${sku.id}`}
                        value={sku.onHand}
                        min={0}
                        onChange={(e) => handleUpdateStock(sku.id, 'onHand', parseInt(e.target.value, 10) || 0)}
                        className="w-24 text-right bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-2.5 py-1 font-mono font-semibold"
                      />
                    </td>

                    {/* Inbound Qty (Editable) */}
                    <td className="px-6 text-right bg-blue-50/5">
                      <input
                        type="number"
                        id={`input-stock-inbound-${sku.id}`}
                        value={sku.inboundQty}
                        min={0}
                        onChange={(e) => handleUpdateStock(sku.id, 'inboundQty', parseInt(e.target.value, 10) || 0)}
                        className="w-24 text-right bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-2.5 py-1 font-mono font-semibold text-blue-600"
                      />
                    </td>

                    {/* Inbound Arrival days (Editable) */}
                    <td className="px-6 text-right bg-blue-50/5">
                      <input
                        type="number"
                        id={`input-stock-arrival-${sku.id}`}
                        value={sku.inboundArrivalDays}
                        min={0}
                        disabled={sku.inboundQty === 0}
                        onChange={(e) => handleUpdateStock(sku.id, 'inboundArrivalDays', parseInt(e.target.value, 10) || 0)}
                        className={`w-20 text-right bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-2 py-1 font-mono font-medium ${
                          sku.inboundQty === 0 ? 'opacity-40 select-none cursor-not-allowed bg-gray-100' : ''
                        }`}
                      />
                    </td>

                    {/* Total Available */}
                    <td className="px-4 text-right font-mono font-bold text-[color:var(--color-primary)]">
                      {totalAvailable.toLocaleString('en-US')}
                    </td>

                    {/* On Hand value */}
                    <td className="px-6 text-right font-mono text-gray-700 font-medium">
                      ${metric?.onHandValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>

                    {/* Inbound value */}
                    <td className="px-6 text-right font-mono text-blue-600 font-medium">
                      {metric && metric.inboundValue > 0 ? (
                        `$${metric.inboundValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                      ) : (
                        '-'
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Helpful methodology card */}
      <div className="bg-[color:var(--insight-bg)] border-l-3 border-[color:var(--color-accent)] p-5 rounded-r-[var(--radius-md)] flex items-start space-x-4">
        <HelpCircle className="w-5 h-5 text-[color:var(--color-accent)] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="serif-heading text-[15px] font-bold text-[color:var(--color-primary)]">
            Total Available Inventory Definition
          </h4>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            In formal supply chain modeling, <strong className="text-[color:var(--color-primary)]">Available Inventory = On Hand + In-Transit Pipeline</strong>. Even if stock is currently on a cargo vessel (in-transit), it has already been purchased and will cover future demand; therefore, it is subtracted from the suggested purchase order quantity. The days remaining tells the planning engine when the shipping bottleneck will clear.
          </p>
        </div>
      </div>

    </div>
  );
}
