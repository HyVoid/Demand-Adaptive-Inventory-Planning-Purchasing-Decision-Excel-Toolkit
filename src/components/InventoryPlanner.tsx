/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SKU, InventoryMetrics } from '../types';
import { ShoppingCart, Clock, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';

interface InventoryPlannerProps {
  skus: SKU[];
  metrics: InventoryMetrics[];
  planningHorizon: number;
  setPlanningHorizon: (val: number) => void;
}

export default function InventoryPlanner({
  skus,
  metrics,
  planningHorizon,
  setPlanningHorizon,
}: InventoryPlannerProps) {
  
  const totalSuggestedPOsValue = metrics.reduce((sum, m) => sum + m.suggestedPOValue, 0);
  const totalPOUnits = metrics.reduce((sum, m) => sum + m.suggestedPOQty, 0);

  return (
    <div className="space-y-8 animate-[fadeUp_220ms_var(--ease-decel)_both]">
      
      {/* Page Header */}
      <div className="flex flex-col space-y-1">
        <h2 className="serif-heading text-[var(--text-page-title)] font-bold text-[color:var(--color-primary)]">
          Sheet 5｜Procurement &amp; Reorder Planner
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl font-light">
          Computes Lead Time Demand, Safety Stock, and Reorder Points (ROP) to trigger precise procurement timelines.
        </p>
      </div>

      {/* Planning Cycle Variable Controller */}
      <div className="card p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1 max-w-lg">
          <h4 className="serif-heading text-[15px] font-bold text-[color:var(--color-primary)]">
            Replenishment Target Planning Horizon
          </h4>
          <p className="text-xs text-gray-500">
            Determine how many days of consumer demand a single PO should cover once received. Larger cycles reduce freight operations but inflate cash commitment.
          </p>
        </div>
        <div className="flex items-center space-x-3 shrink-0">
          <input
            type="range"
            min={15}
            max={120}
            step={5}
            value={planningHorizon}
            onChange={(e) => setPlanningHorizon(Number(e.target.value))}
            className="w-48 accent-[color:var(--color-accent)] cursor-pointer"
          />
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={planningHorizon}
              onChange={(e) => setPlanningHorizon(Math.max(1, Number(e.target.value)))}
              className="w-16 text-center bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-1.5 py-1 font-mono font-bold"
            />
            <span className="text-xs font-mono font-bold text-gray-500 uppercase">Days Supply</span>
          </div>
        </div>
      </div>

      {/* Aggregate Suggestion Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-5 flex items-center space-x-4">
          <div className="p-3 bg-blue-50 text-[color:var(--color-accent)] rounded-lg">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">Total Proposed PO Count</div>
            <div className="text-[20px] serif-heading font-bold text-[color:var(--color-primary)]">
              {metrics.filter(m => m.suggestedPOQty > 0).length} SKU Orders recommended
            </div>
          </div>
        </div>

        <div className="card p-5 flex items-center space-x-4">
          <div className="p-3 bg-blue-50 text-[color:var(--color-accent)] rounded-lg">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">Recommended Capital Purchase</div>
            <div className="text-[20px] serif-heading font-bold text-[color:var(--color-accent)]">
              ${totalSuggestedPOsValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
          </div>
        </div>

        <div className="card p-5 flex items-center space-x-4">
          <div className="p-3 bg-gray-50 text-gray-400 rounded-lg">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">Total Recommended PO Volume</div>
            <div className="text-[20px] serif-heading font-bold text-gray-700">
              {totalPOUnits.toLocaleString('en-US')} <span className="text-xs font-mono">Units</span>
            </div>
          </div>
        </div>
      </div>

      {/* Procurement Planning Matrix */}
      <div className="card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="serif-heading text-[16px] font-bold text-[color:var(--color-primary)]">
            Procurement Planner Engine
          </h3>
          <span className="text-[10px] font-mono text-gray-400 uppercase">
            Quantities Rounded to MOQ Multiple Constraints
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 h-[44px]">
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)]">SKU / Product</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Daily Forecast</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Lead Time (d)</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">LT Demand</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right text-gray-500">Safety Stock</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right font-semibold text-indigo-900">ROP</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Available Stock</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Coverage Days</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right text-indigo-600 bg-blue-50/10">Suggested PO</th>
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-center">Suggested PO Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13px]">
              {metrics.map((m) => {
                const skuObj = skus.find(s => s.id === m.skuId);
                if (!skuObj) return null;

                const totalAvailable = skuObj.onHand + skuObj.inboundQty;
                const isBreached = totalAvailable <= m.reorderPoint;
                const isPORecommended = m.suggestedPOQty > 0;

                return (
                  <tr 
                    key={m.skuId} 
                    className={`h-[40px] hover:bg-gray-50 transition-all duration-150 ${
                      isBreached ? 'bg-red-50/10' : ''
                    }`}
                  >
                    {/* SKU details */}
                    <td className="px-4 py-1.5 font-medium text-[color:var(--color-primary)]">
                      <div className="flex flex-col">
                        <span>{skuObj.name}</span>
                        <span className="text-[10px] text-gray-400 font-mono">
                          {skuObj.id} (MOQ: {skuObj.moq})
                        </span>
                      </div>
                    </td>

                    {/* Daily Forecast */}
                    <td className="px-4 text-right font-mono text-gray-600">
                      {m.dailyForecast.toFixed(1)}
                    </td>

                    {/* Lead Time */}
                    <td className="px-4 text-right font-mono text-gray-500">
                      {skuObj.leadTime}d
                    </td>

                    {/* Lead Time Demand */}
                    <td className="px-4 text-right font-mono text-gray-600">
                      {m.leadTimeDemand.toFixed(0)}
                    </td>

                    {/* Safety Stock */}
                    <td className="px-4 text-right font-mono text-gray-400">
                      {m.safetyStock.toFixed(0)}
                    </td>

                    {/* ROP */}
                    <td className="px-4 text-right font-mono font-bold text-indigo-950">
                      {m.reorderPoint.toFixed(0)}
                    </td>

                    {/* Available Stock */}
                    <td className={`px-4 text-right font-mono font-semibold ${
                      isBreached ? 'text-[color:var(--color-negative)] font-bold' : 'text-gray-700'
                    }`}>
                      {totalAvailable}
                    </td>

                    {/* Coverage Days */}
                    <td className="px-4 text-right font-mono text-gray-600">
                      {m.coverageDays.toFixed(0)} days
                    </td>

                    {/* Suggested PO Qty */}
                    <td className="px-4 text-right bg-blue-50/5">
                      {isPORecommended ? (
                        <div className="flex flex-col items-end">
                          <span className="font-mono font-bold text-blue-600">
                            {m.suggestedPOQty.toLocaleString('en-US')}
                          </span>
                          <span className="text-[9px] text-gray-400 font-mono">
                            Cost: ${(m.suggestedPOValue).toLocaleString('en-US', { maximumFractionDigits: 0 })}
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-400 font-mono">-</span>
                      )}
                    </td>

                    {/* Suggested Purchase Date */}
                    <td className="px-6 text-center">
                      {m.suggestedPurchaseDate === 'ORDER NOW' ? (
                        <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider text-[color:var(--color-negative)] bg-red-100 animate-pulse">
                          ORDER NOW
                        </span>
                      ) : m.suggestedPurchaseDate === 'N/A' ? (
                        <span className="text-gray-400 text-xs">-</span>
                      ) : (
                        <div className="flex flex-col items-center">
                          <span className="font-mono text-xs font-semibold text-gray-700">
                            {m.suggestedPurchaseDate}
                          </span>
                          <span className="text-[9px] text-gray-400 font-mono">
                            In {Math.max(0, Math.floor((new Date(m.suggestedPurchaseDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))} days
                          </span>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Explanatory insights on safety calculations */}
      <div className="bg-[color:var(--insight-bg)] border-l-3 border-[color:var(--color-accent)] p-5 rounded-r-[var(--radius-md)] flex items-start space-x-4">
        <HelpCircle className="w-5 h-5 text-[color:var(--color-accent)] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="serif-heading text-[15px] font-bold text-[color:var(--color-primary)]">
            How Reorder Point (ROP) &amp; Safety Stock are Formulated
          </h4>
          <p className="text-[13px] text-gray-600 leading-relaxed space-y-2">
            The control tower computes two core indicators to insulate your DTC brand from expensive stock outages:
          </p>
          <ul className="text-xs text-gray-500 list-disc list-inside space-y-1">
            <li>
              <strong className="text-gray-700">Safety Stock (SS) = Z &times; StdDev &times; &radic;LT</strong>: This safety cushion buffers standard demand fluctuations during shipment. The standard deviation (<span className="font-mono">StdDev</span>) is calculated over 90 days of Shopify sales history.
            </li>
            <li>
              <strong className="text-gray-700">Reorder Point (ROP) = LT Demand + SS</strong>: The exact threshold level. When your warehouse holdings + in-transit pipeline fall to or below the ROP, you must order immediately to avoid stock depletion.
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
