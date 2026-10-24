[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Excel-Vorlage für Bestandsplanung und Meldebestand (ROP)-Rechner für E-Commerce, Shopify & Amazon FBA
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/ab946235-54c1-4cb6-8957-f3fc601b803a" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Inventory%20Replenishment%20%26%20ROP%20Model-orange)

**Eine automatisierte Excel-Vorlage für Bestandsplanung, ein Meldebestand (ROP)-Rechner und ein Sicherheitsbestand-Tabellenblatt — entwickelt für DTC-E-Commerce-Marken, Shopify-Händler, Amazon-FBA-Verkäufer und Supply-Chain-Manager. Kombinieren Sie rollierende 30-/90-Tage-Verkaufsgeschwindigkeitsprognosen, Lieferanten-Vorlaufzeitpuffer, MOQ-Restriktionen und Open-to-Buy (OTB)-Betriebskapitalbindung in einem Entscheidungsunterstützungsmodell—kostenlos in Ihrem Browser oder als entsperrte Excel-Arbeitsmappe.**

**Keine Registrierung. Keine Installation. Kostenlos im Browser testen.**

Testen Sie die cloudbasierte interaktive Webanwendung sofort ohne Einrichtung, oder laden Sie die vollständig entsperrte Excel-Tabellenvorlage für Ihre wöchentlichen Offline-Nachschub-Workflows herunter—abgesichert durch eine 30-tägige Geld-zurück-Garantie ohne Rückfragen.

> 🌐 **Web-Rechner testen:** [Kostenlose interaktive Web-App für Bestandsnachschub & Meldebestand öffnen (Live-Demo) ↗](https://hyvoid.github.io/inventory-planning-reorder-point-excel/)  
> 📥 **Vollständiges Excel-Modell holen:** [Vollständig entsperrte Excel-Vorlage für Bestandsplanung, Sicherheitsbestand & PO-Entscheidungen herunterladen ↗](https://www.theseusworkshop.com/l/rklhag?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=demand-adaptive-inventory)  
> ⚙️ **Nachschub-Mathematik:** [Zur Geschäftslogik & Bestandsmethodik springen](#the-business-logic--methodology)

---

## Was es zu verfolgen hilft: Mapping von E-Commerce-Bestandsschmerzpunkten zu Lösungen

Statische Bestands-Tabellenblätter scheitern an modernen Direct-to-Consumer (DTC)-, Amazon-FBA- und Omnichannel-Großhandelsmarken, weil Nachfragegeschwindigkeit und Übersee-Frachtvorlaufzeiten hoch volatil sind. Paid-Social-Skalierung auf Meta/TikTok, BFCM-Blitzaktionen oder Hafenstaus können schwere Fehlmengen auslösen oder Hunderttausende Dollar in totem Bestand binden.

Statt fragmentierte 3PL-Lagerberichte, Purchase Orders (POs) im Transit und Shopify/Amazon-Verkaufsexporte manuell zu querlesen, verfolgt und löst dieses **Bestandsnachschub-Tabellenblatt** sechs kritische Blindstellen der Lieferkette:

| Ziel-Tracking-Metrik / Schmerzpunkt | Die verbreitete E-Commerce-Bestandsblindstelle | Wie dieses Nachschubmodell es löst & verfolgt |
| :--- | :--- | :--- |
| **Dynamischer Meldebestand (ROP) & Fehlmengenprävention** | Verlass auf Bauchgefühl-Nachschubalarme oder statische 90-Tage-Durchschnitte, was Fehlmengen verursacht, wenn Werbeausgaben skalieren, und Customer Acquisition Cost (CAC) verschwendet. | Verfolgt **rollierende 30-Tage- vs. 90-Tage-gewichtete Verkaufsgeschwindigkeit**, um SKU-spezifische **Meldebestände (ROP)** dynamisch anzupassen, bevor der Bestand zur Neige geht. |
| **Sicherheitsbestand & Tage des verfügbaren Bestands (DOH)** | Überbestellung langsam drehender SKUs aus Angst, was Betriebskapital in 3PL-Lagergebühren bindet und den Lagerumschlag drückt. | Berechnet statistisch gepufferte **Sicherheitsbestandseinheiten** und **Tage des verfügbaren Bestands (DOH / Versorgungswochen)**, zugeschnitten auf die Nachfragevolatilität jedes SKUs. |
| **Netto verfügbarer Bestand (verfügbar + POs im Transit)** | Doppelte Bestellung, weil offene, nicht empfangene Purchase Orders (in Bestellung / im Transit per See- oder Luftfracht) nicht gegen den Lagerbestand verrechnet werden. | Verfolgt die **Netto-Bestandsposition (`On-Hand + In-Transit POs - Committed Stock`)** gegen prognostizierte Vorlaufzeit-Abbaufenster. |
| **Lieferanten-Vorlaufzeit- & MOQ-Restriktionsabstimmung** | Anwendung eines pauschalen 30-Tage-Nachschubpuffers sowohl auf 90-Tage-Übersee-Seefrachtfabriken als auch auf 7-Tage-inländische 3PL-Nachschub-Lieferanten. | Bewertet jeden SKU unabhängig anhand **lieferantenspezifischer Transitvorlaufzeiten**, **Mindestbestellmengen (MOQs)** und Case-Pack-Rundungsregeln. |
| **Open-to-Buy (OTB)-Cashflow & Betriebskapitalbindung** | Einreichung von Purchase Orders rein auf Basis von Stückzahlen, ohne die genaue Mittelbindung zu kennen, die zur Finanzierung des Nachschublaufs erforderlich ist. | Multipliziert vorgeschlagene PO-Mengen mit **Stück-Wareneinstandskosten (Landed COGS)**, um **Cashflow-Bindung ($)** in Echtzeit auszugeben und POs zu priorisieren, wenn Kapital knapp ist. |
| **Handlungsrelevante Purchase Order (PO)-Prioritätentriage** | Auditing von 500+ SKUs Zeile für Zeile jeden Montagmorgen, um zu ermitteln, welche Lieferanten eine sofortige PO brauchen vs. welche SKUs sicher bevorratet sind. | Erzeugt einen automatisierten **SKU-Aktionsstatus (`ORDER NOW`, `WATCH`, `HEALTHY`, `OVERSTOCKED`)** mit exakten empfohlenen PO-Bestellmengen. |

---

## Schnellstart-Tutorial: So automatisieren Sie Ihre Nachschub- & Meldebestandsentscheidungen

Der Übergang von rohen Omnichannel-Verkaufsexporten zu einer audit-fähigen **Purchase Order (PO)-Aktionsliste** dauert weniger als 5 Minuten. Folgen Sie diesem 4-stufigen Nachschub-Workflow:

### Schritt 1: SKU-Stammdaten, Vorlaufzeiten & Lieferanten-MOQs konfigurieren
Navigieren Sie zum Steuerblatt `Setup_Config` und legen Sie Ihre Lieferkettenparameter für jeden SKU fest:
- **SKU-Identifikatoren & Lieferanten-Mapping:** SKU-Codes, Produktnamen und primäre Lieferantenzuweisungen.
- **Nachschubrestriktionen:** Produktion + Fracht **Vorlaufzeit (Tage)**, **Mindestbestellmenge (MOQ)**, Ziel-Servicelevel-Sicherheitspuffer und **Stück-Wareneinstandskosten ($)**.

*Aktion:* Testen Sie jetzt, wie Vorlaufzeit- und MOQ-Änderungen Nachschubauslöser beeinflussen, in der [kostenlosen interaktiven Bestandsplanungs-Web-App](https://hyvoid.github.io/inventory-planning-reorder-point-excel/).

---

### Schritt 2: Shopify-, Amazon-FBA- oder ERP-Historische Verkäufe & Bestandszahlen importieren
Exportieren Sie Ihren Roh-Stückverkaufsverlauf und aktuelle Lagerbestände aus **Shopify, Amazon Seller Central, Cin7, NetSuite oder Ihrem 3PL-Portal**, und fügen Sie sie direkt in `Sales_Import` und die Bestandseingabetabellen ein:
- Erfassen Sie **aktuell verfügbaren Lagerbestand** und **offene PO-Mengen im Transit**.
- Beziehen Sie jüngste 30-Tage- und 90-Tage-Historien-Stückverkäufe ein (plus optionale Werbeaktion-Nachfragemultiplikatoren).

*Keine VLOOKUP-Wartung oder Formelneufassung erforderlich—die Ingestion-Schicht normalisiert Rohdaten automatisch.*

---

### Schritt 3: Automatisierte Sicherheitsbestände, ROP & vorgeschlagene PO-Mengen prüfen
Wechseln Sie zum **Executive Replenishment Dashboard**. Die Berechnungsmaschine führt die Bestandsformeln sofort über Ihren gesamten Katalog aus und gibt aus:
- **Gewichtete tägliche Verkaufsgeschwindigkeit** (Einheiten/Tag) & **Tage des verbleibenden Bestands (DOH)**
- **Vorlaufzeit-Bedarfsprojektion** & **dynamischer Meldebestand (ROP)**
- **Priorisierte „ORDER NOW“-Alarme** mit MOQ-angepassten **vorgeschlagenen PO-Mengen**
- **Gesamtes erforderliches Betriebskapital ($)** zur Finanzierung der empfohlenen Einkaufscharge

---

### Schritt 4: Die entsperrte Excel-Vorlage für wöchentliche Bestandsplanung herunterladen
Während die Browser-Live-Demo ideal für Einzelsitzungstests und Logikverifikation ist, erfordern echte Lieferkettenoperationen persistente wöchentliche Snapshots, individuelle SKU-Erweiterungen und interne Finanzaudits.

> 💡 **Bereit, Ihre wöchentliche Nachschubplanung zu automatisieren, ohne 1.000+ $/Monat für SaaS-Bestandssoftware zu zahlen?**  
> Hören Sie auf, Nachschubmengen zu erraten oder jeden Montag kaputte Tabellenblätter neu zu bauen.  
> 👉 **[Vollständig entsperrte Excel-Vorlage für Bestandsplanung & Einkaufsentscheidungen herunterladen](https://www.theseusworkshop.com/l/rklhag?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=demand-adaptive-inventory)**, um Ihren eigenen SKU-Katalog einzuspielen, historische wöchentliche Beschaffungsprotokolle zu speichern, Prognosegewichtungen anzupassen und saubere PO-Freigabeblätter mit Ihrem Finanzteam zu teilen.

---

## Die Geschäftslogik & Methodik

Die meisten Standard-Excel-Bestandsvorlagen scheitern im echten E-Commerce-Betrieb, weil sie **Nachfragegeschwindigkeit als statisch** und **Lieferketten als augenblicklich** behandeln. Wenn ein Tabellenblatt einfach 90-Tage-Verkäufe durch 90 teilt, verursacht eine virale TikTok-Kampagne oder ein Q4-Saisonalanstieg eine sofortige Fehlmenge, bevor ein Übersee-Container überhaupt den Hafen verlässt.

Um den mathematischen Trade-off zwischen **Servicelevel (Fehlmengenrisiko)** und **Betriebskapitaleffizienz (Überbestandsrisiko)** zu lösen, implementiert dieses Toolkit eine **4-stufige quantitative Nachschubmethodik**:

1. **Bedarfsadaptive Geschwindigkeitsgewichtung (Kurzfristiger Trend vs. langfristige Baseline):**  
   Sich allein auf einen 90-Tage-Durchschnitt zu verlassen, hinkt Wachstumstrends hinterher; sich allein auf ein 7- oder 30-Tage-Fenster zu verlassen, überreagiert auf temporäres Rauschen. Dieses Modell berechnet eine **gemischte tägliche Bedarfsgeschwindigkeit ($D_{\text{adaptiv}}$)**, indem kurzfristige Verkaufsbeschleunigung ($V_{30}$) gegen die historische Baseline ($V_{90}$) verglichen wird, gekoppelt mit einem optionalen **Werbeaktionen-Multiplikator ($M_{\text{promo}}$)**:
   $$D_{\text{adaptiv}} = \left( w_1 \cdot V_{30} + w_2 \cdot V_{90} \right) \times M_{\text{promo}}$$
   Wenn die jüngste Verkaufsgeschwindigkeit über dem historischen Mittel beschleunigt, skaliert das Modell Vorwärts-Bedarfsprojektionen dynamisch hoch, um Hochgeschwindigkeits-Gewinner vor Fehlmengen zu schützen.
2. **Vorlaufzeit-Abbau & dynamische Meldebestand (ROP)-Modellierung:**  
   Eine heute aufgegebene Bestellung kommt nicht an, bis der Lieferant Fertigung und Frachttransit abschließt ($L$ Tage). In diesem Fenster zehrt Ihr bestehender Bestand weiter. Die Maschine berechnet **Vorlaufzeit-Bedarf ($D_{\text{LT}} = D_{\text{adaptiv}} \times L$)** und addiert einen dynamischen **Sicherheitsbestandspuffer ($SS$)**, kalibriert auf Vorlaufzeitrisiko und Bedarfsvarianz:
   $$\text{Meldebestand (ROP)} = \left( D_{\text{adaptiv}} \times \text{Vorlaufzeit}_{\text{Tage}} \right) + \text{Sicherheitsbestand}$$
   Wann immer die **Netto-Bestandsposition ($\text{verfügbar} + \text{in Bestellung} - \text{zugesagt}$)** eines SKUs auf oder unter $\text{ROP}$ fällt, kippt die Zustandsmaschine den SKU-Status auf `ORDER NOW`.
3. **MOQ-restringierte Bestellmengenoptimierung:**  
   Ein Rohdefizit von 142 Einheiten zu berechnen ist nutzlos, wenn Ihr Auftragsfertiger eine **Mindestbestellmenge (MOQ)** von 500 Einheiten durchsetzt. Der Einkaufsalgorithmus bewertet die Netto-Nachschublücke, die zur Abdeckung des Ziel-Abdeckungszyklus ($C_{\text{target}}$ Tage) plus Vorlaufzeit erforderlich ist, und löst die endgültige **empfohlene PO-Menge ($Q_{\text{PO}}$)** durch Restriktions-Eingrenzung:
   $$Q_{\text{PO}} = \max \left( \text{MOQ}, \; \text{Zielbestandsniveau} - \text{Netto-Bestandsposition} \right)$$
4. **Betriebskapital- & Kapitalbindungsbewertung (Open-to-Buy-Integration):**  
   Supply-Chain-Planer denken in *Einheiten*, während CFOs und Gründer in *Cashflow* denken. Jede empfohlene Purchase Order wird mit ihrem `Unit_COGS` ($C_i \times Q_{\text{PO}, i}$) multipliziert und nach Dringlichkeitsstufe aggregiert. Das verknüpft physische Bestandsaufstockung direkt mit **Open-to-Buy (OTB)-Cashflow-Management** und ermöglicht Teams, die exakte Kapitalbindung zu sehen, bevor Lieferantenanzahlungen geleistet werden.

---

## Reale E-Commerce- & Lieferkettenszenarien, die dies löst

Wenn Ihr Betriebs- oder Finanzteam nach einem verlässlichen Tabellenblattmodell sucht, um einen der folgenden Bestandsengpässe zu handhaben, ist dieses Toolkit dafür vorgebaut:

- **Q4-/BFCM-Hochsaison-Bestandsprognose:** *Wie berechne ich exakte Übersee-Container-Bestellmengen im Juli/August, wenn ich Meta- und Google-Werbeausgaben für Black Friday / Cyber Monday skaliere?*
- **Amazon-FBA-Nachschub & 3PL-Puffer-Management:** *Wie koordiniere ich Bestandstransfers zwischen einer Überseefabrik, einem inländischen 3PL-Staging-Lager und Amazon-FBA-Inbound-Fulfillment-Zentren, ohne Fehlmengen zu riskieren oder FBA-Altebestand-Zuschläge auszulösen?*
- **Kapitalbeschränkte PO-Priorisierung (Betriebskapital-Engpass):** *Wenn unser vierteljährliches Open-to-Buy (OTB)-Beschaffungsbudget bei 150.000 $ gedeckelt ist, welche spezifischen SKUs müssen heute bestellt werden, um Umsatzverluste zu verhindern, und welche POs können sicher verschoben werden?*
- **Lieferanten-Vorlaufzeit-Schock & Chinesisches Neujahr (CNY)-Planung:** *Wenn Überseefabriken für 30+ Tage während des Chinesischen Neujahrs schließen oder Seefracht-Transitzeiten sich verdoppeln, wie berechne ich Sicherheitsbestand und Meldebestände sofort über 500+ SKUs neu?*
- **Anpassungen der Launch-Geschwindigkeit neuer Produkte:** *Wenn ein neu eingeführter Hero-SKU 3× schneller verkauft als ursprüngliche Prognosen, wie viel Luftfracht-Brückenbestand müssen wir bestellen, um die Lücke bis zur nächsten Seesendung zu decken?*

---

## Legacy-Bestandstracker vs. dieses bedarfsadaptive Nachschubmodell

| Bestandsplanungsdimension | Statische Legacy-Tabellenblätter (ohne dieses Tool) | Bedarfsadaptives Excel-Bestands-Toolkit (mit diesem Tool) |
| :--- | :--- | :--- |
| **Einkaufsauslöserlogik (Fehlmengenrisiko)** | Nachbestellung nur auf Basis aktuell verfügbarer Lagereinheiten, ignorierend Bestandsabbau während Transit und offene POs im Transit. | Bewertet **Netto-Bestandsposition vs. Vorlaufzeit-Bedarf** und löst PO-Alarme aus, bevor Bestand unter die Sicherheitsschwelle fällt. |
| **Lieferanten-Vorlaufzeit- & MOQ-Restriktionen** | Anwendung eines generischen 30-Tage-Puffers auf alle Lieferanten, ignorierend 90-Tage-Seefracht-Vorlaufzeiten und Fabrik-Mindestbestellmengen (MOQs). | Weist **SKU-spezifische Vorlaufzeiten und MOQs** zu und begrenzt vorgeschlagene PO-Mengen automatisch auf gültige Lieferantenrestriktionen. |
| **Verkaufsgeschwindigkeit & Trendsensitivität** | Verlass auf flache 90-Tage- oder 12-Monats-Historienmittel, die nicht reagieren, wenn Paid Ads oder Saisontrends Verkäufe beschleunigen. | Nutzt **dynamische 30-/90-Tage-Geschwindigkeitsgewichtung** und erhöht Nachschubmengen automatisch, wenn kurzfristige Nachfrage steigt. |
| **Betriebskapital- & Cashflow-Transparenz** | Bestandsplaner erzeugen Einheiten-Nachschublisten isoliert, was Finanzen zwingt, Cashflow-Auswirkung manuell in einem separaten Blatt zu berechnen. | Integrierte **Kapitalbindungsbewertung (`PO Units × Unit COGS`)** zeigt exakte Betriebskapitalverpflichtungen direkt auf dem Dashboard. |
| **Werbeaktionen- & Ad-Skalierungs-Abstimmung** | Marketing startet eine 30-%-Rabatt-Blitzaktion oder verdoppelt Werbeausgaben ohne Lieferkettentransparenz, was 60 Tage Bestand an einem Wochenende auslöscht. | Integriert **Werbeaktionen-Nachfragemultiplikatoren** und erlaubt Planern, Bestandsabdeckung vor Marketingkampagnen zu stresstesten. |
| **Wöchentlicher Beschaffungs-Workflow** | Analysten verbringen wöchentlich 4+ Stunden mit dem Reparieren kaputter `VLOOKUP`-Formeln, dem Wiederaufbau von Pivot-Tabellen und dem manuellen Markieren von Niedrigbestandszeilen. | Gibt eine automatisierte, farbcodierte **priorisierte PO-Aktionsliste (`ORDER NOW` vs. `HEALTHY`)** aus, bereit zur sofortigen Lieferanten-PO-Erzeugung. |

---

## Für wen dies ist: Ziel-Supply-Chain-Rollen & E-Commerce-Anwendungsfälle

Gebaut für Operatoren, die physischen Bestand verwalten und eine rigorose, transparente Planungsmaschine zwischen rohen ERP/Shopify-Exporten und teuren Enterprise-SaaS-Plattformen brauchen:

- **DTC-E-Commerce-Gründer & Shopify-/WooCommerce-Händler:** Nutzen Sie dies als **leichten Shopify-Bestandsnachschub- und Nachbestellrechner**, um Out-of-Stock-Werbeverschwendung zu verhindern, 3PL-Bestandsniveaus zu steuern und Überseefabrik-Nachbestellungen zu planen, ohne 500–2.000 $/Monat für SaaS-Prognose-Apps zu zahlen.
- **Amazon-FBA-Verkäufer & Marketplace-Aggregatoren:** Nutzen Sie dies als **Amazon-FBA-Nachschub- und 3PL-Puffer-Planungstabellenblatt**, um Lieferanten-Produktionsvorlaufzeiten, See-/Luftfrachtfenster und FBA-Inbound-Sendungstiming auszubalancieren, um Ihren IPI (Inventory Performance Index)-Score zu schützen.
- **Bestandsplaner, Bedarfsplaner & Supply-Chain-Analysten:** Nutzen Sie dies als **standardisiertes Meldebestand (ROP)- & Sicherheitsbestand-Excel-Template**, um fragile, fehleranfällige interne Tabellenblätter durch ein auditierbares Nachschubmodell zu ersetzen.
- **Betriebsleiter & Einkaufs-/Beschaffungseinkäufer:** Nutzen Sie dies als **automatisierten Purchase Order (PO)-Generator & Lieferanten-MOQ-Rechner**, um wöchentliche Bestandszählungen in Minuten in exakte, lieferantenbereite Bestellmengen zu verwandeln.
- **E-Commerce-CFOs, Finanzcontroller & Bestandsbuchhalter:** Nutzen Sie dies als **Betriebskapital- & Open-to-Buy (OTB)-Cashflow-Prognosemodell**, um Einkaufsanforderungen zu auditieren, Überkäufe bei C-Tier-SKUs zu verhindern und Lagerumschlagquoten zu optimieren.

*Hinweis: Diese Arbeitsmappe ist **kein** Live-Barcode-scanndes Warehouse Management System (WMS), keine automatisierte EDI-Bestell-Routing-Plattform und kein vollständiges gesetzliches ERP. Sie ist die **taktische Bedarfsplanungs- und Einkaufsentscheidungsschicht**, die Ihnen sagt, **was zu bestellen ist, wie viel zu bestellen ist, wann zu bestellen ist und wie viel Bargeld es kosten wird.***

---

## Über Theseus Workshop

Ich baue leichtgewichtige, transparente Excel- und browserbasierte Entscheidungsunterstützungssysteme für betriebliche Engpässe, bei denen es zu viele interagierende Variablen gibt, um sie mental zu verfolgen—aber bei denen schwere Enterprise-Software unnötige Kosten und Komplexität schafft.

Statt ein weiteres überfrachtetes Eitelkeits-Dashboard zu bauen, ist jedes Toolkit um eine praktische Frage herum konstruiert:

> **„Welche exakten betrieblichen und finanziellen Variablen müssen an einem Ort sitzen, damit die nächste Einkaufs- oder Kapitalentscheidung mathematisch offensichtlich wird?“**

Dieses **bedarfsadaptive Bestandsplanungs- & Einkaufsentscheidungs-Toolkit** vereint rollierende Bedarfsprognose, Lieferanten-Vorlaufzeitrestriktionen, Sicherheitsbestandmathematik und Betriebskapitalbindung in einem in sich geschlossenen Framework, das jedes E-Commerce- oder Supply-Chain-Team auditieren, anpassen und für immer besitzen kann.

---
*Schlüsselwörter: Excel-Vorlage für Bestandsplanung, Meldebestand (ROP)-Rechner-Tabellenblatt, Sicherheitsbestand-Formel-Excel, E-Commerce-Bestandsnachschubmodell, Shopify-Nachbestellrechner, Amazon-FBA-Bestandstracker, Supply-Chain-Purchase-Order (PO)-Planer, Open-to-Buy (OTB)-Betriebskapital-Tabellenblatt.*

---

## Technische Details

<details>
<summary><strong>Für technische Prüfer, Excel-Praktiker und Mitwirkende</strong></summary>

---

## Arbeitsmappenarchitektur

Die Arbeitsmappe folgt einer bewusst getrennten Dreischicht-Architektur.

Statt Eingaben, Formeln und Dashboards auf einem Arbeitsblatt zu mischen, hat jedes Arbeitsblatt eine einzige betriebliche Verantwortung.


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

### Ebenen der Arbeitsmappe

| Ebene | Arbeitsblatt | Verantwortung |
|--------|-----------|----------------|
| Konfiguration | Setup_Config | SKU-Stammdaten, Lieferanteninformationen, Vorlaufzeit, MOQ, Servicegrad und Kostenparameter |
| Operative Daten | Sales_Import | Historische Verkäufe, direkt aus Shopify, ERP oder Tabellen importiert |
| Operative Daten | Inventory_Status | Aktueller Bestand und Bestellungen bereits im Transit |
| Berechnung | Forecast_Engine | Nachfrageprognose auf Basis historischer Verkaufstrends und manueller Kampagnenanpassungen |
| Berechnung | Inventory_Planner | Sicherheitsbestand, Meldebestand, Einkaufsempfehlungen und empfohlene Mengen |
| Finanzanalyse | Cash_Flow_Impact | Bestandsbewertung, Kapitalbindung im Einkauf und Lagerumschlag |
| Management-Ausgabe | Dashboard | Einkaufswarnungen, KPI-Zusammenfassung und Bestell-Aktionsliste |

---

### Datenfluss


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

Jede Berechnungsschicht hängt ausschließlich von validierten Vorgängerdaten ab.

Kein Arbeitsblatt schreibt Werte zurück in ein anderes Arbeitsblatt — das reduziert Wartungsaufwand und verhindert Zirkelbezüge.

---

## Drei Fallen, in die auch erfahrene Bestandsmanager tappen

---

### Falle 1 — Planung um den heutigen Bestand statt um den künftigen Bedarf

#### Die Entscheidung
Der Bestand sieht heute gesund aus. Der Einkauf wird verschoben.

#### Die verborgene Fehlannahme
Es wird angenommen, dass der aktuelle Lagerbestand die künftige Verfügbarkeit abbildet. Der Bedarf während der Vorlaufzeit wird ignoriert.

#### Vorher
| Aktueller Bestand | Tagesverkäufe | Entscheidung |
|-------------------|------------|----------|
| 1.800 Einheiten | 40/Tag | Einkauf verschieben |

Der Bestand erscheint ausreichend.

#### Realität
Vorlaufzeit des Lieferanten: `70 Days`
Erwarteter Verbrauch: `40 × 70 = 2,800 units`

Das Unternehmen wird weit mehr Bestand verbrauchen, bevor Nachschub eintrifft.

#### Warum die Argumentation scheitert
Bestandsplanung ist vorausschauend. Der Lagerbestand ist nur aussagekräftig, wenn er zusammen mit der erwarteten Nachfrage während der Lieferanten-Vorlaufzeit betrachtet wird. Das Ignorieren des Vorlaufzeitbedarfs verzögert Einkäufe, bis Fehlmengen unvermeidbar werden.

#### Richtiger Ansatz
Berechnen Sie den erwarteten Bestandsverbrauch, bevor Nachschub eintrifft. Vergleichen Sie dann den verfügbaren Bestand mit diesem Bedarf.

#### Richtige Entscheidung
`ORDER NOW`
Der Einkauf beginnt, während der Bestand noch gesund wirkt. Das schützt die Servicegrade, statt nach Fehlmengen zu reagieren.

<details>
<summary>Formelreferenz</summary>

Bedarf während der Vorlaufzeit

```

Lead Time Demand = Forecast Daily Demand × Lead Time

```
Excel
```excel
=B2#*C2#

```

---

### Falle 2 — Historische Durchschnittsverkäufe als Prognose verwenden

#### Die Entscheidung

Künftige Bestellmengen basieren ausschließlich auf dem 90-Tage-Mittel.

#### Verborgene Fehlannahme

Es wird angenommen, dass die Verkaufsnachfrage stabil bleibt. Marketing-Aktivitäten werden ignoriert. Jüngste Beschleunigung wird ignoriert.

#### Vorher

`90-Day Average: 30 Units / Day`
`Recommended Purchase: 2,100 Units`

#### Realität

`Last 30 Days: 45 Units / Day`
`Trend Factor: 45 / 30 = 1.50`

Werbung hat die Nachfrage bereits gesteigert. Das historische Mittel unterschätzt den künftigen Bestandsbedarf.

#### Warum die Argumentation scheitert

Historische Mittel beschreiben die Vergangenheit. Einkaufsentscheidungen betreffen die Zukunft. Das Ignorieren der Nachfragebeschleunigung verursacht wiederholte Fehlmengen — selbst wenn Prognosen mathematisch korrekt erscheinen.

#### Richtiger Ansatz

Kombinieren Sie historische Nachfrage mit beobachteter Verkaufsdynamik und geplanten Promotions-Aktivitäten.

```
Forecast = Daily Base × Trend Factor × Promotion Multiplier

```

#### Richtige Entscheidung

Erhöhen Sie die Einkäufe, bevor Bestandsfehlmengen auftreten. Prognosen werden responsiv statt statisch.

Trendfaktor

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

### Falle 3 — Bestand als operatives Problem statt als Liquiditätsproblem behandeln

#### Die Entscheidung

Eine Einkaufsempfehlung wird freigegeben, weil der Bestand niedrig erscheint.

#### Verborgene Fehlannahme

Nur der physische Bestand wird bewertet. Der Kapitalbedarf erhält wenig Aufmerksamkeit.

#### Vorher

`Purchasing Recommendation: 4,000 Units`
Sieht operativ vernünftig aus.

#### Realität

`Unit Cost: $18`
`Purchase Commitment: 4,000 × 18 = $72,000`

Bestandsplanung wird damit unmittelbar zu einer Kapitalallokationsentscheidung.

#### Warum die Argumentation scheitert

Bestand belegt nicht nur Lagerfläche. Er belegt auch Betriebskapital. Ohne Transparenz über Einkaufsverpflichtungen erzeugen Unternehmen unbeabsichtigt Liquiditätsengpässe, während sie Fehlmengen vermeiden wollen.

#### Richtiger Ansatz

Jede Einkaufsempfehlung sollte die erforderliche finanzielle Bindung automatisch ausweisen. Betrieb und Finanzabteilung bewerten dieselbe Empfehlung gleichzeitig.

#### Richtige Entscheidung

Genehmigen Sie nur Einkaufspläne, die sowohl Bestandsschutz als auch Liquiditätsverfügbarkeit erfüllen.

Einkaufsverpflichtung

```excel
Suggested Quantity * Unit Cost

```

Excel

```excel
=XLOOKUP(...) * XLOOKUP(...)

```

---

## Beispielszenario

Ein Direct-to-Consumer-Unternehmen für Haushaltsprodukte importiert neunzig Tage Shopify-Verkaufsdaten in die Arbeitsmappe. Drei SKUs werden aus China beliefert. Die durchschnittliche Produktions- und Liefervorlaufzeit beträgt **70 Tage**. Der aktuelle Lagerbestand eines SKU liegt bei **2.350 Einheiten**, weitere **600 Einheiten** sind bereits im Transit.

Die historische Analyse zeigt:

| Kennzahl | Wert |
| --- | --- |
| Durchschnitt der Tagesverkäufe (30 Tage) | 52 Einheiten |
| Durchschnitt der Tagesverkäufe (90 Tage) | 40 Einheiten |
| Trendfaktor | 1,30 |
| Promotionsmultiplikator | 1,20 |

Die Prognosemaschine schätzt:
`Forecast Daily Demand: 52 × 1.30 × 1.20 = 81 units/day`

Der Bedarf während der Vorlaufzeit wird:
`81 × 70 = 5,670 units`

Die Variabilität der historischen Verkäufe ergibt einen berechneten Sicherheitsbestand von rund **620 Einheiten**.

Der Meldebestand wird damit:
`5,670 + 620 = 6,290 units`

Der verfügbare Bestand beträgt:
`2,350 + 600 = 2,950 units`

Obwohl der Lagerbestand zunächst akzeptabel wirkte, liegt der verfügbare Bestand bereits **3.340 Einheiten unter** dem berechneten Meldebestand. Der Planer markiert den SKU sofort als **ORDER NOW**.

Die Einkaufsmaschine bewertet anschließend die MOQ-Anforderungen und rundet die Empfehlung auf eine betrieblich sinnvolle Bestellmenge auf. Cash_Flow_Impact schätzt gleichzeitig die Einkaufsverpflichtung, sodass die Finanzabteilung beurteilen kann, ob die Empfehlung in die aktuellen Betriebskapitalgrenzen passt.

Statt sich allein auf den Lagerbestand zu verlassen, bewertet das Unternehmen Nachfragewachstum, Lieferanten-Vorlaufzeit, Bestandsvariabilität, Einkaufspolitik und Kapitalbindung gemeinsam, bevor es den Einkauf freigibt. Das Ergebnis ist eine Empfehlung, die sowohl betrieblich als auch finanziell vertretbar ist.

---

## Formelreferenz

Die Arbeitsmappe ist bewusst um dynamische Array-Formeln moderner Microsoft-Excel-Versionen herum aufgebaut. Jedes Analyse-Arbeitsblatt referenziert den SKU-Spill-Bereich des Master-Konfigurationsblatts, sodass es sich automatisch erweitert, wenn neue Produkte hinzugefügt werden.

---

### Setup_Config

#### Zweck

Eine einzige maßgebliche Quelle für alle statischen Planungsparameter pflegen.
Felder umfassen:

* SKU
* Produktname
* Lieferant
* Vorlaufzeit
* MOQ
* Servicegrad
* Stückkosten
* Verkaufspreis

#### Dynamischer SKU-Spill

```excel
=FILTER(B2:B100,B2:B100<>"")

```

**Zweck:** Erzeugt eine dynamische SKU-Liste. Jedes nachgelagerte Arbeitsblatt referenziert diesen Spill-Bereich statt fester Zeilennummern.
**Vorteile:** Kein Formelkopieren, automatische Erweiterung der Arbeitsmappe, kein Wartungsaufwand beim Hinzufügen von Produkten.

---

### Sales_Import

#### Durchschnittsverkäufe (30 Tage)

```excel
=MAP(E2#, LAMBDA(sku, IFERROR(SUMIFS(C:C,B:B,sku,A:A,">="&TODAY()-30)/30, 0)))

```

**Zweck:** Berechnet die jüngsten durchschnittlichen Tagesverkäufe.

#### Durchschnittsverkäufe (90 Tage)

```excel
=MAP(E2#, LAMBDA(sku, IFERROR(SUMIFS(C:C,B:B,sku,A:A,">="&TODAY()-90)/90, 0)))

```

**Zweck:** Repräsentiert die langfristige Bedarfsbasislinie.

**Warum beide benötigt werden:** Der Vergleich von 30 Tagen (aktuelle Nachfragedynamik) und 90 Tagen (stabile historische Nachfrage) zeigt Beschleunigung oder Rückgang.

---

### Inventory_Status

```excel
=B2#+C2#

```

**Zweck:** Kombiniert verfügbaren Bestand und Bestand im Transit.
**Betriebshinweis:** Das Ignorieren von Bestand im Transit verursacht häufig Doppeleinkäufe.

---

### Forecast_Engine

#### Trendfaktor

```excel
=IFERROR(XLOOKUP(...) / IF(XLOOKUP(...)=0, 1, XLOOKUP(...)), 1)

```

**Interpretation:** >1 (wachsende Nachfrage), =1 (stabile Nachfrage), <1 (rückläufige Nachfrage).

#### Prognostizierte Tagesnachfrage

```excel
=B2#*C2#*D2:D100

```

**Zweck:** Transformiert historische Nachfrage mithilfe von Basisverkäufen, Trend und Promotionsmultiplikatoren in betriebliche Einkaufsnachfrage.

---

### Inventory_Planner

#### Bedarf während der Vorlaufzeit

```excel
=B2#*C2#

```

#### Standardabweichung der Verkäufe

```excel
=MAP(A2#, LAMBDA(sku, IFERROR(STDEV.S(FILTER(Sales_Import!C:C, Sales_Import!B:B=sku)), 0)))

```

**Zweck:** Misst die historische Volatilität der Verkäufe.

#### Z-Wert

```excel
=MAP(A2#, LAMBDA(sku, NORM.S.INV(XLOOKUP(sku, Setup_Config!A2#, Setup_Config!G2#))))

```

**Zweck:** Wandelt den gewünschten Servicegrad in statistischen Schutz um (z. B. 95 % = 1,65).

#### Sicherheitsbestand

```excel
=ROUND(F2#*E2#*SQRT(B2#), 0)

```

**Zweck:** Schützt vor Nachfragevariabilität während des Nachschubs.

#### Meldebestand

```excel
=ROUND(D2#+G2#, 0)

```

**Zweck:** Definiert, wann der Einkauf beginnen soll (Bedarf während der Vorlaufzeit + Sicherheitsbestand).

#### Einkaufsempfehlung

```excel
=MAP(A2#, LAMBDA(sku, IF(Available<=ROP, "ORDER NOW", "OK")))

```

**Zweck:** Erzeugt ein betriebliches Einkaufssignal.

#### Empfohlene Bestellmenge

```excel
=MAP(A2#, LAMBDA(sku, LET(avail,..., rop,..., moq,..., daily,..., ss,..., target_need, (daily*30)+ss-avail, IF(avail<=rop, MAX(moq, CEILING(target_need,10)), 0))))

```

**Zweck:** Produziert eine Bestellmenge, die MOQ erfüllt, den Bestand wiederherstellt und Unterbestellungen verhindert.

---

### Cash_Flow_Impact

#### Bestandswert

```excel
=XLOOKUP(...) * XLOOKUP(...)

```

#### Einkaufsverpflichtung

**Zweck:** Zeigt das erforderliche Einkaufskapital vor der Bestellung an (empfohlene Menge × Stückkosten).

#### Lagerumschlag

```excel
=ROUND(sales_annual/on_hand, 1)

```

**Zweck:** Misst die Bestandseffizienz statt der Bestandsgröße.

---

### Dashboard

#### Anzahl roter Alarme

```excel
=COUNTIF(Inventory_Planner!J2#, "ORDER NOW")

```

#### Einkaufsverpflichtung und Bestandswert gesamt

```excel
=SUM(Cash_Flow_Impact!C2#)
=SUM(Cash_Flow_Impact!B2#)

```

#### Dynamische Bestellliste

```excel
=FILTER(HSTACK(...), Inventory_Planner!J2#="ORDER NOW", "All inventory healthy")

```

**Zweck:** Erzeugt automatisch eine Bestell-Aktionsliste mit SKU, Produktname, empfohlener Menge und geschätzter Einkaufskosten — ohne manuelles Filtern.

---

## Validierungsregeln

| Feld | Validierungsregel | Fehlerverhalten |
| --- | --- | --- |
| SKU | Darf nicht leer sein und muss eindeutig sein | Zeile von Berechnungen ausgeschlossen |
| Vorlaufzeit | Ganzzahl größer als null | Prognose nicht verfügbar |
| MOQ | Positive Ganzzahl | Einkaufsempfehlung deaktiviert |
| Servicegrad | Zwischen 50 % und 99,9 % | Z-Wert kann nicht berechnet werden |
| Stückkosten | Größer oder gleich null | Cash-Analyse gibt null zurück |
| Verkaufspreis | Größer als null | Margenanalyse nicht verfügbar |
| Verkaufsdatum | Gültiges Kalenderdatum | Datensatz ignoriert |
| Verkaufsmenge | Darf nicht negativ sein | Datensatz ausgeschlossen |
| Verfügbarer Bestand | Größer oder gleich null | Bestandswarnung erzeugt |
| Bestand im Transit | Größer oder gleich null | Verfügbarer Bestand angepasst |
| Promotionsmultiplikator | Empfohlener Bereich 0,5–3,0 | Außerhalb des Bereichs zur Prüfung markiert |
| Prognostizierte Tagesnachfrage | Darf nicht negativ sein | Einkaufsempfehlung unterdrückt |
| Sicherheitsbestand | Automatisch auf null begrenzt | Negative Werte verhindert |
| Meldebestand | Wird immer neu berechnet | Manuelle Bearbeitung wird missbilligt |
| Empfohlene Bestellmenge | Darf bei Einkaufsbedarf nicht unter MOQ liegen | Automatisch aufgerundet |

</details>
</details>

---

## Die Geschäftslogik: Methodik und wirtschaftliche Wirkung

Viele Bestandsvorlagen scheitern, weil sie Supply-Chain-Management als rein mathematische Zählübung behandeln. Tatsächlich ist Bestandsplanung eine **Kapitalallokationsentscheidung**. 

Dieses Toolkit verschiebt den operativen Fokus von *„Wie viel Bestand liegt im Lager?“* zu *„Wie maximieren wir den Lagerumschlag und schützen gleichzeitig Marketing-ROI und Betriebskapital?“* 

Hier ist die zugrunde liegende Methodik und wie sie konkrete wirtschaftliche Probleme löst:

### 1. Das wirtschaftliche Problem: DTC-Bullwhip-Effekt und Fehlallokation von Kapital
Moderne E-Commerce-Marken agieren in einem hochvolatilen Umfeld, in dem bezahlte Social-Media-Werbung, Influencer-Marketing und Saisonalität plötzliche Nachfragespitzen erzeugen. 
*   **Der Fehler statischer Systeme:** Wenn ein Unternehmen einen festen Meldebestand verwendet (z. B. „immer bestellen, wenn der Bestand 500 Einheiten erreicht“), wird es in einer Marketing-Kampagne mit hohem ROAS unweigerlich Fehlmengen erleiden und Werbeausgaben verschwenden. Umgekehrt bindet Überbestellung kritische Liquidität in illiquiden physischen Gütern.
*   **Die Lösung:** Dieses Toolkit ersetzt statische Schwellen durch ein **bedarfsadaptives Meldebestandsmodell (ROP)**. 

### 2. Die Kernmethodik (Funktionsweise)

Die Berechnungsmaschine nutzt Standardprinzipien der Operations Research, angepasst an schnelldrehende Konsumgüter:

*   **Statistischer Sicherheitsbestand (Standardabweichung und Z-Wert):**
    Statt einen Puffer zu schätzen, misst das Toolkit die historische Standardabweichung (σ) Ihrer Tagesverkäufe. Durch das Setzen eines Ziel-Servicegrads (z. B. 95 %) wendet das Modell den entsprechenden Z-Wert an, um die exakte Anzahl an Puffereinheiten mathematisch zu berechnen, die benötigt wird, um unerwartete Nachfragespitzen während der Vorlaufzeit des Lieferanten aufzufangen.
*   **Rollierende Nachfrage- und Dynamikmodifikatoren:**
    Die Maschine verlässt sich nicht allein auf einen 90-Tage-Historienmittel. Sie integriert einen **Trendfaktor** (Vergleich der 30-Tage-Geschwindigkeit mit der 90-Tage-Basislinie) und **Promotionsmultiplikatoren**. Diese Methodik stellt sicher, dass sich der prognostizierte Verbrauch anpasst, *bevor* die Fehlmenge eintritt, wenn Ihre aktuellen Werbeausgaben die Verkäufe beschleunigen.
*   **Projektion des Bedarfs während der Vorlaufzeit:**
    Das Tool bildet Ihre prognostizierte Tagesnachfrage direkt auf die spezifische Vorlaufzeit jedes Lieferanten ab. Es beweist mathematisch, wie viele Einheiten verbraucht werden, während Ihre Bestellung auf einem Frachter liegt.
*   **Min-Max-/MOQ-Logikrestriktionen:** 
    Sobald der Meldebestand unterschritten wird, berechnet der Algorithmus eine empfohlene Bestellmenge, die die Mindestbestellmenge (MOQ) des Lieferanten erfüllt und gleichzeitig auf betrieblich sinnvolle Losgrößen rundet.

### 3. Die wirtschaftliche Ausgabe (Mehrwert)
Durch die Verbindung von Nachfrageprognose und Finanzkennzahlen liefert das Tool handlungsrelevante Business Intelligence:
*   **Für den Betrieb:** Beseitigt das Rätselraten um *wann* und *wie viel* über mehrere Lieferketten hinweg bestellt werden muss (inländisch vs. international).
*   **Für das Marketing:** Stellt sicher, dass Produktverfügbarkeit und Kampagnenzeitpläne zusammenpassen und schützt Customer Acquisition Costs (CAC).
*   **Für die Finanzabteilung:** Bietet sofortige Transparenz über die **Einkaufsverpflichtung ($)**. Finanzteams können die Betriebskapitalauswirkung einer vorgeschlagenen Bestellung bewerten, *bevor* Kapital abfließt — so bleibt das Unternehmen liquide.

---  

## Weitere Tools dieser Reihe

Diese Arbeitsmappe ist Teil einer wachsenden Sammlung leichtgewichtiger operativer Entscheidungsunterstützungswerkzeuge für Teams, die bessere Entscheidungen brauchen, ohne Enterprise-Software einzuführen.

Beispiele umfassen:

* **Cashflow-Prognose-Kontrollturm** — Liquidität, operativen Cashflow und Kapitalbedarf überwachen.
* **Marketing-Budget-Allokationsplaner** — Werbeausgaben über Kanäle hinweg anhand messbarer Renditeschwellen verteilen.
* **Bausteuerungs-Dashboard** — Projektbudgets, Verpflichtungen, Rechnungen und verbleibende Reserven vergleichen.
* **Beschaffungsausgaben-Analyse-Toolkit** — Lieferantenperformance, Einkaufskonzentration und Vertragsauslastung verfolgen.
* **Vertriebsperformance-Intelligence-Dashboard** — Umsatztrends, Margenentwicklung und Kundenkonzentration überwachen.

Alle Tools folgen denselben Prinzipien:

* Keine Registrierung erforderlich
* Keine Installation erforderlich
* Browser- und Excel-Editionen
* Leichtgewichtige Entscheidungsunterstützung statt Enterprise-Ersatz
* Auf wiederholbare analytische Abläufe gebaut statt auf statisches Reporting

---

## Lizenz

Lizenziert unter der **Apache License 2.0**.

Sie dürfen:

* Dieses Projekt kommerziell nutzen.
* Die Arbeitsmappe verändern und erweitern.
* Originale oder veränderte Versionen verteilen.
* Das analytische Framework in eigene Abläufe integrieren.

Vorbehaltlich der Bedingungen der Apache License 2.0.
Siehe die Datei LICENSE für den vollständigen Lizenztext.

---

## Danksagung

Dieses Projekt entstand aus wiederkehrenden Herausforderungen der Bestandsplanung, die bei Direct-to-Consumer-Marken, E-Commerce-Unternehmen und Supply-Chain-Teams beobachtet wurden — Unternehmen, die bessere Einkaufsentscheidungen brauchten, ohne Enterprise-Resource-Planning-Systeme einzuführen.

Das Ziel ist nicht, ERP- oder MRP-Plattformen zu ersetzen. Das Ziel ist, bessere betriebliche Entscheidungen mit den Daten zu treffen, die Organisationen bereits haben.

Wenn dieses Projekt Ihren Planungsprozess verbessert, sind Beiträge, Anregungen und Feedback jederzeit willkommen.

