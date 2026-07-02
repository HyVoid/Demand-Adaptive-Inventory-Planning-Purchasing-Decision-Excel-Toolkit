/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SalesCampaign {
  date: string; // YYYY-MM-DD
  name: string; // Campaign Name, e.g. "Meta Ad Boost"
  salesMultiplier: number; // e.g. 1.5x
}

export interface SKU {
  id: string;
  name: string;
  category: string;
  supplier: string;
  leadTime: number; // in days
  moq: number; // Minimum Order Quantity
  serviceLevel: number; // e.g. 0.95 for 95%
  unitCost: number;
  retailPrice: number;
  
  // Inventory status
  onHand: number;
  inboundQty: number; // open PO quantity
  inboundArrivalDays: number; // days until inbound stock arrives

  // Sales History - past 90 days
  salesHistory: number[]; // Index 0 is 90 days ago, index 89 is yesterday
  campaigns: SalesCampaign[];

  // Forecast override options
  trendOverride: number; // default 1.0 (no override)
  seasonalityOverride: number; // default 1.0 (no override)
  forecastManualDailySales?: number; // optional manual override of daily forecast
}

export interface InventoryMetrics {
  skuId: string;
  skuName: string;
  leadTime: number;
  unitCost: number;
  
  // Sales stats
  avg30d: number;
  avg60d: number;
  stdDev90d: number;
  trendFactor: number;
  seasonalityFactor: number;
  dailyForecast: number;
  
  // Planning outputs
  leadTimeDemand: number;
  safetyStock: number;
  reorderPoint: number;
  coverageDays: number;
  suggestedPOQty: number;
  suggestedPurchaseDate: string; // YYYY-MM-DD or "ORDER NOW" or "N/A"
  
  // Financial outputs
  onHandValue: number;
  inboundValue: number;
  suggestedPOValue: number;
  projectedTurns: number;
  
  // Health
  healthStatus: 'Green' | 'Yellow' | 'Red';
  reorderAlert: 'No Action' | 'Order Soon' | 'Order Now';
}

export const SERVICE_LEVEL_FACTORS: Record<number, number> = {
  0.90: 1.28,
  0.95: 1.64,
  0.98: 2.05,
  0.99: 2.33,
};

export const CATEGORIES = [
  'Pillows & Sleep',
  'Supplements & Wellness',
  'Bedding Accessories'
];

export const SUPPLIERS = [
  'Mainland China Factory Group',
  'Sweden Biotech Corp',
  'Guangdong Textile Ltd'
];
