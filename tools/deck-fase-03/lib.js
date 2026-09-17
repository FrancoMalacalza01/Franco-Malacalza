// Sistema de diseño · Grupo 9 · Fase 03
const C = {
  navy:   '0F2233',
  navy2:  '1C3949',
  navy3:  '2A5062',
  green:  '2E9E73',
  greenD: '1F7A58',
  greenL: 'E6F3EE',
  amber:  'D98B2B',
  amberL: 'FBEFDD',
  bg:     'F3F5F6',
  card:   'FFFFFF',
  line:   'DCE3E6',
  line2:  'EDF1F2',
  txt:    '253742',
  mut:    '78888F',
  white:  'FFFFFF',
};
const F = 'Arial';
const SHADOW = { type: 'outer', blur: 10, offset: 1.5, angle: 90, color: '9FB0B8', opacity: 0.22 };

const M = 0.42;              // margen lateral
const W = 10 - 2 * M;        // ancho útil = 9.16
const TOP = 1.06;            // inicio del contenido
const BOT = 5.02;            // fin del contenido

// ---------- primitivas ----------
function card(s, p, x, y, w, h, o = {}) {
  s.addShape(p.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.05,
    fill: { color: o.fill || C.card },
    line: { color: o.line || C.line, width: 0.75 },
    shadow: o.flat ? null : SHADOW,
  });
  if (o.accent) {
    s.addShape(p.ShapeType.roundRect, {
      x: x + 0.015, y: y + 0.1, w: 0.05, h: h - 0.2, rectRadius: 0.025,
      fill: { color: o.accent }, line: { none: true },
    });
  }
}

function cardTitle(s, x, y, w, text, color = C.navy) {
  s.addText(text, {
    x, y, w, h: 0.2, fontFace: F, fontSize: 8, bold: true, margin: 0,
    color, charSpacing: 1.1, valign: 'middle',
  });
}

// KPI con número grande + unidad + etiqueta
function kpi(s, p, x, y, w, h, value, unit, label, o = {}) {
  const accent = o.accent || C.green;
  card(s, p, x, y, w, h, { fill: o.fill || C.card, line: o.line || C.line });
  s.addShape(p.ShapeType.rect, {
    x: x + 0.13, y: y + 0.13, w: 0.32, h: 0.028,
    fill: { color: accent }, line: { none: true },
  });
  s.addText(
    [
      { text: value, options: { fontSize: o.vs || 16, bold: true, color: o.vc || C.navy, fontFace: F } },
      ...(unit ? [{ text: ' ' + unit, options: { fontSize: 8.5, bold: true, color: C.mut, fontFace: F } }] : []),
    ],
    { x: x + 0.12, y: y + 0.2, w: w - 0.24, h: 0.4, valign: 'middle', align: 'left', margin: 0 }
  );
  s.addText(label, {
    x: x + 0.12, y: y + 0.6, w: w - 0.24, h: h - 0.68, fontFace: F, fontSize: 7.2, margin: 0,
    color: o.lc || C.mut, valign: 'top', lineSpacingMultiple: 0.95,
  });
}

// ---------- encabezado / pie ----------
function header(s, p, kicker, title) {
  s.addShape(p.ShapeType.rect, { x: 0, y: 0, w: 10, h: 0.92, fill: { color: C.navy }, line: { none: true } });
  s.addShape(p.ShapeType.rect, { x: 0, y: 0.92, w: 10, h: 0.035, fill: { color: C.green }, line: { none: true } });
  s.addText(kicker, {
    x: M, y: 0.14, w: 7.5, h: 0.2, fontFace: F, fontSize: 7.5, bold: true,
    color: C.green, charSpacing: 2, valign: 'middle', margin: 0,
  });
  s.addText(title, {
    x: M, y: 0.35, w: 8.2, h: 0.46, fontFace: F, fontSize: 20, bold: true,
    color: C.white, charSpacing: 0.2, valign: 'middle', margin: 0,
  });
}

