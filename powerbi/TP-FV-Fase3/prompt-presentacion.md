# Prompt para armar la presentación de la Fase 3

Versión 2. Reemplaza a la anterior: incorpora el estilo medido sobre la
presentación de la Fase 2 del grupo y sobre la Fase 3 del Grupo 13.

Copiá todo lo que está debajo de la línea y pegalo en Claude, adjuntando
`Informe_Fase_3_FV_Grupo9.docx` y `Balances_masa_energia_FV_Fase3_FINAL.xlsx`.

---

Necesito la presentación de defensa de un trabajo práctico universitario. Te adjunto el informe en Word y la planilla con los balances. Todos los datos salen de ahí y de lo que detallo abajo.

## Contexto

- **Materia:** Instalaciones Industriales, UTN, Facultad Regional La Plata, 2026. Docente: Ing. Santiago Saccon.
- **Grupo:** N.º 9. **Entrega:** Fase 3 — consumos específicos, efluentes y balances de materia y energía.
- **Proyecto:** planta de ensamble de módulos fotovoltaicos monocristalinos PERC de 540 Wp, 100 MWp/año.
- **Exposición:** 28 de septiembre de 2026, 15 minutos más preguntas.
- **Audiencia:** el docente y el curso. Manejan la terminología: no hay que explicar qué es un cuello de botella, sí justificar cada número adoptado.

Es una **defensa técnica**, no una presentación comercial. El criterio de éxito es que el docente siga la cadena dato adoptado → fuente → cálculo → resultado → lectura sin abrir el informe.

## Sistema visual

Continuidad con la Fase 2 del grupo y con el tablero de Power BI del proyecto.

| Rol                                  | Color     |
| ------------------------------------ | --------- |
| Fondo de todas las diapositivas      | `#F5F5F3` |
| Bloques oscuros, títulos             | `#12283A` |
| Texto de cuerpo                      | `#1B2A36` |
| Verde de acento sobre fondo claro    | `#1F7A5C` |
| Verde de etiqueta sobre fondo oscuro | `#5DD3A8` |
| Texto secundario, pie de página      | `#55606A` |
| Texto tenue sobre fondo oscuro       | `#9FB3C2` |
| Reglas y bordes finos                | `#DCDBD7` |
| Ámbar, sólo para lo que está fuera de rango | `#D9912B` |

Formato 16:9. Tipografía sans serif humanista de una sola familia, tipo Calibri, en regular y negrita. El ámbar aparece como máximo en dos diapositivas: es la señal de "esto está fuera del rango guía" y pierde fuerza si se usa de adorno.

Nada de imágenes decorativas, íconos genéricos ni fotos de stock. Si una diapositiva necesita una figura, que sea un diagrama del proceso o un gráfico de datos.

## Anatomía de cada diapositiva

Todas las diapositivas de contenido tienen exactamente esta estructura, y es lo que le da unidad al conjunto:

1. **Ojal superior.** Un bullet y el nombre de la sección en mayúsculas, verde `#1F7A5C`, cuerpo 8 pt, con espaciado entre letras amplio. Por ejemplo `• BALANCE DE MASA · POR OPERACIÓN`.
2. **Título.** Una **afirmación**, no un rótulo. En sentence case, 25 a 28 pt, `#12283A`, alineado a la izquierda, con **la cifra clave en verde y en itálica**. Se escribe *De 24,45 a 847,25 kg/h de módulo terminado*, no *Balance por operación*. Se escribe *La laminadora marca el ritmo*, no *Cuello de botella*.
3. **Regla fina** `#DCDBD7` debajo del título, de ancho completo.
4. **Cuerpo**, con uno de los cuatro patrones de abajo.
5. **Franja de lectura** cuando hay una conclusión que dar: caja blanca de borde fino a todo el ancho, con una o dos frases. Es donde va el argumento, no una viñeta más.
6. **Pie de página.** A la izquierda `Grupo 9 · Fase 3 · Consumos específicos · <fuente exacta>`, citando la sección o la tabla del informe de donde sale el dato, por ejemplo `informe Fase 3, sección 6.1 · Tabla 6.2`. A la derecha el contador `NN / 22`. Ambos en 7 pt `#55606A`.

### Los cuatro patrones de cuerpo

**A. Bloque protagonista.** Una caja `#12283A` que ocupa un tercio o la mitad del ancho, con una etiqueta en mayúsculas `#5DD3A8`, el cálculo en una línea, la cifra enorme en blanco a 60-70 pt y un pie de tile en `#9FB3C2`. Al lado, dos o tres tarjetas blancas de borde fino, cada una con un subtítulo en verde negrita y dos o tres renglones. Es el patrón para las diapositivas donde hay **un** número que importa.

