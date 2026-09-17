const Pptx = require('pptxgenjs');
const { C, F, M, W, card, cardTitle, kpi, baseSlide, table, hBar, pvGrid } = require('./lib');

const p = new Pptx();
p.defineLayout({ name: 'W169', width: 10, height: 5.625 });
p.layout = 'W169';
p.author = 'Grupo 9 · UTN FRLP';
p.title = 'Fase 03 · Equipos, fabricación y consumos específicos';
p.subject = 'Instalaciones Industriales 2026 · Módulo FV monocristalino PERC · 100 MWp/año';

/* ════════════════════════════ 01 · PORTADA ════════════════════════════ */
{
  const s = p.addSlide();
  s.background = { color: C.navy };

  // trama fotovoltaica decorativa
  s.addShape(p.ShapeType.roundRect, {
    x: 7.06, y: 0.44, w: 2.42, h: 2.52, rectRadius: 0.04,
    fill: { color: C.navy2 }, line: { color: C.navy3, width: 1 },
  });
  pvGrid(s, p, 7.2, 0.58, 0, 0, 6, 6, 0.33, 0.045, { color: C.navy, lineColor: '20475C' });
  s.addShape(p.ShapeType.rect, { x: 7.2, y: 1.725, w: 2.14, h: 0.02, fill: { color: C.navy3 }, line: { none: true } });
  s.addText('144 CELDAS HALF-CUT  ·  2.278 × 1.134 mm  ·  2,58 m²', {
    x: 6.86, y: 3.04, w: 2.82, h: 0.2, fontFace: F, fontSize: 6.2, color: '7FA0AF',
    align: 'center', charSpacing: 0.4, margin: 0,
  });

  // barra de acento
  s.addShape(p.ShapeType.rect, { x: 0, y: 0, w: 0.1, h: 5.625, fill: { color: C.green }, line: { none: true } });

  s.addText('FASE 03  ·  EQUIPOS, FABRICACIÓN Y CONSUMOS ESPECÍFICOS', {
    x: 0.55, y: 0.72, w: 6.3, h: 0.24, fontFace: F, fontSize: 9, bold: true,
    color: C.green, charSpacing: 2.2, valign: 'middle',
  });
  s.addText('INGENIERÍA DE PLANTA\nY CONSUMOS ESPECÍFICOS', {
    x: 0.55, y: 1.02, w: 6.4, h: 1.25, fontFace: F, fontSize: 28, bold: true,
    color: C.white, lineSpacingMultiple: 1.05, valign: 'middle',
  });
  s.addText('Módulo fotovoltaico monocristalino PERC  ·  Planta de 100 MWp/año', {
    x: 0.55, y: 2.32, w: 6.4, h: 0.26, fontFace: F, fontSize: 11.5, color: 'AFC4CE', valign: 'middle',
  });
  s.addShape(p.ShapeType.rect, { x: 0.55, y: 2.74, w: 1.1, h: 0.025, fill: { color: C.green }, line: { none: true } });
  s.addText('GRUPO 9   ·   UTN FRLP   ·   INSTALACIONES INDUSTRIALES   ·   ING. SANTIAGO SACCON   ·   2026', {
    x: 0.55, y: 2.88, w: 6.5, h: 0.22, fontFace: F, fontSize: 7.2, color: '8AA3AF', charSpacing: 0.8, valign: 'middle',
  });

  const tiles = [
    ['540', 'Wp', 'potencia por módulo'],
    ['185.185', 'mód/año', 'producción nominal'],
    ['30,3', 'mód/h', 'ritmo de línea'],
    ['408', 'kW', 'potencia instalada'],
  ];
  tiles.forEach((t, i) => {
    kpi(s, p, 0.55 + i * 2.27, 3.46, 2.13, 1.06, t[0], t[1], t[2], {
      fill: C.navy2, line: C.navy3, vc: C.white, lc: '9DB4BF', accent: C.green, vs: 17,
    });
  });

  s.addText('Valores de ingeniería conceptual estimados, a validar con la base de cálculo Excel y catálogos de proveedor.', {
    x: 0.55, y: 4.78, w: 8.9, h: 0.22, fontFace: F, fontSize: 7, color: '6E8894', italic: true, valign: 'middle',
  });
}

