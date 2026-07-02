/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SKU, CATEGORIES, SUPPLIERS } from '../types';
import { Plus, Trash2, HelpCircle } from 'lucide-react';

interface SetupConfigProps {
  skus: SKU[];
  setSkus: React.Dispatch<React.SetStateAction<SKU[]>>;
}

export default function SetupConfig({ skus, setSkus }: SetupConfigProps) {
  const [newSkuName, setNewSkuName] = useState('');
  const [newSkuId, setNewSkuId] = useState('');
  const [newCategory, setNewCategory] = useState(CATEGORIES[0]);
  const [newSupplier, setNewSupplier] = useState(SUPPLIERS[0]);
  const [newLeadTime, setNewLeadTime] = useState(30);
  const [newMoq, setNewMoq] = useState(100);
  const [newServiceLevel, setNewServiceLevel] = useState(0.95);
  const [newUnitCost, setNewUnitCost] = useState(10.00);
  const [newRetailPrice, setNewRetailPrice] = useState(25.00);

  const handleUpdateSku = (id: string, field: keyof SKU, value: any) => {
    setSkus((prev) =>
      prev.map((sku) => {
        if (sku.id === id) {
          return { ...sku, [field]: value };
        }
        return sku;
      })
    );
  };

  const handleAddSku = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkuId || !newSkuName) {
      alert('Please provide a unique SKU ID and Product Name.');
      return;
    }
    if (skus.some(s => s.id === newSkuId)) {
      alert('This SKU ID already exists in the master list.');
      return;
    }

    // Generate 90 days of random base sales for this new product
    const baseSales = Array.from({ length: 90 }, () => 
      Math.round(10 + Math.random() * 20)
    );

    const newSku: SKU = {
      id: newSkuId,
      name: newSkuName,
      category: newCategory,
      supplier: newSupplier,
      leadTime: Number(newLeadTime),
      moq: Number(newMoq),
      serviceLevel: Number(newServiceLevel),
      unitCost: Number(newUnitCost),
      retailPrice: Number(newRetailPrice),
      onHand: 150, // default seed
      inboundQty: 0,
      inboundArrivalDays: 0,
      salesHistory: baseSales,
      campaigns: [],
      trendOverride: 1.0,
      seasonalityOverride: 1.0,
    };

    setSkus((prev) => [...prev, newSku]);
    
    // Clear inputs
    setNewSkuId('');
    setNewSkuName('');
  };

  const handleDeleteSku = (id: string) => {
    if (window.confirm(`Are you sure you want to delete SKU ${id}? This will remove all inventory and sales history.`)) {
      setSkus((prev) => prev.filter(s => s.id !== id));
    }
  };

  return (
    <div className="space-y-8 animate-[fadeUp_220ms_var(--ease-decel)_both]">
      {/* Page Header */}
      <div className="flex flex-col space-y-1">
        <h2 className="font-serif text-[var(--text-page-title)] font-bold tracking-[var(--tracking-display)] text-[color:var(--color-primary)]">
          Sheet 1｜Setup &amp; Configurations
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl font-light">
          Configure SKU main properties, shipping lead times, procurement constraints, and service level factors. All inputs are editable inline.
        </p>
      </div>

      {/* Main Table Setup */}
      <div className="card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="serif-heading text-[16px] font-bold text-[color:var(--color-primary)]">
            SKU Master Data List
          </h3>
          <span className="text-[10px] font-mono text-gray-400">
            {skus.length} TOTAL ITEMS ACTIVE
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 h-[44px]">
                <th className="px-4 py-2 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)]">SKU ID</th>
                <th className="px-4 py-2 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)]">Product Name</th>
                <th className="px-4 py-2 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)]">Category</th>
                <th className="px-4 py-2 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)]">Supplier</th>
                <th className="px-4 py-2 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Lead Time (Days)</th>
                <th className="px-4 py-2 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">MOQ</th>
                <th className="px-4 py-2 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Service Level</th>
                <th className="px-4 py-2 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Unit Cost ($)</th>
                <th className="px-4 py-2 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono uppercase tracking-[var(--tracking-label)] text-right">Retail Price ($)</th>
                <th className="px-6 py-2 text-[11px] font-semibold text-[color:var(--color-primary)] font-mono text-center uppercase tracking-[var(--tracking-label)]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13px]">
              {skus.map((sku) => (
                <tr key={sku.id} className="h-[40px] hover:bg-gray-50 transition-colors">
                  {/* SKU ID */}
                  <td className="px-4 py-1.5 font-mono text-xs font-semibold text-[color:var(--color-primary)]">
                    {sku.id}
                  </td>
                  
                  {/* Product Name */}
                  <td className="px-4 py-1.5 min-w-[180px]">
                    <input
                      type="text"
                      id={`input-name-${sku.id}`}
                      value={sku.name}
                      onChange={(e) => handleUpdateSku(sku.id, 'name', e.target.value)}
                      className="w-full bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-2 py-1 font-medium text-[color:var(--color-primary)]"
                    />
                  </td>

                  {/* Category */}
                  <td className="px-4 py-1.5 min-w-[150px]">
                    <select
                      id={`select-category-${sku.id}`}
                      value={sku.category}
                      onChange={(e) => handleUpdateSku(sku.id, 'category', e.target.value)}
                      className="w-full bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-1.5 py-1 text-gray-700 font-medium"
                    >
                      {CATEGORIES.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </td>

                  {/* Supplier */}
                  <td className="px-4 py-1.5 min-w-[180px]">
                    <select
                      id={`select-supplier-${sku.id}`}
                      value={sku.supplier}
                      onChange={(e) => handleUpdateSku(sku.id, 'supplier', e.target.value)}
                      className="w-full bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-1.5 py-1 text-gray-700 font-medium"
                    >
                      {SUPPLIERS.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>

                  {/* Lead Time */}
                  <td className="px-4 py-1.5 text-right">
                    <input
                      type="number"
                      id={`input-lead-time-${sku.id}`}
                      value={sku.leadTime}
                      min={1}
                      max={365}
                      onChange={(e) => handleUpdateSku(sku.id, 'leadTime', Math.max(1, Number(e.target.value)))}
                      className="w-20 text-right bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-2 py-1 font-mono font-medium"
                    />
                  </td>

                  {/* MOQ */}
                  <td className="px-4 py-1.5 text-right">
                    <input
                      type="number"
                      id={`input-moq-${sku.id}`}
                      value={sku.moq}
                      min={1}
                      onChange={(e) => handleUpdateSku(sku.id, 'moq', Math.max(1, Number(e.target.value)))}
                      className="w-20 text-right bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-2 py-1 font-mono font-medium"
                    />
                  </td>

                  {/* Service Level */}
                  <td className="px-4 py-1.5 text-right">
                    <select
                      id={`select-service-level-${sku.id}`}
                      value={sku.serviceLevel}
                      onChange={(e) => handleUpdateSku(sku.id, 'serviceLevel', Number(e.target.value))}
                      className="w-20 text-right bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-1 py-1 font-mono font-medium"
                    >
                      <option value={0.90}>90% (Z=1.28)</option>
                      <option value={0.95}>95% (Z=1.64)</option>
                      <option value={0.98}>98% (Z=2.05)</option>
                      <option value={0.99}>99% (Z=2.33)</option>
                    </select>
                  </td>

                  {/* Unit Cost */}
                  <td className="px-4 py-1.5 text-right">
                    <input
                      type="number"
                      id={`input-cost-${sku.id}`}
                      value={sku.unitCost}
                      min={0.01}
                      step={0.01}
                      onChange={(e) => handleUpdateSku(sku.id, 'unitCost', Math.max(0.01, Number(e.target.value)))}
                      className="w-20 text-right bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-2 py-1 font-mono font-medium"
                    />
                  </td>

                  {/* Retail Price */}
                  <td className="px-4 py-1.5 text-right">
                    <input
                      type="number"
                      id={`input-retail-${sku.id}`}
                      value={sku.retailPrice}
                      min={0.01}
                      step={0.01}
                      onChange={(e) => handleUpdateSku(sku.id, 'retailPrice', Math.max(0.01, Number(e.target.value)))}
                      className="w-20 text-right bg-[color:var(--color-input-bg)] border-none focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] rounded-sm px-2 py-1 font-mono font-medium"
                    />
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-1.5 text-center">
                    <button
                      id={`btn-delete-${sku.id}`}
                      onClick={() => handleDeleteSku(sku.id)}
                      className="p-1 text-gray-400 hover:text-[color:var(--color-negative)] rounded hover:bg-red-50 transition-colors cursor-pointer"
                      title="Delete SKU"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New SKU Form Card */}
      <div className="card p-6">
        <h3 className="serif-heading text-[16px] font-bold text-[color:var(--color-primary)] mb-4 flex items-center space-x-2">
          <Plus className="w-4 h-4 text-[color:var(--color-accent)]" />
          <span>Add New Product to Control Tower</span>
        </h3>

        <form onSubmit={handleAddSku} className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-medium">
          <div className="space-y-1">
            <label className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Unique SKU ID</label>
            <input
              type="text"
              id="new-sku-id"
              placeholder="e.g. SKU-009"
              value={newSkuId}
              onChange={(e) => setNewSkuId(e.target.value.toUpperCase())}
              required
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] focus:border-[color:var(--color-accent)] font-mono font-medium text-[color:var(--color-primary)]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Product Name</label>
            <input
              type="text"
              id="new-sku-name"
              placeholder="e.g. Silk Eye Mask"
              value={newSkuName}
              onChange={(e) => setNewSkuName(e.target.value)}
              required
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] focus:border-[color:var(--color-accent)] font-medium text-[color:var(--color-primary)]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Category</label>
            <select
              id="new-sku-category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] focus:border-[color:var(--color-accent)] font-medium text-gray-700"
            >
              {CATEGORIES.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Supplier</label>
            <select
              id="new-sku-supplier"
              value={newSupplier}
              onChange={(e) => setNewSupplier(e.target.value)}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] focus:border-[color:var(--color-accent)] font-medium text-gray-700"
            >
              {SUPPLIERS.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Lead Time (Days)</label>
            <input
              type="number"
              id="new-sku-lead-time"
              value={newLeadTime}
              min={1}
              onChange={(e) => setNewLeadTime(Number(e.target.value))}
              required
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] focus:border-[color:var(--color-accent)] font-mono font-medium"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">MOQ</label>
            <input
              type="number"
              id="new-sku-moq"
              value={newMoq}
              min={1}
              onChange={(e) => setNewMoq(Number(e.target.value))}
              required
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] focus:border-[color:var(--color-accent)] font-mono font-medium"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Target Service Level</label>
            <select
              id="new-sku-service-level"
              value={newServiceLevel}
              onChange={(e) => setNewServiceLevel(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] focus:border-[color:var(--color-accent)] font-mono font-medium"
            >
              <option value={0.90}>90% (Z=1.28)</option>
              <option value={0.95}>95% (Z=1.64)</option>
              <option value={0.98}>98% (Z=2.05)</option>
              <option value={0.99}>99% (Z=2.33)</option>
            </select>
          </div>

          <div className="flex gap-4">
            <div className="space-y-1 flex-1">
              <label className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Cost ($)</label>
              <input
                type="number"
                id="new-sku-cost"
                value={newUnitCost}
                min={0.01}
                step={0.01}
                onChange={(e) => setNewUnitCost(Number(e.target.value))}
                required
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] focus:border-[color:var(--color-accent)] font-mono font-medium"
              />
            </div>
            <div className="space-y-1 flex-1">
              <label className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Retail ($)</label>
              <input
                type="number"
                id="new-sku-retail"
                value={newRetailPrice}
                min={0.01}
                step={0.01}
                onChange={(e) => setNewRetailPrice(Number(e.target.value))}
                required
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-[color:var(--color-accent)] focus:border-[color:var(--color-accent)] font-mono font-medium"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-4 flex justify-end pt-2">
            <button
              type="submit"
              id="btn-add-sku-submit"
              className="px-6 py-2.5 bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-accent)] text-xs font-mono font-bold tracking-wider rounded-md transition-colors cursor-pointer flex items-center space-x-1.5 shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>COMMIT NEW SKU RECORD</span>
            </button>
          </div>
        </form>
      </div>

      {/* Explanatory Info Card */}
      <div className="bg-[color:var(--insight-bg)] border-l-3 border-[color:var(--color-accent)] p-5 rounded-r-[var(--radius-md)] flex items-start space-x-4">
        <HelpCircle className="w-5 h-5 text-[color:var(--color-accent)] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-serif text-[15px] font-bold text-[color:var(--color-primary)]">
            Theoretical Safety Factor (Z) Calibration
          </h4>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            The safety factor (<span className="font-mono text-[color:var(--color-accent)]">Z</span>) is derived from the standard normal distribution and corresponds directly to your target Service Level. Higher service levels dramatically mitigate stockout risks, but raise safety stock requirement and tie up cash flow. Standard levels range from <span className="font-semibold text-gray-700">90% (Z=1.28)</span> for secondary bedding accessories up to <span className="font-semibold text-gray-700">98% (Z=2.05)</span> or <span className="font-semibold text-gray-700">99% (Z=2.33)</span> for high-margin supplements and key traffic drivers.
          </p>
        </div>
      </div>
    </div>
  );
}
