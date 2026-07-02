/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SKU, SalesCampaign } from '../types';
import { BarChart, UploadCloud, Calendar, Flame, Edit3, ArrowRight } from 'lucide-react';

interface SalesImportProps {
  skus: SKU[];
  setSkus: React.Dispatch<React.SetStateAction<SKU[]>>;
}

export default function SalesImport({ skus, setSkus }: SalesImportProps) {
  const [selectedSkuId, setSelectedSkuId] = useState(skus[0]?.id || '');
  const [bulkInput, setBulkInput] = useState('');
  const [campaignName, setCampaignName] = useState('');
  const [campaignDate, setCampaignDate] = useState('2026-06-15');
  const [campaignMultiplier, setCampaignMultiplier] = useState(1.5);

  const activeSku = skus.find(s => s.id === selectedSkuId) || skus[0];

  const handleBulkImport = () => {
    if (!activeSku) return;
    
    // Parse bulk input (comma, tab, space, or newline separated numbers)
    const numbers = bulkInput
      .split(/[\s,;\n\t]+/)
      .map(v => parseInt(v.trim(), 10))
      .filter(v => !isNaN(v) && v >= 0);

    if (numbers.length === 0) {
      alert('Could not find any valid positive numbers in the input. Please enter numbers separated by spaces, commas, or newlines.');
      return;
    }

    // Pad or trim to exactly 90 days
    let newHistory = [...numbers];
    if (newHistory.length < 90) {
      // pad with the average or last value
      const padVal = newHistory[newHistory.length - 1] || 15;
      while (newHistory.length < 90) {
        newHistory.unshift(padVal); // pad at the beginning (older history)
      }
    } else if (newHistory.length > 90) {
      // take the last 90 days
      newHistory = newHistory.slice(-90);
    }

    setSkus(prev => 
      prev.map(sku => {
        if (sku.id === activeSku.id) {
          return { ...sku, salesHistory: newHistory };
        }
        return sku;
      })
    );

    setBulkInput('');
    alert(`Successfully imported ${newHistory.length} days of daily sales for ${activeSku.name}. All formulas updated.`);
  };

  const handleDailySaleChange = (dayIndex: number, newVal: number) => {
    if (!activeSku) return;
    const value = Math.max(0, newVal);
    setSkus(prev =>
      prev.map(sku => {
        if (sku.id === activeSku.id) {
          const updatedHistory = [...sku.salesHistory];
          updatedHistory[dayIndex] = value;
          return { ...sku, salesHistory: updatedHistory };
        }
        return sku;
      })
    );
  };

  const handleAddCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeSku || !campaignName || !campaignDate) return;

    const newCampaign: SalesCampaign = {
      date: campaignDate,
      name: campaignName,
      salesMultiplier: Number(campaignMultiplier),
    };

    setSkus(prev =>
      prev.map(sku => {
        if (sku.id === activeSku.id) {
          // Boost sales around this date historically if date falls in 90 day window
          const campaignObjDate = new Date(campaignDate);
          const updatedHistory = [...sku.salesHistory];
          
          for (let day = 0; day < 90; day++) {
            const d = new Date('2026-07-01');
            d.setDate(d.getDate() - (90 - day));
            const dateStr = d.toISOString().split('T')[0];

            if (dateStr === campaignDate) {
              updatedHistory[day] = Math.round(updatedHistory[day] * campaignMultiplier);
            }
          }

          return { 
            ...sku, 
            salesHistory: updatedHistory,
            campaigns: [...sku.campaigns, newCampaign] 
          };
        }
        return sku;
      })
    );

    setCampaignName('');
  };

  const handleDeleteCampaign = (index: number) => {
    if (!activeSku) return;
    setSkus(prev =>
      prev.map(sku => {
        if (sku.id === activeSku.id) {
          return {
            ...sku,
            campaigns: sku.campaigns.filter((_, i) => i !== index)
          };
        }
        return sku;
      })
    );
  };

  // SVG Line Chart calculations
  const chartWidth = 720;
  const chartHeight = 200;
  const padding = 25;
  
  const points = activeSku ? activeSku.salesHistory : [];
  const maxVal = points.length > 0 ? Math.max(...points, 20) * 1.15 : 100;
  const minVal = 0;

  const svgPoints = points.map((val, i) => {
    const x = padding + (i / (points.length - 1)) * (chartWidth - padding * 2);
    const y = chartHeight - padding - ((val - minVal) / (maxVal - minVal)) * (chartHeight - padding * 2);
    return `${x},${y}`;
  }).join(' ');

  // Format dates for display
  const getSimulatedDate = (dayIndex: number) => {
    const d = new Date('2026-07-01');
    d.setDate(d.getDate() - (90 - dayIndex));
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-8 animate-[fadeUp_220ms_var(--ease-decel)_both]">
      {/* Page Header */}
      <div className="flex flex-col space-y-1">
        <h2 className="font-serif text-[var(--text-page-title)] font-bold tracking-[var(--tracking-display)] text-[color:var(--color-primary)]">
          Sheet 2｜Shopify Sales History Import
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl font-light">
          Manage daily shopify order records and marketing campaign overlays. Adjust historical outliers to clean forecasting engines.
        </p>
      </div>

      {/* SKU Select Dropdown */}
      <div className="card p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <label className="text-xs font-mono font-bold uppercase text-gray-500">Active Analysis SKU:</label>
          <select
            id="sales-sku-selector"
            value={selectedSkuId}
            onChange={(e) => setSelectedSkuId(e.target.value)}
            className="bg-gray-50 border border-gray-200 text-sm font-semibold rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] text-[color:var(--color-primary)] cursor-pointer"
          >
            {skus.map(s => (
              <option key={s.id} value={s.id}>{s.id} - {s.name}</option>
            ))}
          </select>
        </div>
        <div className="text-xs text-gray-500 font-mono">
          SUPPLIER: <span className="font-semibold text-gray-700">{activeSku?.supplier}</span>
        </div>
      </div>

      {activeSku && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Visualizer Area */}
          <div className="lg:col-span-2 card p-6 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <h3 className="serif-heading text-[16px] font-bold text-[color:var(--color-primary)] flex items-center space-x-2">
                <BarChart className="w-4 h-4 text-[color:var(--color-accent)]" />
                <span>90-Day Daily Sales Waveform</span>
              </h3>
              <span className="text-[10px] font-mono text-gray-400">
                MAX PEAK: {Math.max(...activeSku.salesHistory)} UNITS/DAY
              </span>
            </div>

            {/* Pure SVG Line Chart */}
            <div className="relative pt-2">
              <svg 
                viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
                className="w-full h-auto overflow-visible select-none"
              >
                {/* Background grid horizontal lines */}
                {[0, 0.25, 0.5, 0.75, 1].map((p, idx) => {
                  const y = padding + p * (chartHeight - padding * 2);
                  const valDisplay = Math.round(maxVal - p * (maxVal - minVal));
                  return (
                    <g key={idx} className="opacity-40">
                      <line 
                        x1={padding} 
                        y1={y} 
                        x2={chartWidth - padding} 
                        y2={y} 
                        stroke="#E8E8E6" 
                        strokeWidth="1" 
                        strokeDasharray="4 4" 
                      />
                      <text 
                        x={padding - 5} 
                        y={y + 3} 
                        textAnchor="end" 
                        fill="#888888" 
                        fontSize="9" 
                        fontFamily="monospace"
                      >
                        {valDisplay}
                      </text>
                    </g>
                  );
                })}

                {/* X axis dates marker ticks */}
                {[0, 0.25, 0.5, 0.75, 1].map((p, idx) => {
                  const i = Math.floor(p * (activeSku.salesHistory.length - 1));
                  const x = padding + p * (chartWidth - padding * 2);
                  return (
                    <g key={idx} className="opacity-60">
                      <line 
                        x1={x} 
                        y1={chartHeight - padding} 
                        x2={x} 
                        y2={chartHeight - padding + 4} 
                        stroke="#E8E8E6" 
                        strokeWidth="1" 
                      />
                      <text 
                        x={x} 
                        y={chartHeight - padding + 15} 
                        textAnchor="middle" 
                        fill="#888888" 
                        fontSize="9"
                      >
                        {getSimulatedDate(i)}
                      </text>
                    </g>
                  );
                })}

                {/* Line Path */}
                <polyline
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  points={svgPoints}
                  className="transition-all duration-300"
                />

                {/* Dots on line for campaign intersections */}
                {activeSku.campaigns.map((c, idx) => {
                  const dayIdx = activeSku.salesHistory.findIndex((_, i) => {
                    const d = new Date('2026-07-01');
                    d.setDate(d.getDate() - (90 - i));
                    return d.toISOString().split('T')[0] === c.date;
                  });

                  if (dayIdx === -1) return null;
                  const x = padding + (dayIdx / (activeSku.salesHistory.length - 1)) * (chartWidth - padding * 2);
                  const y = chartHeight - padding - ((activeSku.salesHistory[dayIdx] - minVal) / (maxVal - minVal)) * (chartHeight - padding * 2);

                  return (
                    <g key={idx} className="group cursor-pointer">
                      <circle 
                        cx={x} 
                        cy={y} 
                        r="5" 
                        className="fill-red-500 stroke-white stroke-2 group-hover:scale-125 transition-transform duration-200" 
                      />
                      <title>{c.name} ({c.salesMultiplier}x boost)</title>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bulk CSV / Numbers Paste Tool */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-serif text-[14px] font-bold text-[color:var(--color-primary)] flex items-center space-x-1.5">
                  <UploadCloud className="w-3.5 h-3.5 text-[color:var(--color-accent)]" />
                  <span>Bulk Order CSV Paste-In</span>
                </h4>
                <span className="text-[10px] text-gray-400 font-mono">Format: 90 numbers separated by spaces or commas</span>
              </div>
              <div className="flex gap-4">
                <textarea
                  id="bulk-sales-textarea"
                  rows={2}
                  placeholder="Paste e.g. 15, 18, 22, 20, 35, 42, 12, 18, 20..."
                  value={bulkInput}
                  onChange={(e) => setBulkInput(e.target.value)}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-md p-2 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] focus:bg-white transition-colors"
                />
                <button
                  id="btn-bulk-sales-submit"
                  onClick={handleBulkImport}
                  className="px-4 bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-accent)] font-mono text-[11px] font-bold tracking-wider rounded-md transition-colors cursor-pointer shrink-0 flex flex-col justify-center items-center"
                >
                  <ArrowRight className="w-4 h-4 mb-1" />
                  <span>OVERWRITE</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Tools & Campaign Managers */}
          <div className="space-y-6">
            
            {/* Ad Campaign Marker */}
            <div className="card p-5 space-y-4">
              <h3 className="serif-heading text-[15px] font-bold text-[color:var(--color-primary)] flex items-center space-x-1.5 pb-2 border-b border-gray-100">
                <Flame className="w-4 h-4 text-red-500" />
                <span>Mark Marketing Campaigns</span>
              </h3>

              <form onSubmit={handleAddCampaign} className="space-y-3 text-xs">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Campaign Title</label>
                  <input
                    type="text"
                    id="input-campaign-name"
                    required
                    placeholder="e.g. FB Ad Budget Scale"
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                    className="w-full border border-gray-200 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] text-gray-800"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Launch Date</label>
                    <input
                      type="date"
                      id="input-campaign-date"
                      required
                      value={campaignDate}
                      onChange={(e) => setCampaignDate(e.target.value)}
                      className="w-full border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] font-mono"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Sales Boost Multiplier</label>
                    <select
                      id="select-campaign-multiplier"
                      value={campaignMultiplier}
                      onChange={(e) => setCampaignMultiplier(Number(e.target.value))}
                      className="w-full border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)]"
                    >
                      <option value={1.2}>1.2x Boost</option>
                      <option value={1.5}>1.5x Boost</option>
                      <option value={1.8}>1.8x Boost</option>
                      <option value={2.0}>2.0x Boost</option>
                      <option value={2.5}>2.5x Boost</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  id="btn-add-campaign"
                  className="w-full py-2 bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-accent)] text-[10px] font-mono font-bold tracking-wider rounded-md transition-colors cursor-pointer text-center"
                >
                  COMMIT CAMPAIGN IMPACT
                </button>
              </form>

              {/* Active Campaigns List */}
              <div className="pt-3 border-t border-gray-100">
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2">Applied Campaigns</div>
                {activeSku.campaigns.length === 0 ? (
                  <span className="text-[11px] text-gray-400 block italic">No marketing campaigns marked for this SKU.</span>
                ) : (
                  <div className="space-y-2 max-h-[120px] overflow-y-auto pr-1">
                    {activeSku.campaigns.map((c, i) => (
                      <div key={i} className="flex justify-between items-center p-2 rounded bg-red-50/50 border border-red-100">
                        <div className="text-[11px]">
                          <div className="font-semibold text-[color:var(--color-primary)] flex items-center space-x-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            <span>{c.name}</span>
                          </div>
                          <div className="text-[10px] text-gray-500 font-mono">
                            {c.date} | Multiplier: {c.salesMultiplier}x
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteCampaign(i)}
                          className="text-xs text-gray-400 hover:text-red-500 px-1 py-0.5 rounded cursor-pointer"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Manual Daily Log Edit List */}
            <div className="card p-5 space-y-4">
              <h3 className="serif-heading text-[15px] font-bold text-[color:var(--color-primary)] flex items-center space-x-1.5 pb-2 border-b border-gray-100">
                <Edit3 className="w-4 h-4 text-[color:var(--color-accent)]" />
                <span>Adjust Daily Sales Log</span>
              </h3>
              
              <div className="text-[11px] text-gray-500 mb-2 leading-relaxed">
                Adjust specific daily entries below to fix isolated warehouse outages or exceptional returns.
              </div>

              {/* Scrollable list of 90 days */}
              <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1.5">
                {activeSku.salesHistory.map((val, idx) => {
                  const simulatedDayIndex = idx;
                  return (
                    <div 
                      key={simulatedDayIndex} 
                      className="flex items-center justify-between py-1 px-2.5 rounded hover:bg-gray-50 transition-colors text-xs font-mono"
                    >
                      <span className="text-gray-500 font-semibold">{getSimulatedDate(simulatedDayIndex)}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] text-gray-400 font-mono">Index {simulatedDayIndex}</span>
                        <input
                          type="number"
                          id={`input-sales-day-${simulatedDayIndex}`}
                          value={val}
                          min={0}
                          onChange={(e) => handleDailySaleChange(simulatedDayIndex, Number(e.target.value))}
                          className="w-14 text-right bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-1 py-0.5 font-semibold text-[color:var(--color-primary)] text-xs"
                        />
                      </div>
                    </div>
                  );
                }).reverse()} {/* Display most recent days first */}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