/* ═══════════════════ 02 · POTENCIA Y CAPACIDAD ═══════════════════ */
{
  const s = baseSlide(p, 'FASE 03 · DEFINICIÓN DEL PRODUCTO', 'POTENCIA DEL PANEL Y CAPACIDAD', 2);

  // — módulo
  card(s, p, M, 1.12, 2.25, 3.88, { accent: C.navy });
  cardTitle(s, 0.6, 1.24, 1.9, 'EL PRODUCTO');
  s.addShape(p.ShapeType.roundRect, {
    x: 0.82, y: 1.55, w: 1.45, h: 2.8, rectRadius: 0.02,
    fill: { color: 'E9EDEF' }, line: { color: C.mut, width: 0.75 },
  });
  pvGrid(s, p, 0.875, 1.605, 0, 0, 6, 12, 0.213, 0.021, { color: C.navy2, lineColor: C.navy3 });
  s.addShape(p.ShapeType.rect, { x: 0.875, y: 2.95, w: 1.36, h: 0.025, fill: { color: 'E9EDEF' }, line: { none: true } });
  s.addText('144 celdas half-cut M10 (182 mm)\n2.278 × 1.134 mm  ·  28,3 kg', {
    x: 0.5, y: 4.42, w: 2.09, h: 0.45, fontFace: F, fontSize: 7.2, color: C.txt,
    align: 'center', lineSpacingMultiple: 1.05, margin: 0,
  });

  // — ficha técnica
  card(s, p, 2.79, 1.12, 3.0, 3.88);
  cardTitle(s, 2.97, 1.24, 2.7, 'FICHA TÉCNICA DEL MÓDULO');
  table(s, 2.91, 1.5, 2.76, ['Parámetro', 'Valor'], [
    ['Tecnología', 'Mono PERC · M10 (182 mm)'],
    ['Celdas', '144 half-cut · η celda 23%'],
    ['Área', '2,58 m²'],
    ['Eficiencia módulo', '≈ 21%'],
    ['Vidrio', '3,2 mm templado AR'],
    ['Encapsulante', 'EVA + backsheet'],
    ['Marco / caja J', 'Al anodizado · IP68 · MC4'],
    ['Masa', '28,3 kg'],
    ['Voc / Isc *', '49,5 V / 13,9 A'],
    ['Vmp / Imp *', '41,6 V / 13,0 A'],
  ], [1.08, 1.68], { boldFirst: true, rowH: 0.238, fs: 7.6 });

  s.addText('*  Referencia de fichas comerciales de módulos 540 W PERC; a validar con el proveedor seleccionado.', {
    x: 2.97, y: 4.5, w: 2.66, h: 0.4, fontFace: F, fontSize: 6.5, color: C.mut, lineSpacingMultiple: 1.0, margin: 0,
  });

  // — cálculo de potencia
  card(s, p, 5.91, 1.12, 3.67, 1.5, { accent: C.green });
  cardTitle(s, 6.09, 1.24, 3.3, 'CÁLCULO DE POTENCIA EN STC');
  s.addShape(p.ShapeType.roundRect, {
    x: 6.09, y: 1.5, w: 3.31, h: 0.42, rectRadius: 0.03,
    fill: { color: C.greenL }, line: { none: true },
  });
  s.addText([
    { text: 'P = A × G × η', options: { fontSize: 13, bold: true, color: C.greenD, fontFace: F } },
  ], { x: 6.09, y: 1.5, w: 3.31, h: 0.42, align: 'center', valign: 'middle', margin: 0 });
  s.addText([
    { text: '2,58 m²  ×  1.000 W/m²  ×  0,21  =  ', options: { fontSize: 9, color: C.txt, fontFace: F } },
    { text: '540 Wp', options: { fontSize: 11, bold: true, color: C.navy, fontFace: F } },
  ], { x: 6.09, y: 1.97, w: 3.31, h: 0.26, align: 'center', valign: 'middle', margin: 0 });
  s.addText('La eficiencia del módulo es menor a la de celda por pérdidas CTM (2–3%) y por el área inactiva del marco.', {
    x: 6.09, y: 2.24, w: 3.31, h: 0.32, fontFace: F, fontSize: 6.8, color: C.mut, lineSpacingMultiple: 1.0, margin: 0,
  });

  // — KPIs de capacidad
  const k = [
    ['185.185', 'mód/año', '100.000.000 Wp ÷ 540 Wp', C.green],
    ['6.120', 'h/año', '300 días × 24 h × 85% util.', C.navy],
    ['30,3', 'mód/h', 'ritmo de línea efectivo', C.green],
    ['4.357', 'celdas/h', '144 celdas × ritmo de línea', C.navy],
  ];
  k.forEach((t, i) => {
    kpi(s, p, 5.91 + (i % 2) * 1.88, 2.76 + Math.floor(i / 2) * 1.15, 1.79, 1.06, t[0], t[1], t[2], { accent: t[3], vs: 14 });
  });
}

