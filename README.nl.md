[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Excel-sjabloon voor voorraadplanning en bestelpunt (ROP)-calculator voor e-commerce, Shopify en Amazon FBA
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/ab946235-54c1-4cb6-8957-f3fc601b803a" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Inventory%20Replenishment%20%26%20ROP%20Model-orange)

**Een geautomatiseerd Excel-sjabloon voor voorraadplanning, een bestelpunt (ROP)-calculator en een veiligheidsvoorraad-spreadsheet, gebouwd voor DTC-e-commercemarken, Shopify-handelaars, Amazon FBA-verkopers en supply chain managers. Combineer rollende verkoopsnelheidsprognoses over 30/90 dagen, buffers voor levertijden van leveranciers, MOQ-beperkingen en Open-to-Buy (OTB)-werkkapitaalblootstelling in één beslissingsondersteunend model—gratis beschikbaar in je browser of als ontgrendeld Excel-werkboek.**

**Geen registratie. Geen installatie. Gratis te testen in je browser.**

Test de cloudgebaseerde interactieve webapplicatie direct zonder enige setup, of download het volledig ontgrendelde Excel-spreadsheetsjabloon voor je wekelijkse offline nabestelwerkstromen—gedekt door een 30-daagse geld-terug-garantie zonder vragen.

> 🌐 **Probeer de webcalculator:** [Open de gratis interactieve web-app voor voorraadaanvulling en bestelpunt (livedemo) ↗](https://hyvoid.github.io/inventory-planning-reorder-point-excel/)  
> 📥 **Download het volledige Excel-model:** [Download het volledig ontgrendelde Excel-sjabloon voor voorraadplanning, veiligheidsvoorraad en PO-beslissingen ↗](https://www.theseusworkshop.com/l/rklhag?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=demand-adaptive-inventory)  
> ⚙️ **Aanvulwiskunde:** [Ga naar de bedrijfslogica en voorraadmethodologie](#the-business-logic--methodology)

---

## Wat het helpt volgen: pijnpunten in e-commercevoorraad gekoppeld aan oplossingen

Statische voorraadspreadsheets falen bij moderne direct-to-consumer (DTC)-, Amazon FBA- en omnichannel-groothandelsmerken, omdat verkoopsnelheid en levertijden voor overzees vervoer sterk volatiel zijn. Opschaling van paid social op Meta/TikTok, BFCM-flashsales of havencongestie kunnen ernstige voorraadtekorten veroorzaken of honderdduizenden dollars in dode voorraad vastzetten.

In plaats van gefragmenteerde 3PL-magazijnrapporten, in-transit inkooporders (PO's) en Shopify/Amazon-verkoopexporten handmatig te kruisverwijzen, volgt en lost dit **voorraadaanvullingsspreadsheet** zes kritieke blinde vlekken in de toeleveringsketen op:

| Doel-trackingsmetriek / pijnpunt | De veelvoorkomende blinde vlek in e-commercevoorraad | Hoe dit aanvulmodel het oplost en volgt |
| :--- | :--- | :--- |
| **Dynamisch bestelpunt (ROP) en preventie van voorraadtekorten** | Vertrouwen op onderbuikgevoel-nabestelwaarschuwingen of statieke 90-dagen-gemiddelden, wat voorraadtekorten veroorzaakt wanneer advertentiebudgetten opschalen en customer acquisition cost (CAC) verspilt aan uitverkochte artikelen. | Volgt **rollende gewogen verkoopsnelheid over 30 vs. 90 dagen** om **bestelpunten (ROP)** op SKU-niveau dynamisch aan te passen voordat de voorraad opraakt. |
| **Veiligheidsvoorraad en dagen voorraad op voorraad (DOH)** | Overbestellen van langzaam roterende SKUs uit angst, wat werkkapitaal vastzet in 3PL-opslagkosten en de voorraadrotatie vertraagt. | Berekent statistisch gebufferde **veiligheidsvoorraadeenheden** en **dagen voorraad op voorraad (DOH / weken voorraad)**, toegesneden op de vraagvolatiliteit van elke SKU. |
| **Netto beschikbare voorraad (op voorraad + in-transit PO's)** | Dubbel bestellen omdat open, niet-ontvangen inkooporders (in bestelling / overzees of luchtvracht in transit) niet worden verrekend met magazijnvoorraad. | Volgt de **netto voorraadpositie (`On-Hand + In-Transit POs - Committed Stock`)** tegen geprojecteerde uitputtingsvensters tijdens de levertijd. |
| **Afstemming van levertijden leveranciers en MOQ-beperkingen** | Toepassen van een uniforme nabestelbuffer van 30 dagen op zowel overzeese fabrieken met 90 dagen zeevracht als binnenlandse 3PL-nabestelleveranciers met 7 dagen. | Beoordeelt elke SKU onafhankelijk met **leverancierspecifieke transitlevertijden**, **minimale bestelhoeveelheden (MOQ's)** en regels voor afronden per colli. |
| **Open-to-Buy (OTB)-kasstroom en werkkapitaalblootstelling** | Indienen van inkooporders puur op basis van eenheidenaantallen zonder de exacte kasverbintenis te kennen die nodig is om de nabestelronde te financieren. | Vermenigvuldigt voorgestelde PO-hoeveelheden met **eenheids-geleverde COGS** om **kasstroomblootstelling ($)** in realtime uit te voeren en PO's te prioriteren wanneer kapitaal schaars is. |
| **Actionable prioritering van inkooporders (PO)** | Elke maandagochtend 500+ SKUs regel voor regel auditen om te bepalen welke leveranciers een directe PO nodig hebben vs. welke SKUs veilig op voorraad zitten. | Genereert een geautomatiseerde **SKU-actiestatus (`ORDER NOW`, `WATCH`, `HEALTHY`, `OVERSTOCKED`)** met exacte aanbevolen PO-bestelhoeveelheden. |

---

## Snelstartgids: automatiseer je nabestel- en bestelpuntbeslissingen

De overstap van ruwe omnichannel-verkoopexporten naar een auditklare **lijst met inkooporderacties (PO)** duurt minder dan 5 minuten. Volg deze nabestelwerkstroom in 4 stappen:

### Stap 1: configureer SKU-stamgegevens, levertijden en MOQ's van leveranciers
Ga naar het tabblad `Setup_Config` en leg je toeleveringsketenparameters voor elke SKU vast:
- **SKU-identificatoren en leverancierskoppeling:** SKU-codes, productnamen en primaire leverancierstoewijzingen.
- **Nabestelbeperkingen:** **levertijd (dagen)** voor productie + vervoer, **minimale bestelhoeveelheid (MOQ)**, beoogde serviceniveau-veiligheidsbuffer en **eenheids-geleverde COGS ($)**.

*Actie:* test nu hoe veranderingen in levertijd en MOQ nabesteltriggers beïnvloeden in de [gratis interactieve web-app voor voorraadplanning](https://hyvoid.github.io/inventory-planning-reorder-point-excel/).

---

### Stap 2: importeer historische verkopen en voorraadtellingen van Shopify, Amazon FBA of ERP
Exporteer je ruwe verkoopgeschiedenis in eenheden en huidige magazijnsaldi uit **Shopify, Amazon Seller Central, Cin7, NetSuite of je 3PL-portaal**, en plak ze direct in `Sales_Import` en de voorraadinvoertabellen:
- Voer **huidige op-voorraad magazijnvoorraad** en **open in-transit PO-hoeveelheden** in.
- Neem recente historische verkoop in eenheden over 30 en 90 dagen op (plus optionele promotionele vraagmultiplicatoren).

*Geen VLOOKUP-onderhoud of formulierherschrijving nodig—de ingestielaag normaliseert ruwe gegevens automatisch.*

---

### Stap 3: beoordeel geautomatiseerde veiligheidsvoorraad, ROP en voorgestelde PO-hoeveelheden
Schakel over naar het **executive voorraadaanvullingsdashboard**. De berekeningsmotor voert de voorraadformules direct over je hele catalogus uit en geeft:
- **Gewogen dagelijkse verkoopsnelheid** (eenheden/dag) en **dagen resterende voorraad (DOH)**
- **Vraagprognose tijdens de levertijd** en **dynamisch bestelpunt (ROP)**
- **Geprioriteerde „ORDER NOW”-waarschuwingen** met MOQ-aangepaste **voorgestelde PO-hoeveelheden**
- **Totaal vereist werkkapitaal ($)** om de aanbevolen inkoopbatch te financieren

---

### Stap 4: download het ontgrendelde Excel-sjabloon voor wekelijkse voorraadplanning
Terwijl de browserlivedemo ideaal is voor testen in één sessie en verificatie van de logica, vereisen echte toeleveringsketenoperaties persistente wekelijkse snapshots, aangepaste SKU-uitbreidingen en interne financiële auditing.

> 💡 **Klaar om je wekelijkse nabestelplanning te automatiseren zonder $1.000+/maand te betalen voor SaaS-voorraadsoftware?**  
> Stop met het gokken naar nabestelhoeveelheden of het elke maandag opnieuw bouwen van kapotte spreadsheets.  
> 👉 **[Download het volledig ontgrendelde Excel-sjabloon voor voorraadplanning en inkoopbeslissingen](https://www.theseusworkshop.com/l/rklhag?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=demand-adaptive-inventory)** om je eigen SKU-catalogus in te pluggen, historische wekelijkse inkooplogboeken op te slaan, prognosegewichten aan te passen en schone PO-goedkeuringsbladen te delen met je financiële team.

---

## De bedrijfslogica en methodologie

De meeste standaard Excel-voorraadsjablonen falen in echte e-commerceoperaties omdat ze **verkoopsnelheid als statisch** en **toeleveringsketens als ogenblikkelijk** behandelen. Als een spreadsheet verkopen over 90 dagen simpelweg door 90 deelt, zal een virale TikTok-campagne of een Q4-seizoensstap een onmiddellijk voorraadtekort veroorzaken voordat een overzeese container de haven verlaat.

Om de wiskundige afweging tussen **servicelevel (risico op voorraadtekort)** en **werkkapitaalefficiëntie (risico op overvoorraad)** op te lossen, implementeert deze toolkit een **kwantitatieve nabestelmethodologie in 4 fasen**:

1. **Vraagadaptieve snelheidsgewichting (kortetermijntrend vs. langetermijnbasislijn):**  
   Uitsluitend vertrouwen op een 90-dagen-gemiddelde loopt achter op groeitrends; uitsluitend vertrouwen op een venster van 7 of 30 dagen overreageert op tijdelijke ruis. Dit model berekent een **gecombineerde dagelijkse vraagsnelheid ($D_{\text{adaptief}}$)** door kortetermijnverkoopsversnelling ($V_{30}$) te vergelijken met de historische basislijn ($V_{90}$), gekoppeld aan een optionele **promotiemultiplicator ($M_{\text{promo}}$)**:
   $$D_{\text{adaptief}} = \left( w_1 \cdot V_{30} + w_2 \cdot V_{90} \right) \times M_{\text{promo}}$$
   Wanneer de recente verkoopsnelheid boven het historische gemiddelde versnelt, schaalt het model voorwaardse vraagprognoses dynamisch op om winnaars met hoge snelheid te beschermen tegen voorraadtekorten.
2. **Modelvorming van uitputting tijdens de levertijd en dynamisch bestelpunt (ROP):**  
   Een vandaag geplaatste order arriveert niet voordat de leverancier fabricage en vrachttransit heeft voltooid ($L$ dagen). Gedurende dat venster blijft je bestaande voorraad uitputten. De motor berekent de **vraag tijdens de levertijd ($D_{\text{LT}} = D_{\text{adaptief}} \times L$)** en voegt een dynamische **veiligheidsvoorraadbuffer ($SS$)** toe, gekalibreerd op levertijdrisico en vraagvariantie:
   $$\text{Bestelpunt (ROP)} = \left( D_{\text{adaptief}} \times \text{Levertijd}_{\text{dagen}} \right) + \text{Veiligheidsvoorraad}$$
   Zodra de **netto voorraadpositie ($\text{op voorraad} + \text{in bestelling} - \text{toegezegd}$)** van een SKU op of onder $\text{ROP}$ zakt, kantelt de statemotor de SKU-status naar `ORDER NOW`.
3. **Optimalisatie van bestelhoeveelheden onder MOQ-beperking:**  
   Een ruw tekort van 142 eenheden berekenen is nutteloos als je contractfabrikant een **minimale bestelhoeveelheid (MOQ)** van 500 eenheden handhaaft. Het inkoopalgoritme evalueert de netto nabestelklove die nodig is om de beoogde dekkingscyclus ($C_{\text{target}}$ dagen) plus levertijd te dekken, en lost de uiteindelijke **aanbevolen PO-hoeveelheid ($Q_{\text{PO}}$)** op via constraintbegrenzing:
   $$Q_{\text{PO}} = \max \left( \text{MOQ}, \; \text{Doelvoorraadniveau} - \text{Netto voorraadpositie} \right)$$
4. **Werkkapitaal- en kasblootstellingswaardering (Open-to-Buy-integratie):**  
   Supply chain-planners denken in *eenheden*, terwijl CFO's en oprichters denken in *kasstroom*. Elke aanbevolen inkooporder wordt vermenigvuldigd met zijn `Unit_COGS` ($C_i \times Q_{\text{PO}, i}$) en geaggregeerd naar urgentieniveau. Dit koppelt fysieke voorraadaanvulling direct aan **Open-to-Buy (OTB)-kasstroombeheer**, waardoor teams de exacte kapitaalblootstelling kunnen zien voordat leveranciersaanbetalingen worden gedaan.

---

## Praktijkscenario's uit e-commerce en toeleveringsketen die dit oplost

Als je operations- of financiële team zoekt naar een betrouwbaar spreadsheetmodel voor een van de volgende voorraadknelpunten, is deze toolkit er klaar voor:

- **Voorraadprognose piekseizoen Q4 / BFCM:** *Hoe bereken ik exacte hoeveelheden voor overzeese containerorders in juli/augustus wanneer ik Meta- en Google-advertentiebudgetten opschaal voor Black Friday / Cyber Monday?*
- **Nabestellen Amazon FBA en 3PL-bufferbeheer:** *Hoe coördineer ik voorraadtransfers tussen een overzeese fabriek, een binnenlands 3PL-stagingmagazijn en Amazon FBA-inbound-fulfillmentcentra zonder voorraadtekorten of FBA-toeslagen voor verouderde voorraad?*
- **PO-prioritering bij kapitaalbeperkingen (werkkapitaalcrisis):** *Wanneer ons driemaandelijkse Open-to-Buy (OTB)-inkoopbudget is begrensd tot $150.000, welke specifieke SKUs moeten vandaag worden besteld om omzetverlies te voorkomen, en welke PO's kunnen veilig worden uitgesteld?*
- **Schok in levertijden leveranciers en planning Chinees Nieuwjaar (CNY):** *Wanneer overzeese fabrieken meer dan 30 dagen sluiten tijdens het Chinese Nieuwjaar of transittijden voor zeevracht verdubbelen, hoe herbereken ik dan direct veiligheidsvoorraad en bestelpunten voor 500+ SKUs?*
- **Aanpassingen lanceersnelheid nieuwe producten:** *Wanneer een nieuw gelanceerde Hero-SKU 3× sneller verkoopt dan initiële prognoses, hoeveel brugvoorraad per luchtvracht moeten we dan bestellen om het gat te dichten voordat de volgende zeezending aankomt?*

---

## Oude voorraadtrackers vs. dit vraagadaptieve nabestelmodel

| Dimensie van voorraadplanning | Statische oude spreadsheets (zonder deze tool) | Vraagadaptieve Excel-voorraadtoolkit (met deze tool) |
| :--- | :--- | :--- |
| **Inkooptriggerlogica (risico op voorraadtekort)** | Nabestellen uitsluitend op basis van huidige op-voorraad magazijneenheden, waarbij uitputting tijdens transit en open in-transit PO's worden genegeerd. | Evalueert **netto voorraadpositie vs. vraag tijdens de levertijd** en triggert PO-waarschuwingen voordat voorraad onder de veiligheidsdrempel zakt. |
| **Beperkingen levertijd leveranciers en MOQ** | Toepassen van een generieke buffer van 30 dagen op alle leveranciers, waarbij levertijden voor zeevracht van 90 dagen en fabrieks-MOQ's worden genegeerd. | Kent **SKU-specifieke levertijden en MOQ's** toe en begrenst voorgestelde PO-hoeveelheden automatisch tot geldige leveranciersbeperkingen. |
| **Gevoeligheid verkoopsnelheid en trend** | Vertrouwen op vlakke gemiddelden over 90 dagen of 12 maanden die niet reageren wanneer betaalde advertenties of seizoenstrends verkopen versnellen. | Gebruikt **dynamische snelheidsgewichting over 30/90 dagen** en verhoogt nabestelhoeveelheden automatisch wanneer vraag op korte termijn piekt. |
| **Zichtbaarheid werkkapitaal en kasstroom** | Voorraadplanners genereren nabestellijsten in eenheden geïsoleerd, wat financiën dwingt kasimpact handmatig te berekenen in een apart blad. | Ingebouwde **kasblootstellingswaardering (`PO Units × Unit COGS`)** toont exacte werkkapitaalverplichtingen direct op het dashboard. |
| **Afstemming met promoties en advertenties** | Marketing lanceert een flashsale met 30% korting of verdubbelt advertentiebudgetten zonder zicht op de toeleveringsketen, waardoor 60 dagen voorraad in één weekend verdampt. | Verwerkt **promotionele vraagmultiplicatoren**, zodat planners voorraaddekking kunnen stresstesten vóór marketingcampagnes. |
| **Wekelijkse inkoopwerkstroom** | Analisten besteden wekelijks meer dan 4 uur aan het repareren van kapotte `VLOOKUP`-formules, het herbouwen van draaitabellen en het handmatig markeren van rijen met lage voorraad. | Levert een geautomatiseerde, kleurgecodeerde **geprioriteerde PO-actielijst (`ORDER NOW` vs. `HEALTHY`)** die klaar is voor directe generatie van leveranciers-PO's. |

---

## Voor wie dit is: doelfuncties in de toeleveringsketen en e-commercegebruiksscenario's

Gebouwd voor operators die fysieke voorraad beheren en een rigoureuze, transparante planningsmotor nodig hebben tussen ruwe ERP/Shopify-exporten en dure enterprise-SaaS-platformen:

- **DTC-e-commerceoprichters en Shopify-/WooCommerce-handelaars:** gebruik dit als een **lichte Shopify-voorraadaanvul- en nabestelcalculator** om advertentieverspilling door uitverkochte artikelen te voorkomen, 3PL-voorraadniveaus te sturen en nabestellingen bij overzeese fabrieken te plannen zonder $500–$2.000/maand te betalen voor SaaS-forecastapps.
- **Amazon FBA-verkopers en marketplace-aggregators:** gebruik dit als een **spreadsheet voor nabestellen van Amazon FBA en 3PL-bufferplanning** om productielevertijden van leveranciers, vensters voor zee-/luchtvracht en timing van FBA-inbound-zendingen in balans te brengen om je IPI (Inventory Performance Index)-score te beschermen.
- **Voorraadplanners, vraagplanners en supply chain-analisten:** gebruik dit als een **gestandaardiseerd Excel-sjabloon voor bestelpunt (ROP) en veiligheidsvoorraad** om fragiele, foutgevoelige interne spreadsheets te vervangen door een auditeerbaar nabestelmodel.
- **Operations managers en inkoop-/procurementkopers:** gebruik dit als een **geautomatiseerde inkooporder (PO)-generator en MOQ-calculator voor leveranciers** om wekelijkse voorraadtellingen in minuten om te zetten in exacte, leveranciersklare bestelhoeveelheden.
- **E-commerce-CFO's, financiële controllers en voorraadboekhouders:** gebruik dit als een **model voor kasstroomprognoses van werkkapitaal en Open-to-Buy (OTB)** om inkoopaanvragen te auditen, overbestellen op C-tier-SKUs te voorkomen en voorraadrotatieverhoudingen te optimaliseren.

*Opmerking: dit werkboek is **geen** live barcodescannend Warehouse Management System (WMS), geen geautomatiseerd EDI-orderrouteringsplatform en geen volledig wettelijk ERP. Het is de **tactische laag voor vraagplanning en inkoopbeslissingen** die je vertelt **wat je moet bestellen, hoeveel je moet bestellen, wanneer je moet bestellen en hoeveel kas het kost.***

---

## Over Theseus Workshop

Ik bouw lichtgewicht, transparante Excel- en browsergebaseerde beslissingsondersteunende systemen voor operationele knelpunten waar er simpelweg te veel onderling verbonden variabelen zijn om mentaal te volgen—maar waar zware enterprise-software onnodige kosten en complexiteit creëert.

In plaats van nog een rommelige ijdelheidsdashboard te bouwen, is elke toolkit ontworpen rond één praktische vraag:

> **„Welke exacte operationele en financiële variabelen moeten op één plaats samenkomen zodat de volgende inkoop- of kapitaalbeslissing wiskundig evident wordt?”**

Deze **vraagadaptieve toolkit voor voorraadplanning en inkoopbeslissingen** verenigt rollende vraagprognoses, beperkingen van leverancierslevertijden, veiligheidsvoorraadwiskunde en werkkapitaalblootstelling in een zelfstandig raamwerk dat elk e-commerce- of toeleveringsketenteam kan auditen, aanpassen en voor altijd bezitten.

---
*Trefwoorden: Excel-sjabloon voor voorraadplanning, bestelpunt (ROP)-calculatorspreadsheet, veiligheidsvoorraadformule Excel, nabestelmodel voor e-commercevoorraad, Shopify-nabestelcalculator, Amazon FBA-voorraadtracker, supply chain-inkooporder (PO)-planner, Open-to-Buy (OTB)-werkkapitaalspreadsheet.*

---

## Technische details

<details>
<summary><strong>Voor technische reviewers, Excel-practitioners en medewerkers</strong></summary>

---

## Architectuur van de werkmap

De werkmap volgt een bewust gescheiden architectuur in drie lagen.

In plaats van inputs, formules en dashboards op één werkblad te mengen, heeft elk werkblad één operationele verantwoordelijkheid.


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

### Lagen van de werkmap

| Laag | Werkblad | Verantwoordelijkheid |
|--------|-----------|----------------|
| Configuratie | Setup_Config | SKU-stamgegevens, leveranciersinformatie, levertijd, MOQ, serviceniveau en kostenparameters |
| Operationele gegevens | Sales_Import | Historische verkopen, direct geïmporteerd uit Shopify, ERP of spreadsheets |
| Operationele gegevens | Inventory_Status | Huidige voorraad en inkooporders die al onderweg zijn |
| Berekening | Forecast_Engine | Vraagvoorspelling op basis van historische verkooptrends en handmatige campagneaanpassingen |
| Berekening | Inventory_Planner | Veiligheidsvoorraad, bestelpunt, inkoopadviezen en voorgestelde hoeveelheden |
| Financiële analyse | Cash_Flow_Impact | Voorraadwaardering, inkoopkapitaalblootstelling en voorraadrotatie |
| Managementoutput | Dashboard | Inkoopwaarschuwingen, KPI-samenvatting en inkoopactielijst |

---

### Gegevensstroom


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

Elke berekeningslaag hangt uitsluitend af van gevalideerde stroomopwaartse gegevens.

Geen enkel werkblad schrijft waarden terug naar een ander werkblad, wat de complexiteit van onderhoud reduceert en circulaire verwijzingen voorkomt.

---

## Drie valkuilen die zelfs ervaren voorraadmanagers vangen

---

### Valkuil 1 — plannen rond de voorraad van vandaag in plaats van de vraag van morgen

#### De beslissing
De voorraad ziet er vandaag gezond uit. De inkoop wordt uitgesteld.

#### De verborgen verkeerde aanname
Er wordt aangenomen dat de huidige magazijnvoorraad de toekomstige beschikbaarheid vertegenwoordigt. De vraag tijdens de levertijd wordt genegeerd.

#### Voor
| Huidige voorraad | Dagelijkse verkopen | Beslissing |
|-------------------|------------|----------|
| 1.800 stuks | 40/dag | Inkoop uitstellen |

De voorraad lijkt voldoende.

#### Realiteit
Levertijd leverancier: `70 Days`
Verwacht verbruik: `40 × 70 = 2,800 units`

Het bedrijf zal veel meer voorraad consumeren voordat de aanvulling arriveert.

#### Waarom de redenering faalt
Voorraadplanning kijkt vooruit. Magazijnvoorraad is alleen zinvol wanneer deze samen wordt bekeken met de verwachte vraag tijdens de levertijd van de leverancier. Het negeren van de vraag tijdens de levertijd stelt inkoop uit tot voorraadtekorten onvermijdelijk worden.

#### Juiste aanpak
Bereken het verwachte voorraadverbruik voordat de aanvulling arriveert. Vergelijk daarna de beschikbare voorraad met die vereiste.

#### Juiste beslissing
`ORDER NOW`
De inkoop begint terwijl de voorraad er nog gezond uitziet. Dit beschermt de serviceniveaus in plaats van te reageren nadat tekorten optreden.

<details>
<summary>Formuleverwijzing</summary>

Vraag tijdens de levertijd

```

Lead Time Demand = Forecast Daily Demand × Lead Time

```
Excel
```excel
=B2#*C2#

```

---

### Valkuil 2 — historische gemiddelde verkopen als prognose gebruiken

#### De beslissing

Toekomstige bestelhoeveelheden baseren volledig op het gemiddelde over 90 dagen.

#### Verborgen verkeerde aanname

Er wordt aangenomen dat de verkoopvraag stabiel blijft. Marketingactiviteit wordt genegeerd. Recente versnelling wordt genegeerd.

#### Voor

`90-Day Average: 30 Units / Day`
`Recommended Purchase: 2,100 Units`

#### Realiteit

`Last 30 Days: 45 Units / Day`
`Trend Factor: 45 / 30 = 1.50`

Adverteren heeft de vraag al verhoogd. Het historische gemiddelde onderschat de toekomstige voorraadbehoefte.

#### Waarom de redenering faalt

Historische gemiddelden beschrijven het verleden. Inkoopbeslissingen betreffen de toekomst. Het negeren van vraagversnelling veroorzaakt herhaalde voorraadtekorten, zelfs wanneer prognoses wiskundig correct lijken.

#### Juiste aanpak

Combineer historische vraag met waargenomen verkoopmomentum en geplande promotieactiviteit.

```
Forecast = Daily Base × Trend Factor × Promotion Multiplier

```

#### Juiste beslissing

Verhoog de inkoop voordat voorraadtekorten optreden. Prognoses worden responsief in plaats van statisch.

Trendfactor

```excel
30 Day Average / 90 Day Average

```

Prognose

```excel
Forecast Daily = Base Demand * Trend Factor * Promotion Multiplier

```

Excel

```excel
=B2#*C2#*D2:D100

```

---

### Valkuil 3 — voorraad behandelen als een operationeel probleem in plaats van een kasprobleem

#### De beslissing

Een inkoopadvies wordt goedgekeurd omdat de voorraad laag lijkt.

#### Verborgen verkeerde aanname

Alleen de fysieke voorraad wordt beoordeeld. Kasvereisten krijgen weinig aandacht.

#### Voor

`Purchasing Recommendation: 4,000 Units`
Ziet er operationeel redelijk uit.

#### Realiteit

`Unit Cost: $18`
`Purchase Commitment: 4,000 × 18 = $72,000`

Voorraadplanning wordt onmiddellijk een beslissing over kapitaalallocatie.

#### Waarom de redenering faalt

Voorraad neemt niet alleen magazijnruimte in beslag. Het neemt ook werkkapitaal in beslag. Zonder zicht op inkoopverplichtingen creëren bedrijven onbedoeld kastekorten terwijl ze voorraadtekorten proberen te voorkomen.

#### Juiste aanpak

Elk inkoopadvies moet automatisch de vereiste financiële verbintenis tonen. Operatie en financiën beoordelen hetzelfde advies gelijktijdig.

#### Juiste beslissing

Keur alleen inkoopplannen goed die zowel voorraadbescherming als kasbeschikbaarheid waarmaken.

Inkoopverplichting

```excel
Suggested Quantity * Unit Cost

```

Excel

```excel
=XLOOKUP(...) * XLOOKUP(...)

```

---

## Voorbeeldscenario

Een direct-to-consumerbedrijf voor huishoudelijke producten importeert negentig dagen Shopify-verkopen in de werkmap. Drie SKUs worden geleverd uit China. De gemiddelde productie- en verzendlevertijd bedraagt **70 dagen**. De huidige magazijnvoorraad van één SKU is **2.350 stuks**, terwijl andere **600 stuks** al onderweg zijn.

De historische analyse toont:

| Metric | Waarde |
| --- | --- |
| Gemiddelde dagelijkse verkopen over 30 dagen | 52 stuks |
| Gemiddelde dagelijkse verkopen over 90 dagen | 40 stuks |
| Trendfactor | 1,30 |
| Promotiemultiplicator | 1,20 |

De voorspellingsmotor schat:
`Forecast Daily Demand: 52 × 1.30 × 1.20 = 81 units/day`

De vraag tijdens de levertijd wordt:
`81 × 70 = 5,670 units`

De variabiliteit van de historische verkopen levert een berekende veiligheidsvoorraad van ongeveer **620 stuks**.

Het bestelpunt wordt dus:
`5,670 + 620 = 6,290 units`

De beschikbare voorraad is gelijk aan:
`2,350 + 600 = 2,950 units`

Hoewel de magazijnvoorraad aanvankelijk acceptabel leek, ligt de beschikbare voorraad al **3.340 stuks onder** het berekende bestelpunt. De planner markeert de SKU direct als **ORDER NOW**.

De inkoopmotor beoordeelt vervolgens de MOQ-vereisten en rondt het advies naar boven af naar een operationele bestelhoeveelheid. Cash_Flow_Impact schat gelijktijdig de inkoopverplichting, waardoor financiën kan bepalen of het advies past binnen de huidige werkkapitaalbeperkingen.

In plaats van alleen op magazijnvoorraad te leunen, evalueert het bedrijf vraaggroei, leverancierslevertijd, voorraadvariabiliteit, inkoopbeleid en kapitaalblootstelling samen voordat de aankoop wordt goedgekeurd. Dit levert een advies dat zowel operationeel als financieel verdedigbaar is.

---

## Formuleverwijzing

De werkmap is bewust ontworpen rond dynamische arrayformules die beschikbaar zijn in moderne versies van Microsoft Excel. Elk analytisch werkblad verwijst naar het SKU-spillbereik van het hoofdconfiguratieblad, wat automatische uitbreiding mogelijk maakt wanneer nieuwe producten worden toegevoegd.

---

### Setup_Config

#### Doel

Eén gezaghebbende bron onderhouden voor alle statische planningsparameters.
Velden omvatten:

* SKU
* Productnaam
* Leverancier
* Levertijd
* MOQ
* Serviceniveau
* Stukkosten
* Verkoopprijs

#### Dynamische SKU-spill

```excel
=FILTER(B2:B100,B2:B100<>"")

```

**Doel:** creëert een dynamische SKU-lijst. Elk stroomafwaarts werkblad verwijst naar dit spillbereik in plaats van vaste rijnummers.
**Voordelen:** geen formules kopiëren, automatische uitbreiding van de werkmap, geen onderhoud bij het toevoegen van producten.

---

### Sales_Import

#### Gemiddelde verkopen over 30 dagen

```excel
=MAP(E2#, LAMBDA(sku, IFERROR(SUMIFS(C:C,B:B,sku,A:A,">="&TODAY()-30)/30, 0)))

```

**Doel:** berekent de recente gemiddelde dagelijkse verkopen.

#### Gemiddelde verkopen over 90 dagen

```excel
=MAP(E2#, LAMBDA(sku, IFERROR(SUMIFS(C:C,B:B,sku,A:A,">="&TODAY()-90)/90, 0)))

```

**Doel:** vertegenwoordigt de langetermijnbaseline van de vraag.

**Waarom beide nodig zijn:** het vergelijken van 30 dagen (huidig vraagsmomentum) en 90 dagen (stabiele historische vraag) identificeert versnelling of terugval.

---

### Inventory_Status

```excel
=B2#+C2#

```

**Doel:** combineert beschikbare voorraad en voorraad onderweg.
**Operationele opmerking:** het negeren van voorraad die al onderweg is, veroorzaakt vaak dubbele inkoop.

---

### Forecast_Engine

#### Trendfactor

```excel
=IFERROR(XLOOKUP(...) / IF(XLOOKUP(...)=0, 1, XLOOKUP(...)), 1)

```

**Interpretatie:** >1 (groeiende vraag), =1 (stabiele vraag), <1 (dalende vraag).

#### Voorspelde dagelijkse vraag

```excel
=B2#*C2#*D2:D100

```

**Doel:** transformeert historische vraag in operationele inkoopvraag met behulp van basisverkopen, trend en promotiemultiplicatoren.

---

### Inventory_Planner

#### Vraag tijdens de levertijd

```excel
=B2#*C2#

```

#### Standaarddeviatie van de verkopen

```excel
=MAP(A2#, LAMBDA(sku, IFERROR(STDEV.S(FILTER(Sales_Import!C:C, Sales_Import!B:B=sku)), 0)))

```

**Doel:** meet de historische volatiliteit van de verkopen.

#### Z-score

```excel
=MAP(A2#, LAMBDA(sku, NORM.S.INV(XLOOKUP(sku, Setup_Config!A2#, Setup_Config!G2#))))

```

**Doel:** zet het gewenste serviceniveau om in statistische bescherming (bijv. 95 % = 1,65).

#### Veiligheidsvoorraad

```excel
=ROUND(F2#*E2#*SQRT(B2#), 0)

```

**Doel:** beschermt tegen vraagsvariabiliteit tijdens de aanvulling.

#### Bestelpunt

```excel
=ROUND(D2#+G2#, 0)

```

**Doel:** bepaalt wanneer de inkoop moet beginnen (vraag tijdens de levertijd + veiligheidsvoorraad).

#### Inkoopadvies

```excel
=MAP(A2#, LAMBDA(sku, IF(Available<=ROP, "ORDER NOW", "OK")))

```

**Doel:** creëert een operationeel inkoopsignaal.

#### Voorgestelde bestelhoeveelheid

```excel
=MAP(A2#, LAMBDA(sku, LET(avail,..., rop,..., moq,..., daily,..., ss,..., target_need, (daily*30)+ss-avail, IF(avail<=rop, MAX(moq, CEILING(target_need,10)), 0))))

```

**Doel:** produceert een bestelhoeveelheid die aan de MOQ voldoet, de voorraad herstelt en onderbestellen voorkomt.

---

### Cash_Flow_Impact

#### Voorraadwaarde

```excel
=XLOOKUP(...) * XLOOKUP(...)

```

#### Inkoopverplichting

**Doel:** toont het vereiste inkoopkapitaal voordat orders worden geplaatst (voorgestelde hoeveelheid × stukkosten).

#### Voorraadrotatie

```excel
=ROUND(sales_annual/on_hand, 1)

```

**Doel:** meet voorraadefficiëntie in plaats van voorraadgrootte.

---

### Dashboard

#### Aantal rode alarmen

```excel
=COUNTIF(Inventory_Planner!J2#, "ORDER NOW")

```

#### Totale inkoopverplichting en voorraadwaarde

```excel
=SUM(Cash_Flow_Impact!C2#)
=SUM(Cash_Flow_Impact!B2#)

```

#### Dynamische bestellijst

```excel
=FILTER(HSTACK(...), Inventory_Planner!J2#="ORDER NOW", "All inventory healthy")

```

**Doel:** produceert automatisch een inkoopactielijst met SKU, productnaam, voorgestelde hoeveelheid en geschatte inkoopkosten, zonder handmatig filteren.

---

## Validatieregels

| Veld | Validatieregel | Foutgedrag |
| --- | --- | --- |
| SKU | Mag niet leeg zijn en moet uniek zijn | Rij uit berekeningen uitgesloten |
| Levertijd | Geheel getal groter dan nul | Prognose niet beschikbaar |
| MOQ | Positief geheel getal | Inkoopadvies uitgeschakeld |
| Serviceniveau | Tussen 50 % en 99,9 % | Z-score kan niet worden berekend |
| Stukkosten | Groter dan of gelijk aan nul | Kasanalyse geeft nul terug |
| Verkoopprijs | Groter dan nul | Margeanalyse niet beschikbaar |
| Verkoopdatum | Geldige kalenderdatum | Record genegeerd |
| Verkoophoeveelheid | Mag niet negatief zijn | Record uitgesloten |
| Beschikbare voorraad | Groter dan of gelijk aan nul | Voorraadwaarschuwing gegenereerd |
| Voorraad onderweg | Groter dan of gelijk aan nul | Beschikbare voorraad aangepast |
| Promotiemultiplicator | Aanbevolen bereik 0,5–3,0 | Buiten bereik gemarkeerd voor beoordeling |
| Voorspelde dagelijkse vraag | Mag niet negatief zijn | Inkoopadvies onderdrukt |
| Veiligheidsvoorraad | Automatisch naar nul begrensd | Negatieve waarden voorkomen |
| Bestelpunt | Wordt altijd herberekend | Handmatige bewerking wordt afgeraden |
| Voorgestelde bestelhoeveelheid | Mag niet onder de MOQ liggen wanneer inkoop vereist is | Automatisch naar boven afgerond |

</details>
</details>

---

## De bedrijfslogica: methodologie en commerciële impact

Veel voorraadsjablonen falen omdat ze supply chain management behandelen als een puur wiskundige teloefening. In werkelijkheid is voorraadplanning een **beslissing over kapitaalallocatie**. 

Deze toolkit verlegt de operationele focus van *„hoeveel voorraad ligt er in het magazijn?”* naar *„hoe maximaliseren we voorraadrotatie terwijl we onze marketing-ROI en ons werkkapitaal beschermen?”* 

Hier is de onderliggende methodologie en hoe het specifieke commerciële problemen oplost:

### 1. Het commerciële probleem: het DTC-zweepslageffect en verkeerde kapitaalallocatie
Moderne e-commercemerken opereren in een hoogvolatielandschap waarin betaalde social advertising, influencermarketing en seizoensinvloeden plotselinge vraagpieken creëren. 
*   **Het gebrek van statische systemen:** als een bedrijf een vast bestelpunt gebruikt (bijv. „altijd bestellen wanneer de voorraad 500 stuks raakt”), loopt het onvermijdelijk voorraadtekorten op tijdens een marketingcampagne met hoge ROAS en verspilt het advertentiebudgetten. Omgekeerd bindt overbestellen kritieke kas in illiquide fysieke goederen.
*   **De oplossing:** deze toolkit vervangt statische drempels door een **vraagadaptief bestelpuntmodel (ROP)**. 

### 2. De kernmethodologie (hoe het werkt)

De berekeningsmotor gebruikt standaardprincipes uit operations research, aangepast voor sneldraaiende consumptiegoederen:

*   **Statistische veiligheidsvoorraad (standaarddeviatie en Z-scores):**
    in plaats van een buffer te raden, meet de toolkit de historische standaarddeviatie (σ) van je dagelijkse verkopen. Door een doel-serviceniveau in te stellen (bijv. 95 %), past het model de overeenkomstige Z-score toe om het exacte aantal buffereenheden wiskundig te berekenen dat nodig is om onverwachte vraagpieken tijdens de levertijd van de leverancier op te vangen.
*   **Rollende vraag- en momentummodificatoren:**
    de motor leunt niet uitsluitend op een historisch gemiddelde over 90 dagen. Het verwerkt een **trendfactor** (vergelijking van 30-dagensnelheid met de 90-dagenbaseline) en **promotiemultiplicatoren**. Deze methodologie waarborgt dat als je huidige advertentiebudgetten de verkopen versnellen, het voorspelde verbruik zich aanpast *voordat* het voorraadtekort optreedt.
*   **Projectie van de vraag tijdens de levertijd:**
    de tool brengt je voorspelde dagelijkse vraag direct in kaart tegen de specifieke levertijd van elke leverancier. Het bewijst wiskundig hoeveel eenheden worden verbruikt terwijl je inkooporder op een vrachtschip ligt.
*   **Min-Max-/MOQ-logicabeperkingen:** 
    zodra het bestelpunt wordt doorbroken, berekent het algoritme een voorgestelde bestelhoeveelheid die voldoet aan de minimale bestelhoeveelheid (MOQ) van de leverancier en tevens afrondt naar operationeel zinvolle partijgroottes.

### 3. De commerciële output (bedrijfswaarde)
Door vraagvoorspelling te verbinden met financiële metrics levert de tool actionable business intelligence:
*   **Voor operatie:** elimineert het gissen naar *wanneer* en *hoeveel* er moet worden besteld over meerdere toeleveringsketen heen (binnenlands vs internationaal).
*   **Voor marketing:** waarborgt dat productbeschikbaarheid aansluit op campagneschema's, waardoor customer acquisition costs (CAC) worden beschermd.
*   **Voor financiën:** biedt direct zicht op de **inkoopverplichting ($)**. Financiële teams kunnen het werkkapitaaleffect van een voorgestelde inkooporder beoordelen *voordat* de kas wordt ingezet, zodat het bedrijf liquide blijft.

---  

## Andere tools in deze serie

Deze werkmap maakt deel uit van een groeiende collectie lichtgewicht operationele beslissingsondersteunende hulpmiddelen, gebouwd voor teams die betere beslissingen nodig hebben zonder enterprise-software te implementeren.

Voorbeelden:

* **Cashflow Forecast Control Tower** — houd liquiditeit, operationele kasstroom en financieringsbehoeften in de gaten.
* **Marketing Budget Allocation Planner** — verdeel advertentiebudgetten over kanalen met behulp van meetbare rendementdrempels.
* **Construction Cost Control Dashboard** — vergelijk projectbudgetten, verplichtingen, facturen en resterende contingenties.
* **Procurement Spend Analysis Toolkit** — volg leveranciersprestaties, inkoopconcentratie en contractbenutting.
* **Sales Performance Intelligence Dashboard** — houd omzattrends, margeprestaties en klantconcentratie in de gaten.

Alle tools volgen dezelfde principes:

* Geen registratie vereist
* Geen installatie vereist
* Browser- en Excel-edities
* Lichtgewicht beslissingsondersteuning in plaats van enterprise-vervanging
* Gebouwd rond herhaalbare analytische werkstromen in plaats van statische rapportage

---

## Licentie

Gelicentieerd onder de **Apache License 2.0**.

Je bent vrij om:

* Dit project commercieel te gebruiken.
* De werkmap aan te passen en uit te breiden.
* Originele of aangepaste versies te distribueren.
* Het analytische raamwerk in je eigen werkstromen te verwerken.

Onderworpen aan de voorwaarden van de Apache License 2.0.
Zie het LICENSE-bestand voor de volledige licentietekst.

---

## Dankwoord

Dit project is ontstaan uit terugkerende uitdagingen op het gebied van voorraadplanning die werden waargenomen bij direct-to-consumermerken, e-commercebedrijven en supply chain-teams die betere inkoopbeslissingen nodig hadden zonder enterprise resource planning-systemen te implementeren.

Het doel is niet om ERP- of MRP-platforms te vervangen. Het doel is om betere operationele beslissingen mogelijk te maken met de gegevens die organisaties al hebben.

Als dit project je planningsproces helpt verbeteren, zijn bijdragen, suggesties en feedback altijd welkom.