function footer(s, p, n) {
  s.addShape(p.ShapeType.rect, { x: M, y: 5.22, w: W, h: 0.01, fill: { color: C.line }, line: { none: true } });
  s.addText('GRUPO 9 · UTN FRLP · INSTALACIONES INDUSTRIALES 2026 · MÓDULO FV MONOCRISTALINO PERC · 100 MWp/AÑO', {
    x: M, y: 5.28, w: 7.6, h: 0.22, fontFace: F, fontSize: 6.3, color: C.mut, charSpacing: 0.5, valign: 'middle', margin: 0,
  });
  s.addShape(p.ShapeType.roundRect, {
    x: 9.02, y: 5.27, w: 0.56, h: 0.24, rectRadius: 0.03,
    fill: { color: C.navy }, line: { none: true },
  });
  s.addText(`${String(n).padStart(2, '0')} / 08`, {
    x: 9.02, y: 5.27, w: 0.56, h: 0.24, fontFace: F, fontSize: 6.8, bold: true,
    color: C.white, align: 'center', valign: 'middle', margin: 0,
  });
}

function baseSlide(p, kicker, title, n) {
  const s = p.addSlide();
  s.background = { color: C.bg };
  header(s, p, kicker, title);
  footer(s, p, n);
  return s;
}

// ---------- tabla ----------
function table(s, x, y, w, head, rows, colW, o = {}) {
  const fs = o.fs || 7.6;
  const hdr = head.map((t, i) => ({
    text: t,
    options: {
      fill: C.navy, color: C.white, bold: true, fontSize: fs - 0.6, fontFace: F,
      align: (o.align && o.align[i]) || 'left', valign: 'middle', margin: [2, 4, 2, 4],
    },
  }));
  const body = rows.map((r, ri) => {
    const isTotal = o.totalRow && ri === rows.length - 1;
    return r.map((t, i) => ({
      text: String(t),
      options: {
        fill: isTotal ? C.greenL : (ri % 2 ? C.line2 : C.white),
        color: isTotal ? C.greenD : (i === 0 && o.boldFirst ? C.navy : C.txt),
        bold: isTotal || (i === 0 && o.boldFirst),
        fontSize: fs, fontFace: F,
        align: (o.align && o.align[i]) || 'left',
        valign: 'middle', margin: [1.5, 4, 1.5, 4],
      },
    }));
  });
  s.addTable([hdr, ...body], {
    x, y, w, colW,
    rowH: o.rowH || 0.185,
    border: { type: 'solid', pt: 0.4, color: C.line },
    autoPage: false,
  });
}

// ---------- barra horizontal de datos ----------
function hBar(s, p, x, y, w, label, value, max, txt, color) {
  s.addText(label, { x, y: y - 0.015, w: 1.12, h: 0.18, fontFace: F, fontSize: 7, color: C.txt, valign: 'middle', margin: 0 });
  const bx = x + 1.16, bw = w - 1.16 - 0.62;
  s.addShape(p.ShapeType.roundRect, {
    x: bx, y: y + 0.028, w: bw, h: 0.125, rectRadius: 0.02,
    fill: { color: C.line2 }, line: { none: true },
  });
  s.addShape(p.ShapeType.roundRect, {
    x: bx, y: y + 0.028, w: Math.max(0.05, (bw * value) / max), h: 0.125, rectRadius: 0.02,
    fill: { color }, line: { none: true },
  });
  s.addText(txt, {
    x: x + w - 0.6, y: y - 0.015, w: 0.6, h: 0.18, fontFace: F, fontSize: 7, bold: true,
    color: C.navy, align: 'right', valign: 'middle', margin: 0,
  });
}

// ---------- grilla de celdas (módulo FV) ----------
function pvGrid(s, p, x, y, w, h, cols, rows, cell, gap, o = {}) {
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      s.addShape(p.ShapeType.rect, {
        x: x + c * (cell + gap), y: y + r * (cell * (o.ar || 1) + gap),
        w: cell, h: cell * (o.ar || 1),
        fill: { color: o.color || C.navy2 },
        line: { color: o.lineColor || C.navy3, width: 0.5 },
      });
    }
  }
}

module.exports = { C, F, M, W, TOP, BOT, SHADOW, card, cardTitle, kpi, header, footer, baseSlide, table, hBar, pvGrid };