/* ═══════════════════════ 03 · EQUIPOS ═══════════════════════ */
{
  const s = baseSlide(p, 'FASE 03 · EQUIPAMIENTO', 'EQUIPOS A UTILIZAR Y DIMENSIONAMIENTO', 3);

  card(s, p, M, 1.12, 5.55, 3.88, { accent: C.green });
  cardTitle(s, 0.6, 1.24, 4.0, 'LÍNEA DE PROCESO  ·  TAGS 101 – 112');
  table(s, 0.6, 1.5, 5.19, ['Tag', 'Equipo', 'Cant.', 'kW inst.', 'Criterio de dimensionamiento'], [
    ['101', 'Tester EL de celdas', '1', '3,0', 'Inspección del 100% de celdas'],
    ['102', 'Stringer IR', '2', '24,0', '4.357 celdas/h ÷ ~2.400 h⁻¹ c/u'],
    ['103', 'Lay-up automático + bussing', '1', '8,0', '1 línea · ciclo < 2 min'],
    ['104', 'EL pre-laminado', '1', '2,0', 'Microfisuras antes de laminar'],
    ['105', 'Laminadora 6 posiciones', '2', '160,0', '30 mód/h × 20 min = 10 simult.'],
    ['106', 'Recortadora de bordes', '1', '3,0', 'Elimina rebaba de EVA'],
    ['107', 'Enmarcadora + caja J', '1', '10,0', 'Marco Al + silicona + J-box'],
    ['108', 'Racks de curado', '1', '2,0', '30 mód/h × 5 h = 150 posiciones'],
    ['109', 'Simulador flash AAA', '1', '5,0', 'Ciclo ~15 s · cuarto oscuro'],
    ['110', 'EL final + hi-pot', '1', '3,0', 'Ensayo de rutina IEC 61730'],
    ['111', 'Binning + embalaje', '1', '6,0', 'Clasif. potencia · 30 mód/pallet'],
    ['112', 'Transportadores', '1', '15,0', 'Rodillos entre puestos'],
  ], [0.42, 1.68, 0.42, 0.56, 2.11], { boldFirst: true, rowH: 0.242, fs: 7.4, align: ['center', 'left', 'center', 'right', 'left'] });
  s.addText('El laminado (105) fija el ritmo: es el cuello de botella y el mayor consumidor de la planta.', {
    x: 0.6, y: 4.65, w: 5.19, h: 0.22, fontFace: F, fontSize: 7, color: C.mut, italic: true, valign: 'middle', margin: 0,
  });

  // servicios auxiliares
  card(s, p, 6.13, 1.12, 3.45, 2.05, { accent: C.amber });
  cardTitle(s, 6.31, 1.24, 3.1, 'SERVICIOS AUXILIARES  ·  TAGS 201 – 206');
  table(s, 6.31, 1.5, 3.09, ['Tag', 'Equipo', 'Cant.', 'kW'], [
    ['201', 'Compresor de tornillo', '1 + 1', '44,0'],
    ['202', 'Chiller de agua 12 °C', '1', '30,0'],
    ['203', 'Extracción de humos', '1', '5,5'],
    ['204', 'HVAC nave + sala lay-up', '1', '60,0'],
    ['205', 'Generador N₂ PSA', '1', '2,0'],
    ['206', 'Iluminación + oficinas', '1', '25,0'],
  ], [0.4, 1.72, 0.45, 0.52], { boldFirst: true, rowH: 0.2, fs: 7.4, align: ['center', 'left', 'center', 'right'] });

  // potencia instalada
  card(s, p, 6.13, 3.29, 3.45, 1.71, { accent: C.navy });
  cardTitle(s, 6.31, 3.41, 3.1, 'POTENCIA ELÉCTRICA INSTALADA');
  s.addText([
    { text: '408', options: { fontSize: 26, bold: true, color: C.navy, fontFace: F } },
    { text: ' kW', options: { fontSize: 11, bold: true, color: C.mut, fontFace: F } },
  ], { x: 6.31, y: 3.63, w: 1.5, h: 0.45, valign: 'middle', margin: 0 });
  s.addText('Transformador sugerido\n630 kVA  (fs 0,7 + reserva)', {
    x: 7.75, y: 3.63, w: 1.65, h: 0.45, fontFace: F, fontSize: 7, color: C.txt,
    align: 'right', valign: 'middle', lineSpacingMultiple: 1.0, margin: 0,
  });
  // barra apilada proceso / servicios
  const bw = 3.09, prop = 241 / 408;
  s.addShape(p.ShapeType.rect, { x: 6.31, y: 4.16, w: bw * prop, h: 0.17, fill: { color: C.navy }, line: { none: true } });
  s.addShape(p.ShapeType.rect, { x: 6.31 + bw * prop, y: 4.16, w: bw * (1 - prop), h: 0.17, fill: { color: C.green }, line: { none: true } });
  s.addText('■ Proceso  241 kW  (59%)', {
    x: 6.31, y: 4.38, w: 1.6, h: 0.2, fontFace: F, fontSize: 6.8, color: C.navy, valign: 'middle', margin: 0,
  });
  s.addText('■ Servicios  167 kW  (41%)', {
    x: 7.8, y: 4.38, w: 1.6, h: 0.2, fontFace: F, fontSize: 6.8, color: C.greenD, align: 'right', valign: 'middle', margin: 0,
  });
  s.addText('La bomba de vacío está integrada en las laminadoras 105.', {
    x: 6.31, y: 4.62, w: 3.09, h: 0.2, fontFace: F, fontSize: 6.6, color: C.mut, italic: true, valign: 'middle', margin: 0,
  });
}

