/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SKU, InventoryMetrics } from '../types';
import { Landmark, PiggyBank, Receipt, Award, HelpCircle } from 'lucide-react';

interface CashFlowImpactProps {
  skus: SKU[];
  metrics: InventoryMetrics[];
}

export default function CashFlowImpact({ skus, metrics }: CashFlowImpactProps) {
  
  // Total Financial aggregations
  const totalOnHandValue = metrics.reduce((sum, m) => sum + m.onHandValue, 0);
  const totalSuggestedPOValue = metrics.reduce((sum, m) => sum + m.suggestedPOValue, 0);
  
  const totalOnHandQty = skus.reduce((sum, s) => sum + s.onHand, 0);
  const totalProposedQty = metrics.reduce((sum, m) => sum + m.suggestedPOQty, 0);
  
  // Projected Retail Potential
  const totalRetailPotential = skus.reduce((sum, s) => {
    const metric = metrics.find(m => m.skuId === s.id);
    const totalUnits = s.onHand + (metric?.suggestedPOQty || 0);
    return sum + (totalUnits * s.retailPrice);
  }, 0);

  // Blended Gross Margin
  const totalCostOfPotential = skus.reduce((sum, s) => {
    const metric = metrics.find(m => m.skuId === s.id);
    const totalUnits = s.onHand + (metric?.suggestedPOQty || 0);
    return sum + (totalUnits * s.unitCost);
  }, 0);

  const blendedGrossMargin = totalRetailPotential > 0
    ? ((totalRetailPotential - totalCostOfPotential) / totalRetailPotential) * 100
    : 0;

  return (
    <div className="space-y-8 animate-[fadeUp_220ms_var(--ease-decel)_both]">
      
      {/* Page Header */}
      <div className="flex flex-col space-y-1">
        <h2 className="font-serif text-[var(--text-page-title)] font-bold tracking-[var(--tracking-display)] text-[color:var(--color-primary)]">
          Sheet 6｜Capital Commitment &amp; Margin Analysis
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl font-light">
          Examine working capital assets, estimated invoice costs, and margins. Review capital allocation ratios to maintain optimal retail cash flow.
        </p>
      </div>

      {/* Financial Aggregates Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] flex items-center space-x-4">
          <div className="p-3 bg-emerald-50 text-[color:var(--color-positive)] rounded-lg">
            <Landmark className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">Working Capital Bound</div>
            <div className="text-[20px] font-serif font-bold text-[color:var(--color-primary)]">
              ${totalOnHandValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] flex items-center space-x-4">
          <div className="p-3 bg-blue-50 text-[color:var(--color-accent)] rounded-lg">
            <PiggyBank className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">Procurement Cash Outflow</div>
            <div className="text-[20px] font-serif font-bold text-[color:var(--color-accent)]">
              ${totalSuggestedPOValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] flex items-center space-x-4">
          <div className="p-3 bg-gray-50 text-gray-600 rounded-lg">
            <Receipt className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">Retail Sales Capacity</div>
            <div className="text-[20px] font-serif font-bold text-gray-800">
              ${totalRetailPotential.toLocaleString('en-US', { minimumFractionDigits: 0 })}
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] flex items-center space-x-4">
          <div className="p-3 bg-indigo-50 text-indigo-700 rounded-lg">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">Blended Gross Margin</div>
            <div className="text-[20px] font-serif font-bold text-indigo-950">
              {blendedGrossMargin.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>

      {/* Cash Flow Table */}
      <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-serif text-[16px] font-bold text-[color:var(--color-primary)]">
            Working Capital Ledger
          </h3>
          <span className="text-[10px] font-mono text-gray-400 uppercase">
            Margin (%) = (Retail Price - Unit Cost) / Retail Price
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 h-[44px]">
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)]">SKU / Product</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Unit Cost</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Retail Price</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Gross Margin</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right font-medium text-gray-800">On-Hand Capital</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right text-blue-600">Proposed PO Cost</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right text-gray-800">Total Retail Potential</th>
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Turnover (Turns)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13px]">
              {skus.map((sku) => {
                const metric = metrics.find(m => m.skuId === sku.id);
                if (!metric) return null;

                const marginPct = ((sku.retailPrice - sku.unitCost) / sku.retailPrice) * 100;
                const retailPotential = (sku.onHand + metric.suggestedPOQty) * sku.retailPrice;

                return (
                  <tr key={sku.id} className="h-[40px] hover:bg-gray-50 transition-colors">
                    {/* SKU Details */}
                    <td className="px-6 font-medium text-[color:var(--color-primary)]">
                      <div className="flex flex-col">
                        <span>{sku.name}</span>
                        <span className="text-[10px] text-gray-400 font-mono">{sku.id}</span>
                      </div>
                    </td>

                    {/* Unit Cost */}
                    <td className="px-4 text-right font-mono text-gray-500">
                      ${sku.unitCost.toFixed(2)}
                    </td>

                    {/* Retail Price */}
                    <td className="px-4 text-right font-mono text-gray-500">
                      ${sku.retailPrice.toFixed(2)}
                    </td>

                    {/* Gross Margin */}
                    <td className="px-4 text-right font-mono font-medium text-emerald-700">
                      {marginPct.toFixed(1)}%
                    </td>

                    {/* On Hand Value */}
                    <td className="px-4 text-right font-mono font-medium text-gray-800">
                      ${metric.onHandValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>

                    {/* Proposed PO Cost */}
                    <td className="px-4 text-right font-mono text-blue-600 font-semibold">
                      {metric.suggestedPOQty > 0 ? (
                        `$${metric.suggestedPOValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                      ) : (
                        '-'
                      )}
                    </td>

                    {/* Retail Potential */}
                    <td className="px-4 text-right font-mono text-gray-800 font-medium">
                      ${retailPotential.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>

                    {/* Turns */}
                    <td className="px-6 text-right font-mono font-medium text-indigo-950">
                      {metric.projectedTurns.toFixed(2)}x
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Financial methodology card */}
      <div className="bg-[color:var(--insight-bg)] border-l-3 border-[color:var(--color-accent)] p-5 rounded-r-[var(--radius-md)] flex items-start space-x-4">
        <HelpCircle className="w-5 h-5 text-[color:var(--color-accent)] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-serif text-[15px] font-bold text-[color:var(--color-primary)]">
            Analyzing DTC Working Capital &amp; Inventory Turns
          </h4>
          <p className="text-[13px] text-gray-600 leading-relaxed space-y-2">
            The ledger above measures capital efficiency, gross margins, and turnover metrics:
          </p>
          <ul className="text-xs text-gray-500 list-disc list-inside space-y-1">
            <li>
              <strong className="text-gray-700">Inventory Turns</strong>: Calculated as <span className="font-mono">Annualized COGS &divide; Average On Hand Inventory Value</span>. High turns (e.g. &gt; 8.0x) demonstrate exceptional capital velocity (less days cash tied up in dead stock). Low turns suggest inventory is sleeping in the warehouse, accumulating storage costs.
            </li>
            <li>
              <strong className="text-gray-700">Retail Sales Capacity</strong>: The potential DTC topline value unlocked once all On Hand and Proposed PO stocks are fully liquidated at standard retail list price.
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