**B. Barras rankeadas.** Nombre a la izquierda, barra horizontal, valor a la derecha, **siempre ordenado de mayor a menor**, con la barra crítica en ámbar y el resto en `#12283A` o `#3F7CA8`. Es el patrón preferido para comparar equipos: entra por los ojos mucho mejor que una tabla y es lo que hace legible una lista de diez ítems.

**C. Tarjetas de cifra.** Tres o cuatro tiles en fila, cada uno con etiqueta en mayúsculas, número grande y una línea de contexto. Para las diapositivas de resumen.

**D. Tabla.** Encabezado `#12283A` con texto blanco, filas alternadas blanco y `#F5F5F3`, bordes finos `#DCDBD7`, números alineados a la derecha, la fila importante resaltada en verde. **Usá tabla sólo cuando haya que mostrar el balance fila por fila**: como máximo en tres diapositivas de toda la presentación.

### Herencia de la Fase 2

Para la diapositiva del proceso, reutilizá el recurso gráfico de la Fase 2: bloques rectangulares de esquinas redondeadas en gris pizarra, cada uno con el **código de la operación en verde y mayúsculas encima** del nombre —`PRO-01 · STRINGER`, `PRO-03 · LAMIN.`— y los extremos de entrada y salida como píldoras más oscuras. Es la imagen que el docente ya vio en la entrega anterior y conviene que la reconozca.

## Convenciones de notación

- **Decimales con coma, miles con punto.** `30,26 mód/h`, `185.185 mód/año`, `5.125,08 kWh/día`. Nunca al revés.
- Porcentajes con coma y espacio antes del signo: `84,1 %`.
- Unidades como en el informe: `mód/h`, `kg/h`, `t/año`, `kWh/día`, `MWh/año`, `MWp`, `kVA`, `t CO₂/año`, `kg CO₂/t`, `m³/t`.
- Códigos de equipo tal cual: E-101, E-102, E-103, C-101, E-104, E-105, E-106, K-101, E-201, E-205, P-201.
- Referencias entre corchetes, `[1]` a `[14]`, y numeración de tablas del informe (Tabla 5.1, Tabla 6.2), para que el docente pueda ir y volver entre ambos documentos.

## Las 22 diapositivas

**No inventes ningún número que no esté acá o en los adjuntos.** Si falta algo, marcalo como pendiente en vez de completarlo.

**1. Portada.** Fondo `#12283A`. Ojal `• TRABAJO PRÁCTICO ANUAL / INSTALACIONES INDUSTRIALES · 2026`, línea `UTN · Facultad Regional La Plata`, antetítulo `FASE 3 · CONSUMOS ESPECÍFICOS`, título grande *Planta de módulos fotovoltaicos PERC* con la última palabra en verde itálica, subtítulo `Módulo de 540 Wp · Capacidad 100 MWp/año`, bajada `Consumos específicos, efluentes y balances de materia y energía`. Abajo, cinco espacios numerados 01 a 05 para los integrantes, y al pie docente y fecha de exposición. A la derecha, una retícula abstracta de celdas fotovoltaicas con dos celdas en verde.

**2. Hoja de ruta.** Las seis preguntas que responde la exposición, numeradas 01 a 06: qué producimos y a qué ritmo; si el mercado lo absorbe; si la línea da la capacidad; si cierra la materia; si cierra la energía; cómo queda frente a los rangos de la cátedra.

**3. Producto y proceso.** El módulo: PERC, 540 Wp, 144 medias celdas M10, 2.278 × 1.134 × 35 mm, 28 kg, eficiencia 20,94 %, vidrio templado AR 3,2 mm [1]. Y las siete operaciones con el recurso gráfico de la Fase 2: Recepción e inspección EL (E-101) → Soldadura de celdas (PRO-01 · E-102) → Apilado del sándwich (PRO-02 · E-103) → Laminado al vacío (PRO-03 · C-101) → Marco y caja de conexión (PRO-04 · E-104) → Ensayo STC y control final (RED-01 · E-105) → Clasificación y empaque (RED-02 · E-106). C-101 en ámbar: es el cuello de botella y vuelve a aparecer.

**4. Mercado de referencia.** Patrón C. Datos de CAMMESA: 1.933 MW en mayo de 2025, 2.464 MW al cierre de 2025, 2.483 MW en febrero de 2026, 1.010 MW de nueva potencia eólica y solar en 2025, 5.106 GWh generados y más de 6 millones de módulos instalados [11][12]. Hipótesis de diseño: 600 MWp/año de incorporación anual.