/* ═══════════════════════ 04 · LAYOUT ═══════════════════════ */
{
  const s = baseSlide(p, 'FASE 03 · IMPLANTACIÓN', 'UBICACIÓN DE LOS EQUIPOS EN PLANTA', 4);

  card(s, p, M, 1.12, 6.05, 3.88);
  cardTitle(s, 0.58, 1.22, 4.5, 'LAYOUT DE NAVE  ·  80 × 40 m = 3.200 m²');

  const zone = (x, y, w, h, fill, line, title, sub, tc) => {
    s.addShape(p.ShapeType.roundRect, {
      x, y, w, h, rectRadius: 0.03, fill: { color: fill }, line: { color: line, width: 0.75 },
    });
    s.addText([
      { text: title, options: { fontSize: 6.6, bold: true, color: tc || C.navy, fontFace: F, breakLine: true } },
      ...(sub ? [{ text: sub, options: { fontSize: 5.6, color: C.mut, fontFace: F } }] : []),
    ], { x: x + 0.03, y, w: w - 0.06, h, align: 'center', valign: 'middle', lineSpacingMultiple: 1.05, margin: 0 });
  };

  // envolvente de la nave
  s.addShape(p.ShapeType.rect, {
    x: 0.55, y: 1.45, w: 5.79, h: 3.2, fill: { color: 'FAFBFB' }, line: { color: C.navy, width: 1.25 },
  });

  zone(0.6, 1.5, 0.74, 2.35, C.amberL, C.amber, 'ALMACÉN\nMP', 'vidrio · celdas\nmarcos · J-box');
  zone(0.6, 3.92, 0.74, 0.68, 'E8EEF0', C.mut, 'DEPÓSITO\nFRÍO EVA', '');

  // banda de línea de proceso
  s.addShape(p.ShapeType.roundRect, {
    x: 1.42, y: 1.5, w: 3.92, h: 1.55, rectRadius: 0.03,
    fill: { color: C.greenL }, line: { color: C.green, width: 0.75 },
  });
  s.addText('LÍNEA DE ENSAMBLE  ·  FLUJO EN "I"', {
    x: 1.46, y: 1.55, w: 3.84, h: 0.16, fontFace: F, fontSize: 5.8, bold: true, margin: 0,
    color: C.greenD, charSpacing: 0.6, valign: 'middle',
  });
  const chips = [
    ['101', 'EL'], ['102', 'STRG'], ['103', 'LAY-UP'], ['104', 'EL'], ['105', 'LAMIN.'], ['106', 'RECORT'],
    ['107', 'MARCO'], ['108', 'CURADO'], ['109', 'FLASH'], ['110', 'HI-POT'], ['111', 'BINN.'],
  ];
  chips.forEach((c, i) => {
    const x = 1.5 + i * 0.345;
    const hi = c[0] === '105';
    s.addShape(p.ShapeType.roundRect, {
      x, y: 1.76, w: 0.305, h: 0.72, rectRadius: 0.03,
      fill: { color: hi ? C.navy : C.white }, line: { color: hi ? C.navy : C.green, width: 0.75 },
    });
    s.addText(c[0], {
      x, y: 1.8, w: 0.305, h: 0.22, fontFace: F, fontSize: 7, bold: true,
      color: hi ? C.white : C.navy, align: 'center', valign: 'middle', margin: 0,
    });
    s.addText(c[1], {
      x: x - 0.04, y: 2.02, w: 0.385, h: 0.42, fontFace: F, fontSize: 5.2,
      color: hi ? 'BFD4DD' : C.mut, align: 'center', valign: 'top', margin: 0,
    });
  });
  s.addShape(p.ShapeType.rightArrow, {
    x: 1.5, y: 2.58, w: 3.76, h: 0.14, fill: { color: 'C9E3D8' }, line: { none: true },
  });
  s.addText('112  ·  TRANSPORTADORES DE RODILLOS', {
    x: 1.5, y: 2.58, w: 3.76, h: 0.14, fontFace: F, fontSize: 5.4, bold: true,
    color: C.greenD, align: 'center', valign: 'middle', margin: 0,
  });
  s.addText('105 · laminado: cuello de botella', {
    x: 1.46, y: 2.78, w: 3.84, h: 0.16, fontFace: F, fontSize: 5.6, color: C.mut, italic: true,
    align: 'right', valign: 'middle', margin: 0,
  });

  zone(1.42, 3.12, 0.92, 1.48, C.white, C.line, 'OFICINAS', 'vestuarios\ncomedor');
  zone(2.42, 3.12, 0.92, 1.48, C.white, C.line, 'LAB. DE\nCALIDAD', 'reensayos');
  zone(3.42, 3.12, 1.92, 1.48, 'E8EEF0', C.mut, 'SERVICIOS AUXILIARES', '201 compresor · 202 chiller · 203 humos\n204 HVAC · 205 N₂ · 206 TGBT');
  zone(5.42, 1.5, 0.87, 3.1, C.amberL, C.amber, 'ALMACÉN PT\nY EXPEDICIÓN', '5 bahías\nde carga');

  s.addText('◀  INGRESO DE MATERIA PRIMA', {
    x: 0.55, y: 4.72, w: 2.3, h: 0.2, fontFace: F, fontSize: 6, bold: true, color: C.amber, valign: 'middle', margin: 0,
  });
  s.addText('Esquema funcional sin escala  ·  pasillos 1,2 m peatonal / 3 m autoelevador', {
    x: 2.1, y: 4.72, w: 2.9, h: 0.2, fontFace: F, fontSize: 5.8, color: C.mut, align: 'center', valign: 'middle', margin: 0,
  });
  s.addText('DESPACHO DE PRODUCTO  ▶', {
    x: 4.4, y: 4.72, w: 1.94, h: 0.2, fontFace: F, fontSize: 6, bold: true, color: C.amber,
    align: 'right', valign: 'middle', margin: 0,
  });

  // criterios
  card(s, p, 6.6, 1.12, 2.98, 3.88, { accent: C.green });
  cardTitle(s, 6.78, 1.24, 2.6, 'CRITERIOS DE UBICACIÓN');
  const crit = [
    ['Flujo lineal en "I"', 'MP y PT en lados opuestos: sin cruces ni retrocesos de material.'],
    ['Servicios junto al laminado', 'Menor recorrido de agua fría, aire y potencia al mayor consumidor.'],
    ['Sala controlada de lay-up', '25 °C y HR < 50% protegen el EVA antes de laminar.'],
    ['Curado antes del flash', 'Buffer de 150 posiciones: evita frenar la línea 4–6 h.'],
    ['Cuarto oscuro para el flash', 'El simulador AAA exige luz ambiente controlada.'],
    ['Laboratorio central', 'Próximo a flash e hi-pot para reensayos rápidos.'],
  ];
  crit.forEach((c, i) => {
    const y = 1.55 + i * 0.57;
    s.addShape(p.ShapeType.rect, { x: 6.78, y: y + 0.055, w: 0.07, h: 0.07, fill: { color: C.green }, line: { none: true } });
    s.addText(c[0], {
      x: 6.94, y: y, w: 2.5, h: 0.18, fontFace: F, fontSize: 7.6, bold: true, color: C.navy, valign: 'middle', margin: 0,
    });
    s.addText(c[1], {
      x: 6.94, y: y + 0.18, w: 2.5, h: 0.36, fontFace: F, fontSize: 6.6, color: C.txt,
      valign: 'top', lineSpacingMultiple: 1.0, margin: 0,
    });
  });
}

