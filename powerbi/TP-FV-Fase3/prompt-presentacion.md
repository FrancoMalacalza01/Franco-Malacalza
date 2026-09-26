# Prompt para armar la presentación de la Fase 3 en Claude

Copiá todo lo que está debajo de la línea y pegalo en Claude, adjuntando
`Informe_Fase_3_FV_Grupo9.docx` y `Balances_masa_energia_FV_Fase3_FINAL.xlsx`.

---

Necesito que armes la presentación de defensa de un trabajo práctico universitario. Te adjunto el informe completo en Word y la planilla de cálculo con los balances. Todos los datos salen de ahí y de lo que te detallo abajo.

## Contexto

- **Materia:** Instalaciones Industriales, Universidad Tecnológica Nacional, Facultad Regional La Plata, 2026.
- **Docente:** Ing. Santiago Saccon.
- **Grupo:** N.º 9.
- **Entrega:** Fase 3 del Trabajo Práctico Anual — consumos específicos, efluentes y balances de materia y energía.
- **Proyecto:** planta de ensamble de módulos fotovoltaicos monocristalinos PERC de 540 Wp, capacidad 100 MWp/año.
- **Exposición:** 28 de septiembre de 2026, aproximadamente 15 minutos de exposición más preguntas.
- **Audiencia:** el docente de la cátedra y el resto del curso. Conocen la terminología de ingeniería industrial: no hace falta explicar qué es un cuello de botella ni un balance de masa, pero sí justificar cada número adoptado.

## Qué tipo de presentación es

Es una **defensa técnica**, no una presentación comercial. El criterio de éxito es que el docente pueda seguir la cadena de razonamiento —dato adoptado → fuente → cálculo → resultado → lectura del resultado— sin tener que abrir el informe. Cada número que aparezca en una diapositiva tiene que poder ser defendido oralmente.

Priorizá densidad de información sobre impacto visual, pero sin amontonar: una idea por diapositiva, con la tabla o el gráfico que la sostiene.

## Sistema de diseño

Usá exactamente esta paleta, que es la del tablero de Power BI del proyecto, para que la presentación y el tablero se lean como una sola pieza:

| Rol                     | Color     |
| ----------------------- | --------- |
| Primario / fondos oscuros | `#12283A` |
| Acento positivo         | `#1F7A5C` |
| Acento secundario       | `#3F7CA8` |
| Alerta / fuera de rango | `#D9912B` |
| Neutro de apoyo         | `#55606A` |
| Serie adicional 1       | `#8C7BA8` |
| Serie adicional 2       | `#C88A8A` |
| Serie adicional 3       | `#A8A59C` |
| Fondo de las diapositivas | `#F5F5F3` |
| Texto sobre fondo oscuro | `#FFFFFF` y `#DCDBD7` |

Reglas de diseño:

- Formato apaisado 16:9.
- Fondo `#F5F5F3` en todas las diapositivas de contenido. Fondo `#12283A` sólo en la portada, en los separadores de sección y en la diapositiva de cierre.
- Tipografía sans serif de una sola familia, en dos pesos. Título de diapositiva en negrita, cuerpo en regular. Nada de itálicas salvo en nombres de norma o de equipo.
- Franja o barra de color en el borde superior de cada diapositiva de contenido, en `#12283A`, con el número de sección del informe y el título corto.
- Pie de página en todas las diapositivas de contenido: `Fase 3 · Grupo 9 · UTN FRLP` a la izquierda y número de diapositiva a la derecha, en `#55606A`, cuerpo chico.
- Tablas: encabezado con fondo `#12283A` y texto blanco, filas alternadas en blanco y `#F5F5F3`, bordes finos en `#A8A59C`. Nada de bordes gruesos ni sombras.
- Los números siempre alineados a la derecha en las tablas; el texto, a la izquierda.
- Nada de imágenes decorativas, íconos genéricos ni fotos de stock. Si una diapositiva necesita una figura, que sea un diagrama que explique el proceso o un gráfico de datos.

## Convenciones de notación

Respetalas al pie de la letra, porque son las del informe:

