---
title: Cómo reemplazamos un vendor de datos de €1M con un pipeline propio
subtitle: La historia técnica de construir datos sociodemográficos para 52 países.
date: 2026-05-20
readingTime: 8 min
tags: [Data Engineering, Geospatial, ML]
---

Cuando una organización depende de un proveedor comercial de datos sociodemográficos, paga no solo por los datos, sino por su rigidez: las columnas que ofrece, los países que cubre y el ritmo al que actualiza. Nos propusimos construir una alternativa **propia** que fuera a la vez más amplia y más barata de mantener.

El resultado fue un pipeline que cubre **52 países** a todos los niveles administrativos, con **262 columnas** de salida, frente a las 67 columnas y 36 países del vendor que reemplazó.

## El problema

Necesitábamos métricas demográficas (población, hogares, estructura de edad, fuerza laboral) a una granularidad espacial fina y comparable entre países. Los datos públicos existen —WorldPop, OECD, censos nacionales— pero llegan en formatos, resoluciones y años distintos. El reto no era encontrar datos, sino **armonizarlos y desagregarlos** de forma defendible.

## La arquitectura

El corazón es una **cascada de 13 pasos** que se ejecuta por partición (más de 2.000 particiones país × nivel administrativo), orquestada con **Dagster**:

```python
@asset(partitions_def=country_admin_partitions)
def harmonized_demographics(context, raw_sources):
    country = context.partition_key
    df = align_admin_boundaries(raw_sources, country)
    df = disaggregate_population(df, model=models["population"])
    df = derive_household_metrics(df)
    return validate(df, invariants=INVARIANTS)
```

Las piezas clave:

- **DuckDB** como motor analítico: SQL columnar rapidísimo sobre Parquet, sin servidor.
- **geopandas / rasterio / shapely** para el trabajo geoespacial: alinear fronteras administrativas y rasterizar poblaciones.
- **Tres modelos ML de desagregación espacial** (desempleo, tamaño de hogar, tipo de hogar) para bajar de resolución de forma estadísticamente sólida.

## La parte difícil: validación

Sustituir a un vendor exige **confianza**. Cualquiera puede generar un número; lo difícil es demostrar que es correcto. Implementamos:

1. **Invariantes** — reglas que *siempre* deben cumplirse (la suma de subgrupos = total, porcentajes en [0, 100], monotonías esperadas). Tasa de aprobación: **99.84%**.
2. **Benchmark contra el vendor** — comparación columna a columna donde había solape.
3. **Métricas de precisión** — **0.87% de MAPE mediano** y un score compuesto de **93.4/100**.

## Lo que aprendí

- **La orquestación importa tanto como el modelo.** Dagster nos dio reprocesos parciales y paralelismo; un reproceso completo baja a ~4 horas.
- **Las invariantes son tu red de seguridad.** Detectan regresiones que ninguna métrica agregada revela.
- **Reemplazar a un proveedor no es solo técnico, es de gobernanza.** El valor está en la trazabilidad: poder explicar de dónde sale cada número.

Construir datos de los que te puedes fiar es un trabajo de ingeniería tanto como de ciencia. Y, bien hecho, libera a la organización de una dependencia cara y opaca.
