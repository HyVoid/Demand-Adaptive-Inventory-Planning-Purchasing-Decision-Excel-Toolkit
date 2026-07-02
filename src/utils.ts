/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SKU, InventoryMetrics, SERVICE_LEVEL_FACTORS } from './types';

// Calculate the standard deviation of an array of numbers
export function calculateStdDev(values: number[]): number {
  if (values.length <= 1) return 0;
  const mean = values.reduce((sum, v) => sum + v, 0) / values.length;
  const variance = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / (values.length - 1);
  return Math.sqrt(variance);
}

// Generate high-fidelity seed data for 8 realistic DTC products
export function generateSeedData(): SKU[] {
  const categories = [
    'Pillows & Sleep', // 0
    'Supplements & Wellness', // 1
    'Bedding Accessories' // 2
  ];

  const suppliers = [
    'Mainland China Factory Group', // 0
    'Sweden Biotech Corp', // 1
    'Guangdong Textile Ltd' // 2
  ];

  const baseProducts = [
    {
      id: 'SKU-001',
      name: 'Memory Foam Pillow Standard',
      category: categories[0],
      supplier: suppliers[0],
      leadTime: 70, // 30 days prod + 40 days ocean
      moq: 500,
      serviceLevel: 0.95,
      unitCost: 12.50,
      retailPrice: 45.00,
      baseDailySales: 24,
      onHand: 1120,
      inboundQty: 500,
      inboundArrivalDays: 15,
    },
    {
      id: 'SKU-002',
      name: 'Memory Foam Pillow King',
      category: categories[0],
      supplier: suppliers[0],
      leadTime: 70,
      moq: 500,
      serviceLevel: 0.95,
      unitCost: 15.00,
      retailPrice: 55.00,
      baseDailySales: 16,
      onHand: 480,
      inboundQty: 1000,
      inboundArrivalDays: 35,
    },
    {
      id: 'SKU-003',
      name: 'Collagen Supplement 30-Pack',
      category: categories[1],
      supplier: suppliers[1],
      leadTime: 30, // Local European supply chain
      moq: 100,
      serviceLevel: 0.98,
      unitCost: 8.00,
      retailPrice: 29.99,
      baseDailySales: 42,
      onHand: 850,
      inboundQty: 0,
      inboundArrivalDays: 0,
    },
    {
      id: 'SKU-004',
      name: 'Collagen Supplement 60-Pack',
      category: categories[1],
      supplier: suppliers[1],
      leadTime: 30,
      moq: 100,
      serviceLevel: 0.98,
      unitCost: 14.50,
      retailPrice: 49.99,
      baseDailySales: 28,
      onHand: 140, // Low inventory to trigger Red stockout risk
      inboundQty: 500,
      inboundArrivalDays: 12,
    },
    {
      id: 'SKU-005',
      name: 'Bamboo Pillow Case Standard',
      category: categories[2],
      supplier: suppliers[2],
      leadTime: 60,
      moq: 1000,
      serviceLevel: 0.90,
      unitCost: 3.20,
      retailPrice: 15.00,
      baseDailySales: 35,
      onHand: 2400,
      inboundQty: 0,
      inboundArrivalDays: 0,
    },
    {
      id: 'SKU-006',
      name: 'Bamboo Pillow Case King',
      category: categories[2],
      supplier: suppliers[2],
      leadTime: 60,
      moq: 1000,
      serviceLevel: 0.90,
      unitCost: 4.00,
      retailPrice: 18.00,
      baseDailySales: 22,
      onHand: 950,
      inboundQty: 1000,
      inboundArrivalDays: 45,
    },
    {
      id: 'SKU-007',
      name: 'Marine Collagen Powder',
      category: categories[1],
      supplier: suppliers[1],
      leadTime: 25,
      moq: 200,
      serviceLevel: 0.95,
      unitCost: 11.00,
      retailPrice: 39.99,
      baseDailySales: 18,
      onHand: 310, // Stock reorder point breached!
      inboundQty: 0,
      inboundArrivalDays: 0,
    },
    {
      id: 'SKU-008',
      name: 'Sleep Mask Silk',
      category: categories[0],
      supplier: suppliers[2],
      leadTime: 45,
      moq: 300,
      serviceLevel: 0.90,
      unitCost: 2.50,
      retailPrice: 12.00,
      baseDailySales: 15,
      onHand: 1200,
      inboundQty: 0,
      inboundArrivalDays: 0,
    }
  ];

  // Generate 90 days of sales history per SKU with some random waves + ad campaign spikes
  return baseProducts.map(p => {
    const salesHistory: number[] = [];
    const campaigns = [
      { date: '2026-05-15', name: 'TikTok Creator Promo', salesMultiplier: 1.8 },
      { date: '2026-06-10', name: 'Meta Lookalike Ad Scale', salesMultiplier: 2.1 }
    ];

    // Simulate 90 days of daily sales (0 is 90 days ago, 89 is yesterday)
    for (let day = 0; day < 90; day++) {
      // Create current date string relative to simulated 90 days
      const d = new Date('2026-07-01');
      d.setDate(d.getDate() - (90 - day));
      const dateStr = d.toISOString().split('T')[0];

      // Base daily sales
      let dailyVal = p.baseDailySales;

      // Add weekly seasonality (higher on weekends/Sunday/Monday for DTC, say +15%)
      const dayOfWeek = d.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 1) {
        dailyVal *= 1.15;
      } else if (dayOfWeek === 3 || dayOfWeek === 4) {
        dailyVal *= 0.90;
      }

      // Add a slight growth trend over the 90 days (+12% from start to end)
      const growthFactor = 0.94 + (day / 90) * 0.12;
      dailyVal *= growthFactor;

      // Check if campaigns are active (we check a window of 3 days around campaign date)
      campaigns.forEach(c => {
        const campDate = new Date(c.date);
        const diffTime = Math.abs(d.getTime() - campDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays <= 1) {
          // Trigger ad spike
          dailyVal *= c.salesMultiplier;
        }
      });

      // Add random variation/noise (±15%)
      const noise = 0.85 + Math.random() * 0.30;
      dailyVal *= noise;

      salesHistory.push(Math.round(Math.max(0, dailyVal)));
    }

    return {
      id: p.id,
      name: p.name,
      category: p.category,
      supplier: p.supplier,
      leadTime: p.leadTime,
      moq: p.moq,
      serviceLevel: p.serviceLevel,
      unitCost: p.unitCost,
      retailPrice: p.retailPrice,
      onHand: p.onHand,
      inboundQty: p.inboundQty,
      inboundArrivalDays: p.inboundArrivalDays,
      salesHistory,
      campaigns,
      trendOverride: 1.0,
      seasonalityOverride: 1.0
    };
  });
}

