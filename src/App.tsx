/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import HeaderNav from './components/HeaderNav';
import Dashboard from './components/Dashboard';
import SetupConfig from './components/SetupConfig';
import SalesImport from './components/SalesImport';
import InventoryStatus from './components/InventoryStatus';
import ForecastEngine from './components/ForecastEngine';
import InventoryPlanner from './components/InventoryPlanner';
import CashFlowImpact from './components/CashFlowImpact';
import { SKU, InventoryMetrics } from './types';
import { generateSeedData, calculateMetricsForSKU } from './utils';

const STORAGE_KEYS = {
  SKUS: 'dtc_inventory_control_tower_skus',
  HORIZON: 'dtc_inventory_control_tower_horizon',
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [lastSaved, setLastSaved] = useState<string>('');
  
  // 1. Core State
  const [skus, setSkus] = useState<SKU[]>([]);
  const [planningHorizon, setPlanningHorizon] = useState<number>(30);

  // 2. Initial state hydration
  useEffect(() => {
    const cachedSkus = localStorage.getItem(STORAGE_KEYS.SKUS);
    const cachedHorizon = localStorage.getItem(STORAGE_KEYS.HORIZON);

    if (cachedSkus) {
      try {
        setSkus(JSON.parse(cachedSkus));
      } catch (err) {
        console.error('Failed to parse cached SKUs, resetting to seed:', err);
        setSkus(generateSeedData());
      }
    } else {
      setSkus(generateSeedData());
    }

    if (cachedHorizon) {
      const parsedHorizon = parseInt(cachedHorizon, 10);
      if (!isNaN(parsedHorizon)) {
        setPlanningHorizon(parsedHorizon);
      }
    }

    const t = new Date().toLocaleTimeString('en-US', { hour12: false });
    setLastSaved(t);
  }, []);

  // 3. Automated Storage Sync
  useEffect(() => {
    if (skus.length === 0) return; // avoid overwriting during early load
    localStorage.setItem(STORAGE_KEYS.SKUS, JSON.stringify(skus));
    localStorage.setItem(STORAGE_KEYS.HORIZON, planningHorizon.toString());
    
    const t = new Date().toLocaleTimeString('en-US', { hour12: false });
    setLastSaved(t);
  }, [skus, planningHorizon]);

  // 4. Reactive Math Formula Engine
  const metrics: InventoryMetrics[] = useMemo(() => {
    return skus.map((sku) => calculateMetricsForSKU(sku, planningHorizon));
  }, [skus, planningHorizon]);

  // 5. Operations
  const handleExportBackup = () => {
    const backupData = {
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      planningHorizon,
      skus,
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `dtc_inventory_planner_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      try {
        const fileContent = event.target?.result as string;
        const parsed = JSON.parse(fileContent);

        if (parsed && Array.isArray(parsed.skus)) {
          setSkus(parsed.skus);
          if (typeof parsed.planningHorizon === 'number') {
            setPlanningHorizon(parsed.planningHorizon);
          }
          alert('Backup file successfully imported. All formulas and logs have been restored.');
        } else {
          alert('Invalid file format. Ensure the file is a valid JSON backup created by this control tower.');
        }
      } catch (err) {
        alert('Failed to parse backup file. Please ensure it is a valid JSON document.');
      }
    };
    fileReader.readAsText(files[0]);
    e.target.value = ''; // clear input
  };

  const handleResetData = () => {
    const defaults = generateSeedData();
    setSkus(defaults);
    setPlanningHorizon(30);
    localStorage.removeItem(STORAGE_KEYS.SKUS);
    localStorage.removeItem(STORAGE_KEYS.HORIZON);
    
    const t = new Date().toLocaleTimeString('en-US', { hour12: false });
    setLastSaved(t);
    alert('All sheets reset back to factory seed dataset successfully.');
  };

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col text-[color:var(--color-body-text)] font-sans">
      {/* Sticky Light Nav Bar (56px) */}
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lastSaved={lastSaved}
        onExport={handleExportBackup}
        onImport={handleImportBackup}
        onReset={handleResetData}
      />

      {/* Main Content Area Centered (Max width 1400px, 40px left/right margins) */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-10 py-8 space-y-8">
        
        {activeTab === 'dashboard' && (
          <Dashboard 
            skus={skus} 
            metrics={metrics} 
            setActiveTab={setActiveTab} 
          />
        )}

        {activeTab === 'setup' && (
          <SetupConfig 
            skus={skus} 
            setSkus={setSkus} 
          />
        )}

        {activeTab === 'sales' && (
          <SalesImport 
            skus={skus} 
            setSkus={setSkus} 
          />
        )}

        {activeTab === 'inventory' && (
          <InventoryStatus 
            skus={skus} 
            setSkus={setSkus} 
            metrics={metrics} 
          />
        )}

        {activeTab === 'forecast' && (
          <ForecastEngine 
            skus={skus} 
            setSkus={setSkus} 
            metrics={metrics} 
          />
        )}

        {activeTab === 'planner' && (
          <InventoryPlanner 
            skus={skus} 
            metrics={metrics} 
            planningHorizon={planningHorizon}
            setPlanningHorizon={setPlanningHorizon}
          />
        )}

        {activeTab === 'cashflow' && (
          <CashFlowImpact 
            skus={skus} 
            metrics={metrics} 
          />
        )}

      </main>
    </div>
  );
}