- **Decimales con coma y miles con punto.** Se escribe `30,26 mód/h`, `185.185 mód/año`, `5.125,08 kWh/día`. Nunca al revés.
- Porcentajes con coma: `84,1 %`, con espacio antes del signo.
- Unidades tal como figuran en el informe: `mód/h`, `kg/h`, `t/año`, `kWh/día`, `MWh/año`, `kWp`, `MWp`, `kVA`, `t CO₂/año`, `kg CO₂/t`, `m³/t`.
- Los códigos de equipo van tal cual: E-101, E-102, E-103, C-101, E-104, E-105, E-106, K-101, E-201, E-205, P-201.
- Las referencias bibliográficas se citan con corchetes, `[1]` a `[14]`, igual que en el informe.
- Las tablas de la presentación conservan la numeración del informe (Tabla 5.1, Tabla 6.2, etc.), así el docente puede ir y volver entre ambos documentos.

## Estructura: 19 diapositivas

Armá exactamente estas diapositivas, en este orden. Para cada una te doy el contenido obligatorio. **No inventes ningún número que no esté acá o en los archivos adjuntos.** Si algo te falta, dejalo marcado como pendiente en vez de completarlo.

### 1. Portada
Fondo `#12283A`. Título: *Planta de módulos fotovoltaicos monocristalinos PERC*. Subtítulo: *Módulo de 540 Wp · Capacidad 100 MWp/año*. Debajo: *Fase 3 — Consumos específicos, efluentes y balances de materia y energía*. Al pie: Grupo N.º 9 · Instalaciones Industriales · UTN FRLP · 2026 · Docente: Ing. Santiago Saccon · 28 de septiembre de 2026. Dejá un espacio marcado para los nombres de los integrantes.

### 2. Hoja de ruta
Las seis preguntas que responde la exposición, no un índice de secciones: qué producimos y a qué ritmo; si el mercado lo absorbe; si la línea da la capacidad; si cierra la materia; si cierra la energía; cómo queda la planta frente a los rangos de la cátedra.

### 3. Producto y proceso
El módulo: monocristalino PERC, 540 Wp, 144 medias celdas M10, 2.278 × 1.134 × 35 mm, 28 kg, eficiencia 20,94 %, vidrio templado AR de 3,2 mm [1]. Y la secuencia de siete operaciones como diagrama horizontal de bloques: Recepción e inspección EL (E-101) → Soldadura de celdas / stringer (PRO-01 · E-102) → Apilado del sándwich (PRO-02 · E-103) → Laminado al vacío (PRO-03 · C-101) → Marco y caja de conexión (PRO-04 · E-104) → Ensayo STC y control final (RED-01 · E-105) → Clasificación y empaque (RED-02 · E-106). Marcá C-101 con `#D9912B`, porque es el cuello de botella y vuelve a aparecer más adelante.

### 4. Mercado de referencia
Tabla 2.1 con los datos de CAMMESA: 1.933 MW instalados en mayo de 2025, 2.464 MW al cierre de 2025, 2.483 MW en febrero de 2026, 1.010 MW de nueva potencia eólica y solar en 2025, 5.106 GWh de generación solar y más de 6 millones de módulos instalados [11][12]. Hipótesis de diseño: 600 MWp/año de incorporación anual.

### 5. Demanda que cubre el proyecto
El cálculo en grande: 100 MWp/año ÷ 600 MWp/año = **16,7 %** de participación objetivo. Y los dos argumentos que acotan el riesgo: la generación distribuida y las instalaciones fuera de red no están en las cifras del MEM, de modo que la demanda real es mayor; y existe el antecedente nacional de la planta de EPSE San Juan, prevista en 800.000 módulos por año, unos 450 MW [13].

### 6. Base de diseño y régimen de operación
Tabla 3.1 completa: 3 turnos × 24 h = 24 h/día; 300 días × 24 h = 7.200 h/año; 7.200 h × 85 % de utilización = 6.120 h/año; 100.000.000 Wp ÷ 540 Wp = 185.185 mód/año; 185.185 mód ÷ 6.120 h = **30,26 mód/h**; 30,26 mód/h × 144 celdas = 4.357 celdas/h; producción diaria 17,28 t/día. Destacá que se pasó de 2 a 3 turnos respecto de la Fase 2 porque detener la laminadora obliga a recalentar las placas en cada arranque [3].

### 7. Capacidad del proceso
Primero el criterio, en cuatro líneas: capacidad instalada es la declarada por el fabricante; nominal es el 90 % de la instalada; utilizada es el ritmo de diseño de 30,26 mód/h; utilización = utilizada ÷ nominal. Después un gráfico de barras horizontales con la capacidad nominal en mód/h de los diez equipos, ordenado de menor a mayor, con la línea vertical de la producción de diseño en 30,26 mód/h. Barras en `#3F7CA8`, salvo la laminadora en `#D9912B`.

