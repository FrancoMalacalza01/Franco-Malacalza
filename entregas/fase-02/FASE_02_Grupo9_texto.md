# FASE 02 · DESCRIPCIÓN DEL PROCESO — TEXTO COMPLETO
Grupo 9 · UTN FRLP · Instalaciones Industriales 2026 · Ing. Santiago Saccon
Producto: módulo FV monocristalino PERC 540 Wp · Planta 100 MWp/año

---

## LÁMINA 01 / 03 — DIAGRAMA DE BLOQUES

Kicker: FASE 02 · DESCRIPCIÓN DEL PROCESO
Título: DIAGRAMA DE BLOQUES

### Bloque de entrada
MATERIA PRIMA
celdas · vidrio · EVA · backsheet · marco · caja J

### A · PREPARACIÓN DE CELDAS
- 101 — Inspección EL de celdas — 100% entrante
- 102 — Stringer · soldadura IR — flux + N₂

### B · ARMADO Y LAMINADO
- 103 — Lay-up + bussing — 25 °C · HR <50%
- 104 — EL pre-laminado — microfisuras
- 105 — Laminado al vacío — 145 °C · <1 mbar · 20 min  [CUELLO DE BOTELLA]

### C · TERMINACIÓN
- 106 — Recorte de bordes — rebaba EVA
- 107 — Enmarcado + caja J — silicona · IP68
- 108 — Curado — 4–6 h · 150 posiciones

### D · ENSAYO Y DESPACHO
- 109 — Flash AAA — STC · cuarto oscuro
- 110 — EL final + hi-pot — IEC 61730
- 111 — Binning + embalaje — 30 mód/pallet

### Bloque de salida
MÓDULO FV 540 Wp
almacén PT y expedición

### Banda: CALIDAD TRANSVERSAL
Tres inspecciones EL (101 · 104 · 110) · hi-pot y continuidad de tierra al 100% ·
ensayo flash con módulo patrón calibrado · certificación de diseño IEC 61215 / IEC 61730.

### Banda: SERVICIOS AUXILIARES
201 aire comprimido · 202 agua fría 12 °C · 203 extracción de humos ·
204 HVAC nave y sala lay-up · 205 N₂ PSA · 206 iluminación y TGBT.
Vacío integrado en las laminadoras 105.

### Pie de lámina
PANELES SOLARES · MÓDULO FV MONOCRISTALINO PERC · 100 MWp/AÑO

---

## LÁMINA 02 / 03 — DIAGRAMA DE FLUJO DEL PROCESO

Kicker: FASE 02 · DESCRIPCIÓN DEL PROCESO
Título: DIAGRAMA DE FLUJO DEL PROCESO

Etiqueta de la flecha de flujo:
FLUJO CONTINUO EN "I" · MP → LÍNEA → PT · TRANSPORTADORES DE RODILLOS (112)

### Bloques del flujo (6)

1) ALM. MP
   Recepción y control de celdas, vidrio, EVA y marcos
   Stock objetivo 6 días · EVA en depósito frío

2) 101 · 102
   Inspección EL y soldadura de strings
   4.357 celdas/h · 2 stringers en paralelo

3) 103 · 104
   Lay-up del sándwich y EL previo
   Sala 25 °C · HR <50% · ciclo < 2 min

4) 105
   Laminado al vacío
   Cuello de botella · 20 min · 10 módulos simultáneos

5) 106 · 107 · 108
   Recorte, enmarcado, caja J y curado
   Buffer de curado 150 posiciones (5 h)

6) 109 · 110 · 111
   Flash, hi-pot, binning y embalaje
   Clasificación por potencia · 30 módulos por pallet

### Tarjeta: PUNTOS DE CONTROL
El material avanza sólo si pasa la inspección: las celdas con microfisura salen en 101,
los strings defectuosos en 104 — antes de laminar, cuando el módulo todavía es
recuperable. Después del laminado el rechazo es destructivo.

### Tarjeta: RECHAZOS Y REPROCESO
Reproceso posible: recorte y reenmarcado (106–107) y cambio de caja J.
Rechazo definitivo: delaminación, celda rota bajo vidrio o falla de hi-pot →
gestor autorizado. Yield first-pass objetivo > 98%.

### Tarjeta: INVENTARIOS DEL FLUJO
Tres pulmones: materia prima (≈6 días), curado (150 posiciones, fijado por la química
de la silicona) y producto terminado antes de expedición. El resto de la línea trabaja
en flujo continuo, sin stock intermedio.

---

## LÁMINA 03 / 03 — CAPACIDAD, LOTE ÓPTIMO Y PLANTA

