[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Plantilla Excel de planificación de inventario y calculadora de punto de reorden (ROP) para e-commerce, Shopify y Amazon FBA
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/ab946235-54c1-4cb6-8957-f3fc601b803a" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Inventory%20Replenishment%20%26%20ROP%20Model-orange)

**Una plantilla Excel automatizada de planificación de inventario, una calculadora de punto de reorden (ROP) y una hoja de cálculo de stock de seguridad, diseñada para marcas DTC de e-commerce, comerciantes de Shopify, vendedores de Amazon FBA y gestores de cadena de suministro. Combina previsiones rodantes de velocidad de ventas a 30/90 días, colchones de plazo de entrega de proveedores, restricciones de cantidad mínima de pedido (MOQ) y la exposición de capital de trabajo de la compra abierta (OTB) en un solo modelo de apoyo a la decisión—disponible gratis en tu navegador o como libro de trabajo Excel desbloqueado.**

**Sin registro. Sin instalación. Gratis para probar en tu navegador.**

Prueba al instante la aplicación web interactiva basada en la nube sin ninguna configuración, o descarga la plantilla de hoja de cálculo Excel completamente desbloqueada para tus flujos de reposición semanales sin conexión—respaldada por una garantía de devolución de dinero de 30 días sin preguntas.

> 🌐 **Prueba la calculadora web:** [Abrir la aplicación web interactiva gratuita de reposición de inventario y punto de reorden (demo en vivo) ↗](https://hyvoid.github.io/inventory-planning-reorder-point-excel/)  
> 📥 **Consigue el modelo Excel completo:** [Descargar la plantilla Excel completamente desbloqueada de planificación de inventario, stock de seguridad y decisión de órdenes de compra ↗](https://www.theseusworkshop.com/l/rklhag?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=demand-adaptive-inventory)  
> ⚙️ **Matemáticas de reposición:** [Ir a la lógica de negocio y la metodología de inventario](#the-business-logic--methodology)

---

## Qué ayuda a rastrear: mapeo de puntos de dolor del inventario e-commerce a soluciones

Las hojas de cálculo de inventario estáticas fracasan ante las marcas modernas de venta directa al consumidor (DTC), Amazon FBA y mayoristas omnicanal, porque la velocidad de la demanda y los plazos de entrega del flete internacional son muy volátiles. El escalado de social de pago en Meta/TikTok, las ventas flash de BFCM o la congestión portuaria pueden provocar roturas de stock graves o atrapar cientos de miles de dólares en stock muerto.

En lugar de cruzar manualmente informes fragmentados de almacenes 3PL, órdenes de compra (POs) en tránsito y exportaciones de ventas de Shopify/Amazon, esta **hoja de cálculo de reposición de inventario** rastrea y resuelve seis puntos ciegos críticos de la cadena de suministro:

| Métrica de seguimiento objetivo / punto de dolor | El punto ciego común del inventario e-commerce | Cómo este modelo de reposición lo resuelve y rastrea |
| :--- | :--- | :--- |
| **Punto de reorden (ROP) dinámico y prevención de desabastecimientos** | Confiar en alertas de reposición intuitivas o medias estáticas de 90 días, lo que causa desabastecimientos cuando el gasto publicitario escala y desperdicia el coste de adquisición de cliente (CAC). | Rastrea la **velocidad de ventas ponderada rodante de 30 días vs. 90 días** para ajustar dinámicamente los **puntos de reorden (ROP)** a nivel de SKU antes de que el inventario se agote. |
| **Stock de seguridad y días de inventario disponible (DOH)** | Sobrepedir SKUs de rotación lenta por miedo, atrapando capital de trabajo en tasas de almacenamiento 3PL y lastrando la rotación de inventario. | Calcula **unidades de stock de seguridad** con amortiguación estadística y **días de inventario disponible (DOH / semanas de cobertura)** adaptados a la volatilidad de la demanda de cada SKU. |
| **Inventario neto disponible (disponible + POs en tránsito)** | Pedir inventario duplicado porque las órdenes de compra abiertas no recibidas (en pedido / flete marítimo o aéreo en tránsito) no se netean contra el stock de almacén. | Rastrea la **posición de inventario neta (`On-Hand + In-Transit POs - Committed Stock`)** contra las ventanas de agotamiento previstas durante el plazo de entrega. |
| **Alineación del plazo de entrega del proveedor y las restricciones de MOQ** | Aplicar un colchón de reposición general de 30 días tanto a fábricas de flete marítimo internacional de 90 días como a proveedores 3PL nacionales de 7 días. | Evalúa cada SKU de forma independiente usando **plazos de tránsito específicos por proveedor**, **cantidades mínimas de pedido (MOQs)** y reglas de redondeo por caja. |
| **Flujo de caja de compra abierta (OTB) y exposición de capital de trabajo** | Enviar órdenes de compra basándose puramente en cantidades de unidades sin conocer el compromiso de caja exacto requerido para financiar la campaña de reposición. | Multiplica las cantidades de PO sugeridas por el **coste unitario de mercancía puesta en destino (COGS)** para generar en tiempo real la **exposición de flujo de caja ($)** y priorizar las POs cuando el capital es escaso. |
| **Triaje de prioridad de órdenes de compra (PO) accionable** | Auditar más de 500 SKUs línea por línea cada lunes por la mañana para determinar qué proveedores necesitan una PO inmediata frente a qué SKUs están almacenados con seguridad. | Genera un **estado de acción de SKU automatizado (`ORDER NOW`, `WATCH`, `HEALTHY`, `OVERSTOCKED`)** con las cantidades exactas de pedido PO recomendadas. |

---

## Tutorial de inicio rápido: cómo automatizar tus decisiones de reposición y punto de reorden

Pasar de exportaciones de ventas omnicanal en bruto a una **lista de acciones de órdenes de compra (PO) lista para auditar** lleva menos de 5 minutos. Sigue este flujo de reposición de 4 pasos:

### Paso 1: configura los datos maestros de SKU, los plazos de entrega y las MOQ de los proveedores
Navega a la hoja de control `Setup_Config` y establece tus parámetros de cadena de suministro para cada SKU:
- **Identificadores de SKU y mapeo de proveedores:** códigos SKU, nombres de producto y asignaciones de proveedores principales.
- **Restricciones de reposición:** **plazo de entrega (días)** de producción + flete, **cantidad mínima de pedido (MOQ)**, colchón de seguridad del nivel de servicio objetivo y **coste unitario de mercancía puesta en destino ($)**.

*Acción:* prueba ahora cómo los cambios de plazo de entrega y MOQ impactan los disparadores de reposición en la [aplicación web interactiva gratuita de planificación de inventario](https://hyvoid.github.io/inventory-planning-reorder-point-excel/).

---

### Paso 2: importa ventas históricas y recuentos de stock de Shopify, Amazon FBA o ERP
Exporta tu histórico bruto de ventas por unidades y los saldos actuales de almacén desde **Shopify, Amazon Seller Central, Cin7, NetSuite o tu portal 3PL**, y pégalos directamente en `Sales_Import` y las tablas de entrada de inventario:
- Introduce el **stock de almacén disponible actual** y las **cantidades de POs abiertas en tránsito**.
- Incluye las ventas unitarias históricas recientes de 30 y 90 días (más los multiplicadores de demanda promocional opcionales).

*Sin mantenimiento de VLOOKUP ni reescritura de fórmulas—la capa de ingesta normaliza los datos brutos automáticamente.*

---

### Paso 3: revisa el stock de seguridad, el punto de reorden y las cantidades de PO sugeridas automatizadas
Cambia al **panel ejecutivo de reposición**. El motor de cálculo ejecuta inmediatamente las fórmulas de inventario en todo tu catálogo para generar:
- **Velocidad de ventas diaria ponderada** (unidades/día) y **días de inventario restante (DOH)**
- **Proyección de la demanda durante el plazo de entrega** y **punto de reorden (ROP) dinámico**
- **Alertas «ORDER NOW» priorizadas** con **cantidades de PO sugeridas** ajustadas a la MOQ
- **Capital de trabajo total requerido ($)** para financiar el lote de compra recomendado

---

### Paso 4: descarga la plantilla Excel desbloqueada para la planificación semanal de inventario
Aunque la demo en vivo del navegador es ideal para pruebas de sesión única y verificación de la lógica, las operaciones reales de cadena de suministro exigen instantáneas semanales persistentes, expansiones de SKU personalizadas y auditoría financiera interna.

> 💡 **¿Listo para automatizar tu planificación semanal de reposición sin pagar más de 1.000 $ al mes por software de inventario SaaS?**  
> Deja de adivinar cantidades de reposición o de reconstruir hojas de cálculo rotas cada lunes.  
> 👉 **[Descargar la plantilla Excel completamente desbloqueada de planificación de inventario y decisión de compra](https://www.theseusworkshop.com/l/rklhag?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=demand-adaptive-inventory)** para conectar tu propio catálogo de SKUs, guardar registros históricos de compra semanales, personalizar las ponderaciones de previsión y compartir hojas limpias de aprobación de POs con tu equipo financiero.

---

## La lógica de negocio y la metodología

La mayoría de las plantillas Excel de inventario estándar fracasan en las operaciones reales de e-commerce porque tratan **la velocidad de la demanda como estática** y **las cadenas de suministro como instantáneas**. Si una hoja de cálculo divide simplemente las ventas de 90 días entre 90, una campaña viral de TikTok o una rampa estacional del T4 provocará un desabastecimiento inmediato antes de que un contenedor internacional salga siquiera del puerto.

Para resolver la compensación matemática entre el **nivel de servicio (riesgo de desabastecimiento)** y la **eficiencia del capital de trabajo (riesgo de exceso de stock)**, este kit implementa una **metodología de reposición cuantitativa de 4 etapas**:

1. **Ponderación de velocidad adaptativa a la demanda (tendencia a corto plazo vs. línea base a largo plazo):**  
   Confiar únicamente en una media de 90 días va por detrás de las tendencias de crecimiento; confiar únicamente en una ventana de 7 o 30 días sobrerreacciona al ruido temporal. Este modelo calcula una **velocidad de demanda diaria combinada ($D_{\text{adaptativa}}$)** comparando la aceleración de ventas a corto plazo ($V_{30}$) con la línea base histórica ($V_{90}$), acoplada a un **multiplicador promocional opcional ($M_{\text{promo}}$)**:
   $$D_{\text{adaptativa}} = \left( w_1 \cdot V_{30} + w_2 \cdot V_{90} \right) \times M_{\text{promo}}$$
   Cuando la velocidad de ventas reciente acelera por encima de la media histórica, el modelo escala dinámicamente las proyecciones de demanda futuras para proteger a los ganadores de alta velocidad contra desabastecimientos.
2. **Modelado del agotamiento durante el plazo de entrega y del punto de reorden (ROP) dinámico:**  
   Un pedido realizado hoy no llegará hasta que el proveedor complete la fabricación y el tránsito de flete ($L$ días). Durante esa ventana, tu stock existente sigue agotándose. El motor calcula la **demanda durante el plazo de entrega ($D_{\text{LT}} = D_{\text{adaptativa}} \times L$)** y añade un **colchón de stock de seguridad dinámico ($SS$)** calibrado al riesgo del plazo de entrega y la varianza de la demanda:
   $$\text{Punto de reorden (ROP)} = \left( D_{\text{adaptativa}} \times \text{Plazo de entrega}_{\text{días}} \right) + \text{Stock de seguridad}$$
   Siempre que la **posición de inventario neta ($\text{disponible} + \text{en pedido} - \text{comprometido}$)** de un SKU caiga al nivel de $\text{ROP}$ o por debajo, el motor de estado cambia el estado del SKU a `ORDER NOW`.
3. **Optimización de cantidades de pedido bajo restricción de MOQ:**  
   Calcular un déficit bruto de 142 unidades es inútil si tu fabricante contractual impone una **cantidad mínima de pedido (MOQ)** de 500 unidades. El algoritmo de compra evalúa la brecha neta de reposición necesaria para cubrir el ciclo de cobertura objetivo ($C_{\text{target}}$ días) más el plazo de entrega, y resuelve la **cantidad de PO recomendada final ($Q_{\text{PO}}$)** mediante acotamiento de restricciones:
   $$Q_{\text{PO}} = \max \left( \text{MOQ}, \; \text{Nivel de stock objetivo} - \text{Posición de inventario neta} \right)$$
4. **Valoración del capital de trabajo y la exposición de caja (integración de compra abierta):**  
   Los planificadores de cadena de suministro piensan en *unidades*, mientras que los CFO y fundadores piensan en *flujo de caja*. Cada orden de compra recomendada se multiplica por su `Unit_COGS` ($C_i \times Q_{\text{PO}, i}$) y se agrega por nivel de urgencia. Esto vincula directamente la reposición de inventario físico con la **gestión de flujo de caja de compra abierta (OTB)**, permitiendo a los equipos ver la exposición de capital exacta antes de cortar los depósitos a proveedores.

---

## Escenarios reales de e-commerce y cadena de suministro que esto resuelve

Si tu equipo de operaciones o finanzas busca un modelo de hoja de cálculo fiable para manejar cualquiera de los siguientes cuellos de botella de inventario, este kit está preconstruido para la tarea:

- **Previsión de inventario de temporada alta T4 / BFCM:** *¿Cómo calculo cantidades exactas de pedidos de contenedores internacionales en julio/agosto al escalar el gasto publicitario en Meta y Google para el Black Friday / Cyber Monday?*
- **Reposición de Amazon FBA y gestión de colchones 3PL:** *¿Cómo coordino transferencias de inventario entre una fábrica internacional, un almacén de consolidación 3PL nacional y los centros de fulfillment entrantes de Amazon FBA sin quedarme sin stock ni activar recargos por inventario antiguo de FBA?*
- **Priorización de POs con restricción de caja (crisis de capital de trabajo):** *Cuando nuestro presupuesto trimestral de compra abierta (OTB) está limitado a 150.000 $, ¿qué SKUs específicos deben pedirse hoy para prevenir la pérdida de ingresos, y qué POs pueden diferirse con seguridad?*
- **Shock de plazo de entrega de proveedores y planificación del Año Nuevo Chino (CNY):** *Cuando las fábricas internacionales cierran durante más de 30 días por el Año Nuevo Chino o los tiempos de tránsito del flete marítimo se duplican, ¿cómo recalculo al instante el stock de seguridad y los puntos de reorden en más de 500 SKUs?*
- **Ajustes de velocidad de lanzamiento de nuevos productos:** *Cuando un SKU héroe recién lanzado vende 3 veces más rápido que las proyecciones iniciales, ¿cuánto inventario puente de flete aéreo necesitamos pedir para cubrir la brecha antes de que llegue el próximo envío marítimo?*

---

## Rastreadores de inventario heredados vs. este modelo de reposición adaptativa a la demanda

| Dimensión de planificación de inventario | Hojas de cálculo heredadas estáticas (sin esta herramienta) | Kit Excel de inventario adaptativo a la demanda (con esta herramienta) |
| :--- | :--- | :--- |
| **Lógica de disparo de compra (riesgo de desabastecimiento)** | Repedir basándose solo en las unidades de almacén disponibles actuales, ignorando el agotamiento del stock durante el tránsito y las POs abiertas en tránsito. | Evalúa la **posición de inventario neta vs. la demanda durante el plazo de entrega**, disparando alertas de PO antes de que el stock caiga por debajo del umbral de seguridad. |
| **Restricciones de plazo de entrega del proveedor y MOQ** | Aplicar un colchón genérico de 30 días a todos los proveedores, ignorando los plazos de entrega de flete marítimo de 90 días y las cantidades mínimas de pedido de fábrica (MOQs). | Asigna **plazos de entrega y MOQs específicos por SKU**, acotando automáticamente las cantidades de PO sugeridas a restricciones de proveedor válidas. |
| **Sensibilidad a la velocidad de ventas y las tendencias** | Confiar en medias históricas planas de 90 días o 12 meses que no reaccionan cuando los anuncios de pago o las tendencias estacionales aceleran las ventas. | Usa la **ponderación de velocidad dinámica de 30/90 días**, aumentando automáticamente las cantidades de reposición cuando la demanda a corto plazo se dispara. |
| **Visibilidad del capital de trabajo y el flujo de caja** | Los planificadores de inventario generan listas de reposición en unidades de forma aislada, obligando a Finanzas a calcular manualmente el impacto en caja en una hoja aparte. | La **valoración de exposición de caja integrada (`PO Units × Unit COGS`)** muestra los compromisos exactos de capital de trabajo directamente en el panel. |
| **Alineación promocional y de escalado publicitario** | Marketing lanza una venta flash con 30 % de descuento o duplica el gasto publicitario sin visibilidad de la cadena de suministro, borrando 60 días de stock en un fin de semana. | Incorpora **multiplicadores de demanda promocional**, permitiendo a los planificadores poner a prueba la cobertura de inventario antes de las campañas de marketing. |
| **Flujo de compras semanal** | Los analistas dedican más de 4 horas cada semana a arreglar fórmulas `VLOOKUP` rotas, reconstruir tablas dinámicas y resaltar manualmente las filas de stock bajo. | Genera una **lista de acciones de PO priorizada y codificada por color (`ORDER NOW` vs. `HEALTHY`)** lista para la generación inmediata de POs a proveedores. |

---

## Para quién es: roles objetivo de cadena de suministro y casos de uso de e-commerce

Construido para operadores que gestionan inventario físico y necesitan un motor de planificación riguroso y transparente entre las exportaciones brutas de ERP/Shopify y las costosas plataformas SaaS empresariales:

- **Fundadores de e-commerce DTC y comerciantes de Shopify / WooCommerce:** usa esto como una **calculadora ligera de reposición y reabastecimiento de inventario para Shopify** para evitar el desperdicio publicitario por artículos agotados, gestionar los niveles de stock 3PL y planificar reposiciones de fábrica internacional sin pagar 500–2.000 $ al mes por aplicaciones de previsión SaaS.
- **Vendedores de Amazon FBA y agregadores de marketplaces:** usa esto como una **hoja de cálculo de planificación de reposición de Amazon FBA y colchones 3PL** para equilibrar los plazos de producción de los proveedores, las ventanas de flete marítimo/aéreo y el calendario de envíos entrantes de FBA para proteger tu puntuación IPI (Inventory Performance Index).
- **Planificadores de inventario, planificadores de demanda y analistas de cadena de suministro:** usa esto como una **plantilla Excel estandarizada de punto de reorden (ROP) y stock de seguridad** para sustituir hojas de cálculo internas frágiles y propensas a errores por un modelo de reposición auditable.
- **Gerentes de operaciones y compradores de compras/aprovisionamiento:** usa esto como un **generador automatizado de órdenes de compra (PO) y calculadora de MOQ de proveedores** para convertir los recuentos semanales de stock en cantidades de pedido exactas, listas para el proveedor, en minutos.
- **CFO de e-commerce, controladores financieros y contables de inventario:** usa esto como un **modelo de previsión de flujo de caja de capital de trabajo y compra abierta (OTB)** para auditar las solicitudes de compra, evitar la sobrecompra en SKUs de nivel C y optimizar las ratios de rotación de inventario.

*Nota: este libro de trabajo **no** es un sistema de gestión de almacenes (WMS) de escaneo de códigos de barras en vivo, una plataforma de enrutamiento de pedidos EDI automatizada ni un ERP estatutario completo. Es la **capa táctica de decisión de planificación de la demanda y compra** que te dice **qué pedir, cuánto pedir, cuándo pedir y cuánto costará en caja.***

---

## Acerca de Theseus Workshop

Construyo sistemas de apoyo a la decisión ligeros y transparentes, en Excel y basados en navegador, para cuellos de botella operativos donde hay demasiadas variables interactuando como para seguirlas mentalmente—pero donde el software empresarial pesado crea costes y complejidad innecesarios.

En lugar de construir otro panel de vanidad saturado, cada kit está diseñado en torno a una pregunta práctica:

> **«¿Qué variables operativas y financieras exactas necesitan estar en un solo lugar para que la siguiente decisión de compra o capital se vuelva matemáticamente evidente?»**

Este **kit de planificación de inventario y decisión de compra adaptativo a la demanda** une la previsión de demanda rodante, las restricciones de plazo de entrega de los proveedores, las matemáticas de stock de seguridad y la exposición de capital de trabajo en un marco autónomo que cualquier equipo de e-commerce o cadena de suministro puede auditar, personalizar y poseer para siempre.

---
*Palabras clave: plantilla Excel de planificación de inventario, hoja de cálculo calculadora de punto de reorden (ROP), fórmula de stock de seguridad en Excel, modelo de reposición de inventario e-commerce, calculadora de reabastecimiento de Shopify, rastreador de inventario Amazon FBA, planificador de órdenes de compra (PO) de cadena de suministro, hoja de cálculo de capital de trabajo de compra abierta (OTB).*

---

## Detalles técnicos

<details>
<summary><strong>Para revisores técnicos, practicantes de Excel y colaboradores</strong></summary>

---

## Arquitectura del libro

El libro sigue una arquitectura de tres capas deliberadamente separada.

En lugar de mezclar entradas, fórmulas y paneles en una sola hoja, cada hoja tiene una única responsabilidad operativa.


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

### Capas del libro

| Capa | Hoja | Responsabilidad |
|--------|-----------|----------------|
| Configuración | Setup_Config | Datos maestros de SKU, información de proveedores, plazo de entrega, MOQ, nivel de servicio y parámetros de coste |
| Datos operativos | Sales_Import | Ventas históricas importadas directamente desde Shopify, ERP u hojas de cálculo |
| Datos operativos | Inventory_Status | Inventario actual y órdenes de compra ya en tránsito |
| Cálculo | Forecast_Engine | Previsión de demanda a partir de tendencias de ventas históricas y ajustes manuales de campaña |
| Cálculo | Inventory_Planner | Stock de seguridad, punto de reorden, recomendaciones de compra y cantidades sugeridas |
| Análisis financiero | Cash_Flow_Impact | Valoración de inventario, exposición de tesorería en compras y rotación de inventario |
| Salida ejecutiva | Dashboard | Alertas de compra, resumen de KPI y lista de acciones de compra |

---

### Flujo de datos


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

Cada capa de cálculo depende únicamente de datos validados aguas arriba.

Ninguna hoja escribe valores hacia atrás en otra hoja, lo que reduce la complejidad de mantenimiento y previene referencias circulares.

---

## Tres trampas que atrapan incluso a gestores de inventario experimentados

---

### Trampa 1 — planificar en torno al inventario actual en lugar del inventario futuro

#### La decisión
El inventario parece sano hoy. La compra se pospone.

#### La suposición errónea oculta
Se supone que el inventario actual en almacén representa la disponibilidad futura. La demanda durante el plazo de entrega se ignora.

#### Antes
| Inventario actual | Ventas diarias | Decisión |
|-------------------|------------|----------|
| 1.800 unidades | 40/día | Posponer la compra |

El inventario parece suficiente.

#### Realidad
Plazo de entrega del proveedor: `70 Days`
Consumo esperado: `40 × 70 = 2,800 units`

El negocio consumirá mucho más inventario antes de que llegue la reposición.

#### Por qué falla el razonamiento
La planificación de inventario mira hacia adelante. El inventario en almacén solo tiene sentido cuando se observa junto con la demanda esperada durante el plazo de entrega del proveedor. Ignorar la demanda durante el plazo de entrega retrasa las compras hasta que los desabastecimientos se vuelven inevitables.

#### Enfoque correcto
Calcula el consumo de inventario esperado antes de que llegue la reposición. Compara después el inventario disponible con ese requisito.

#### Decisión correcta
`ORDER NOW`
La compra comienza mientras el inventario aún parece sano. Esto protege los niveles de servicio en lugar de reaccionar después de que ocurran las escaseces.

<details>
<summary>Referencia de fórmulas</summary>

Demanda durante el plazo de entrega

```

Lead Time Demand = Forecast Daily Demand × Lead Time

```
Excel
```excel
=B2#*C2#

```

---

### Trampa 2 — usar las ventas medias históricas como previsión

#### La decisión

Las cantidades de compra futuras se basan íntegramente en la media de 90 días.

#### Suposición errónea oculta

Se supone que la demanda de ventas se mantiene estable. La actividad de marketing se ignora. La aceleración reciente se ignora.

#### Antes

`90-Day Average: 30 Units / Day`
`Recommended Purchase: 2,100 Units`

#### Realidad

`Last 30 Days: 45 Units / Day`
`Trend Factor: 45 / 30 = 1.50`

La publicidad ya ha aumentado la demanda. La media histórica subestima los requisitos futuros de inventario.

#### Por qué falla el razonamiento

Las medias históricas describen el pasado. Las decisiones de compra conciernen al futuro. Ignorar la aceleración de la demanda provoca desabastecimientos repetidos incluso cuando las previsiones parecen matemáticamente correctas.

#### Enfoque correcto

Combina la demanda histórica con el impulso de ventas observado y la actividad promocional planificada.

```
Forecast = Daily Base × Trend Factor × Promotion Multiplier

```

#### Decisión correcta

Aumenta las compras antes de que ocurran las escaseces de inventario. Las previsiones se vuelven reactivas en lugar de estáticas.

Factor de tendencia

```excel
30 Day Average / 90 Day Average

```

Previsión

```excel
Forecast Daily = Base Demand * Trend Factor * Promotion Multiplier

```

Excel

```excel
=B2#*C2#*D2:D100

```

---

### Trampa 3 — tratar el inventario como un problema operativo en lugar de un problema de caja

#### La decisión

Una recomendación de compra se aprueba porque el inventario parece bajo.

#### Suposición errónea oculta

Solo se evalúa el inventario físico. Los requisitos de caja reciben poca atención.

#### Antes

`Purchasing Recommendation: 4,000 Units`
Parece razonable operativamente.

#### Realidad

`Unit Cost: $18`
`Purchase Commitment: 4,000 × 18 = $72,000`

La planificación de inventario se convierte inmediatamente en una decisión de asignación de capital.

#### Por qué falla el razonamiento

El inventario no solo ocupa espacio de almacén. También ocupa capital de trabajo. Sin visibilidad sobre los compromisos de compra, los negocios crean involuntariamente escaseces de caja mientras intentan prevenir desabastecimientos.

#### Enfoque correcto

Cada recomendación de compra debería mostrar automáticamente el compromiso financiero requerido. Operaciones y finanzas evalúan la misma recomendación simultáneamente.

#### Decisión correcta

Aprueba solo los planes de compra que satisfagan tanto la protección del inventario como la disponibilidad de caja.

Compromiso de compra

```excel
Suggested Quantity * Unit Cost

```

Excel

```excel
=XLOOKUP(...) * XLOOKUP(...)

```

---

## Escenario de ejemplo

Una empresa DTC de productos para el hogar importa noventa días de ventas de Shopify al libro. Tres SKUs se suministran desde China. El plazo medio de producción y envío es de **70 días**. El inventario actual en almacén de un SKU es de **2.350 unidades**, mientras que otras **600 unidades** ya están en tránsito.

El análisis histórico muestra:

| Métrica | Valor |
| --- | --- |
| Ventas diarias medias de 30 días | 52 unidades |
| Ventas diarias medias de 90 días | 40 unidades |
| Factor de tendencia | 1,30 |
| Multiplicador promocional | 1,20 |

El motor de previsión estima:
`Forecast Daily Demand: 52 × 1.30 × 1.20 = 81 units/day`

La demanda durante el plazo de entrega pasa a ser:
`81 × 70 = 5,670 units`

La variabilidad de las ventas históricas produce un stock de seguridad calculado de aproximadamente **620 unidades**.

El punto de reorden pasa a ser por tanto:
`5,670 + 620 = 6,290 units`

El inventario disponible equivale a:
`2,350 + 600 = 2,950 units`

Aunque el inventario en almacén parecía aceptable inicialmente, el inventario disponible ya está **3.340 unidades por debajo** del punto de reorden calculado. El planificador marca inmediatamente el SKU como **ORDER NOW**.

El motor de compras evalúa después los requisitos de MOQ y redondea la recomendación al alza hasta una cantidad de compra operativa. Cash_Flow_Impact estima simultáneamente el compromiso de compra, permitiendo a finanzas determinar si la recomendación encaja en las restricciones actuales de capital de trabajo.

En lugar de basarse únicamente en el inventario de almacén, el negocio evalúa conjuntamente el crecimiento de la demanda, el plazo de entrega del proveedor, la variabilidad del inventario, la política de compras y la exposición de tesorería antes de aprobar la compra. Esto produce una recomendación defendible tanto operativa como financieramente.

---

## Referencia de fórmulas

El libro está deliberadamente diseñado en torno a las fórmulas de matriz dinámica disponibles en las versiones modernas de Microsoft Excel. Cada hoja analítica referencia el rango de desbordamiento de SKU de la hoja maestra de configuración, permitiendo la expansión automática cuando se añaden nuevos productos.

---

### Setup_Config

#### Objetivo

Mantener una única fuente autorizada para todos los parámetros de planificación estáticos.
Los campos incluyen:

* SKU
* Nombre del producto
* Proveedor
* Plazo de entrega
* MOQ
* Nivel de servicio
* Coste unitario
* Precio de venta

#### Desbordamiento dinámico de SKU

```excel
=FILTER(B2:B100,B2:B100<>"")

```

**Objetivo:** crea una lista de SKU dinámica. Cada hoja posterior referencia este rango de desbordamiento en lugar de números de fila fijos.
**Beneficios:** sin copiar fórmulas, expansión automática del libro, sin mantenimiento al añadir productos.

---

### Sales_Import

#### Ventas medias de 30 días

```excel
=MAP(E2#, LAMBDA(sku, IFERROR(SUMIFS(C:C,B:B,sku,A:A,">="&TODAY()-30)/30, 0)))

```

**Objetivo:** calcula las ventas diarias medias recientes.

#### Ventas medias de 90 días

```excel
=MAP(E2#, LAMBDA(sku, IFERROR(SUMIFS(C:C,B:B,sku,A:A,">="&TODAY()-90)/90, 0)))

```

**Objetivo:** representa la línea base de demanda a largo plazo.

**Por qué se necesitan ambas:** comparar 30 días (impulso de demanda actual) y 90 días (demanda histórica estable) identifica aceleración o declive.

---

### Inventory_Status

```excel
=B2#+C2#

```

**Objetivo:** combina el inventario disponible y el inventario en tránsito.
**Nota operativa:** ignorar el inventario ya en tránsito suele causar compras duplicadas.

---

### Forecast_Engine

#### Factor de tendencia

```excel
=IFERROR(XLOOKUP(...) / IF(XLOOKUP(...)=0, 1, XLOOKUP(...)), 1)

```

**Interpretación:** >1 (demanda creciente), =1 (demanda estable), <1 (demanda decreciente).

#### Demanda diaria prevista

```excel
=B2#*C2#*D2:D100

```

**Objetivo:** transforma la demanda histórica en demanda de compra operativa usando las ventas base, la tendencia y los multiplicadores promocionales.

---

### Inventory_Planner

#### Demanda durante el plazo de entrega

```excel
=B2#*C2#

```

#### Desviación estándar de las ventas

```excel
=MAP(A2#, LAMBDA(sku, IFERROR(STDEV.S(FILTER(Sales_Import!C:C, Sales_Import!B:B=sku)), 0)))

```

**Objetivo:** mide la volatilidad histórica de las ventas.

#### Puntuación Z

```excel
=MAP(A2#, LAMBDA(sku, NORM.S.INV(XLOOKUP(sku, Setup_Config!A2#, Setup_Config!G2#))))

```

**Objetivo:** convierte el nivel de servicio deseado en protección estadística (p. ej., 95 % = 1,65).

#### Stock de seguridad

```excel
=ROUND(F2#*E2#*SQRT(B2#), 0)

```

**Objetivo:** protege contra la variabilidad de la demanda durante la reposición.

#### Punto de reorden

```excel
=ROUND(D2#+G2#, 0)

```

**Objetivo:** define cuándo debe comenzar la compra (demanda durante el plazo de entrega + stock de seguridad).

#### Recomendación de compra

```excel
=MAP(A2#, LAMBDA(sku, IF(Available<=ROP, "ORDER NOW", "OK")))

```

**Objetivo:** crea una señal de compra operativa.

#### Cantidad de compra sugerida

```excel
=MAP(A2#, LAMBDA(sku, LET(avail,..., rop,..., moq,..., daily,..., ss,..., target_need, (daily*30)+ss-avail, IF(avail<=rop, MAX(moq, CEILING(target_need,10)), 0))))

```

**Objetivo:** produce una cantidad de compra que satisface la MOQ, restaura el inventario y previene pedidos insuficientes.

---

### Cash_Flow_Impact

#### Valor de inventario

```excel
=XLOOKUP(...) * XLOOKUP(...)

```

#### Compromiso de compra

**Objetivo:** muestra el capital de compra requerido antes de emitir las órdenes (cantidad sugerida × coste unitario).

#### Rotación de inventario

```excel
=ROUND(sales_annual/on_hand, 1)

```

**Objetivo:** mide la eficiencia del inventario en lugar de su tamaño.

---

### Dashboard

#### Número de alertas rojas

```excel
=COUNTIF(Inventory_Planner!J2#, "ORDER NOW")

```

#### Compromiso de compra total y valor de inventario

```excel
=SUM(Cash_Flow_Impact!C2#)
=SUM(Cash_Flow_Impact!B2#)

```

#### Lista de compras dinámica

```excel
=FILTER(HSTACK(...), Inventory_Planner!J2#="ORDER NOW", "All inventory healthy")

```

**Objetivo:** produce automáticamente una lista de acciones de compra con SKU, nombre del producto, cantidad sugerida y coste de compra estimado, sin filtrado manual.

---

## Reglas de validación

| Campo | Regla de validación | Comportamiento ante error |
| --- | --- | --- |
| SKU | No puede estar vacío y debe ser único | Fila excluida de los cálculos |
| Plazo de entrega | Entero mayor que cero | Previsión no disponible |
| MOQ | Entero positivo | Recomendación de compra desactivada |
| Nivel de servicio | Entre 50 % y 99,9 % | La puntuación Z no se puede calcular |
| Coste unitario | Mayor o igual que cero | El análisis de caja devuelve cero |
| Precio de venta | Mayor que cero | Análisis de margen no disponible |
| Fecha de venta | Fecha de calendario válida | Registro ignorado |
| Cantidad de venta | No puede ser negativa | Registro excluido |
| Inventario disponible | Mayor o igual que cero | Se genera advertencia de inventario |
| Inventario en tránsito | Mayor o igual que cero | Inventario disponible ajustado |
| Multiplicador promocional | Rango recomendado 0,5–3,0 | Fuera de rango se marca para revisión |
| Demanda diaria prevista | No debe ser negativa | Recomendación de compra suprimida |
| Stock de seguridad | Limitado automáticamente a cero | Valores negativos prevenidos |
| Punto de reorden | Siempre recalculado | Se desaconseja la edición manual |
| Cantidad de compra sugerida | No puede estar por debajo de la MOQ cuando se requiere compra | Redondeada automáticamente al alza |

</details>
</details>

---

## La lógica de negocio: metodología e impacto comercial

Muchas plantillas de inventario fallan porque tratan la gestión de la cadena de suministro como un ejercicio puramente matemático de conteo. En realidad, la planificación de inventario es una **decisión de asignación de capital**. 

Este kit desplaza el foco operativo de *«¿cuánto stock hay en el almacén?»* a *«¿cómo maximizamos la rotación de inventario mientras protegemos nuestro ROI de marketing y nuestro capital de trabajo?»* 

Esta es la metodología subyacente y cómo resuelve problemas comerciales específicos:

### 1. El problema comercial: el efecto látigo DTC y la mala asignación de capital
Las marcas de e-commerce modernas operan en un entorno de alta volatilidad donde la publicidad social pagada, el marketing de influencers y la estacionalidad crean picos de demanda repentinos. 
*   **El defecto de los sistemas estáticos:** si un negocio usa un punto de reorden fijo (p. ej., «pedir siempre cuando el stock llegue a 500 unidades»), inevitablemente se quedará sin stock durante una campaña de marketing de alto ROAS, desperdiciando el gasto publicitario. Por el contrario, el exceso de pedidos inmoviliza caja crítica en bienes físicos ilíquidos.
*   **La solución:** este kit reemplaza los umbrales estáticos con un modelo de **punto de reorden adaptativo a la demanda (ROP)**. 

### 2. La metodología central (cómo funciona)

El motor de cálculo utiliza principios estándar de investigación de operaciones, modificados para bienes de consumo de rápida rotación:

*   **Stock de seguridad estadístico (desviación estándar y puntuaciones Z):**
    en lugar de adivinar un colchón, el kit mide la desviación estándar histórica (σ) de tus ventas diarias. Al fijar un nivel de servicio objetivo (p. ej., 95 %), el modelo aplica la puntuación Z correspondiente para calcular matemáticamente el número exacto de unidades de colchón necesarias para absorber picos de demanda inesperados durante el plazo de entrega del proveedor.
*   **Modificadores de demanda rodante e impulso:**
    el motor no depende únicamente de una media histórica de 90 días. Incorpora un **factor de tendencia** (comparando la velocidad de 30 días con la línea base de 90 días) y **multiplicadores promocionales**. Esta metodología garantiza que si tu gasto publicitario actual está acelerando las ventas, el consumo previsto se adapte *antes* de que ocurra el desabastecimiento.
*   **Proyección de la demanda durante el plazo de entrega:**
    la herramienta enfrenta tu demanda diaria prevista directamente con el plazo de entrega específico de cada proveedor. Demuestra matemáticamente cuántas unidades se consumirán mientras tu orden de compra está en un barco de carga.
*   **Restricciones de lógica Min-Max / MOQ:** 
    una vez superado el punto de reorden, el algoritmo calcula una cantidad de compra sugerida que satisface la cantidad mínima de pedido (MOQ) del vendedor y a la vez redondea a tamaños de lote operativamente sensatos.

### 3. El resultado comercial (valor de negocio)
Al conectar la previsión de la demanda con las métricas financieras, la herramienta genera inteligencia de negocio accionable:
*   **Para operaciones:** elimina las conjeturas sobre *cuándo* y *cuánto* pedir a través de múltiples cadenas de suministro (nacional vs internacional).
*   **Para marketing:** garantiza que la disponibilidad de producto se alinee con los calendarios de campaña, protegiendo los costes de adquisición de cliente (CAC).
*   **Para finanzas:** proporciona visibilidad inmediata sobre el **compromiso de compra ($)**. Los equipos de finanzas pueden evaluar el impacto en el capital de trabajo de una orden de compra propuesta *antes* de desplegar la caja, garantizando que el negocio se mantenga líquido.

---  

## Otras herramientas de esta serie

Este libro forma parte de una colección creciente de herramientas operativas ligeras de apoyo a la decisión, construidas para equipos que necesitan mejores decisiones sin implementar software empresarial.

Ejemplos:

* **Torre de control de previsión de flujo de caja** — vigila la liquidez, el flujo de caja operativo y los requisitos de financiación.
* **Planificador de asignación de presupuesto de marketing** — asigna el gasto publicitario entre canales usando umbrales de retorno medibles.
* **Panel de control de costes de construcción** — compara presupuestos de proyecto, compromisos, facturas y contingencias restantes.
* **Kit de análisis de gasto de compras** — sigue el rendimiento de proveedores, la concentración de compras y la utilización de contratos.
* **Panel de inteligencia de rendimiento de ventas** — vigila las tendencias de ingresos, el rendimiento de márgenes y la concentración de clientes.

Todas las herramientas siguen los mismos principios:

* Sin registro requerido
* Sin instalación requerida
* Ediciones para navegador y Excel
* Apoyo ligero a la decisión en lugar de reemplazo empresarial
* Construidas en torno a flujos analíticos repetibles en lugar de informes estáticos

---

## Licencia

Licenciado bajo la **Apache License 2.0**.

Eres libre de:

* Usar este proyecto comercialmente.
* Modificar y ampliar el libro.
* Distribuir versiones originales o modificadas.
* Incorporar el marco analítico en tus propios flujos.

Sujeto a los términos y condiciones de la Apache License 2.0.
Consulta el archivo LICENSE para el texto completo de la licencia.

---

## Agradecimientos

Este proyecto nació de los desafíos recurrentes de planificación de inventario observados en marcas de venta directa al consumidor, negocios de e-commerce y equipos de cadena de suministro que necesitaban mejores decisiones de compra sin implementar sistemas de planificación de recursos empresariales.

El objetivo no es reemplazar las plataformas ERP o MRP. El objetivo es permitir mejores decisiones operativas usando los datos que las organizaciones ya tienen.

Si este proyecto ayuda a mejorar tu proceso de planificación, las contribuciones, sugerencias y comentarios son siempre bienvenidos.