/* ═════════════ 05 · REQUERIMIENTOS DE FABRICACIÓN ═════════════ */
{
  const s = baseSlide(p, 'FASE 03 · CONDICIONES DE PROCESO', 'REQUERIMIENTOS PUNTUALES DE FABRICACIÓN', 5);

  card(s, p, M, 1.12, 6.4, 3.88, { accent: C.navy });
  cardTitle(s, 0.6, 1.24, 5.0, 'CONDICIONES CRÍTICAS POR ETAPA');
  table(s, 0.6, 1.5, 6.04, ['Etapa', 'Condición / valor de consigna', 'Motivo / norma'], [
    ['Ambiente general', '25 ± 2 °C · HR < 50%', 'Estabilidad dimensional y del EVA'],
    ['Almacén de EVA', '< 25 °C · seco · FIFO por vencimiento', 'Evita pre-curado y humedad'],
    ['Soldadura (102)', 'IR controlada · flux · extracción · N₂', 'Uniones sin microfisuras'],
    ['Lay-up (103)', 'Sala limpia · guantes · protección ESD', 'Grasa y polvo generan delaminación'],
    ['Laminado (105)', '145 °C · vacío < 1 mbar · ~20 min', 'Gel content del EVA > 80% por lote'],
    ['Curado (108)', '4 – 6 h a temperatura ambiente', 'Adhesión de silicona y caja J'],
    ['Flash (109)', '1.000 W/m² · AM1.5 · 25 °C', 'IEC 60904 · módulo patrón calibrado'],
    ['Seguridad eléctrica (110)', 'Hi-pot + continuidad de tierra al 100%', 'IEC 61730 (ensayo de rutina)'],
    ['Certificación de diseño', 'Ensayos de tipo en laboratorio externo', 'IEC 61215 / IEC 61730'],
  ], [1.53, 2.36, 2.15], { boldFirst: true, rowH: 0.33, fs: 7.5 });

  const q = [
    ['145', '°C', 'temperatura de laminado', C.amber],
    ['< 1', 'mbar', 'vacío en la laminadora', C.navy],
    ['1.000', 'W/m²', 'irradiancia STC en el flash', C.amber],
    ['100', '%', 'módulos con EL + hi-pot', C.green],
  ];
  q.forEach((t, i) => {
    kpi(s, p, 7.0, 1.12 + i * 1.0, 2.58, 0.88, t[0], t[1], t[2], { accent: t[3], vs: 15 });
  });
}

