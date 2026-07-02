/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SKU, InventoryMetrics } from '../types';
import { LineChart, Sparkles, AlertCircle, HelpCircle } from 'lucide-react';

interface ForecastEngineProps {
  skus: SKU[];
  setSkus: React.Dispatch<React.SetStateAction<SKU[]>>;
  metrics: InventoryMetrics[];
}

export default function ForecastEngine({ skus, setSkus, metrics }: ForecastEngineProps) {
  
  const handleUpdateOverride = (id: string, field: 'trendOverride' | 'seasonalityOverride' | 'forecastManualDailySales', val: any) => {
    setSkus((prev) =>
      prev.map((sku) => {
        if (sku.id === id) {
          if (val === '') {
            // Reset to empty/undefined for manual forecast
            const updated = { ...sku };
            if (field === 'forecastManualDailySales') {
              delete updated.forecastManualDailySales;
            } else {
              updated[field] = 1.0;
            }
            return updated;
          }
          const numVal = Math.max(0.01, Number(val));
          return { ...sku, [field]: numVal };
        }
        return sku;
      })
    );
  };

  const handleResetOverrides = () => {
    if (window.confirm('Reset all overrides back to automated statistical values?')) {
      setSkus((prev) =>
        prev.map((sku) => {
          const updated = { ...sku, trendOverride: 1.0, seasonalityOverride: 1.0 };
          delete updated.forecastManualDailySales;
          return updated;
        })
      );
    }
  };

  return (
    <div className="space-y-8 animate-[fadeUp_220ms_var(--ease-decel)_both]">
      
      {/* Page Header */}
      <div className="flex flex-col space-y-1">
        <h2 className="serif-heading text-[var(--text-page-title)] font-bold text-[color:var(--color-primary)]">
          Sheet 4｜Demand Forecasting Engine
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl font-light">
          Computes moving sales trends and integrates marketing multipliers. Modify trend or seasonality parameters to model marketing surges or high seasons.
        </p>
      </div>

      {/* Control Actions Bar */}
      <div className="card p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500 uppercase font-mono">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Rolling Forecast Mode: 30-day &amp; 60-day moving regression</span>
        </div>
        <button
          id="btn-reset-forecast-overrides"
          onClick={handleResetOverrides}
          className="px-3.5 py-1.5 border border-gray-200 hover:bg-gray-50 text-[11px] font-mono font-bold tracking-wider rounded-md text-gray-600 transition-colors cursor-pointer"
        >
          RESET ALL OVERRIDES
        </button>
      </div>

      {/* Forecast Engine Table */}
      <div className="card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="serif-heading text-[16px] font-bold text-[color:var(--color-primary)]">
            Demand Modelling Matrix
          </h3>
          <span className="text-[10px] font-mono text-gray-400 uppercase">
            Formula: Forecast = baseline &times; trend &times; seasonality
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 h-[44px]">
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)]">SKU / Product</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">30d Moving Avg</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">60d Moving Avg</th>
                <th className="px-4 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Auto Trend (30/60)</th>
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right bg-amber-50/20">Trend Override</th>
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right bg-amber-50/20">Seasonality Factor</th>
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right bg-amber-50/20">Manual Daily Sales</th>
                <th className="px-6 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Daily Forecast (Units)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13px]">
              {skus.map((sku) => {
                const metric = metrics.find(m => m.skuId === sku.id);
                if (!metric) return null;

                const rawAutoTrend = metric.avg60d > 0 ? metric.avg30d / metric.avg60d : 1.0;
                const isOverridden = sku.trendOverride !== 1.0 || sku.seasonalityOverride !== 1.0 || sku.forecastManualDailySales !== undefined;

                return (
                  <tr 
                    key={sku.id} 
                    className={`h-[40px] hover:bg-gray-50 transition-colors ${
                      isOverridden ? 'bg-amber-50/5' : ''
                    }`}
                  >
                    {/* SKU details */}
                    <td className="px-6 font-medium text-[color:var(--color-primary)]">
                      <div className="flex flex-col">
                        <span>{sku.name}</span>
                        <span className="text-[10px] text-gray-400 font-mono">{sku.id}</span>
                      </div>
                    </td>

                    {/* 30d Avg */}
                    <td className="px-4 text-right font-mono text-gray-600 font-medium">
                      {metric.avg30d.toFixed(1)}
                    </td>

                    {/* 60d Avg */}
                    <td className="px-4 text-right font-mono text-gray-500">
                      {metric.avg60d.toFixed(1)}
                    </td>

                    {/* Auto Trend */}
                    <td className="px-4 text-right font-mono font-medium text-gray-600">
                      {rawAutoTrend.toFixed(2)}x
                    </td>

                    {/* Trend Override (Editable) */}
                    <td className="px-6 text-right">
                      <input
                        type="number"
                        id={`input-trend-${sku.id}`}
                        value={sku.trendOverride}
                        step={0.05}
                        min={0.1}
                        onChange={(e) => handleUpdateOverride(sku.id, 'trendOverride', e.target.value)}
                        className="w-20 text-right bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-2 py-1 font-mono font-semibold"
                      />
                    </td>

                    {/* Seasonality Override (Editable) */}
                    <td className="px-6 text-right">
                      <input
                        type="number"
                        id={`input-seasonality-${sku.id}`}
                        value={sku.seasonalityOverride}
                        step={0.05}
                        min={0.1}
                        onChange={(e) => handleUpdateOverride(sku.id, 'seasonalityOverride', e.target.value)}
                        className="w-20 text-right bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-2 py-1 font-mono font-semibold"
                      />
                    </td>

                    {/* Manual Daily Forecast (Editable) */}
                    <td className="px-6 text-right">
                      <input
                        type="number"
                        id={`input-manual-forecast-${sku.id}`}
                        placeholder="Automatic"
                        value={sku.forecastManualDailySales !== undefined ? sku.forecastManualDailySales : ''}
                        onChange={(e) => handleUpdateOverride(sku.id, 'forecastManualDailySales', e.target.value === '' ? '' : e.target.value)}
                        className="w-24 text-right bg-[color:var(--color-input-bg)] placeholder-gray-400 border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-2 py-1 font-mono font-semibold text-xs"
                      />
                    </td>

                    {/* Daily Forecast result */}
                    <td className="px-6 text-right font-mono font-bold text-[color:var(--color-accent)]">
                      {metric.dailyForecast.toFixed(1)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Explanatory insights on demand planning */}
      <div className="bg-[color:var(--insight-bg)] border-l-3 border-[color:var(--color-accent)] p-5 rounded-r-[var(--radius-md)] flex items-start space-x-4">
        <HelpCircle className="w-5 h-5 text-[color:var(--color-accent)] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="serif-heading text-[15px] font-bold text-[color:var(--color-primary)]">
            DTC Predictive Forecast Methodology
          </h4>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            The automated forecasting engine utilizes a <strong className="text-gray-800">30-day/60-day momentum trend factor</strong>. If the last 30 days of sales exceed the 60-day baseline (Trend &gt; 1.0x), it means the product is scaling (possibly due to recent Facebook/TikTok marketing). Overrides let you model high-season spikes (e.g. Black Friday seasonality = 1.8x) or set conservative winter baselines (seasonality = 0.8x) directly.
          </p>
        </div>
      </div>

    </div>
  );
}