### 8. Cuello de botella
La laminadora **C-101**: 40 mód/h de capacidad de catálogo, 36 mód/h nominal, **84,1 % de utilización**, 15,9 % de capacidad ociosa. Capacidad anual máxima de la línea 220.320 mód/año, con un margen de 35.135 mód/año sobre la producción de diseño. Agregá la observación del curado: con 180 posiciones de rack en lugar de 240 la utilización treparía al 93,4 %.

### 9. Balance de masa — composición del módulo
Tabla 6.1: vidrio templado AR 3,2 mm 20,7 kg/mód (74 % de la masa, scrap 0,5 %); marco de aluminio 2,8 (10 %, scrap 1 %); EVA en dos capas 2,2 (scrap 7 %); backsheet 0,9 (scrap 7 %); celdas M10 PERC 0,8 (scrap 1 %); ribbon de cobre 0,3 (scrap 3 %); caja de conexión y silicona 0,3 (scrap 2 %); embalaje 1,0 kg/mód. Total 28 kg de módulo terminado. Mostrá la fórmula usada: `m entrada, i = m unitaria, i × (1 + scrap i) × ritmo`. Señalá que cada fracción cae dentro de los rangos publicados para módulos c-Si [6][7][8].

### 10. Balance de masa — por operación
Tabla 6.2 en kg/h, con las nueve operaciones y las columnas entrada, se agrega, se retira y salida. Los hitos: se arranca con 24,45 kg/h de celdas y se termina con **847,25 kg/h** de módulo terminado, que pasan a 877,51 kg/h con el embalaje. El salto grande está en el apilado del sándwich, donde entran 729,86 kg/h de vidrio, EVA y backsheet. Aclará los dos criterios: el laminado no pierde masa porque el EVA reticula sin desprender material, y el 2 % de rechazo del ensayo flash vuelve a reproceso, así que no es pérdida de masa.

### 11. Balance de masa — cierre global
Las ocho entradas contra las siete salidas, ambas sumando **888,75 kg/h** y **5.439,17 t/año**. Diferencia de cierre **0,00 kg/h**, cierre de materia **100,00 %**, contra el criterio de la guía de 98 a 102 %. Scrap total de proceso 11,24 kg/h, es decir 69 t/año, el 1,3 % sobre la masa de producto. Presentalo como un balance de dos columnas enfrentadas, con el total resaltado en `#1F7A5C`.

### 12. Balance energético — balance eléctrico
Tabla 7.1 agrupada en dos bloques. Proceso: 297 kW de potencia instalada y 2.747,88 kWh/día de entrada. Con auxiliares: **479,5 kW** instalados y **5.125,08 kWh/día**. La laminadora sola son 190 kW de placa. Mostrá la fórmula: `E entrada = P instalada × factor de carga × horas` y `E útil = E entrada × rendimiento`. Justificá los factores de carga del stringer y de la laminadora: se eligieron para que el consumo medio coincida con el de catálogo, 41 kW sobre 50 kW de placa y 95 kW sobre 190 kW [2][3].

### 13. Balance energético — balance térmico de la laminación
El cálculo desplegado: `Q útil = 28 kg × 0,9 kJ/kg·°C × 120 °C ÷ 3.600 = 0,84 kWh/módulo`. Potencia térmica útil 25,42 kW; potencia eléctrica media de C-101 71,25 kW; **rendimiento térmico 35,7 %**. La lectura, que es el punto interesante de la diapositiva: cerca de dos tercios del consumo de la laminadora se van en mantener las placas calientes y compensar pérdidas de la cámara, no en calentar el producto.

### 14. Demanda eléctrica y subestación
Tabla 7.3 como cascada de cálculo: 479,5 kW instalados → factor de simultaneidad 0,75 → demanda máxima 359,63 kW → margen de diseño 10 % → 395,59 kW → factor de potencia objetivo 0,95 → 416,41 kVA → reserva de ampliación 20 % → 499,69 kVA → **transformador normalizado de 500 kVA**. Mencioná el banco de capacitores para pasar de 0,85 a 0,95 y la corriente de arranque del orden de 6 veces la nominal.

### 15. Consumos específicos
Tres bloques. Materiales: 5.254 t/año sin embalaje, 1.013 kg por tonelada de producto, 52,5 t por MWp; vidrio y aluminio concentran el 84 % de la masa. Agua: el proceso no usa agua, son 105 personas × 60 L/día más 1,5 m³/día de servicios, total 2.340 m³/año. Energía: **1.537,52 MWh/año**, 8,30 kWh/mód, **296,52 kWh/t** y 15,38 MWh/MWp.