/* ═══════════════ 06 · ENERGÍA Y MATERIALES ═══════════════ */
{
  const s = baseSlide(p, 'FASE 03 · CONSUMOS ESPECÍFICOS', 'ENERGÍA Y MATERIALES', 6);

  const e = [
    ['1.400', 'MWh/año', 'consumo eléctrico total', C.navy, C.card],
    ['7,6', 'kWh/mód', 'energía por unidad producida', C.green, C.card],
    ['14,0', 'MWh/MWp', 'energía por potencia instalada', C.green, C.card],
    ['267', 'kWh/t', 'guía 80–250: por encima del rango', C.amber, C.amberL],
  ];
  e.forEach((t, i) => {
    kpi(s, p, M + (i % 2) * 2.31, 1.12 + Math.floor(i / 2) * 0.96, 2.19, 0.86, t[0], t[1], t[2], {
      accent: t[3], fill: t[4], vs: 14, lc: i === 3 ? C.amber : C.mut,
    });
  });

  card(s, p, M, 3.06, 4.5, 1.94, { accent: C.green });
  cardTitle(s, 0.6, 3.16, 4.1, 'DESGLOSE DE ENERGÍA POR USO  ·  MWh/AÑO');
  const usos = [
    ['Laminado (105)', 441, C.navy],
    ['HVAC (204)', 259, C.green],
    ['Chiller (202)', 130, C.green],
    ['Ilum. + oficinas', 126, C.green],
    ['Stringers (102)', 103, C.green],
    ['Aire comprimido', 95, C.green],
    ['Resto de equipos', 247, C.mut],
  ];
  usos.forEach((u, i) => {
    hBar(s, p, 0.6, 3.46 + i * 0.205, 4.14, u[0], u[1], 441, String(u[1]), u[2]);
  });

  card(s, p, 5.08, 1.12, 4.5, 2.66);
  cardTitle(s, 5.26, 1.24, 4.1, 'MATERIALES  ·  BOM POR MÓDULO');
  table(s, 5.26, 1.5, 4.14, ['Material', 'kg/mód', 'Scrap', 't/año'], [
    ['Vidrio 3,2 mm AR', '20,7', '0,5%', '3.852'],
    ['Marco de aluminio', '2,8', '1,0%', '524'],
    ['EVA (2 capas)', '2,2', '7,0%', '436'],
    ['Backsheet', '0,9', '7,0%', '178'],
    ['Celdas PERC', '0,8', '1,0%', '150'],
    ['Ribbon de cobre', '0,3', '3,0%', '57'],
    ['Caja J + silicona', '0,6', '2,0%', '113'],
    ['TOTAL', '28,3', '1,3%', '5.311'],
  ], [1.74, 0.78, 0.76, 0.86], { boldFirst: true, rowH: 0.225, fs: 7.5, totalRow: true, align: ['left', 'right', 'right', 'right'] });
  s.addText('Vidrio y aluminio concentran el 83% de la masa del módulo.', {
    x: 5.26, y: 3.5, w: 4.14, h: 0.2, fontFace: F, fontSize: 6.6, color: C.mut, italic: true, valign: 'middle', margin: 0,
  });

  const m = [
    ['53', 't/MWp', 'materiales consumidos', C.navy],
    ['185', 't/año', 'embalaje: pallet + film', C.green],
    ['7%', '', 'scrap de EVA: el mayor', C.amber],
  ];
  m.forEach((t, i) => {
    kpi(s, p, 5.08 + i * 1.54, 3.9, 1.42, 1.1, t[0], t[1], t[2], { accent: t[3], vs: 14 });
  });
}