Kicker: FASE 02 · DESCRIPCIÓN DEL PROCESO
Título: CAPACIDAD, LOTE ÓPTIMO Y PLANTA

### KPIs
- 185.185 mód/año — 100 MWp ÷ 540 Wp por módulo
- 617 mód/día — 3 turnos · 300 días · 85% de utilización
- 30,3 mód/h — 6.120 h efectivas al año
- 20 min — ciclo de laminado 105: fija el ritmo de la línea

### LOTE ÓPTIMO DE COMPRA DE CELDAS
Fórmula:  Q* = √(2 · D · S / H)

- D · demanda anual de celdas ......... 26.666.640 celdas
- S · costo por pedido ................ 150 USD
- H · costo de mantener stock ......... 0,45 USD/celda·año
- Q* · lote óptimo .................... 133.333 celdas ≈ 926 módulos

[CORREGIDO] La demanda es 185.185 mód × 144 celdas, no la producción en módulos:
el EOQ gobierna la COMPRA DE CELDAS, no el lote de fabricación — la línea es de
flujo continuo. Q* equivale a ≈1,5 días de consumo, así que en la práctica se agrupa
en pedidos mensuales por el lead time de importación.

### IMPLANTACIÓN · NAVE 80 × 40 m = 3.200 m²
- ALMACÉN MP — vidrio · celdas · marcos · caja J · depósito frío EVA
- LÍNEA DE ENSAMBLE · FLUJO EN "I" — 101 EL · 102 STRG · 103 LAY-UP · 104 EL ·
  105 LAMIN. · 106 RECORT · 107 MARCO · 108 CURADO · 109 FLASH · 110 HI-POT · 111 BINN.
- OFICINAS — vestuarios · comedor
- LAB. DE CALIDAD — reensayos
- SERVICIOS AUXILIARES — 201 compresor · 202 chiller · 203 humos · 204 HVAC · 205 N₂ · 206 TGBT
- ALMACÉN PT Y EXPEDICIÓN — 5 bahías de carga
- Nota al pie del plano: ◀ INGRESO DE MATERIA PRIMA · esquema sin escala · DESPACHO ▶

### DOTACIÓN Y RÉGIMEN DE TRABAJO
30 operarios por turno × 3 turnos + mantenimiento y calidad ≈ 105 personas.
Régimen 24 h × 5 días con parada programada de fin de semana para mantenimiento
preventivo de laminadoras; 300 días hábiles al año.

---

## QUÉ SE CORRIGIÓ RESPECTO DE LA ENTREGA ORIGINAL

- Ritmo de producción: 617 mód/día con 3 turnos, 300 días y 85% de utilización
  (antes 507 mód/día sobre 365 días, que suponía trabajar todos los días del año).
- Lote óptimo: D corregida a 26,67 M celdas/año → Q* ≈ 133.333 celdas (≈926 módulos).
  El valor anterior (30.700 celdas) partía de una demanda mal calculada y se
  presentaba como lote de producción.
- Nomenclatura: tags unificados 101–112 (proceso) y 201–206 (servicios).
  Se eliminaron los duplicados E-101 / C-101 de la versión anterior.
- Secuencia: se agregaron recorte, curado (4–6 h), EL post-laminado y hi-pot,
  ausentes en el flujo original; el flash pasó a su posición real, después del curado.
- Planta: nave de 3.200 m² (80 × 40 m) y 30 operarios por turno, en lugar de
  3.500 m² y 22 operarios.
- Pendiente de validar: S = 150 USD/pedido y H = 0,45 USD/celda·año se tomaron de la
  entrega original; conviene contrastar H contra el costo real de la celda M10
  antes de la defensa.

---

## PALETA Y TIPOGRAFÍA (por si lo rearmás en otra herramienta)

- Navy (títulos, barras, tablas): #0F2233
- Navy secundario: #1C3949 · Navy borde: #2A5062
- Verde acento: #2E9E73 · Verde oscuro (texto sobre claro): #1F7A58 · Verde claro (fondos): #E6F3EE
- Ámbar (alertas / almacenes): #D98B2B · Ámbar claro: #FBEFDD
- Fondo de lámina: #F3F5F6 · Tarjetas: #FFFFFF · Líneas: #DCE3E6 · Cebra de tabla: #EDF1F2
- Texto: #253742 · Texto atenuado: #78888F
- Tipografía: Arial (títulos en bold, kickers en mayúscula con tracking amplio)
- Formato: 16:9 · header navy con filete verde de 3 px · pie con paginación 01/03
