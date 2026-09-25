# Seguimiento de Precios y Costos — modelo semántico Power BI (PBIP / TMDL)

Modelo semántico de Power BI escrito **como código**, en formato
[TMDL](https://learn.microsoft.com/power-bi/developer/projects/projects-dataset#tmdl-format)
dentro de un proyecto **PBIP**. No hay archivo `.pbix` binario: todo el modelo
—tablas, columnas, relaciones y medidas DAX— vive en archivos de texto
versionables con Git.

El caso de uso es el seguimiento mensual de **precios de venta, costos de
materia prima y margen**, con explosión de **estructura de producto (BOM)** para
calcular el costo unitario a partir del precio de cada insumo en cada período.

## Cómo abrirlo

1. Abrí `SeguimientoPreciosCostos.pbip` con **Power BI Desktop** (versión
   reciente, con *Power BI Project (.pbip)* habilitado en
   *Archivo → Opciones → Características de vista previa*).
2. El modelo se carga y se calcula solo: **no requiere ninguna conexión de
   datos**. Las tablas son calculadas por DAX, así que abre en cualquier
   máquina sin gateway, sin SAP y sin credenciales.
3. El informe viene con una página en blanco llamada *Resumen*: los visuales
   son tuyos para armar.

También podés apuntar el **Power BI Modeling MCP Server** a la carpeta del
modelo para seguir editándolo con un agente:

```
Open semantic model from PBIP folder 'C:\ruta\a\SeguimientoPreciosCostos.SemanticModel\definition'
```

## Estructura del modelo

Esquema estrella con una tabla puente para el BOM:

```
Calendario ──┬─< Ventas >─┬── Producto ──< BOM >── Insumo
             └─< PrecioInsumo >───────────────────────┘
```

| Tabla          | Rol        | Contenido                                                            |
| -------------- | ---------- | -------------------------------------------------------------------- |
| `Calendario`   | Dimensión  | 2024-01-01 a 2025-12-31, marcada como tabla de fechas                 |
| `Producto`     | Dimensión  | 6 productos plásticos agrupados en familias                           |
| `Insumo`       | Dimensión  | 5 insumos (resinas, aditivo, packaging)                               |
| `BOM`          | Puente     | Cantidad de cada insumo por unidad de producto                        |
| `PrecioInsumo` | Hecho      | Precio unitario de cada insumo, mensual (24 meses)                    |
| `Ventas`       | Hecho      | Cantidad y precio unitario de venta, mensual por producto             |

Todas las relaciones son de muchos a uno, con filtro simple, desde el hecho
hacia la dimensión.

## Medidas

Están todas en la tabla `Ventas`, organizadas en carpetas de visualización:

| Carpeta                 | Medidas                                                                     |
| ----------------------- | --------------------------------------------------------------------------- |
| `01 Volumen`            | Cantidad Vendida                                                             |
| `02 Precios e Ingresos` | Ingresos · Precio Promedio Ponderado                                         |
| `03 Costos`             | Costo MP Unitario · Costo MP Total                                           |
| `04 Márgenes`           | Margen Bruto · Margen Bruto %                                                |
| `05 Variaciones`        | Ingresos Mes Anterior · Var. Ingresos MoM % · Var. Precio MoM % · Var. Costo MP MoM % |
| `06 Acumulados`         | Ingresos YTD · Índice de Precio (Base Ene-24)                                |

Dos decisiones de modelado que conviene entender antes de tocar nada:

- **`Costo MP Unitario` recorre el BOM.** Para cada insumo del producto toma el
  precio promedio del período en contexto y lo multiplica por la cantidad por
  unidad. Devuelve vacío si hay más de un producto en contexto (`HASONEVALUE`),
  porque un costo unitario agregado sobre varios productos no significa nada.
- **`Costo MP Total` itera producto por producto** con `SUMX(VALUES(...))`, así
  da correcto en cualquier granularidad —total general, familia o mes— y no
  solamente cuando hay un producto seleccionado.

## Datos de ejemplo

Los datos son sintéticos y **deterministas**: se generan con DAX a partir de
precios base por producto/insumo, una tendencia mensual y un ruido calculado con
`MOD`, no con funciones aleatorias. Eso significa que el modelo da siempre los
mismos números, en cualquier máquina y en cualquier refresh — que es lo que
querés en un demo o en una prueba de regresión.

## Cómo reemplazarlos por datos reales

Cada tabla es una partición calculada. Para enchufarla a datos reales,
reemplazá la partición `calculated` por una partición `m` con la consulta Power
Query correspondiente. Por ejemplo, en
`SeguimientoPreciosCostos.SemanticModel/definition/tables/Ventas.tmdl`:

```tmdl
	partition Ventas = m
		mode: import
		source = ```
				let
				    Origen = Sql.Database("servidor", "base"),
				    Ventas = Origen{[Schema="dbo", Item="Ventas"]}[Data]
				in
				    Ventas
				```
```

Al pasar a datos reales, sacá también `isNameInferred` e `isDataTypeInferred` de
las columnas y agregá `sourceColumn` con el nombre real del campo de origen.

Conviene migrar primero las dimensiones (`Producto`, `Insumo`, `BOM`) y dejar
los hechos sintéticos hasta validar que las relaciones y las medidas siguen
dando lo mismo.

## Estado y verificación

El modelo fue escrito a mano en TMDL y revisado archivo por archivo, pero
**no pudo abrirse en Power BI Desktop para verificarlo**: se generó en un
contenedor Linux, y Power BI Desktop solo corre en Windows. La sintaxis TMDL y
el DAX están revisados, y todos los archivos JSON del proyecto parsean
correctamente, pero la primera apertura en Desktop es la prueba real. Si algo
no carga, el mensaje de error de Desktop indica el archivo y la línea.