/* ═══════════ 07 · AGUA, EFLUENTES Y EMISIONES ═══════════ */
{
  const s = baseSlide(p, 'FASE 03 · CONSUMOS ESPECÍFICOS', 'AGUA, EFLUENTES Y EMISIONES', 7);

  const panel = (x, y, accent, title, vals, note) => {
    card(s, p, x, y, 4.5, 1.9, { accent });
    s.addShape(p.ShapeType.roundRect, {
      x: x + 0.18, y: y + 0.15, w: 0.15, h: 0.15, rectRadius: 0.02,
      fill: { color: accent }, line: { none: true },
    });
    s.addText(title, {
      x: x + 0.42, y: y + 0.13, w: 3.9, h: 0.2, fontFace: F, fontSize: 9, bold: true, margin: 0,
      color: C.navy, charSpacing: 0.8, valign: 'middle',
    });
    s.addShape(p.ShapeType.rect, { x: x + 0.18, y: y + 0.42, w: 4.14, h: 0.008, fill: { color: C.line }, line: { none: true } });
    vals.forEach((v, i) => {
      const vx = x + 0.18 + i * 1.42;
      s.addText(v[0], {
        x: vx, y: y + 0.52, w: 1.36, h: 0.42, fontFace: F, fontSize: 19, bold: true, color: C.navy, valign: 'middle', margin: 0,
      });
      s.addText(v[1], {
        x: vx, y: y + 0.94, w: 1.36, h: 0.2, fontFace: F, fontSize: 7, bold: true, color: accent,
        charSpacing: 0.4, valign: 'middle', margin: 0,
      });
    });
    s.addText(note, {
      x: x + 0.18, y: y + 1.2, w: 4.14, h: 0.55, fontFace: F, fontSize: 6.8, color: C.txt,
      valign: 'top', lineSpacingMultiple: 1.05, margin: 0,
    });
  };

  panel(M, 1.12, C.green, 'AGUA', [['2.340', 'm³/AÑO'], ['0,45', 'm³/t'], ['12,6', 'L/MÓDULO']],
    'Chiller en circuito cerrado (reposición 0,5 m³/día) · sanitario 105 personas × 60 L/día · limpieza 1 m³/día.\nDentro del rango de guía (0,5–2,5 m³/t): no hay agua de proceso.');

  panel(5.08, 1.12, C.navy, 'EFLUENTES LÍQUIDOS', [['2.106', 'm³/AÑO'], ['0,40', 'm³/t'], ['0,2', 'kg DQO/t']],
    'Cloacal asimilable (90% del agua consumida) · DQO ~500 mg/L · sin efluente de proceso.\nDQO por debajo del rango de guía (1–10 kg/t) por ausencia de procesos húmedos.');

  panel(M, 3.12, C.amber, 'RESIDUOS SÓLIDOS', [['70', 't/AÑO SCRAP'], ['185', 't/AÑO EMBAL.'], ['1,3', '% SCRAP']],
    'Vidrio, aluminio y cobre → reciclado · EVA, backsheet y silicona → residuo especial.\nCeldas rotas → gestor autorizado (Ley 24.051 y normativa provincial).');

  panel(5.08, 3.12, C.navy, 'EMISIONES GASEOSAS', [['560', 't CO₂/AÑO'], ['107', 'kg CO₂/t'], ['5,6', 't CO₂/MWp']],
    'Indirectas de red eléctrica, factor 0,40 t CO₂/MWh (verificar valor vigente CAMMESA).\nVOC de flux y ácido acético del EVA → captados por extracción 203.');
}