### 16. Efluentes, residuos y emisiones
Efluente líquido: 2.106 m³/año, el 90 % del agua consumida, 0,41 m³/t, DQO de 500 mg/L, carga orgánica 0,20 kg/t, cloacal asimilable. Residuos sólidos, Tabla 9.1: vidrio roto 19,3 t/año reciclable; rebaba de EVA y backsheet 40,5 t/año como residuo especial; recorte de marco y silicona 6,3 t/año; celdas rotas 1,5 t/año a gestor autorizado por su contenido de plata; recorte de ribbon 1,7 t/año, cobre reciclable; embalaje 185 t/año, que sale con el producto. Emisiones indirectas: factor de red 0,35 tCO₂/MWh → **538 t CO₂/año**, 103,8 kg CO₂/t, 5,4 t por MWp.

### 17. Indicadores frente a los rangos de la cátedra
Tabla 10.1 con semáforo de color en la columna de lectura, y esta es la diapositiva más importante de la defensa. Energía por tonelada 296,52 kWh/t contra un rango guía de 80 a 250: **por encima**, marcá en `#D9912B`. Agua por tonelada 0,45 m³/t contra 0,5 a 2,5: apenas por debajo, `#3F7CA8`. Efluente por tonelada 0,41 m³/t contra 0,4 a 2,0: dentro, `#1F7A5C`. DQO por tonelada 0,20 kg/t contra 1 a 10: por debajo, `#3F7CA8`. CO₂ por tonelada 103,8 kg/t contra 100 a 400: dentro, `#1F7A5C`.

Anticipá la pregunta del docente sobre el único indicador fuera de rango, con la justificación del informe: es un proceso de ensamble y no de transformación química, con un producto liviano y voluminoso donde pesan el HVAC y el laminado.

### 18. Correcciones respecto de la Fase 2
Tabla 11.1 completa, con las nueve correcciones y su motivo: régimen de 2 a 3 turnos; ritmo recalculado sobre 300 días en vez de días calendario; lote óptimo corregido de Q* = 30.700 a Q* = 133.333 celdas porque la demanda anterior equivalía a 9.817 módulos y la planta produce 185.185; compresor K-101 de 7,5 kW a 2 × 30 kW en configuración 1+1; chiller E-205 de 11 a 30 kW; bomba de vacío P-201 integrada en C-101; codificación corregida, C-101 para la laminadora; superficie de nave de 3.500 a 3.200 m²; y se agregan EL final, recorte y curado al proceso. Presentalo como fortaleza, no como error: es la fase que corrige y cierra.

### 19. Cierre
Fondo `#12283A`. Cuatro resultados: la materia cierra al 100,00 %; el cuello de botella es C-101 con 84,1 % de utilización y 35.135 mód/año de margen; la planta consume 1.537,52 MWh/año y demanda un transformador de 500 kVA; cuatro de los cinco indicadores caen dentro de los rangos de la cátedra. Cerrá con la lista corta de hipótesis a validar: factor de emisión de la red del año vigente [10], potencias de los equipos sin ficha publicada, coeficientes de scrap, el rendimiento del 30 % adoptado para la laminadora y el precio de la energía según cuadro tarifario industrial.

## Diapositiva de respaldo

Después de la 19, agregá una diapositiva de referencias con las catorce fuentes del informe, en cuerpo chico y a dos columnas. No se expone, está para responder preguntas.

## Notas del orador

Escribí notas del orador en todas las diapositivas. En cada una incluí:

1. La idea que hay que transmitir, en una frase.
2. Los números que conviene decir en voz alta, que no son todos los que están en pantalla.
3. La pregunta que el docente podría hacer sobre esa diapositiva, con la respuesta.

Calibrá las notas para 15 minutos en total, con más tiempo en las diapositivas 7 a 13, que son el núcleo técnico de la fase.

## Qué no hacer

- No inventes datos, fuentes ni valores intermedios. Si un número no está en el informe, en la planilla o en este pedido, marcalo como pendiente.
- No redondees distinto de como está en el informe: si dice 296,52 kWh/t, no pongas 297.
- No uses viñetas de más de dos niveles ni párrafos largos en las diapositivas; el texto largo va en las notas del orador.
- No agregues conclusiones que el informe no saque, en especial sobre viabilidad económica, que no es parte de esta fase.
- No cambies la paleta ni mezcles otros colores.
