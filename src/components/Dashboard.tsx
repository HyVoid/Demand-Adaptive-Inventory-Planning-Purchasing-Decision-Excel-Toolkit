/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SKU, InventoryMetrics } from '../types';
import { AlertTriangle, TrendingUp, CheckCircle, Package, Layers, Calendar } from 'lucide-react';

interface DashboardProps {
  skus: SKU[];
  metrics: InventoryMetrics[];
  setActiveTab: (tab: string) => void;
}

export default function Dashboard({ skus, metrics, setActiveTab }: DashboardProps) {
  // Aggregate Metrics
  const totalOnHandValue = metrics.reduce((sum, m) => sum + m.onHandValue, 0);
  const totalInboundValue = metrics.reduce((sum, m) => sum + m.inboundValue, 0);
  const totalSuggestedPOValue = metrics.reduce((sum, m) => sum + m.suggestedPOValue, 0);
  
  const greenSKUsCount = metrics.filter(m => m.healthStatus === 'Green').length;
  const stockHealthRatio = metrics.length > 0 ? (greenSKUsCount / metrics.length) * 100 : 0;

  const avgTurns = metrics.length > 0 
    ? metrics.reduce((sum, m) => sum + m.projectedTurns, 0) / metrics.length 
    : 0;

  // Alerts
  const orderNowSKUs = metrics.filter(m => m.reorderAlert === 'Order Now');
  const orderSoonSKUs = metrics.filter(m => m.reorderAlert === 'Order Soon');
  const stockoutRiskSKUs = metrics.filter(m => m.coverageDays < 15);

  // Categories allocation for visualizer
  const categoryValues: Record<string, number> = {};
  metrics.forEach(m => {
    const skuObj = skus.find(s => s.id === m.skuId);
    if (skuObj) {
      categoryValues[skuObj.category] = (categoryValues[skuObj.category] || 0) + m.onHandValue;
    }
  });

  const totalVal = Object.values(categoryValues).reduce((sum, v) => sum + v, 0) || 1;

  return (
    <div className="space-y-8 animate-[fadeUp_300ms_var(--ease-decel)_both]">
      
      {/* Page Header */}
      <div className="flex flex-col space-y-1.5">
        <h2 className="font-serif text-[var(--text-page-title)] font-bold tracking-[var(--tracking-display)] text-[color:var(--color-primary)]">
          Inventory Planning Control Tower
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl font-light">
          Real-time dynamic analysis of DTC supply chain safety stocks, reorder points, and capital exposure. All calculations are reactively updated below.
        </p>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* On Hand Capital */}
        <div className="card p-5">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">On-Hand Capital</span>
            <Package className="w-4 h-4 text-[color:var(--color-accent)]" />
          </div>
          <div className="mt-2 text-[var(--text-kpi-value)] serif-heading font-extrabold text-[color:var(--color-primary)]">
            ${totalOnHandValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="mt-1 text-xs text-gray-500 flex items-center space-x-1 font-light">
            <span>Currently stored in Swedish 3PL</span>
          </div>
        </div>

        {/* In-Transit Capital */}
        <div className="card p-5">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">In-Transit Capital</span>
            <Calendar className="w-4 h-4 text-blue-400" />
          </div>
          <div className="mt-2 text-[var(--text-kpi-value)] serif-heading font-extrabold text-[color:var(--color-primary)]">
            ${totalInboundValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="mt-1 text-xs text-gray-500 flex items-center space-x-1 font-light">
            <span>Open PO commitments on water/air</span>
          </div>
        </div>

        {/* Recommended PO Capital */}
        <div className="card p-5">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">Recommended POs</span>
            <Layers className="w-4 h-4 text-[color:var(--color-accent)]" />
          </div>
          <div className="mt-2 text-[var(--text-kpi-value)] serif-heading font-extrabold text-[color:var(--color-accent)]">
            ${totalSuggestedPOValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="mt-1 text-xs text-gray-500 flex items-center space-x-1 font-light">
            <span>Required capital to balance safety levels</span>
          </div>
        </div>

        {/* Stock Health Ratio */}
        <div className="card p-5">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">Stock Health</span>
            <CheckCircle className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="mt-2 text-[var(--text-kpi-value)] serif-heading font-extrabold text-[color:var(--color-primary)]">
            {stockHealthRatio.toFixed(1)}%
          </div>
          <div className="mt-1 text-xs text-gray-500 flex items-center space-x-1 font-light">
            <span>{greenSKUsCount} of {metrics.length} SKUs in optimal range</span>
          </div>
        </div>

        {/* Inventory Turns */}
        <div className="card p-5">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">Avg Turnover</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="mt-2 text-[var(--text-kpi-value)] serif-heading font-extrabold text-[color:var(--color-primary)]">
            {avgTurns.toFixed(2)}x
          </div>
          <div className="mt-1 text-xs text-gray-500 flex items-center space-x-1 font-light">
            <span>Annualized inventory turns ratio</span>
          </div>
        </div>
      </div>

      {/* Strategic Insight and Recommendation Block */}
      <div className="bg-[color:var(--insight-bg)] border-l-3 border-[color:var(--color-accent)] p-5 rounded-r-[var(--radius-md)] flex items-start space-x-4">
        <div className="bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] p-2.5 rounded-lg">
          <Layers className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="font-serif text-[15px] font-bold text-[color:var(--color-primary)]">
            Executive Supply Chain Diagnosis
          </h4>
          <p className="text-[13px] text-gray-600 leading-relaxed max-w-5xl">
            Currently, <strong className="text-[color:var(--color-primary)]">{orderNowSKUs.length} items</strong> have breached their critical Reorder Points (ROP) and require immediate placement of new purchase orders to avoid DTC stockouts. Additionally, the China supply chain (70-day lead time) pillows represent <strong className="text-[color:var(--color-primary)]">{(totalOnHandValue > 0 ? ((metrics.find(m => m.skuId === 'SKU-001')?.onHandValue || 0) + (metrics.find(m => m.skuId === 'SKU-002')?.onHandValue || 0)) / totalOnHandValue * 100 : 0).toFixed(0)}%</strong> of total capital allocation. It is highly recommended to prioritize placement of suggested POs to minimize long-lead-time risk.
          </p>
        </div>
      </div>

      {/* Alerts and Visualizers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Critical Reorder Warnings */}
        <div className="card p-6 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-gray-100">
            <h3 className="serif-heading text-[16px] font-bold text-[color:var(--color-primary)] flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-[color:var(--color-negative)]" />
              <span>Critical Action Required</span>
            </h3>
            <span className="text-[10px] font-mono bg-red-50 text-[color:var(--color-negative)] font-semibold px-2 py-0.5 rounded-full">
              {orderNowSKUs.length} BREACHES
            </span>
          </div>

          <div className="space-y-3 min-h-[220px]">
            {orderNowSKUs.length === 0 ? (
              <div className="h-[220px] flex flex-col items-center justify-center text-gray-400 text-xs">
                <CheckCircle className="w-8 h-8 text-emerald-400 mb-2" />
                <span>All SKUs have healthy available stock.</span>
              </div>
            ) : (
              <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1">
                {orderNowSKUs.map(m => {
                  const skuObj = skus.find(s => s.id === m.skuId);
                  return (
                    <div 
                      key={m.skuId}
                      onClick={() => setActiveTab('planner')}
                      className="group flex justify-between items-center p-3 rounded-lg bg-[color:var(--anomaly-bg)] border-l-2 border-[color:var(--color-negative)] cursor-pointer hover:translate-x-1 transition-all duration-200"
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-semibold text-[color:var(--color-primary)] group-hover:text-[color:var(--color-accent)] transition-colors">
                          {m.skuName}
                        </div>
                        <div className="text-[11px] text-gray-500 font-mono">
                          ROP: {m.reorderPoint.toFixed(0)} units | Avail: {(skuObj ? skuObj.onHand + skuObj.inboundQty : 0)} units
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-[color:var(--color-negative)] font-mono uppercase">
                          Order Now
                        </div>
                        <div className="text-[10px] text-gray-400 font-mono">
                          {m.coverageDays.toFixed(0)}d coverage
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <button 
            onClick={() => setActiveTab('planner')}
            className="w-full py-2 bg-[color:var(--color-primary)] text-white font-mono text-[11px] font-semibold tracking-wider rounded-md hover:bg-[color:var(--color-accent)] transition-colors cursor-pointer text-center"
          >
            OPEN REORDER PLANNER &rarr;
          </button>
        </div>

        {/* Order Soon Alerts */}
        <div className="card p-6 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-gray-100">
            <h3 className="serif-heading text-[16px] font-bold text-[color:var(--color-primary)] flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>Approaching Reorder Limits</span>
            </h3>
            <span className="text-[10px] font-mono bg-amber-50 text-amber-600 font-semibold px-2 py-0.5 rounded-full">
              {orderSoonSKUs.length} ITEMS
            </span>
          </div>

          <div className="space-y-3 min-h-[220px]">
            {orderSoonSKUs.length === 0 ? (
              <div className="h-[220px] flex flex-col items-center justify-center text-gray-400 text-xs">
                <CheckCircle className="w-8 h-8 text-emerald-400 mb-2" />
                <span>No SKU approaching reorder limits.</span>
              </div>
            ) : (
              <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1">
                {orderSoonSKUs.map(m => {
                  const skuObj = skus.find(s => s.id === m.skuId);
                  const surplus = skuObj ? (skuObj.onHand + skuObj.inboundQty) - m.reorderPoint : 0;
                  const daysToROP = m.dailyForecast > 0 ? surplus / m.dailyForecast : 0;
                  return (
                    <div 
                      key={m.skuId}
                      onClick={() => setActiveTab('planner')}
                      className="group flex justify-between items-center p-3 rounded-lg bg-amber-50/50 border-l-2 border-amber-400 cursor-pointer hover:translate-x-1 transition-all duration-200"
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-semibold text-[color:var(--color-primary)] group-hover:text-[color:var(--color-accent)] transition-colors">
                          {m.skuName}
                        </div>
                        <div className="text-[11px] text-gray-500 font-mono">
                          Avail surplus: {surplus.toFixed(0)} units to ROP
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-amber-600 font-mono">
                          ROP -{daysToROP.toFixed(0)}d
                        </div>
                        <div className="text-[10px] text-gray-400 font-mono">
                          Est. {m.suggestedPurchaseDate}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <button 
            onClick={() => setActiveTab('planner')}
            className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-mono text-[11px] font-semibold tracking-wider rounded-md transition-colors cursor-pointer text-center"
          >
            VIEW PURCHASE CALENDAR
          </button>
        </div>

        {/* Capital Allocation Visualizer */}
        <div className="card p-6 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-gray-100">
            <h3 className="serif-heading text-[16px] font-bold text-[color:var(--color-primary)] flex items-center space-x-2">
              <Layers className="w-4 h-4 text-[color:var(--color-accent)]" />
              <span>Capital Balance allocation</span>
            </h3>
            <span className="text-[10px] font-mono text-gray-400 font-semibold uppercase">
              By Category
            </span>
          </div>

          <div className="space-y-5 min-h-[220px] flex flex-col justify-center">
            {Object.keys(categoryValues).map((cat) => {
              const val = categoryValues[cat];
              const pct = (val / totalVal) * 100;
              return (
                <div key={cat} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[color:var(--color-primary)]">{cat}</span>
                    <span className="font-mono text-gray-600">
                      ${val.toLocaleString('en-US', { maximumFractionDigits: 0 })} ({pct.toFixed(1)}%)
                    </span>
                  </div>
                  {/* Custom animated progress bar */}
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[color:var(--color-accent)] rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <button 
            onClick={() => setActiveTab('cashflow')}
            className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200 font-mono text-[11px] font-semibold tracking-wider rounded-md transition-colors cursor-pointer text-center"
          >
            DETAILED CASH FLOW ANALYSIS
          </button>
        </div>

      </div>

      {/* Complete SKUs Summary Table */}
      <div className="card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="serif-heading text-[16px] font-bold text-[color:var(--color-primary)]">
            Active Control Panel Overview
          </h3>
          <span className="text-[10px] font-mono text-gray-400">
            {skus.length} PRODUCTS SEEDED
          </span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 h-[44px]">
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)]">SKU / Product</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)]">Category</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Lead Time</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">On Hand</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">In-Transit</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Daily Forecast</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Stock Coverage</th>
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13px]">
              {metrics.map(m => {
                const skuObj = skus.find(s => s.id === m.skuId);
                const isRed = m.healthStatus === 'Red';
                const isYellow = m.healthStatus === 'Yellow';
                
                return (
                  <tr 
                    key={m.skuId}
                    className={`h-[40px] hover:bg-gray-50 transition-colors ${
                      isRed ? 'bg-[color:var(--anomaly-bg)]' : ''
                    }`}
                  >
                    <td className="px-6 font-medium text-[color:var(--color-primary)]">
                      <div className="flex flex-col">
                        <span>{m.skuName}</span>
                        <span className="text-[10px] text-gray-400 font-mono">{m.skuId}</span>
                      </div>
                    </td>
                    <td className="px-4 text-gray-500">{skuObj?.category}</td>
                    <td className="px-4 text-right font-mono text-gray-600">{m.leadTime} days</td>
                    <td className="px-4 text-right font-mono font-medium">{skuObj?.onHand}</td>
                    <td className="px-4 text-right font-mono text-gray-500">
                      {skuObj?.inboundQty && skuObj.inboundQty > 0 ? (
                        <span className="text-blue-600 font-medium">+{skuObj.inboundQty}</span>
                      ) : (
                        '-'
                      )}
                    </td>
                    <td className="px-4 text-right font-mono text-gray-600">
                      {m.dailyForecast.toFixed(1)}/day
                    </td>
                    <td className="px-4 text-right font-mono font-medium">
                      <div className="flex flex-col items-end">
                        <span className={isRed ? 'text-[color:var(--color-negative)] font-bold' : ''}>
                          {m.coverageDays.toFixed(0)} days
                        </span>
                        {/* Tiny coverage bar */}
                        <div className="w-16 h-1 bg-gray-100 rounded-full mt-1 overflow-hidden">
                          <div 
                            className={`h-full ${
                              isRed ? 'bg-[color:var(--color-negative)]' : 'bg-[color:var(--color-accent)]'
                            }`}
                            style={{ width: `${Math.min(100, (m.coverageDays / m.leadTime) * 100)}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider ${
                        isRed 
                          ? 'bg-red-100 text-[color:var(--color-negative)]' 
                          : isYellow 
                          ? 'bg-amber-100 text-amber-700' 
                          : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {m.healthStatus === 'Red' ? 'CRITICAL OUTAGE RISK' : m.healthStatus === 'Yellow' ? 'REORDER WARNING' : 'HEALTHY'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