/* ═══════════ 08 · BALANCE Y CONCLUSIONES ═══════════ */
{
  const s = baseSlide(p, 'FASE 03 · CIERRE', 'BALANCE DE MATERIA Y ENERGÍA', 8);

  // balance de materia
  card(s, p, M, 1.12, 4.5, 2.35, { accent: C.green });
  cardTitle(s, 0.6, 1.24, 4.1, 'BALANCE DE MATERIA  ·  t/AÑO');

  s.addShape(p.ShapeType.roundRect, {
    x: 0.6, y: 1.54, w: 1.32, h: 1.02, rectRadius: 0.03,
    fill: { color: C.navy }, line: { none: true },
  });
  s.addText([
    { text: '5.496\n', options: { fontSize: 17, bold: true, color: C.white, fontFace: F } },
    { text: 'ENTRADAS\n', options: { fontSize: 7, bold: true, color: C.green, fontFace: F, charSpacing: 0.8 } },
    { text: 'materiales + embalaje', options: { fontSize: 6, color: 'A9BEC8', fontFace: F } },
  ], { x: 0.6, y: 1.54, w: 1.32, h: 1.02, align: 'center', valign: 'middle', lineSpacingMultiple: 1.05, margin: 0 });

  s.addShape(p.ShapeType.rightArrow, {
    x: 1.99, y: 1.95, w: 0.28, h: 0.2, fill: { color: C.mut }, line: { none: true },
  });

  const out = [
    ['5.426', 'MÓDULOS EMBALADOS', C.greenL, C.greenD, 2.34, 1.54, 2.4, 0.46],
    ['70', 'SCRAP', 'F0F3F4', C.txt, 2.34, 2.07, 1.17, 0.49],
    ['≈ 0', 'VOC Y HUMEDAD', 'F0F3F4', C.txt, 3.57, 2.07, 1.17, 0.49],
  ];
  out.forEach(o => {
    s.addShape(p.ShapeType.roundRect, {
      x: o[4], y: o[5], w: o[6], h: o[7], rectRadius: 0.03,
      fill: { color: o[2] }, line: { color: C.line, width: 0.5 },
    });
    s.addText([
      { text: o[0] + '   ', options: { fontSize: 11, bold: true, color: o[3], fontFace: F } },
      { text: o[1], options: { fontSize: 6.2, bold: true, color: C.mut, fontFace: F, charSpacing: 0.5 } },
    ], { x: o[4] + 0.05, y: o[5], w: o[6] - 0.1, h: o[7], align: 'center', valign: 'middle', margin: 0 });
  });

  s.addShape(p.ShapeType.roundRect, {
    x: 0.6, y: 2.68, w: 4.14, h: 0.32, rectRadius: 0.03,
    fill: { color: C.greenL }, line: { none: true },
  });
  s.addText([
    { text: 'CIERRE DE MATERIA  ≈ 100%', options: { fontSize: 8.5, bold: true, color: C.greenD, fontFace: F } },
    { text: '      guía 98 – 102%', options: { fontSize: 7, color: C.txt, fontFace: F } },
  ], { x: 0.72, y: 2.68, w: 3.9, h: 0.32, valign: 'middle', margin: 0 });

  s.addText('Entradas = 5.311 t de materiales + 185 t de embalaje  ·  VOC y humedad < 0,1%, no cuantificados.', {
    x: 0.6, y: 3.05, w: 4.14, h: 0.2, fontFace: F, fontSize: 6.2, color: C.mut, italic: true, valign: 'middle', margin: 0,
  });

  // balance de energía
  card(s, p, M, 3.62, 4.5, 1.38, { accent: C.navy });
  cardTitle(s, 0.6, 3.72, 4.1, 'BALANCE DE ENERGÍA  ·  DESTINO DE 1.400 MWh');
  const segs = [[68, C.navy, 'Calor a ambiente / HVAC'], [27, C.green, 'Rechazo del chiller'], [4, C.amber, 'Pérdidas eléctricas'], [1, C.mut, 'Retenida en producto']];
  let bx = 0.6;
  const total = 4.14;
  segs.forEach(g => {
    const w = (total * g[0]) / 100;
    s.addShape(p.ShapeType.rect, { x: bx, y: 3.98, w, h: 0.22, fill: { color: g[1] }, line: { none: true } });
    if (g[0] >= 10) {
      s.addText(g[0] + '%', { x: bx, y: 3.98, w, h: 0.22, fontFace: F, fontSize: 7.5, bold: true, color: C.white, align: 'center', valign: 'middle', margin: 0 });
    }
    bx += w;
  });
  segs.forEach((g, i) => {
    const x = 0.6 + (i % 2) * 2.07, y = 4.3 + Math.floor(i / 2) * 0.21;
    s.addShape(p.ShapeType.rect, { x, y: y + 0.05, w: 0.08, h: 0.08, fill: { color: g[1] }, line: { none: true } });
    s.addText(`${g[2]}  ·  ${g[0]}%`, { x: x + 0.15, y, w: 1.85, h: 0.18, fontFace: F, fontSize: 6.5, color: C.txt, valign: 'middle', margin: 0 });
  });
  s.addText('Cierre de energía ≈ 100%  ·  guía 95–105%', {
    x: 0.6, y: 4.73, w: 4.14, h: 0.18, fontFace: F, fontSize: 6.6, bold: true, color: C.greenD, valign: 'middle', margin: 0,
  });

  // conclusiones
  card(s, p, 5.08, 1.12, 4.5, 3.88, { accent: C.green });
  cardTitle(s, 5.26, 1.24, 4.1, 'CONCLUSIONES Y PRÓXIMO PASO');
  const con = [
    ['El laminado define la capacidad', 'Las 2 laminadoras concentran ~31% de la energía: su OEE fija la producción real de la planta.'],
    ['Es una planta de ensamble, no de proceso', '7,6 kWh/mód y 0,45 m³/t: consumos bajos, dominados por climatización y servicios auxiliares.'],
    ['El impacto está en los materiales', 'Vidrio y aluminio son el 83% de la masa; el scrap de EVA y backsheet (7%) es la principal oportunidad de mejora.'],
    ['267 kWh/t supera la guía', 'Se justifica por el HVAC y el laminado sobre un producto liviano; se verificará con la base de cálculo.'],
  ];
  con.forEach((c, i) => {
    const y = 1.56 + i * 0.7;
    s.addShape(p.ShapeType.ellipse, {
      x: 5.26, y: y + 0.01, w: 0.24, h: 0.24, fill: { color: C.greenL }, line: { none: true },
    });
    s.addText(String(i + 1).padStart(2, '0'), {
      x: 5.26, y: y + 0.01, w: 0.24, h: 0.24, fontFace: F, fontSize: 6.5, bold: true,
      color: C.greenD, align: 'center', valign: 'middle', margin: 0,
    });
    s.addText(c[0], {
      x: 5.58, y, w: 3.85, h: 0.2, fontFace: F, fontSize: 8.2, bold: true, color: C.navy, valign: 'middle', margin: 0,
    });
    s.addText(c[1], {
      x: 5.58, y: y + 0.2, w: 3.85, h: 0.45, fontFace: F, fontSize: 6.9, color: C.txt,
      valign: 'top', lineSpacingMultiple: 1.05, margin: 0,
    });
  });
  s.addShape(p.ShapeType.roundRect, {
    x: 5.26, y: 4.42, w: 4.14, h: 0.45, rectRadius: 0.03,
    fill: { color: C.navy }, line: { none: true },
  });
  s.addText([
    { text: 'PRÓXIMO PASO   ', options: { fontSize: 7, bold: true, color: C.green, fontFace: F, charSpacing: 1 } },
    { text: 'Base de cálculo Excel + tablero Power BI con los KPIs de la guía.', options: { fontSize: 7, color: 'D4DFE4', fontFace: F } },
  ], { x: 5.42, y: 4.42, w: 3.8, h: 0.45, valign: 'middle', margin: 0 });
}

p.writeFile({ fileName: process.argv[2] || 'FASE_03_Grupo9_Paneles_Solares.pptx' })
  .then(f => console.log('OK →', f));