// Perform computations for a single SKU
export function calculateMetricsForSKU(sku: SKU, planningHorizonDays: number = 30): InventoryMetrics {
  const history = sku.salesHistory;
  const n = history.length;

  // 1. Averages
  const last30 = history.slice(-30);
  const last60 = history.slice(-60);
  const avg30d = last30.reduce((s, v) => s + v, 0) / 30;
  const avg60d = last60.reduce((s, v) => s + v, 0) / 60;
  
  // 2. Std Dev (90 days)
  const stdDev90d = calculateStdDev(history);

  // 3. Trend Factor (auto calculated as avg30d / avg60d if override is 1.0, or manual)
  const autoTrendFactor = avg60d > 0 ? avg30d / avg60d : 1.0;
  const trendFactor = sku.trendOverride !== 1.0 ? sku.trendOverride : autoTrendFactor;
  const seasonalityFactor = sku.seasonalityOverride;

  // 4. Daily Forecast
  // If user sets manualDailySales, that overrides everything
  let dailyForecast = sku.forecastManualDailySales !== undefined 
    ? sku.forecastManualDailySales 
    : (avg30d * trendFactor * seasonalityFactor);
  
  // Safeguard against negative or near zero values
  dailyForecast = Math.max(0.1, dailyForecast);

  // 5. Planning Calculations
  const leadTimeDemand = dailyForecast * sku.leadTime;
  
  // Safety Factor (Z) based on service level
  const Z = SERVICE_LEVEL_FACTORS[sku.serviceLevel] || 1.64;
  
  // Safety Stock = Z * StdDev * sqrt(LeadTime)
  const safetyStock = Z * stdDev90d * Math.sqrt(sku.leadTime);

  // Reorder Point (ROP) = Lead Time Demand + Safety Stock
  const reorderPoint = leadTimeDemand + safetyStock;

  // Total Available Stock = On Hand + Inbound
  const totalAvailable = sku.onHand + sku.inboundQty;

  // Coverage Days = On Hand / Daily Forecast
  const coverageDays = dailyForecast > 0 ? sku.onHand / dailyForecast : 999;

  // 6. Suggested PO Quantity
  // Suggested PO = Forecast Demand for Planning Horizon + Safety Stock - On Hand - Inbound
  // We align with the prompt: Suggested PO = Forecast Demand (over planning cycle) + Safety Stock - Available Inventory - Inbound Inventory
  const horizonDemand = dailyForecast * planningHorizonDays;
  let rawSuggestedPO = horizonDemand + safetyStock - sku.onHand - sku.inboundQty;
  rawSuggestedPO = Math.max(0, rawSuggestedPO);

  // Round up to nearest MOQ and MOQ multiples
  let suggestedPOQty = 0;
  if (rawSuggestedPO > 0) {
    if (rawSuggestedPO < sku.moq) {
      suggestedPOQty = sku.moq;
    } else {
      // Round to next multiple of MOQ
      suggestedPOQty = Math.ceil(rawSuggestedPO / sku.moq) * sku.moq;
    }
  }

  // 7. Suggested Purchase Date
  let suggestedPurchaseDate = 'N/A';
  let reorderAlert: 'No Action' | 'Order Soon' | 'Order Now' = 'No Action';
  let healthStatus: 'Green' | 'Yellow' | 'Red' = 'Green';

  // Available Inventory = On Hand + Inbound
  if (totalAvailable <= reorderPoint) {
    suggestedPurchaseDate = 'ORDER NOW';
    reorderAlert = 'Order Now';
    // If on-hand is extremely low and we are running out of stock before inbound arrives:
    // Coverage days of onHand is less than LeadTime (we will run out of stock before replacement arrives!)
    if (sku.onHand / dailyForecast < sku.leadTime) {
      healthStatus = 'Red';
    } else {
      healthStatus = 'Yellow';
    }
  } else {
    // We are above ROP, calculate days until we fall below ROP
    const surplusToROP = totalAvailable - reorderPoint;
    const daysToROP = dailyForecast > 0 ? surplusToROP / dailyForecast : 999;

    if (daysToROP <= 10) {
      reorderAlert = 'Order Soon';
      healthStatus = 'Yellow';
    } else {
      reorderAlert = 'No Action';
      healthStatus = 'Green';
    }

    if (daysToROP < 999) {
      const pDate = new Date(); // relative to today
      pDate.setDate(pDate.getDate() + Math.floor(daysToROP));
      suggestedPurchaseDate = pDate.toISOString().split('T')[0];
    } else {
      suggestedPurchaseDate = 'N/A';
    }
  }

  // Force red health status if coverage days is very critical (< 10 days or < 15% of lead time)
  if (sku.onHand / dailyForecast < 10 && sku.leadTime > 15) {
    healthStatus = 'Red';
  }

  // 8. Financial Values
  const onHandValue = sku.onHand * sku.unitCost;
  const inboundValue = sku.inboundQty * sku.unitCost;
  const suggestedPOValue = suggestedPOQty * sku.unitCost;

  // Projected Turns = Annualized Cost of Goods Sold / Average Inventory Value
  // Annual COGS = dailyForecast * 365 * unitCost
  // Average Inventory = OnHandValue (approx) or let's use a nice estimation.
  // Standard approximation: Annual COGS / (OnHandValue + suggestedPOValue/2)
  const annualCOGS = dailyForecast * 365 * sku.unitCost;
  const avgInvValue = onHandValue > 0 ? onHandValue : 1;
  const projectedTurns = annualCOGS / avgInvValue;

  return {
    skuId: sku.id,
    skuName: sku.name,
    leadTime: sku.leadTime,
    unitCost: sku.unitCost,
    avg30d,
    avg60d,
    stdDev90d,
    trendFactor,
    seasonalityFactor,
    dailyForecast,
    leadTimeDemand,
    safetyStock,
    reorderPoint,
    coverageDays,
    suggestedPOQty,
    suggestedPurchaseDate,
    onHandValue,
    inboundValue,
    suggestedPOValue,
    projectedTurns,
    healthStatus,
    reorderAlert,
  };
}
