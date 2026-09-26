# TP Fase 3 · Planta de módulos fotovoltaicos PERC 540 Wp — modelo Power BI

Modelo semántico y tablero de la Fase 3 del Trabajo Práctico Anual de
Instalaciones Industriales (UTN FRLP, 2026, Grupo 9), construido a partir de
`Balances_masa_energia_FV_Fase3_FINAL.xlsx`.

Está en formato **PBIP con el modelo en TMDL**: todo es texto versionable, sin
`.pbix` binario. Abrí `TP-FV-Fase3.pbip` con Power BI Desktop.

El tablero **"Tablero ejecutivo"** es el que ya venía en `prueba_instala.pbix`:
se reutilizó su diseño tal cual —13 visuales, tema y paleta— y el modelo se
construyó para que cada visual encuentre el campo que pide.

## Qué contiene el modelo

| Tabla         | Filas | Origen en el Excel                              |
| ------------- | ----- | ----------------------------------------------- |
| `Base`        | 16    | Parámetros de diseño (hojas de masa y energía)  |
| `Masa`        | 9     | Balance por operación                            |
| `Materiales`  | 8     | Composición del módulo y cierre global           |
| `Capacidad`   | 10    | Capacidad del proceso                            |
| `Energia`     | 16    | Balance eléctrico, con columna `Bloque`          |
| `Indicadores` | 17    | Tabla `tKPI` de consumos específicos             |
| `_Medidas`    | —     | Tabla sin datos, sólo medidas DAX                |

No hay relaciones entre tablas: cada una responde una pregunta distinta del
informe y ningún visual cruza dos tablas. Si más adelante querés cruzar
`Capacidad` con `Energia` por equipo, hace falta una dimensión de equipo, porque
los nombres no coinciden uno a uno entre las dos hojas.

### `Base` es el panel de control

Los parámetros de diseño —días por año, ritmo de línea, factor de emisión,
costo de la energía— están en la tabla `Base`, y las medidas los leen de ahí con
medidas ocultas de la carpeta `00 Parámetros`. **Si cambiás un supuesto, lo
cambiás en un solo lugar** y todo el tablero se recalcula. Es el equivalente a
las celdas amarillas editables de tu Excel.

### Medidas

19 medidas en `_Medidas`, agrupadas en carpetas: energía, consumos específicos,
ambiente, capacidad y masa. Diez de ellas existen con el nombre exacto que
reclaman los visuales del tablero original (`Energia Entrada`, `Perdidas`,
`Utilizacion Cuello`, `CO2 por Tonelada`, `Neto Etapa`, etc. — sin tildes, tal
como estaban en el `.pbix`).

Dos que conviene conocer:

- **`Diferencia de Cierre`** es el control del balance de materia: suma
  entrada + agregado − retirado − salida sobre todas las operaciones y **tiene
  que dar cero**. Si tocás un número del balance y deja de dar cero, el balance
  se rompió.
- **`Cuello de Botella`** no está escrito a mano: busca el equipo con la menor
  capacidad nominal y devuelve su nombre. Hoy da *Laminadora al vacío*; si
  cambiás una capacidad, el tablero sigue al nuevo cuello solo.

## Verificación contra el Excel

Las medidas se recalcularon desde los datos crudos y se compararon contra los
valores que ya trae el Excel. Las trece que el Excel expone coinciden hasta el
último decimal:

| Medida                 | Modelo      | Excel       |
| ---------------------- | ----------- | ----------- |
| Potencia Instalada     | 479,5 kW    | 479,5 kW    |
| Energia Entrada        | 5.125,08    | 5.125,08    |
| Energia Util           | 3.234,993   | 3.234,993   |
| Perdidas               | 1.890,087   | 1.890,087   |
| Eficiencia Global      | 63,12 %     | 63,12 %     |
| Energia Anual MWh      | 1.537,524   | 1.537,524   |
| Energia por Modulo     | 8,3026      | 8,3026      |
| Energia por Tonelada   | 296,52      | 296,52      |
| CO2 Anual              | 538,13      | 538,13      |
| CO2 por Tonelada       | 103,78      | 103,78      |
| Costo Energetico Anual | 153.752,4   | 153.752,4   |
| Utilizacion Cuello     | 84,05 %     | 84,05 %     |
| Capacidad Ociosa       | 15,95 %     | 15,95 %     |

`Diferencia de Cierre` da 8,6 × 10⁻¹³ kg/h, que es cero con redondeo de punto
flotante. El cuello de botella detectado coincide con el del Excel.

## Los datos están congelados dentro del modelo

Cada tabla es una partición calculada con `DATATABLE`: los valores viven en el
`.tmdl`, no hay ruta a tu Excel. Eso hace que el proyecto abra en cualquier
máquina sin configurar nada — que es lo que querés dos días antes de exponer.

La contra es que **si editás el Excel, el modelo no se entera.** Para
reconectarlo, reemplazá la partición calculada por una de Power Query:

```tmdl
	partition Energia = m
		mode: import
		source = ```
				let
				    Origen = Excel.Workbook(File.Contents("C:\ruta\Balances_masa_energia_FV_Fase3_FINAL.xlsx"), null, true),
				    Hoja = Origen{[Item="Balance energético", Kind="Sheet"]}[Data]
				in
				    Hoja
				```
```

## Estado

El modelo se escribió y se verificó numéricamente, pero **no se abrió en Power
BI Desktop**: se generó en Linux y Desktop sólo corre en Windows. Si algún
archivo no carga, el error de Desktop indica archivo y línea.