**5. Demanda que cubre el proyecto.** Patrón A. Cálculo `100 MWp/año ÷ 600 MWp/año`, cifra **16,7 %**. Tarjetas: la cifra del MEM subestima el mercado, porque la generación distribuida y las instalaciones fuera de red no están contabilizadas; y existe el antecedente de EPSE San Juan, prevista en 800.000 módulos por año, unos 450 MW [13]. Franja de lectura: si la demanda real resultara menor, la línea puede operar por debajo de su capacidad de diseño sin cambios de equipos.

**6. Base de diseño.** Tabla 3.1 encadenada: 3 turnos × 24 h = 24 h/día; 300 días × 24 h = 7.200 h/año; × 85 % de utilización = 6.120 h/año; 100.000.000 Wp ÷ 540 Wp = 185.185 mód/año; ÷ 6.120 h = **30,26 mód/h**; × 144 celdas = 4.357 celdas/h; 17,28 t/día. Franja: se pasó de 2 a 3 turnos porque detener la laminadora obliga a recalentar las placas en cada arranque [3].

**7. Método.** Cómo se calcula, con las fórmulas en grande: `m entrada, i = m unitaria, i × (1 + scrap i) × ritmo` para la masa; `E entrada = P instalada × factor de carga × horas` y `E útil = E entrada × rendimiento` para la energía; y los consumos específicos como consumo anual ÷ 5.185,19 t/año de producción. Aclarar que el factor de carga se usa para la energía y el de simultaneidad para la potencia máxima, que no son lo mismo.

**8. Capacidad del proceso.** Patrón B, barras rankeadas con la utilización de los diez equipos, de mayor a menor, y la línea de la producción de diseño en 30,26 mód/h. Arriba, en cuatro líneas, el criterio: instalada es la del fabricante, nominal es el 90 % de la instalada, utilizada es el ritmo de diseño, utilización = utilizada ÷ nominal.

**9. Cuello de botella.** Patrón A. La laminadora **C-101**: 40 mód/h de catálogo, 36 mód/h nominal, **84,1 % de utilización**, 15,9 % ociosa. Capacidad anual máxima 220.320 mód/año, margen de 35.135 mód/año. Tarjeta: con 180 posiciones de rack en lugar de 240 el curado treparía al 93,4 %.

**10. Composición del módulo.** Tabla 6.1: vidrio templado AR 3,2 mm 20,7 kg/mód (74 % de la masa, scrap 0,5 %); marco de aluminio 2,8 (10 %, scrap 1 %); EVA en dos capas 2,2 (scrap 7 %); backsheet 0,9 (scrap 7 %); celdas M10 PERC 0,8 (scrap 1 %); ribbon de cobre 0,3 (scrap 3 %); caja de conexión y silicona 0,3 (scrap 2 %); embalaje 1,0. Total 28 kg. Franja: cada fracción cae dentro de los rangos publicados para módulos c-Si [6][7][8].

**11. Balance por operación.** Tabla 6.2, las nueve operaciones en kg/h. De 24,45 kg/h de celdas a **847,25 kg/h** de módulo terminado, 877,51 con embalaje. El salto está en el apilado, donde entran 729,86 kg/h. Dos tarjetas: el laminado no pierde masa porque el EVA reticula sin desprender material; el 2 % de rechazo del flash vuelve a reproceso y no es pérdida de masa.

**12. Cierre global.** Patrón A con dos columnas enfrentadas: ocho entradas y siete salidas, ambas **888,75 kg/h** y **5.439,17 t/año**. Diferencia **0,00 kg/h**, cierre **100,00 %** contra el criterio de 98 a 102 % de la guía. Scrap de proceso 11,24 kg/h, 69 t/año, 1,3 % sobre la masa de producto.

**13. Balance eléctrico.** Patrón B, barras rankeadas de kWh/día por equipo, separando proceso de auxiliares. Proceso 297 kW y 2.747,88 kWh/día; con auxiliares **479,5 kW** y **5.125,08 kWh/día**. Franja: los factores de carga del stringer y de la laminadora se eligieron para que el consumo medio coincida con el de catálogo, 41 sobre 50 kW y 95 sobre 190 kW [2][3].

**14. Balance térmico de la laminación.** Patrón A. `Q útil = 28 kg × 0,9 kJ/kg·°C × 120 °C ÷ 3.600 = 0,84 kWh/módulo`. Potencia térmica útil 25,42 kW, eléctrica media de C-101 71,25 kW, **rendimiento 35,7 %**. La lectura: dos tercios del consumo de la laminadora se van en mantener las placas calientes y compensar pérdidas de cámara, no en calentar el producto.

**15. Demanda eléctrica y subestación.** Cascada: 479,5 kW instalados → simultaneidad 0,75 → 359,63 kW → margen 10 % → 395,59 kW → factor de potencia 0,95 → 416,41 kVA → reserva 20 % → 499,69 kVA → **transformador de 500 kVA**. Mencionar el banco de capacitores para pasar de 0,85 a 0,95.

