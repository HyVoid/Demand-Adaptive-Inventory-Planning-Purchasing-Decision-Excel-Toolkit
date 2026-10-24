[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Modèle Excel de planification des stocks et de décision d'achat adaptatifs à la demande

<div align="left">
  <strong>Un modèle Excel automatisé de planification des stocks et d'aide à la décision d'achat, conçu pour les marques DTC, les vendeurs e-commerce et les gestionnaires de chaîne d'approvisionnement. Gratuit à tester dans votre navigateur ou à télécharger comme tableur personnalisable pour éviter les ruptures de stock, gérer les délais des fournisseurs et optimiser le fonds de roulement.</strong>
</div>

<br>

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Inventory%20Planning%20%26%20Decision%20Support-orange)

---

**Automatisez votre cycle de réapprovisionnement en combinant prévision des ventes historiques, évaluation du risque lié aux délais des fournisseurs, calcul du point de commande et exposition de trésorerie dans un outil léger d'aide à la décision.**

Essayez la version HTML cloud instantanément, sans installation, ou téléchargez le tableur entièrement déverrouillé pour vos flux opérationnels hors ligne.

> 🌐 **Essayer l'application web**
> [Ouvrir l'application web gratuite et interactive de planification des stocks (démo HTML en direct) ↗](https://hyvoid.github.io/inventory-planning-reorder-point-excel/)
>
> 📥 **Obtenir le tableur**
> [Télécharger le modèle Excel entièrement déverrouillé de gestion des stocks ↗](https://www.theseusworkshop.com/l/rklhag?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=demand-adaptive-inventory)

---

## Surmonter les points de douleur des stocks e-commerce avec des solutions automatisées

Au lieu d'auditer manuellement des rapports d'entrepôt fragmentés, des délais fournisseurs et un historique de ventes multicanaux, cette boîte à outils centralise votre visibilité sur la chaîne d'approvisionnement.

Les trackers de stock statiques échouent face aux entreprises modernes de vente directe (DTC) et omnicanales, car la demande est volatile. La publicité payante sur Meta ou TikTok, les promotions saisonnières et le marketing viral peuvent vider les stocks en quelques jours. Cet environnement dynamique crée deux extrêmes coûteux :

- **Point de douleur : ruptures de stock inattendues (demande sous-estimée)**
  *Solution :* utilise des prévisions de demande glissantes sur 30/90 jours pour ajuster instantanément votre **point de commande (ROP)**, garantissant que vous ne gaspillez jamais de coût d'acquisition client (CAC) sur des articles en rupture.
- **Point de douleur : fonds de roulement immobilisés (demande surestimée)**
  *Solution :* emploie des **calculs de stock de sécurité** précis pour éviter l'accumulation excessive de stock, libérer de la trésorerie et accélérer la rotation des stocks.
- **Point de douleur : cycles de réapprovisionnement désalignés**
  *Solution :* s'adapte aux **chaînes d'approvisionnement à délais longs** (fret maritime) comme à la **logistique à délais courts** (3PL national). Chaque SKU est évalué indépendamment selon sa quantité minimale de commande (MOQ) et ses contraintes de délai propres.

### Capacités de suivi principales :
*   **Santé actuelle du stock :** visualisez le stock disponible par rapport aux taux d'épuisement projetés.
*   **Alertes d'achat actionnables :** identifie les SKU nécessitant un bon de commande (PO) aujourd'hui face à ceux qui sont sainement dans les niveaux optimaux.
*   **Projection de la demande pendant le délai :** calcule la consommation exacte en unités pendant les fenêtres de transit des fournisseurs.
*   **Analyse d'exposition de trésorerie :** met en regard les engagements d'achat futurs et le fonds de roulement disponible.

---

## Guide de démarrage rapide : automatisez vos décisions de réapprovisionnement dès aujourd'hui

Passer des données de ventes brutes à des recommandations d'achat précises prend quelques minutes. Suivez ces étapes fonctionnelles pour configurer votre automatisation de réapprovisionnement.

### Étape 1 : configurer les données de référence SKU et les paramètres de la chaîne d'approvisionnement
Accédez à l'onglet `Setup_Config`. Saisissez vos indicateurs de stock de base : codes SKU, noms des fournisseurs, délais de transit, MOQ, niveaux de service cibles et coût unitaire.
*Action :* établissez vos contraintes de base pour laisser l'algorithme personnaliser les seuils d'achat.

### Étape 2 : importer l'historique des ventes omnicanal
Exportez vos données de ventes brutes depuis Shopify, Amazon Seller Central ou votre ERP, et collez-les directement dans la feuille `Sales_Import`. Mettez à jour les comptes d'entrepôt actuels et les commandes en transit.
*Action :* alimentez le moteur de prévision sans aucun ajustement manuel de formules ni restructuration des données.

### Étape 3 : générer des recommandations d'achat automatisées
Ouvrez le tableau de bord exécutif. Le moteur de calcul exécute automatiquement les formules de stock de sécurité et produit des indicateurs actionnables : stock à risque, quantités de commande suggérées et capital requis.
*Action :* examinez les alertes « ORDER NOW » générées dynamiquement pour prendre des décisions d'approvisionnement immédiates.

### Étape 4 : télécharger le modèle pour une planification hebdomadaire continue
La démo navigateur est parfaite pour un essai unique. Pour un rapprochement hebdomadaire continu des stocks, une sauvegarde persistante des données et la collaboration d'équipe, passez au fichier local.
*CTA :* **[télécharger le modèle Excel de gestion des stocks](#)** pour gérer en sécurité vos données internes de chaîne d'approvisionnement et répéter ce flux à chaque cycle de planification.

---

## Scénarios concrets : quand utiliser ce tableur de contrôle des stocks

Cette boîte à outils est conçue pour les goulets d'étranglement opérationnels critiques où le timing et le capital se croisent :

*   **Préparation à la haute saison Q4 :** lorsque vous montez en puissance les publicités Meta pour le Black Friday/Cyber Monday (BFCM) et devez justifier mathématiquement des commandes massives de conteneurs outre-mer.
*   **Lancements de nouveaux produits :** lorsque la vitesse de vente initiale dépasse les moyennes historiques et devez calculer rapidement des quantités de fret aérien express.
*   **Contraintes de trésorerie :** lorsque la finance limite le budget d'approvisionnement trimestriel et devez prioriser les commandes par urgence opérationnelle stricte plutôt que par intuition.
*   **Retards de délai fournisseur :** lorsqu'un fabricant clé allonge les délais de 20 jours et devez recalculer instantanément le stock de sécurité pour 500 SKU.

---

## À qui s'adresse cet outil : rôles cibles et cas d'usage

Conçu pour les professionnels qui gèrent des produits physiques et s'appuient sur un approvisionnement piloté par les données, cet outil améliore directement vos flux de tableurs existants en ciblant des rôles opérationnels précis :

*   **Fondateurs e-commerce et marchands Shopify :** ont besoin d'un *calculateur de réapprovisionnement Shopify* léger pour gérer la logistique 3PL sans logiciel d'entreprise coûteux.
*   **Vendeurs Amazon FBA :** ont besoin d'un *outil de suivi de stock FBA* pour surveiller les limites de stock d'entrepôt externe face aux exigences des expéditions Amazon entrantes.
*   **Planificateurs de stock et analystes de la chaîne d'approvisionnement :** recherchent un *modèle Excel de point de commande automatisé* pour standardiser la logique d'achat du service.
*   **Responsables des opérations et des achats :** recherchent un *outil de gestion des délais fournisseurs* pour aligner les MOQ des vendeurs sur les capacités de stockage internes.
*   **Directeurs financiers et contrôleurs :** ont besoin d'un *modèle d'allocation du fonds de roulement* pour opposer un veto aux achats de stock surdimensionnés avant que la trésorerie ne soit déployée.

*(Remarque : cela fournit une couche analytique robuste pour les données opérationnelles ; l'objectif n'est pas de remplacer des plateformes ERP, MRP ou de gestion des stocks d'entreprise à grande échelle.)*

---

## Analyse approfondie : dépasser les limites des tableurs classiques

| Problème courant de gestion des stocks | Méthodes des tableurs classiques | Solution de la boîte à outils Excel adaptative |
|----------------------------------------|---------------------------|----------------------------------------|
| **Timing d'achat (risque de rupture)** | Audit basé uniquement sur le stock d'entrepôt disponible actuel. | Calcule la **demande pendant le délai**, garantissant que les commandes sont passées en tenant compte de la consommation en transit. |
| **Variabilité des fournisseurs** | Application d'un tampon uniforme de 30 jours aux vendeurs nationaux et internationaux. | Attribue des **délais spécifiques par SKU**, optimisant les déclencheurs de réapprovisionnement pour le fret local vs international. |
| **Précision de la prévision de la demande** | Recours à des moyennes historiques statiques sur 90 jours qui ignorent les pics récents. | Utilise un **facteur de tendance dynamique**, amplifiant les quantités de commande lorsque la vitesse de vente récente accélère. |
| **Efficacité du fonds de roulement** | Les recommandations d'achat sont déconnectées des modèles financiers. | Intègre l'**impact trésorerie**, affichant l'engagement de capital exact requis avant d'approuver une commande. |
| **Alignement marketing** | Les promotions marketing non planifiées vident rapidement le stock disponible. | Emploie des **multiplicateurs promotionnels** pour augmenter artificiellement la prévision de demande avant le passage à l'échelle des dépenses publicitaires. |
| **Flux de reporting opérationnel** | Les équipes de la chaîne d'approvisionnement perdent des heures à filtrer manuellement des tableaux croisés dynamiques et des VLOOKUP. | Fait remonter une **liste d'actions d'achat automatisée** priorisée directement sur le tableau de bord exécutif. |

---

## À propos

Je conçois des outils opérationnels légers pour les situations où il y a tout simplement trop de pièces en mouvement pour les garder en tête.

Plutôt que de créer un tableau de bord de plus rempli d'indicateurs, je me concentre sur une question pratique :

> **Quelles informations doivent apparaître ensemble pour que la prochaine décision opérationnelle puisse être prise avec confiance ?**

Inventory Planning Control Tower est un exemple de cette approche. Il combine prévision de la demande, contraintes fournisseurs, risque de stock et exposition de trésorerie dans un cadre réutilisable d'aide à la décision que les organisations peuvent exploiter et maintenir elles-mêmes.

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

