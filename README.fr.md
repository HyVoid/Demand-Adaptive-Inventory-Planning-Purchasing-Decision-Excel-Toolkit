[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Modèle Excel de planification des stocks et calculateur de point de commande (ROP) pour l'e-commerce, Shopify et Amazon FBA
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/ab946235-54c1-4cb6-8957-f3fc601b803a" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Inventory%20Replenishment%20%26%20ROP%20Model-orange)

**Un modèle Excel automatisé de planification des stocks, un calculateur de point de commande (ROP) et un tableur de stock de sécurité, conçu pour les marques DTC du e-commerce, les marchands Shopify, les vendeurs Amazon FBA et les gestionnaires de chaîne d'approvisionnement. Combinez des prévisions glissantes de vitesse des ventes sur 30/90 jours, des tampons de délai fournisseur, des contraintes de quantité minimale de commande (MOQ) et l'exposition de trésorerie Open-to-Buy (OTB) dans un seul modèle d'aide à la décision—disponible gratuitement dans votre navigateur ou sous forme de classeur Excel déverrouillé.**

**Aucune inscription. Aucune installation. Gratuit à tester dans votre navigateur.**

Testez instantanément l'application web interactive dans le cloud sans aucune configuration, ou téléchargez le modèle de tableur Excel entièrement déverrouillé pour vos flux de réapprovisionnement hebdomadaires hors ligne—soutenu par une garantie de remboursement de 30 jours sans questions.

> 🌐 **Essayer la calculatrice web :** [Ouvrir l'application web interactive gratuite de réapprovisionnement des stocks et de point de commande (démo en direct) ↗](https://hyvoid.github.io/inventory-planning-reorder-point-excel/)  
> 📥 **Obtenir le modèle Excel complet :** [Télécharger le modèle Excel entièrement déverrouillé de planification des stocks, de stock de sécurité et de décision de bons de commande ↗](https://www.theseusworkshop.com/l/rklhag?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=demand-adaptive-inventory)  
> ⚙️ **Mathématiques de réapprovisionnement :** [Aller à la logique métier et à la méthodologie des stocks](#the-business-logic--methodology)

---

## Ce qu'il aide à suivre : mapping des points de douleur des stocks e-commerce aux solutions

Les tableurs de stock statiques échouent face aux marques modernes de vente directe (DTC), Amazon FBA et de gros omnicanal, car la vitesse de la demande et les délais de fret outre-mer sont très volatils. Le passage à l'échelle du social payant sur Meta/TikTok, les ventes flash BFCM ou la congestion portuaire peuvent déclencher de graves ruptures de stock ou piéger des centaines de milliers de dollars en stock mort.

Au lieu de recouper manuellement des rapports d'entrepôt 3PL fragmentés, des commandes (POs) en transit et des exportations de ventes Shopify/Amazon, ce **tableur de réapprovisionnement des stocks** suit et résout six angles morts critiques de la chaîne d'approvisionnement :

| Métrique de suivi cible / point de douleur | L'angle mort courant des stocks e-commerce | Comment ce modèle de réapprovisionnement le résout et le suit |
| :--- | :--- | :--- |
| **Point de commande (ROP) dynamique et prévention des ruptures** | S'appuyer sur des alertes de réapprovisionnement instinctives ou des moyennes statiques sur 90 jours, causant des ruptures de stock lorsque les dépenses publicitaires passent à l'échelle et gaspillant le coût d'acquisition client (CAC). | Suit la **vitesse des ventes glissante pondérée sur 30 jours vs. 90 jours** pour ajuster dynamiquement les **points de commande (ROP)** au niveau SKU avant que le stock ne s'épuise. |
| **Stock de sécurité et jours de stock disponible (DOH)** | Surcommande de SKUs à rotation lente par peur, piégeant le fonds de roulement dans des frais de stockage 3PL et freinant la rotation des stocks. | Calcule des **unités de stock de sécurité** à tampon statistique et des **jours de stock disponible (DOH / semaines de couverture)** adaptés à la volatilité de la demande de chaque SKU. |
| **Stock net disponible (disponible + commandes en transit)** | Commande de stock en double parce que les commandes ouvertes non reçues (en commande / fret maritime ou aérien en transit) ne sont pas déduites du stock d'entrepôt. | Suit la **position de stock nette (`On-Hand + In-Transit POs - Committed Stock`)** par rapport aux fenêtres de dépletion projetées pendant le délai. |
| **Alignement des délais fournisseur et des contraintes de quantité minimale (MOQ)** | Application d'un tampon de réapprovisionnement uniforme de 30 jours à la fois aux usines de fret maritime outre-mer à 90 jours et aux fournisseurs 3PL nationaux à 7 jours. | Évalue chaque SKU indépendamment en utilisant des **délais de transit spécifiques au fournisseur**, des **quantités minimales de commande (MOQs)** et des règles d'arrondi par colis. |
| **Trésorerie Open-to-Buy (OTB) et exposition du fonds de roulement** | Soumission de commandes purement sur la base des quantités d'unités sans connaître l'engagement de trésorerie exact requis pour financer la campagne de réapprovisionnement. | Multiplie les quantités de commande suggérées par le **coût unitaire débarqué (COGS)** pour produire en temps réel l'**exposition de trésorerie ($)** et prioriser les commandes lorsque le capital est tendu. |
| **Triage prioritaire des commandes (PO) actionnable** | Auditer plus de 500 SKUs ligne par ligne chaque lundi matin pour déterminer quels fournisseurs ont besoin d'une commande immédiate vs. quels SKUs sont sûrement stockés. | Génère un **statut d'action SKU automatisé (`ORDER NOW`, `WATCH`, `HEALTHY`, `OVERSTOCKED`)** avec les quantités de commande recommandées exactes. |

---

## Tutoriel de démarrage rapide : comment automatiser vos décisions de réapprovisionnement et de point de commande

Passer d'exportations de ventes omnicanales brutes à une **liste d'actions de commande (PO) prête pour l'audit** prend moins de 5 minutes. Suivez ce flux de réapprovisionnement en 4 étapes :

### Étape 1 : configurer les données de référence SKU, les délais et les MOQ des fournisseurs
Accédez à la feuille de contrôle `Setup_Config` et établissez vos paramètres de chaîne d'approvisionnement pour chaque SKU :
- **Identifiants SKU et mapping fournisseur :** codes SKU, noms de produits et affectations de fournisseurs principaux.
- **Contraintes de réapprovisionnement :** **délai (jours)** de production + fret, **quantité minimale de commande (MOQ)**, tampon de sécurité de niveau de service cible et **coût unitaire débarqué ($)**.

*Action :* testez dès maintenant comment les changements de délai et de MOQ impactent les déclencheurs de réapprovisionnement dans l'[application web interactive gratuite de planification des stocks](https://hyvoid.github.io/inventory-planning-reorder-point-excel/).

---

### Étape 2 : importer les ventes historiques et les comptages de stock de Shopify, Amazon FBA ou ERP
Exportez votre historique brut de ventes d'unités et vos soldes d'entrepôt actuels depuis **Shopify, Amazon Seller Central, Cin7, NetSuite ou votre portail 3PL**, et collez-les directement dans `Sales_Import` et les tableaux de saisie des stocks :
- Saisissez le **stock d'entrepôt disponible actuel** et les **quantités de commandes ouvertes en transit**.
- Incluez les ventes d'unités historiques récentes sur 30 jours et 90 jours (plus les multiplicateurs de demande promotionnelle optionnels).

*Aucune maintenance VLOOKUP ni réécriture de formules requise—la couche d'ingestion normalise automatiquement les données brutes.*

---

### Étape 3 : examiner les stocks de sécurité, les points de commande et les quantités de commande suggérées automatisés
Passez au **tableau de bord exécutif de réapprovisionnement**. Le moteur de calcul exécute immédiatement les formules de stock sur l'ensemble de votre catalogue pour produire :
- **Vitesse des ventes quotidienne pondérée** (unités/jour) et **jours de stock restants (DOH)**
- **Projection de la demande pendant le délai** et **point de commande (ROP) dynamique**
- **Alertes « ORDER NOW » priorisées** avec des **quantités de commande suggérées** ajustées au MOQ
- **Fonds de roulement total requis ($)** pour financer le lot d'achat recommandé

---

### Étape 4 : télécharger le modèle Excel déverrouillé pour la planification hebdomadaire des stocks
Si la démo en direct dans le navigateur est idéale pour un test en session unique et la vérification de la logique, les opérations réelles de chaîne d'approvisionnement exigent des instantanés hebdomadaires persistants, des extensions SKU personnalisées et un audit financier interne.

> 💡 **Prêt à automatiser votre planification de réapprovisionnement hebdomadaire sans payer 1 000+ $/mois de logiciel de stock SaaS ?**  
> Arrêtez de deviner les quantités de réapprovisionnement ou de reconstruire des tableurs cassés chaque lundi.  
> 👉 **[Télécharger le modèle Excel entièrement déverrouillé de planification des stocks et de décision d'achat](https://www.theseusworkshop.com/l/rklhag?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=demand-adaptive-inventory)** pour brancher votre propre catalogue SKU, enregistrer les historiques d'approvisionnement hebdomadaires, personnaliser les pondérations de prévision et partager des fiches d'approbation de commandes propres avec votre équipe financière.

---

## La logique métier et la méthodologie

La plupart des modèles Excel de stock standard échouent dans les opérations e-commerce réelles parce qu'ils traitent **la vitesse de la demande comme statique** et **les chaînes d'approvisionnement comme instantanées**. Si un tableur divise simplement les ventes sur 90 jours par 90, une campagne TikTok virale ou une montée saisonnière du T4 provoquera une rupture de stock immédiate avant qu'un conteneur outre-mer ne quitte le port.

Pour résoudre l'arbitrage mathématique entre le **niveau de service (risque de rupture)** et l'**efficience du fonds de roulement (risque de surstock)**, cette boîte à outils met en œuvre une **méthodologie de réapprovisionnement quantitative en 4 étapes** :

1. **Pondération de vitesse adaptative à la demande (tendance court terme vs. référence long terme) :**  
   Se fier uniquement à une moyenne sur 90 jours retarde sur les tendances de croissance ; se fier uniquement à une fenêtre de 7 ou 30 jours surréagit au bruit temporaire. Ce modèle calcule une **vitesse de demande quotidienne mélangée ($D_{\text{adaptatif}}$)** en comparant l'accélération des ventes court terme ($V_{30}$) à la référence historique ($V_{90}$), couplée à un **multiplicateur promotionnel optionnel ($M_{\text{promo}}$)**:
   $$D_{\text{adaptatif}} = \left( w_1 \cdot V_{30} + w_2 \cdot V_{90} \right) \times M_{\text{promo}}$$
   Lorsque la vitesse des ventes récentes accélère au-dessus de la moyenne historique, le modèle augmente dynamiquement les projections de demande futures pour protéger les gagnants à haute vitesse contre les ruptures de stock.
2. **Modélisation de la dépletion du délai et du point de commande (ROP) dynamique :**  
   Une commande passée aujourd'hui n'arrivera pas avant que le fournisseur ne termine la fabrication et le transit de fret ($L$ jours). Pendant cette fenêtre, votre stock existant continue de se dépléter. Le moteur calcule la **demande pendant le délai ($D_{\text{LT}} = D_{\text{adaptatif}} \times L$)** et ajoute un **tampon de stock de sécurité dynamique ($SS$)** calibré sur le risque de délai et la variance de la demande :
   $$\text{Point de commande (ROP)} = \left( D_{\text{adaptatif}} \times \text{Délai}_{\text{jours}} \right) + \text{Stock de sécurité}$$
   Chaque fois que la **position de stock nette ($\text{disponible} + \text{en commande} - \text{engagé}$)** d'un SKU tombe au niveau de $\text{ROP}$ ou en dessous, le moteur d'état fait basculer le statut du SKU vers `ORDER NOW`.
3. **Optimisation des quantités de commande sous contrainte de quantité minimale (MOQ) :**  
   Calculer un déficit brut de 142 unités est inutile si votre fabricant sous contrat impose une **quantité minimale de commande (MOQ)** de 500 unités. L'algorithme d'achat évalue l'écart net de réapprovisionnement requis pour couvrir le cycle de couverture cible ($C_{\text{target}}$ jours) plus le délai, et résout la **quantité de commande recommandée finale ($Q_{\text{PO}}$)** par bornage de contraintes :
   $$Q_{\text{PO}} = \max \left( \text{MOQ}, \; \text{Niveau de stock cible} - \text{Position de stock nette} \right)$$
4. **Évaluation du fonds de roulement et de l'exposition de trésorerie (intégration Open-to-Buy) :**  
   Les planificateurs de chaîne d'approvisionnement pensent en *unités*, tandis que les CFO et fondateurs pensent en *flux de trésorerie*. Chaque commande recommandée est multipliée par son `Unit_COGS` ($C_i \times Q_{\text{PO}, i}$) et agrégée par palier d'urgence. Cela relie directement le réapprovisionnement des stocks physiques à la **gestion de trésorerie Open-to-Buy (OTB)**, permettant aux équipes de voir l'exposition de capital exacte avant de verser les acomptes aux fournisseurs.

---

## Scénarios réels d'e-commerce et de chaîne d'approvisionnement que cela résout

Si votre équipe opérationnelle ou financière recherche un modèle de tableur fiable pour traiter l'un des goulets d'étranglement de stock suivants, cette boîte à outils est préconstruite pour la tâche :

- **Prévision des stocks de pointe T4 / BFCM :** *Comment calculer les quantités exactes de commandes de conteneurs outre-mer en juillet/août lorsque je passe à l'échelle les dépenses publicitaires Meta et Google pour le Black Friday / Cyber Monday ?*
- **Réapprovisionnement Amazon FBA et gestion des tampons 3PL :** *Comment coordonner les transferts de stock entre une usine outre-mer, un entrepôt de transit 3PL national et les centres de fulfillment Amazon FBA entrants sans rupture de stock ni déclenchement des surcharges de stock ancien FBA ?*
- **Priorisation des commandes sous contrainte de trésorerie (crise de fonds de roulement) :** *Lorsque notre budget d'approvisionnement trimestriel Open-to-Buy (OTB) est plafonné à 150 000 $, quels SKUs spécifiques doivent être commandés aujourd'hui pour prévenir les pertes de revenus, et quelles commandes peuvent être différées en sécurité ?*
- **Choc de délai fournisseur et planification du Nouvel An chinois (CNY) :** *Lorsque les usines outre-mer ferment pendant plus de 30 jours pendant le Nouvel An chinois ou que les temps de transit maritime doublent, comment recalculer instantanément le stock de sécurité et les points de commande sur plus de 500 SKUs ?*
- **Ajustements de vitesse de lancement de nouveaux produits :** *Lorsqu'un SKU héros nouvellement lancé se vend 3 fois plus vite que les projections initiales, combien de stock-pont en fret aérien devons-nous commander pour couvrir l'écart avant l'arrivée de la prochaine expédition maritime ?*

---

## Anciens trackers de stock vs. ce modèle de réapprovisionnement adaptatif à la demande

| Dimension de planification des stocks | Tableurs hérités statiques (sans cet outil) | Boîte à outils Excel de stocks adaptative à la demande (avec cet outil) |
| :--- | :--- | :--- |
| **Logique de déclenchement d'achat (risque de rupture)** | Recommander uniquement sur la base des unités d'entrepôt actuellement disponibles, en ignorant la dépletion du stock pendant le transit et les commandes ouvertes en transit. | Évalue la **position de stock nette vs. la demande pendant le délai**, déclenchant des alertes de commande avant que le stock ne tombe sous le seuil de sécurité. |
| **Contraintes de délai fournisseur et de quantité minimale (MOQ)** | Application d'un tampon générique de 30 jours à tous les fournisseurs, en ignorant les délais de fret maritime de 90 jours et les quantités minimales de commande d'usine (MOQs). | Attribue des **délais et MOQs spécifiques par SKU**, en bornant automatiquement les quantités de commande suggérées aux contraintes valides des fournisseurs. |
| **Sensibilité à la vitesse des ventes et aux tendances** | S'appuyer sur des moyennes historiques plates sur 90 jours ou 12 mois qui ne réagissent pas lorsque les publicités payantes ou les tendances saisonnières accélèrent les ventes. | Utilise la **pondération de vitesse dynamique sur 30/90 jours**, augmentant automatiquement les quantités de réapprovisionnement lorsque la demande court terme monte en pic. |
| **Visibilité du fonds de roulement et de la trésorerie** | Les planificateurs de stock génèrent des listes de réapprovisionnement en unités de manière isolée, forçant la finance à calculer manuellement l'impact de trésorerie dans une feuille séparée. | L'**évaluation d'exposition de trésorerie intégrée (`PO Units × Unit COGS`)** affiche les engagements de fonds de roulement exacts directement sur le tableau de bord. |
| **Alignement promotionnel et passage à l'échelle publicitaire** | Le marketing lance une vente flash à -30 % ou double les dépenses publicitaires sans visibilité sur la chaîne d'approvisionnement, effaçant 60 jours de stock en un week-end. | Intègre des **multiplicateurs de demande promotionnelle**, permettant aux planificateurs de tester la couverture des stocks avant les campagnes marketing. |
| **Flux d'approvisionnement hebdomadaire** | Les analystes passent plus de 4 heures chaque semaine à réparer des formules `VLOOKUP` cassées, reconstruire des tableaux croisés dynamiques et surligner manuellement les lignes de stock bas. | Produit une **liste d'actions de commande priorisée et codée par couleur (`ORDER NOW` vs. `HEALTHY`)** prête pour la génération immédiate de commandes fournisseurs. |

---

## Pour qui c'est : rôles cibles de la chaîne d'approvisionnement et cas d'usage e-commerce

Conçu pour les opérateurs qui gèrent un stock physique et ont besoin d'un moteur de planification rigoureux et transparent entre les exportations ERP/Shopify brutes et les plateformes SaaS d'entreprise coûteuses :

- **Fondateurs e-commerce DTC et marchands Shopify / WooCommerce :** utilisez ceci comme une **calculatrice légère de réapprovisionnement et de réassort Shopify** pour prévenir le gaspillage publicitaire sur ruptures de stock, gérer les niveaux de stock 3PL et planifier les réassorts d'usine outre-mer sans payer 500–2 000 $/mois d'applications de prévision SaaS.
- **Vendeurs Amazon FBA et agrégateurs de marketplaces :** utilisez ceci comme un **tableur de planification de réapprovisionnement Amazon FBA et de tampons 3PL** pour équilibrer les délais de production des fournisseurs, les fenêtres de fret maritime/aérien et le timing des expéditions entrantes FBA afin de protéger votre score IPI (Inventory Performance Index).
- **Planificateurs de stock, planificateurs de la demande et analystes de chaîne d'approvisionnement :** utilisez ceci comme un **modèle Excel standardisé de point de commande (ROP) et de stock de sécurité** pour remplacer des tableurs internes fragiles et sujets aux erreurs par un modèle de réapprovisionnement auditable.
- **Responsables des opérations et acheteurs approvisionnement/procurement :** utilisez ceci comme un **générateur automatisé de commandes (PO) et calculateur de MOQ fournisseur** pour transformer les comptages de stock hebdomadaires en quantités de commande exactes, prêtes pour les fournisseurs, en quelques minutes.
- **CFO e-commerce, contrôleurs financiers et comptables de stock :** utilisez ceci comme un **modèle de prévision de trésorerie du fonds de roulement et Open-to-Buy (OTB)** pour auditer les demandes d'achat, prévenir la surcommande sur les SKUs de palier C et optimiser les ratios de rotation des stocks.

*Remarque : ce classeur n'est **pas** un système de gestion d'entrepôt (WMS) à scan de codes-barres en direct, une plateforme de routage de commandes EDI automatisée, ni un ERP statutaire complet. C'est la **couche de décision tactique de planification de la demande et d'achat** qui vous dit **quoi commander, combien commander, quand commander et combien de trésorerie cela coûtera.***

---

## À propos de Theseus Workshop

Je construis des systèmes d'aide à la décision légers et transparents, en Excel et dans le navigateur, pour les goulets d'étranglement opérationnels où il y a trop de variables en interaction pour les suivre mentalement—mais où les logiciels d'entreprise lourds créent des coûts et une complexité inutiles.

Plutôt que de construire un autre tableau de bord vaniteux encombré, chaque boîte à outils est conçue autour d'une question pratique :

> **« Quelles variables opérationnelles et financières exactes doivent siéger en un seul endroit pour que la prochaine décision d'achat ou de capital devienne mathématiquement évidente ? »**

Cette **boîte à outils de planification des stocks et de décision d'achat adaptative à la demande** unit la prévision de demande glissante, les contraintes de délai fournisseur, les mathématiques de stock de sécurité et l'exposition du fonds de roulement dans un cadre autosuffisant que toute équipe e-commerce ou de chaîne d'approvisionnement peut auditer, personnaliser et posséder pour toujours.

---
*Mots-clés : modèle Excel de planification des stocks, tableur calculateur de point de commande (ROP), formule de stock de sécurité Excel, modèle de réapprovisionnement des stocks e-commerce, calculateur de réassort Shopify, tracker de stock Amazon FBA, planificateur de commandes (PO) de chaîne d'approvisionnement, tableur de fonds de roulement Open-to-Buy (OTB).*

---

## Détails techniques

<details>
<summary><strong>Pour les réviseurs techniques, les praticiens d'Excel et les collaborateurs</strong></summary>

---

## Architecture du classeur

Le classeur suit une architecture à trois couches délibérément séparée.

Au lieu de mélanger entrées, formules et tableaux de bord sur une seule feuille, chaque feuille a une responsabilité opérationnelle unique.


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

### Couches du classeur

| Couche | Feuille | Responsabilité |
|--------|-----------|----------------|
| Configuration | Setup_Config | Données de référence SKU, informations fournisseurs, délai, MOQ, niveau de service et paramètres de coût |
| Données opérationnelles | Sales_Import | Ventes historiques importées directement depuis Shopify, un ERP ou des tableurs |
| Données opérationnelles | Inventory_Status | Stock actuel et commandes déjà en transit |
| Calcul | Forecast_Engine | Prévision de la demande à partir des tendances de ventes historiques et des ajustements de campagne manuels |
| Calcul | Inventory_Planner | Stock de sécurité, point de commande, recommandations d'achat et quantités suggérées |
| Analyse financière | Cash_Flow_Impact | Valorisation du stock, exposition de trésorerie à l'achat et rotation des stocks |
| Sortie exécutive | Dashboard | Alertes d'achat, résumé des KPI et liste d'actions d'achat |

---

### Flux de données


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

Chaque couche de calcul ne dépend que des données amont validées.

Aucune feuille n'écrit de valeurs en arrière dans une autre feuille, ce qui réduit la complexité de maintenance et prévient les références circulaires.

---

## Trois pièges qui trompent même les gestionnaires de stocks expérimentés

---

### Piège 1 — planifier autour du stock actuel au lieu du besoin futur

#### La décision
Le stock semble sain aujourd'hui. L'achat est reporté.

#### L'hypothèse erronée cachée
Le stock d'entrepôt actuel est supposé représenter la disponibilité future. La demande pendant le délai est ignorée.

#### Avant
| Stock actuel | Ventes quotidiennes | Décision |
|-------------------|------------|----------|
| 1 800 unités | 40/jour | Reporter l'achat |

Le stock apparaît suffisant.

#### Réalité
Délai du fournisseur : `70 Days`
Consommation attendue : `40 × 70 = 2,800 units`

L'entreprise consommera bien plus de stock avant l'arrivée du réapprovisionnement.

#### Pourquoi le raisonnement échoue
La planification des stocks est prospective. Le stock d'entrepôt n'a de sens que lorsqu'il est considéré avec la demande attendue pendant le délai du fournisseur. Ignorer la demande pendant le délai retarde les achats jusqu'à ce que les ruptures de stock deviennent inévitables.

#### Approche correcte
Calculez la consommation de stock attendue avant l'arrivée du réapprovisionnement. Comparez ensuite le stock disponible à ce besoin.

#### Décision correcte
`ORDER NOW`
L'achat commence alors que le stock paraît encore sain. Cela protège les niveaux de service au lieu de réagir après les pénuries.

<details>
<summary>Référence des formules</summary>

Demande pendant le délai

```

Lead Time Demand = Forecast Daily Demand × Lead Time

```
Excel
```excel
=B2#*C2#

```

---

### Piège 2 — utiliser les ventes moyennes historiques comme prévision

#### La décision

Les quantités d'achat futures reposent entièrement sur la moyenne sur 90 jours.

#### Hypothèse erronée cachée

La demande de ventes est supposée stable. L'activité marketing est ignorée. L'accélération récente est ignorée.

#### Avant

`90-Day Average: 30 Units / Day`
`Recommended Purchase: 2,100 Units`

#### Réalité

`Last 30 Days: 45 Units / Day`
`Trend Factor: 45 / 30 = 1.50`

La publicité a déjà augmenté la demande. La moyenne historique sous-estime les besoins futurs en stock.

#### Pourquoi le raisonnement échoue

Les moyennes historiques décrivent le passé. Les décisions d'achat concernent le futur. Ignorer l'accélération de la demande provoque des ruptures de stock répétées, même lorsque les prévisions semblent mathématiquement correctes.

#### Approche correcte

Combinez la demande historique avec la dynamique de vente observée et l'activité promotionnelle planifiée.

```
Forecast = Daily Base × Trend Factor × Promotion Multiplier

```

#### Décision correcte

Augmentez les achats avant que les pénuries de stock ne surviennent. Les prévisions deviennent réactives au lieu d'être statiques.

Facteur de tendance

```excel
30 Day Average / 90 Day Average

```

Prévision

```excel
Forecast Daily = Base Demand * Trend Factor * Promotion Multiplier

```

Excel

```excel
=B2#*C2#*D2:D100

```

---

### Piège 3 — traiter le stock comme un problème opérationnel plutôt qu'un problème de trésorerie

#### La décision

Une recommandation d'achat est approuvée parce que le stock semble bas.

#### Hypothèse erronée cachée

Seul le stock physique est évalué. Les besoins de trésorerie reçoivent peu d'attention.

#### Avant

`Purchasing Recommendation: 4,000 Units`
Semble raisonnable opérationnellement.

#### Réalité

`Unit Cost: $18`
`Purchase Commitment: 4,000 × 18 = $72,000`

La planification des stocks devient immédiatement une décision d'allocation du capital.

#### Pourquoi le raisonnement échoue

Le stock n'occupe pas seulement de l'espace d'entrepôt. Il occupe aussi du fonds de roulement. Sans visibilité sur les engagements d'achat, les entreprises créent involontairement des pénuries de trésorerie tout en tentant d'éviter les ruptures de stock.

#### Approche correcte

Chaque recommandation d'achat devrait afficher automatiquement l'engagement financier requis. Les opérations et la finance évaluent la même recommandation simultanément.

#### Décision correcte

N'approuvez que les plans d'achat qui satisfont à la fois la protection du stock et la disponibilité de trésorerie.

Engagement d'achat

```excel
Suggested Quantity * Unit Cost

```

Excel

```excel
=XLOOKUP(...) * XLOOKUP(...)

```

---

## Exemple de scénario

Une entreprise DTC de produits pour la maison importe quatre-vingt-dix jours de ventes Shopify dans le classeur. Trois SKU sont approvisionnés depuis la Chine. Le délai moyen de production et d'expédition est de **70 jours**. Le stock d'entrepôt actuel d'un SKU est de **2 350 unités**, tandis que **600 unités** supplémentaires sont déjà en transit.

L'analyse historique montre :

| Indicateur | Valeur |
| --- | --- |
| Ventes quotidiennes moyennes sur 30 jours | 52 unités |
| Ventes quotidiennes moyennes sur 90 jours | 40 unités |
| Facteur de tendance | 1,30 |
| Multiplicateur promotionnel | 1,20 |

Le moteur de prévision estime :
`Forecast Daily Demand: 52 × 1.30 × 1.20 = 81 units/day`

La demande pendant le délai devient :
`81 × 70 = 5,670 units`

La variabilité des ventes historiques produit un stock de sécurité calculé d'environ **620 unités**.

Le point de commande devient donc :
`5,670 + 620 = 6,290 units`

Le stock disponible est égal à :
`2,350 + 600 = 2,950 units`

Bien que le stock d'entrepôt ait paru acceptable au départ, le stock disponible est déjà **3 340 unités en dessous** du point de commande calculé. Le planificateur signale immédiatement le SKU comme **ORDER NOW**.

Le moteur d'achat évalue ensuite les exigences de MOQ et arrondit la recommandation vers le haut à une quantité d'achat opérationnelle. Cash_Flow_Impact estime simultanément l'engagement d'achat, permettant à la finance de déterminer si la recommandation respecte les contraintes actuelles de fonds de roulement.

Au lieu de s'appuyer sur le seul stock d'entrepôt, l'entreprise évalue ensemble la croissance de la demande, le délai fournisseur, la variabilité du stock, la politique d'achat et l'exposition de trésorerie avant d'approuver l'achat. Cela produit une recommandation défendable à la fois opérationnellement et financièrement.

---

## Référence des formules

Le classeur est délibérément conçu autour des formules de tableau dynamique disponibles dans les versions modernes de Microsoft Excel. Chaque feuille d'analyse référence la plage de déversement SKU de la feuille de configuration maîtresse, permettant une expansion automatique lors de l'ajout de nouveaux produits.

---

### Setup_Config

#### Objectif

Maintenir une source unique et faisant autorité pour tous les paramètres de planification statiques.
Les champs comprennent :

* SKU
* Nom du produit
* Fournisseur
* Délai
* MOQ
* Niveau de service
* Coût unitaire
* Prix de vente

#### Déversement SKU dynamique

```excel
=FILTER(B2:B100,B2:B100<>"")

```

**Objectif :** crée une liste SKU dynamique. Chaque feuille aval référence cette plage de déversement au lieu de numéros de ligne fixes.
**Avantages :** aucune copie de formules, expansion automatique du classeur, aucune maintenance à l'ajout de produits.

---

### Sales_Import

#### Ventes moyennes sur 30 jours

```excel
=MAP(E2#, LAMBDA(sku, IFERROR(SUMIFS(C:C,B:B,sku,A:A,">="&TODAY()-30)/30, 0)))

```

**Objectif :** calcule les ventes quotidiennes moyennes récentes.

#### Ventes moyennes sur 90 jours

```excel
=MAP(E2#, LAMBDA(sku, IFERROR(SUMIFS(C:C,B:B,sku,A:A,">="&TODAY()-90)/90, 0)))

```

**Objectif :** représente la base de demande à long terme.

**Pourquoi les deux sont nécessaires :** comparer 30 jours (dynamique de demande actuelle) et 90 jours (demande historique stable) identifie une accélération ou un déclin.

---

### Inventory_Status

```excel
=B2#+C2#

```

**Objectif :** combine le stock disponible et le stock en transit.
**Note opérationnelle :** ignorer le stock déjà en transit provoque couramment des achats en double.

---

### Forecast_Engine

#### Facteur de tendance

```excel
=IFERROR(XLOOKUP(...) / IF(XLOOKUP(...)=0, 1, XLOOKUP(...)), 1)

```

**Interprétation :** >1 (demande croissante), =1 (demande stable), <1 (demande déclinante).

#### Demande quotidienne prévue

```excel
=B2#*C2#*D2:D100

```

**Objectif :** transforme la demande historique en demande d'achat opérationnelle à l'aide des ventes de base, de la tendance et des multiplicateurs promotionnels.

---

### Inventory_Planner

#### Demande pendant le délai

```excel
=B2#*C2#

```

#### Écart-type des ventes

```excel
=MAP(A2#, LAMBDA(sku, IFERROR(STDEV.S(FILTER(Sales_Import!C:C, Sales_Import!B:B=sku)), 0)))

```

**Objectif :** mesure la volatilité historique des ventes.

#### Score Z

```excel
=MAP(A2#, LAMBDA(sku, NORM.S.INV(XLOOKUP(sku, Setup_Config!A2#, Setup_Config!G2#))))

```

**Objectif :** convertit le niveau de service souhaité en protection statistique (ex. : 95 % = 1,65).

#### Stock de sécurité

```excel
=ROUND(F2#*E2#*SQRT(B2#), 0)

```

**Objectif :** protège contre la variabilité de la demande pendant le réapprovisionnement.

#### Point de commande

```excel
=ROUND(D2#+G2#, 0)

```

**Objectif :** définit quand l'achat doit commencer (demande pendant le délai + stock de sécurité).

#### Recommandation d'achat

```excel
=MAP(A2#, LAMBDA(sku, IF(Available<=ROP, "ORDER NOW", "OK")))

```

**Objectif :** crée un signal d'achat opérationnel.

#### Quantité d'achat suggérée

```excel
=MAP(A2#, LAMBDA(sku, LET(avail,..., rop,..., moq,..., daily,..., ss,..., target_need, (daily*30)+ss-avail, IF(avail<=rop, MAX(moq, CEILING(target_need,10)), 0))))

```

**Objectif :** produit une quantité d'achat qui satisfait le MOQ, restaure le stock et prévient les sous-commandes.

---

### Cash_Flow_Impact

#### Valeur du stock

```excel
=XLOOKUP(...) * XLOOKUP(...)

```

#### Engagement d'achat

**Objectif :** affiche le capital d'achat requis avant de passer les commandes (quantité suggérée × coût unitaire).

#### Rotation des stocks

```excel
=ROUND(sales_annual/on_hand, 1)

```

**Objectif :** mesure l'efficacité du stock plutôt que sa taille.

---

### Dashboard

#### Nombre d'alertes rouges

```excel
=COUNTIF(Inventory_Planner!J2#, "ORDER NOW")

```

#### Engagement d'achat total et valeur du stock

```excel
=SUM(Cash_Flow_Impact!C2#)
=SUM(Cash_Flow_Impact!B2#)

```

#### Liste d'achats dynamique

```excel
=FILTER(HSTACK(...), Inventory_Planner!J2#="ORDER NOW", "All inventory healthy")

```

**Objectif :** produit automatiquement une liste d'actions d'achat contenant SKU, nom du produit, quantité suggérée et coût d'achat estimé, sans filtrage manuel.

---

## Règles de validation

| Champ | Règle de validation | Comportement en cas d'erreur |
| --- | --- | --- |
| SKU | Ne peut pas être vide et doit être unique | Ligne exclue des calculs |
| Délai | Entier supérieur à zéro | Prévision indisponible |
| MOQ | Entier positif | Recommandation d'achat désactivée |
| Niveau de service | Entre 50 % et 99,9 % | Score Z non calculable |
| Coût unitaire | Supérieur ou égal à zéro | L'analyse de trésorerie renvoie zéro |
| Prix de vente | Supérieur à zéro | Analyse de marge indisponible |
| Date de vente | Date calendaire valide | Enregistrement ignoré |
| Quantité vendue | Ne peut pas être négative | Enregistrement exclu |
| Stock disponible | Supérieur ou égal à zéro | Avertissement de stock généré |
| Stock en transit | Supérieur ou égal à zéro | Stock disponible ajusté |
| Multiplicateur promotionnel | Plage recommandée 0,5–3,0 | Hors plage signalé pour examen |
| Demande quotidienne prévue | Ne doit pas être négative | Recommandation d'achat supprimée |
| Stock de sécurité | Plancher automatique à zéro | Valeurs négatives prévenues |
| Point de commande | Toujours recalculé | Édition manuelle déconseillée |
| Quantité d'achat suggérée | Ne peut pas être inférieure au MOQ lorsqu'un achat est requis | Arrondie automatiquement vers le haut |

</details>
</details>

---

## La logique métier : méthodologie et impact commercial

Beaucoup de modèles de stock échouent parce qu'ils traitent la gestion de la chaîne d'approvisionnement comme un exercice purement mathématique de comptage. En réalité, la planification des stocks est une **décision d'allocation du capital**. 

Cette boîte à outils déplace le focus opérationnel de *« combien de stock y a-t-il dans l'entrepôt ? »* à *« comment maximiser la rotation des stocks tout en protégeant notre ROI marketing et notre fonds de roulement ? »* 

Voici la méthodologie sous-jacente et comment elle résout des problèmes commerciaux précis :

### 1. Le problème commercial : l'effet coup de fouet DTC et la mauvaise allocation du capital
Les marques e-commerce modernes évoluent dans un environnement hautement volatil où la publicité sociale payante, le marketing d'influence et la saisonnalité créent des pics de demande soudains. 
*   **Le défaut des systèmes statiques :** si une entreprise utilise un point de commande fixe (ex. : « toujours commander quand le stock atteint 500 unités »), elle subira inévitablement des ruptures de stock pendant une campagne marketing à ROAS élevé, gaspillant les dépenses publicitaires. À l'inverse, la surcommande immobilise une trésorerie critique dans des biens physiques illiquides.
*   **La solution :** cette boîte à outils remplace les seuils statiques par un modèle de **point de commande adaptatif à la demande (ROP)**. 

### 2. La méthodologie fondamentale (fonctionnement)

Le moteur de calcul utilise des principes standard de recherche opérationnelle, adaptés aux biens de consommation à rotation rapide :

*   **Stock de sécurité statistique (écart-type et scores Z) :**
    au lieu de deviner un tampon, la boîte à outils mesure l'écart-type historique (σ) de vos ventes quotidiennes. En fixant un niveau de service cible (ex. : 95 %), le modèle applique le score Z correspondant pour calculer mathématiquement le nombre exact d'unités tampon nécessaires pour absorber les pics de demande inattendus pendant le délai du fournisseur.
*   **Modificateurs de demande glissante et de dynamique :**
    le moteur ne s'appuie pas uniquement sur une moyenne historique sur 90 jours. Il intègre un **facteur de tendance** (comparant la vitesse sur 30 jours à la base sur 90 jours) et des **multiplicateurs promotionnels**. Cette méthodologie garantit que si vos dépenses publicitaires actuelles accélèrent les ventes, la consommation prévue s'adapte *avant* que la rupture de stock ne survienne.
*   **Projection de la demande pendant le délai :**
    l'outil met en regard votre demande quotidienne prévue et le délai spécifique de chaque fournisseur. Il prouve mathématiquement combien d'unités seront consommées pendant que votre commande est sur un cargo.
*   **Contraintes de logique Min-Max / MOQ :** 
    une fois le point de commande franchi, l'algorithme calcule une quantité d'achat suggérée qui satisfait la quantité minimale de commande (MOQ) du vendeur tout en arrondissant à des tailles de lot opérationnellement sensées.

### 3. Le résultat commercial (valeur métier)
En connectant la prévision de la demande aux indicateurs financiers, l'outil produit des informations décisionnelles actionnables :
*   **Pour les opérations :** élimine le tâtonnement sur *quand* et *combien* commander à travers plusieurs chaînes d'approvisionnement (nationales vs internationales).
*   **Pour le marketing :** garantit que la disponibilité des produits s'aligne sur les calendriers de campagne, protégeant les coûts d'acquisition client (CAC).
*   **Pour la finance :** fournit une visibilité immédiate sur l'**engagement d'achat ($)**. Les équipes finance peuvent évaluer l'impact sur le fonds de roulement d'une commande proposée *avant* que la trésorerie ne soit déployée, garantissant que l'entreprise reste liquide.

---  

## Autres outils de cette série

Ce classeur fait partie d'une collection croissante d'outils opérationnels légers d'aide à la décision, conçus pour les équipes qui ont besoin de meilleures décisions sans mettre en place de logiciel d'entreprise.

Exemples :

* **Tour de contrôle de prévision de trésorerie** — surveiller la liquidité, les flux de trésorerie d'exploitation et les besoins de financement.
* **Planificateur d'allocation du budget marketing** — répartir les dépenses publicitaires entre les canaux selon des seuils de retour mesurables.
* **Tableau de bord de contrôle des coûts de construction** — comparer les budgets de projet, les engagements, les factures et les contingences restantes.
* **Boîte à outils d'analyse des dépenses d'approvisionnement** — suivre la performance des fournisseurs, la concentration des achats et l'utilisation des contrats.
* **Tableau de bord d'intelligence de la performance commerciale** — surveiller les tendances de revenus, la performance des marges et la concentration client.

Tous les outils suivent les mêmes principes :

* Aucune inscription requise
* Aucune installation requise
* Éditions navigateur et Excel
* Aide à la décision légère plutôt que remplacement d'entreprise
* Construits autour de flux analytiques répétables plutôt que d'un reporting statique

---

## Licence

Sous licence **Apache License 2.0**.

Vous êtes libre de :

* Utiliser ce projet commercialement.
* Modifier et étendre le classeur.
* Distribuer des versions originales ou modifiées.
* Incorporer le cadre analytique dans vos propres flux.

Sous réserve des termes et conditions de la licence Apache 2.0.
Voir le fichier LICENSE pour le texte complet de la licence.

---

## Remerciements

Ce projet est né de défis récurrents de planification des stocks observés chez des marques de vente directe, des entreprises e-commerce et des équipes de chaîne d'approvisionnement qui avaient besoin de meilleures décisions d'achat sans mettre en place de systèmes de planification des ressources d'entreprise.

L'objectif n'est pas de remplacer les plateformes ERP ou MRP. L'objectif est de permettre de meilleures décisions opérationnelles en utilisant les données que les organisations possèdent déjà.

Si ce projet aide à améliorer votre processus de planification, les contributions, suggestions et retours sont toujours les bienvenus.