**16. Consumos específicos.** Patrón C. Materiales 5.254 t/año sin embalaje, 1.013 kg/t de producto, 52,5 t/MWp; vidrio y aluminio concentran el 84 % de la masa. Agua: el proceso no usa agua, son 105 personas × 60 L/día más 1,5 m³/día, total 2.340 m³/año. Energía **1.537,52 MWh/año**, 8,30 kWh/mód, **296,52 kWh/t**, 15,38 MWh/MWp.

**17. Efluentes, residuos y emisiones.** Efluente 2.106 m³/año, 90 % del agua consumida, 0,41 m³/t, DQO 500 mg/L, carga 0,20 kg/t, cloacal asimilable. Residuos, Tabla 9.1: vidrio roto 19,3 t/año reciclable; rebaba de EVA y backsheet 40,5 t/año residuo especial; recorte de marco y silicona 6,3; celdas rotas 1,5 a gestor autorizado por su contenido de plata; recorte de ribbon 1,7 de cobre reciclable; embalaje 185, que sale con el producto. Emisiones indirectas: 0,35 tCO₂/MWh → **538 t CO₂/año**, 103,8 kg/t, 5,4 t/MWp.

**18. Indicadores frente a los rangos de la cátedra.** La diapositiva más importante. Tabla 10.1 con semáforo: energía por tonelada 296,52 kWh/t contra 80-250, **por encima**, en ámbar; agua 0,45 m³/t contra 0,5-2,5, apenas por debajo; efluente 0,41 m³/t contra 0,4-2,0, dentro; DQO 0,20 kg/t contra 1-10, por debajo; CO₂ 103,8 kg/t contra 100-400, dentro. Franja: anticipar la pregunta sobre el único indicador fuera de rango con la justificación del informe —es un ensamble y no una transformación química, con un producto liviano y voluminoso donde pesan el HVAC y el laminado.

**19 y 20. Tablero de Power BI.** Dos diapositivas con capturas del tablero construido sobre estos balances. La primera muestra la vista general —tarjetas de utilización del cuello, energía por tonelada, energía anual, potencia instalada, CO₂ por tonelada y eficiencia global— y la segunda, el detalle de la cascada del balance de masa y el consumo por equipo. Dejá el espacio de la imagen marcado: las capturas las pega el grupo. Al pie, que el tablero lee el mismo Excel de los balances, de modo que cualquier cambio de supuesto se propaga solo.

**21. Mejoras.** Dónde actuar. El consumo se concentra en la laminadora, que se lleva 1.453,5 kWh/día de los 5.125,08 de la planta, y en el HVAC con 864 kWh/día. Tres columnas: **energía** —recuperar calor de la cámara de laminación, aislar placas y campana, revisar el rendimiento del 30 % adoptado—; **capacidad** —el curado y su número de posiciones de rack, y el margen de 35.135 mód/año del cuello—; **medición** —instrumentar la laminadora y el HVAC, que son los dos que definen el indicador fuera de rango.

**22. Cierre.** Fondo `#12283A`. Cuatro resultados numerados: la materia cierra al 100,00 %; el cuello es C-101 con 84,1 % de utilización y 35.135 mód/año de margen; la planta consume 1.537,52 MWh/año y demanda un transformador de 500 kVA; cuatro de los cinco indicadores caen dentro de los rangos. Y la lista corta de hipótesis a validar: factor de emisión del año vigente [10], potencias de los equipos sin ficha publicada, coeficientes de scrap, el rendimiento del 30 % de la laminadora y el precio de la energía según cuadro tarifario industrial. Cerrá con *Gracias · ¿Preguntas?* y los nombres del grupo.

**Diapositiva de respaldo**, después de la 22: las catorce referencias en cuerpo chico a dos columnas. No se expone, está para responder.

## Notas del orador

En todas las diapositivas, con tres partes: la idea en una frase; los números que conviene decir en voz alta, que no son todos los que están en pantalla; y la pregunta que el docente podría hacer, con su respuesta. Calibrá para 15 minutos, con el peso en las diapositivas 8 a 15, que son el núcleo técnico.

## Qué no hacer

- No inventes datos, fuentes ni valores intermedios.
- No redondees distinto del informe: si dice 296,52 kWh/t, no pongas 297.
- No pongas más de tres diapositivas con tabla. Si dudás entre tabla y barras rankeadas, elegí barras.
- Nada de viñetas de más de un nivel ni párrafos largos: el texto largo va en las notas del orador.
- No agregues conclusiones que el informe no saque, en especial sobre viabilidad económica, que no es parte de esta fase.
- No cambies la paleta ni uses el ámbar de adorno.
