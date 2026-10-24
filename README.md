[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Inventory Planning Excel Template & Reorder Point (ROP) Calculator for Ecommerce, Shopify & Amazon FBA
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/ab946235-54c1-4cb6-8957-f3fc601b803a" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Inventory%20Replenishment%20%26%20ROP%20Model-orange)

**An automated Inventory Planning Excel Template, Reorder Point (ROP) Calculator, and Safety Stock Spreadsheet built for DTC ecommerce brands, Shopify merchants, Amazon FBA sellers, and supply chain managers. Combine 30/90-day rolling sales velocity forecasting, supplier lead-time buffers, MOQ constraints, and Open-to-Buy (OTB) working capital exposure in one decision-support model—available free in your browser or as an unlocked Excel workbook.**

**No signup. No installation. Free to test in your browser.**

Test the cloud-based interactive web application instantly with zero setup, or download the fully unlocked Excel spreadsheet template for your weekly offline restock workflows—backed by a 30-day, no-questions-asked money-back guarantee.

> 🌐 **Try the Web Calculator:** [Open the Free Interactive Inventory Replenishment & Reorder Point Web App (Live Demo) ↗](https://hyvoid.github.io/inventory-planning-reorder-point-excel/)  
> 📥 **Get the Full Excel Model:** [Download the Fully Unlocked Inventory Planning, Safety Stock & PO Decision Excel Template ↗](https://www.theseusworkshop.com/l/rklhag?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=demand-adaptive-inventory)  
> ⚙️ **Replenishment Math:** [Jump to The Business Logic & Inventory Methodology](#the-business-logic--methodology)

---

## What It Helps You Track: Ecommerce Inventory Pain-Point to Solution Mapping

Static inventory spreadsheets fail modern Direct-to-Consumer (DTC), Amazon FBA, and omnichannel wholesale brands because demand velocity and overseas freight lead times are highly volatile. Paid social scaling on Meta/TikTok, BFCM flash sales, or port congestion can trigger severe stockouts or trap hundreds of thousands of dollars in dead stock.

Instead of manually cross-referencing fragmented 3PL warehouse reports, in-transit Purchase Orders (POs), and Shopify/Amazon sales exports, this **inventory replenishment spreadsheet** tracks and resolves six critical supply chain blind spots:

| Target Tracking Metric / Pain Point | The Common Ecommerce Inventory Blind Spot | How This Replenishment Model Solves & Tracks It |
| :--- | :--- | :--- |
| **Dynamic Reorder Point (ROP) & Stockout Prevention** | Relying on gut-feeling restock alerts or static 90-day averages, causing stockouts when ad spend scales and wasting Customer Acquisition Cost (CAC). | Tracks **rolling 30-day vs. 90-day weighted sales velocity** to dynamically adjust SKU-level **Reorder Points (ROP)** before inventory runs dry. |
| **Safety Stock & Days of Inventory On Hand (DOH)** | Over-ordering slow-moving SKUs out of fear, trapping working capital in 3PL storage fees and dragging down inventory turnover. | Calculates statistically buffered **Safety Stock units** and **Days of Inventory On Hand (DOH / Weeks of Supply)** tailored to each SKU's demand volatility. |
| **Net Available Inventory (On-Hand + In-Transit POs)** | Ordering duplicate inventory because open, unreceived Purchase Orders (On-Order / In-Transit ocean or air freight) aren't netted against warehouse stock. | Tracks **Net Inventory Position (`On-Hand + In-Transit POs - Committed Stock`)** against projected lead-time depletion windows. |
| **Supplier Lead-Time & MOQ Constraint Alignment** | Applying a blanket 30-day reorder buffer across both 90-day overseas ocean freight factories and 7-day domestic 3PL replenishment vendors. | Evaluates every SKU independently using **vendor-specific transit lead times**, **Minimum Order Quantities (MOQs)**, and case-pack rounding rules. |
| **Open-to-Buy (OTB) Cash Flow & Working Capital Exposure** | Submitting Purchase Orders based purely on unit quantities without knowing the exact cash commitment required to fund the restock run. | Multiplies suggested PO quantities by **Unit Landed COGS** to output real-time **Cash Flow Exposure ($)** and prioritize POs when capital is tight. |
| **Actionable Purchase Order (PO) Priority Triage** | Auditing 500+ SKUs line-by-line every Monday morning to figure out which suppliers need an immediate PO vs. which SKUs are safely stocked. | Generates an automated **SKU Action Status (`ORDER NOW`, `WATCH`, `HEALTHY`, `OVERSTOCKED`)** with exact recommended PO order quantities. |

---

## Quick Start Tutorial: How to Automate Your Restock & Reorder Point Decisions

Transitioning from raw omnichannel sales exports to an audit-ready **Purchase Order (PO) action list** takes less than 5 minutes. Follow this 4-step replenishment workflow:

### Step 1: Configure SKU Master Data, Lead Times & Vendor MOQs
Navigate to the `Setup_Config` control sheet and establish your supply chain parameters for each SKU:
- **SKU Identifiers & Vendor Mapping:** SKU codes, product names, and primary supplier assignments.
- **Replenishment Constraints:** Production + freight **Lead Time (days)**, **Minimum Order Quantity (MOQ)**, target service-level safety buffer, and **Unit Landed COGS ($)**.

*Action:* Test how lead-time and MOQ changes impact reorder triggers right now in the [Free Interactive Inventory Planning Web App](https://hyvoid.github.io/inventory-planning-reorder-point-excel/).

---

### Step 2: Import Shopify, Amazon FBA or ERP Historical Sales & Stock Counts
Export your raw unit sales history and current warehouse balances from **Shopify, Amazon Seller Central, Cin7, NetSuite, or your 3PL portal**, and paste them directly into the `Sales_Import` and inventory input tables:
- Input **Current On-Hand Warehouse Stock** and **Open In-Transit PO Quantities**.
- Include recent 30-day and 90-day historical unit sales (plus optional promotional demand multipliers).

*Zero VLOOKUP maintenance or formula rewriting required—the ingestion layer normalizes raw data automatically.*

---

### Step 3: Review Automated Safety Stock, ROP & Suggested PO Quantities
Switch to the **Executive Replenishment Dashboard**. The calculation engine immediately executes the inventory formulas across your entire catalog to output:
- **Weighted Daily Sales Velocity** (units/day) & **Days of Inventory Remaining (DOH)**
- **Lead-Time Demand Projection** & **Dynamic Reorder Point (ROP)**
- **Prioritized "ORDER NOW" Alerts** with MOQ-adjusted **Suggested PO Quantities**
- **Total Working Capital Required ($)** to fund the recommended purchasing batch

---

### Step 4: Download the Unlocked Excel Template for Weekly Inventory Planning
While the browser live demo is ideal for single-session testing and logic verification, real supply chain operations require persistent weekly snapshots, custom SKU expansions, and internal financial auditing.

> 💡 **Ready to automate your weekly restock planning without paying $1,000+/month for SaaS inventory software?**  
> Stop guessing reorder quantities or rebuilding broken spreadsheets every Monday.  
> 👉 **[Download the Fully Unlocked Inventory Planning & Purchasing Decision Excel Template](https://www.theseusworkshop.com/l/rklhag?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=demand-adaptive-inventory)** to plug in your own SKU catalog, save historical weekly procurement logs, customize forecasting weights, and share clean PO approval sheets with your finance team.

---

## The Business Logic & Methodology

Most standard Excel inventory templates fail in real ecommerce operations because they treat **demand velocity as static** and **supply chains as instantaneous**. If a spreadsheet simply divides 90-day sales by 90, a viral TikTok campaign or Q4 seasonal ramp will cause an immediate stockout before an overseas container ever leaves the port.

To solve the mathematical trade-off between **Service Level (Stockout Risk)** and **Working Capital Efficiency (Overstock Risk)**, this toolkit implements a **4-stage quantitative replenishment methodology**:

1. **Demand-Adaptive Velocity Weighting (Short-Term Trend vs. Long-Term Baseline):**  
   Relying solely on a 90-day average lags behind growth trends; relying solely on a 7-day or 30-day window overreacts to temporary noise. This model computes a **Blended Daily Demand Velocity ($D_{\text{adaptive}}$)** by comparing short-term sales acceleration ($V_{30}$) against the historical baseline ($V_{90}$), coupled with an optional **Promotional Multiplier ($M_{\text{promo}}$)**:
   $$D_{\text{adaptive}} = \left( w_1 \cdot V_{30} + w_2 \cdot V_{90} \right) \times M_{\text{promo}}$$
   When recent sales velocity accelerates above the historical mean, the model dynamically scales up forward demand projections to protect high-velocity winners from stocking out.
2. **Lead-Time Depletion & Dynamic Reorder Point (ROP) Modeling:**  
   An order placed today will not arrive until the supplier completes manufacturing and freight transit ($L$ days). During that window, your existing stock continues to deplete. The engine calculates **Lead-Time Demand ($D_{\text{LT}} = D_{\text{adaptive}} \times L$)** and adds a dynamic **Safety Stock Buffer ($SS$)** calibrated to lead-time risk and demand variance:
   $$\text{Reorder Point (ROP)} = \left( D_{\text{adaptive}} \times \text{Lead Time}_{\text{days}} \right) + \text{Safety Stock}$$
   Whenever a SKU's **Net Inventory Position ($\text{On-Hand} + \text{On-Order} - \text{Committed}$)** drops at or below $\text{ROP}$, the state engine flips the SKU status to `ORDER NOW`.
3. **MOQ-Constrained Order Quantity Optimization:**  
   Calculating a raw deficit of 142 units is useless if your contract manufacturer enforces a **Minimum Order Quantity (MOQ)** of 500 units. The purchasing algorithm evaluates the net replenishment gap required to cover the target coverage cycle ($C_{\text{target}}$ days) plus lead time, and resolves the final **Recommended PO Quantity ($Q_{\text{PO}}$)** via constraint bounding:
   $$Q_{\text{PO}} = \max \left( \text{MOQ}, \; \text{Target Stock Level} - \text{Net Inventory Position} \right)$$
4. **Working Capital & Cash Exposure Valuation (Open-to-Buy Integration):**  
   Supply chain planners think in *units*, while CFOs and founders think in *cash flow*. Every recommended purchase order is multiplied by its `Unit_COGS` ($C_i \times Q_{\text{PO}, i}$) and aggregated by urgency tier. This directly links physical inventory replenishment to **Open-to-Buy (OTB) cash flow management**, enabling teams to see exact capital exposure before cutting vendor deposits.

---

## Real-World Ecommerce & Supply Chain Scenarios This Solves

If your operations or finance team is searching for a reliable spreadsheet model to handle any of the following inventory bottlenecks, this toolkit is pre-built for the job:

- **Q4 / BFCM Peak Season Inventory Forecasting:** *How do I calculate exact overseas container order quantities in July/August when scaling Meta and Google ad spend for Black Friday / Cyber Monday?*
- **Amazon FBA Restock & 3PL Buffer Management:** *How do I coordinate inventory transfers between an overseas factory, a domestic 3PL staging warehouse, and Amazon FBA inbound fulfillment centers without running out of stock or triggering FBA aged-inventory surcharges?*
- **Cash-Constrained PO Prioritization (Working Capital Crunch):** *When our quarterly Open-to-Buy (OTB) procurement budget is capped at $150,000, which specific SKUs must be ordered today to prevent revenue loss, and which POs can be safely deferred?*
- **Supplier Lead-Time Shock & Chinese New Year (CNY) Planning:** *When overseas factories shut down for 30+ days during Chinese New Year or ocean freight transit times double, how do I instantly recalculate Safety Stock and Reorder Points across 500+ SKUs?*
- **New Product Launch Velocity Adjustments:** *When a newly launched Hero SKU sells 3x faster than initial projections, how much air-freight bridge inventory do we need to order to cover the gap before the next ocean shipment arrives?*

---

## Legacy Inventory Trackers vs. This Demand-Adaptive Replenishment Model

| Inventory Planning Dimension | Static Legacy Spreadsheets (Without This Tool) | Demand-Adaptive Inventory Excel Toolkit (With This Tool) |
| :--- | :--- | :--- |
| **Purchasing Trigger Logic (Stockout Risk)** | Reordering based only on current on-hand warehouse units, ignoring stock depletion during transit and open In-Transit POs. | Evaluates **Net Inventory Position vs. Lead-Time Demand**, triggering PO alerts before stock falls below the safety threshold. |
| **Supplier Lead-Time & MOQ Constraints** | Applying a generic 30-day buffer to all vendors, ignoring 90-day ocean freight lead times and factory Minimum Order Quantities (MOQs). | Assigns **SKU-specific Lead Times and MOQs**, automatically bounding suggested PO quantities to valid vendor constraints. |
| **Sales Velocity & Trend Sensitivity** | Relying on flat 90-day or 12-month historical averages that fail to react when paid ads or seasonal trends accelerate sales. | Uses **30/90-Day Dynamic Velocity Weighting**, automatically boosting reorder quantities when short-term demand spikes. |
| **Working Capital & Cash Flow Visibility** | Inventory planners generate unit restock lists in isolation, forcing Finance to manually calculate cash impact in a separate sheet. | Built-in **Cash Exposure Valuation (`PO Units × Unit COGS`)** displays exact working capital commitments directly on the dashboard. |
| **Promotional & Ad-Scaling Alignment** | Marketing launches a 30%-off flash sale or doubles ad spend without supply chain visibility, wiping out 60 days of stock in a weekend. | Incorporates **Promotional Demand Multipliers**, allowing planners to stress-test inventory coverage prior to marketing campaigns. |
| **Weekly Procurement Workflow** | Analysts spend 4+ hours every week fixing broken `VLOOKUP` formulas, rebuilding pivot tables, and manually highlighting low-stock rows. | Outputs an automated, color-coded **Prioritized PO Action List (`ORDER NOW` vs. `HEALTHY`)** ready for immediate vendor PO generation. |

---

## Who This Is For: Target Supply Chain Roles & Ecommerce Use Cases

Built for operators who manage physical inventory and need a rigorous, transparent planning engine between raw ERP/Shopify exports and expensive enterprise SaaS platforms:

- **DTC Ecommerce Founders & Shopify / WooCommerce Merchants:** Use this as a **lightweight Shopify inventory replenishment and restock calculator** to prevent out-of-stock ad waste, manage 3PL stock levels, and plan overseas factory reorders without paying $500–$2,000/month for SaaS forecasting apps.
- **Amazon FBA Sellers & Marketplace Aggregators:** Use this as an **Amazon FBA restock and 3PL buffer planning spreadsheet** to balance supplier production lead times, ocean/air freight windows, and FBA inbound shipment timing to protect your IPI (Inventory Performance Index) score.
- **Inventory Planners, Demand Planners & Supply Chain Analysts:** Use this as a **standardized Reorder Point (ROP) and Safety Stock Excel template** to replace fragile, error-prone internal spreadsheets with an auditable replenishment model.
- **Operations Managers & Purchasing / Procurement Buyers:** Use this as an **automated Purchase Order (PO) generation and vendor MOQ calculator** to turn weekly stock counts into exact, supplier-ready order quantities in minutes.
- **Ecommerce CFOs, Finance Controllers & Inventory Accountants:** Use this as a **working capital and Open-to-Buy (OTB) cash flow forecasting model** to audit purchasing requests, prevent overbuying on C-tier SKUs, and optimize inventory turnover ratios.

*Note: This workbook is **not** a live barcode-scanning Warehouse Management System (WMS), an automated EDI order-routing platform, or a full statutory ERP. It is the **tactical demand-planning and purchasing decision layer** that tells you **what to order, how much to order, when to order, and how much cash it will cost.***

---

## About Theseus Workshop

I build lightweight, transparent Excel and browser-based decision-support systems for operational bottlenecks where there are too many interacting variables to track mentally—but where heavyweight enterprise software creates unnecessary cost and complexity.

Rather than building another cluttered vanity dashboard, every toolkit is engineered around one practical question:

> **"What exact operational and financial variables need to sit in one place so the next purchasing or capital decision becomes mathematically obvious?"**

This **Demand-Adaptive Inventory Planning & Purchasing Decision Toolkit** unites rolling demand forecasting, supplier lead-time constraints, safety stock math, and working capital exposure into a self-contained framework that any ecommerce or supply chain team can audit, customize, and own forever.

---
*Keywords: Inventory Planning Excel Template, Reorder Point (ROP) Calculator Spreadsheet, Safety Stock Formula Excel, Ecommerce Inventory Replenishment Model, Shopify Restock Calculator, Amazon FBA Inventory Tracker, Supply Chain Purchase Order (PO) Planner, Open-to-Buy (OTB) Working Capital Spreadsheet.*

---

## Technical Details

<details>
<summary><strong>For technical reviewers, Excel practitioners, and collaborators</strong></summary>

---

## Workbook Architecture

The workbook follows a deliberately separated three-layer architecture.

Instead of mixing inputs, formulas, and dashboards on one worksheet, every worksheet has a single operational responsibility.


```

```
             MASTER DATA
                  │
                  ▼
             Setup_Config
                  │
  ┌───────────────┼────────────────┐
  ▼               ▼                ▼

```

Sales Import   Inventory Status   Static Parameters
│               │
└───────────────┼────────────────┐
▼
Forecast Engine
│
▼
Inventory Planner
│
┌───────────┴───────────┐
▼                       ▼
Cash Flow Impact             Dashboard

```

### Workbook Layers

| Layer | Worksheet | Responsibility |
|--------|-----------|----------------|
| Configuration | Setup_Config | SKU master data, supplier information, lead time, MOQ, service level and cost parameters |
| Operational Data | Sales_Import | Historical sales imported directly from Shopify, ERP or spreadsheets |
| Operational Data | Inventory_Status | Current inventory and purchase orders already in transit |
| Calculation | Forecast_Engine | Demand forecasting using historical sales trends and manual campaign adjustments |
| Calculation | Inventory_Planner | Safety stock, reorder point, purchasing recommendations and suggested quantities |
| Financial Analysis | Cash_Flow_Impact | Inventory valuation, purchasing cash exposure and inventory turnover |
| Executive Output | Dashboard | Purchasing alerts, KPI summary and purchasing action list |

---

### Data Flow


```

Sales History
│
▼
Daily Sales Average
│
▼
Trend Adjustment
│
▼
Demand Forecast
│
▼
Lead Time Demand
│
▼
Safety Stock
│
▼
Reorder Point
│
▼
Purchase Recommendation
│
├────────► Cash Exposure
│
└────────► Executive Dashboard

```

Each calculation layer depends only on validated upstream data.

No worksheet writes values backward into another worksheet, reducing maintenance complexity and preventing circular references.

---

## Three Traps That Catch Even Experienced Inventory Managers

---

### Trap 1 — Planning Around Today's Inventory Instead of Future Inventory

#### The Decision
Inventory looks healthy today. Purchasing is postponed.

#### The Hidden Faulty Assumption
Current warehouse inventory is assumed to represent future availability. Lead-time demand is ignored.

#### Before
| Current Inventory | Daily Sales | Decision |
|-------------------|------------|----------|
| 1,800 units | 40/day | Delay purchasing |

The inventory appears sufficient.

#### Reality
Supplier Lead Time: `70 Days`
Expected Consumption: `40 × 70 = 2,800 units`

The business will consume far more inventory before replenishment arrives.

#### Why The Reasoning Fails
Inventory planning is forward-looking. Warehouse inventory is only meaningful when viewed together with expected demand during supplier lead time. Ignoring lead-time demand delays purchasing until stockouts become unavoidable.

#### Correct Approach
Calculate expected inventory consumption before replenishment arrives. Then compare available inventory against that requirement.

#### Correct Decision
`ORDER NOW`
Purchasing begins while inventory still appears healthy. This protects customer service levels instead of reacting after shortages occur.

<details>
<summary>Formula Reference</summary>

Lead Time Demand

```

Lead Time Demand = Forecast Daily Demand × Lead Time

```
Excel
```excel
=B2#*C2#

```

---

### Trap 2 — Using Historical Average Sales as the Forecast

#### The Decision

Future purchasing quantities are based entirely on the 90-day average.

#### Hidden Faulty Assumption

Sales demand is assumed to remain stable. Marketing activity is ignored. Recent acceleration is ignored.

#### Before

`90-Day Average: 30 Units / Day`
`Recommended Purchase: 2,100 Units`

#### Reality

`Last 30 Days: 45 Units / Day`
`Trend Factor: 45 / 30 = 1.50`

Advertising has already increased demand. The historical average underestimates future inventory requirements.

#### Why The Reasoning Fails

Historical averages describe the past. Purchasing decisions concern the future. Ignoring demand acceleration causes repeated stockouts even when forecasts appear mathematically correct.

#### Correct Approach

Combine historical demand with observed sales momentum and planned promotional activity.

```
Forecast = Daily Base × Trend Factor × Promotion Multiplier

```

#### Correct Decision

Increase purchasing before inventory shortages occur. Forecasts become responsive instead of static.

Trend Factor

```excel
30 Day Average / 90 Day Average

```

Forecast

```excel
Forecast Daily = Base Demand * Trend Factor * Promotion Multiplier

```

Excel

```excel
=B2#*C2#*D2:D100

```

---

### Trap 3 — Treating Inventory as an Operations Problem Instead of a Cash Problem

#### The Decision

A purchasing recommendation is approved because inventory appears low.

#### Hidden Faulty Assumption

Only physical inventory is evaluated. Cash requirements receive little attention.

#### Before

`Purchasing Recommendation: 4,000 Units`
Looks reasonable operationally.

#### Reality

`Unit Cost: $18`
`Purchase Commitment: 4,000 × 18 = $72,000`

Inventory planning immediately becomes a capital allocation decision.

#### Why The Reasoning Fails

Inventory does not merely occupy warehouse space. It also occupies working capital. Without visibility into purchasing commitments, businesses unintentionally create cash shortages while attempting to prevent stockouts.

#### Correct Approach

Every purchasing recommendation should automatically display the financial commitment required. Operations and finance evaluate the same recommendation simultaneously.

#### Correct Decision

Approve only purchasing plans that satisfy both inventory protection and cash availability.

Purchase Commitment

```excel
Suggested Quantity * Unit Cost

```

Excel

```excel
=XLOOKUP(...) * XLOOKUP(...)

```

---

## Example Scenario

A direct-to-consumer home products company imports ninety days of Shopify sales into the workbook. Three SKUs are supplied from China. Average production and shipping lead time is **70 days**. Current warehouse inventory for one SKU is **2,350 units**, while another **600 units** are already in transit.

Historical analysis shows:

| Metric | Value |
| --- | --- |
| 30-Day Average Daily Sales | 52 units |
| 90-Day Average Daily Sales | 40 units |
| Trend Factor | 1.30 |
| Promotion Multiplier | 1.20 |

The forecasting engine estimates:
`Forecast Daily Demand: 52 × 1.30 × 1.20 = 81 units/day`

Lead-time demand becomes:
`81 × 70 = 5,670 units`

Historical sales variability produces a calculated safety stock of approximately **620 units**.

The reorder point therefore becomes:
`5,670 + 620 = 6,290 units`

Available inventory equals:
`2,350 + 600 = 2,950 units`

Although warehouse inventory initially appeared acceptable, available inventory is already **3,340 units below** the calculated reorder point. The planner immediately flags the SKU as **ORDER NOW**.

The purchasing engine then evaluates MOQ requirements and rounds the recommendation upward to an operational purchase quantity. Cash Flow Impact simultaneously estimates the purchasing commitment, allowing finance to determine whether the recommendation fits current working-capital constraints.

Instead of relying on warehouse inventory alone, the business evaluates demand growth, supplier lead time, inventory variability, purchasing policy and cash exposure together before approving the purchase. This produces a recommendation that is both operationally and financially defensible.

---

## Formula Reference

The workbook is intentionally designed around dynamic array formulas available in modern Microsoft Excel. Every analytical worksheet references the SKU spill range from the master configuration sheet, enabling automatic expansion when new products are added.

---

### Setup_Config

#### Purpose

Maintain one authoritative source for all static planning parameters.
Fields include:

* SKU
* Product Name
* Supplier
* Lead Time
* MOQ
* Service Level
* Unit Cost
* Selling Price

#### Dynamic SKU Spill

```excel
=FILTER(B2:B100,B2:B100<>"")

```

**Purpose:** Creates a dynamic SKU list. Every downstream worksheet references this spill range instead of fixed row numbers.
**Benefits:** No formula copying, automatic workbook expansion, no maintenance when adding products.

---

### Sales_Import

#### 30-Day Average Sales

```excel
=MAP(E2#, LAMBDA(sku, IFERROR(SUMIFS(C:C,B:B,sku,A:A,">="&TODAY()-30)/30, 0)))

```

**Purpose:** Calculates recent average daily sales.

#### 90-Day Average Sales

```excel
=MAP(E2#, LAMBDA(sku, IFERROR(SUMIFS(C:C,B:B,sku,A:A,">="&TODAY()-90)/90, 0)))

```

**Purpose:** Represents long-term demand baseline.

**Why both are needed:** Comparing 30-day (Current demand momentum) and 90-day (Stable historical demand) identifies acceleration or decline.

---

### Inventory_Status

```excel
=B2#+C2#

```

**Purpose:** Combines On-Hand Inventory and Inventory In Transit.
**Operational Note:** Ignoring inventory already in transit commonly causes duplicate purchasing.

---

### Forecast_Engine

#### Trend Factor

```excel
=IFERROR(XLOOKUP(...) / IF(XLOOKUP(...)=0, 1, XLOOKUP(...)), 1)

```

**Interpretation:** >1 (Growing demand), =1 (Stable demand), <1 (Declining demand).

#### Forecast Daily Demand

```excel
=B2#*C2#*D2:D100

```

**Purpose:** Transforms historical demand into operational purchasing demand using base sales, trend, and promotion multipliers.

---

### Inventory_Planner

#### Lead-Time Demand

```excel
=B2#*C2#

```

#### Sales Standard Deviation

```excel
=MAP(A2#, LAMBDA(sku, IFERROR(STDEV.S(FILTER(Sales_Import!C:C, Sales_Import!B:B=sku)), 0)))

```

**Purpose:** Measures historical sales volatility.

#### Z Score

```excel
=MAP(A2#, LAMBDA(sku, NORM.S.INV(XLOOKUP(sku, Setup_Config!A2#, Setup_Config!G2#))))

```

**Purpose:** Converts desired service level into statistical protection (e.g., 95% = 1.65).

#### Safety Stock

```excel
=ROUND(F2#*E2#*SQRT(B2#), 0)

```

**Purpose:** Protects against demand variability during replenishment.

#### Reorder Point

```excel
=ROUND(D2#+G2#, 0)

```

**Purpose:** Defines when purchasing should begin (Lead-Time Demand + Safety Stock).

#### Purchase Recommendation

```excel
=MAP(A2#, LAMBDA(sku, IF(Available<=ROP, "ORDER NOW", "OK")))

```

**Purpose:** Creates an operational purchasing signal.

#### Suggested Purchase Quantity

```excel
=MAP(A2#, LAMBDA(sku, LET(avail,..., rop,..., moq,..., daily,..., ss,..., target_need, (daily*30)+ss-avail, IF(avail<=rop, MAX(moq, CEILING(target_need,10)), 0))))

```

**Purpose:** Produces a purchase quantity that satisfies MOQ, restores inventory, and prevents under-ordering.

---

### Cash_Flow_Impact

#### Inventory Value

```excel
=XLOOKUP(...) * XLOOKUP(...)

```

#### Purchase Commitment

**Purpose:** Shows required purchasing capital before placing orders (Suggested Qty × Unit Cost).

#### Inventory Turns

```excel
=ROUND(sales_annual/on_hand, 1)

```

**Purpose:** Measures inventory efficiency rather than inventory size.

---

### Dashboard

#### Red Alert Count

```excel
=COUNTIF(Inventory_Planner!J2#, "ORDER NOW")

```

#### Total Purchase Commitment & Inventory Value

```excel
=SUM(Cash_Flow_Impact!C2#)
=SUM(Cash_Flow_Impact!B2#)

```

#### Dynamic Purchase List

```excel
=FILTER(HSTACK(...), Inventory_Planner!J2#="ORDER NOW", "All inventory healthy")

```

**Purpose:** Automatically produces a purchasing action list containing SKU, Product Name, Suggested Quantity, and Estimated Purchasing Cost without manual filtering.

---

## Validation Rules

| Field | Validation Rule | Error Behavior |
| --- | --- | --- |
| SKU | Cannot be blank and must be unique | Row excluded from calculations |
| Lead Time | Integer greater than zero | Forecast unavailable |
| MOQ | Positive integer | Purchase recommendation disabled |
| Service Level | Between 50% and 99.9% | Z Score cannot be calculated |
| Unit Cost | Greater than or equal to zero | Cash analysis returns zero |
| Selling Price | Greater than zero | Margin analysis unavailable |
| Sales Date | Valid calendar date | Record ignored |
| Sales Quantity | Cannot be negative | Record excluded |
| On-Hand Inventory | Greater than or equal to zero | Inventory warning generated |
| In-Transit Inventory | Greater than or equal to zero | Available inventory adjusted |
| Promotion Multiplier | Recommended range 0.5–3.0 | Outside range highlighted for review |
| Forecast Daily Demand | Must not be negative | Purchasing recommendation suppressed |
| Safety Stock | Automatically floored at zero | Negative values prevented |
| Reorder Point | Always recalculated | Manual editing discouraged |
| Suggested Purchase Quantity | Cannot be below MOQ when purchasing is required | Automatically rounded upward |

</details>
</details>

---

## The Business Logic: Methodology & Commercial Impact

Many inventory templates fail because they treat supply chain management as a purely mathematical counting exercise. In reality, inventory planning is a **capital allocation decision**. 

This toolkit shifts the operational focus from *“How much stock is in the warehouse?”* to *“How do we maximize inventory turnover while protecting our marketing ROI and working capital?”* 

Here is the underlying methodology and how it solves specific commercial problems:

### 1. The Commercial Problem: The DTC Bullwhip Effect & Capital Misallocation
Modern ecommerce brands operate in a high-volatility environment where paid social advertising, influencer marketing, and seasonality create sudden demand spikes. 
*   **The flaw of static systems:** If a business uses a fixed Reorder Point (e.g., "always order when stock hits 500 units"), they will inevitably stock out during a high-ROAS marketing campaign, wasting ad spend. Conversely, over-ordering ties up critical cash flow in illiquid physical goods.
*   **The solution:** This toolkit replaces static thresholds with a **Demand-Adaptive Reorder Point (ROP)** model. 

### 2. The Core Methodology (How It Works)

The calculation engine utilizes standard Operations Research principles, modified for fast-moving consumer goods:

*   **Statistical Safety Stock (Standard Deviation & Z-Scores):**
    Instead of guessing a buffer, the toolkit measures the historical standard deviation (σ) of your daily sales. By setting a Target Service Level (e.g., 95%), the model applies the corresponding Z-score to mathematically calculate the exact number of buffer units needed to absorb unexpected demand spikes during the supplier's lead time.
*   **Rolling Demand & Momentum Modifiers:**
    The engine does not rely solely on a 90-day historical average. It incorporates a **Trend Factor** (comparing 30-day velocity to 90-day baseline) and **Promotion Multipliers**. This methodology ensures that if your current ad spend is accelerating sales, the forecasted consumption adapts *before* the stockout occurs.
*   **Lead-Time Demand Projection:**
    The tool maps your forecasted daily demand directly against each specific supplier's lead time. It mathematically proves how many units will be burned through while your purchase order is sitting on a cargo ship.
*   **Min-Max / MOQ Logic constraints:** 
    Once the Reorder Point is breached, the algorithm calculates a suggested purchase quantity that satisfies the vendor's Minimum Order Quantity (MOQ) while rounding to operationally sensible lot sizes.

### 3. The Commercial Output (Business Value)
By connecting demand forecasting with financial metrics, the tool outputs actionable business intelligence:
*   **For Operations:** Eliminates the guesswork of *when* and *how much* to order across multiple supply chains (domestic vs. international).
*   **For Marketing:** Ensures product availability aligns with campaign schedules, protecting customer acquisition costs (CAC).
*   **For Finance:** Provides immediate visibility into the **Purchase Commitment ($)**. Finance teams can evaluate the working capital impact of a proposed purchase order *before* the capital is deployed, ensuring the business remains liquid.

---  

## Other Tools in This Series

This workbook is part of a growing collection of lightweight operational decision-support tools built for teams that need better decisions without implementing enterprise software.

Examples include:

* **Cash Flow Forecast Control Tower** — Monitor liquidity, operating cash flow, and funding requirements.
* **Marketing Budget Allocation Planner** — Allocate advertising spend across channels using measurable return thresholds.
* **Construction Cost Control Dashboard** — Compare project budgets, commitments, invoices, and remaining contingencies.
* **Procurement Spend Analysis Toolkit** — Track supplier performance, purchasing concentration, and contract utilization.
* **Sales Performance Intelligence Dashboard** — Monitor revenue trends, margin performance, and customer concentration.

All tools follow the same principles:

* No signup required
* No installation required
* Browser and Excel editions
* Lightweight decision-support instead of enterprise replacement
* Built around repeatable analytical workflows rather than static reporting

---

## License

Licensed under the **Apache License 2.0**.

You are free to:

* Use this project commercially.
* Modify and extend the workbook.
* Distribute original or modified versions.
* Incorporate the analytical framework into your own workflows.

Subject to the terms and conditions of the Apache License 2.0.
See the LICENSE file for the complete license text.

---

## Acknowledgements

This project was built from recurring inventory planning challenges observed across direct-to-consumer brands, ecommerce businesses, and supply chain teams that required better purchasing decisions without implementing enterprise resource planning systems.

The objective is not to replace ERP or MRP platforms. The objective is to make better operational decisions using the data organizations already have.

If this project helps improve your planning process, contributions, suggestions, and feedback are always welcome.

