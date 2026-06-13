---
title: Construyendo un agente conversacional con RAG de extremo a extremo
subtitle: Razonamiento multietapa, recuperación sobre pgvector e informes cacheados.
date: 2026-04-08
readingTime: 7 min
tags: [LLMs, Full-Stack, AI]
---

> **Nota:** post de ejemplo basado en un proyecto real (Astro Soul Center). Edítalo o reemplázalo en `posts/agente-conversacional-rag.md`.

Un chatbot que responde "algo" es fácil. Un agente que mantiene una conversación **coherente, contextual y con conocimiento de dominio** es otra historia. En Astro Soul Center construí un agente conversacional sobre un dominio especializado, y estas son las decisiones de arquitectura que más impacto tuvieron.

## RAG, pero con intención

Recuperación aumentada (RAG) suena simple: buscas fragmentos relevantes y se los das al modelo. En la práctica, la calidad depende de **qué** recuperas y **cuándo**.

- **Embeddings + pgvector** para la búsqueda semántica. Usar PostgreSQL con `pgvector` mantuvo todo en una sola base de datos, sin infraestructura vectorial aparte.
- **Reranking** sobre los candidatos recuperados para subir la precisión del top-k antes de gastar tokens.

```python
async def retrieve(query: str, k: int = 8) -> list[Chunk]:
    emb = await embed(query)
    candidates = await db.fetch(
        "SELECT id, text, embedding <=> $1 AS dist "
        "FROM chunks ORDER BY dist LIMIT $2", emb, k * 3
    )
    return rerank(query, candidates)[:k]
```

## Razonamiento multietapa

El error común es tratar toda la conversación igual. Modelé la interacción en **etapas** —bienvenida, exploración profunda, análisis específico, tema concreto— y cada una usa un *prompt* y una **temperatura** distintos:

| Etapa | Objetivo | Temperatura |
|-------|----------|-------------|
| Bienvenida | Acoger, orientar | baja |
| Exploración | Abrir, conectar | media |
| Análisis | Profundizar | media-baja |
| Tema concreto | Responder con precisión | baja |

Esto da una sensación de **progreso** en la conversación en lugar de un bucle plano de preguntas y respuestas.

## El truco de rendimiento: cachear lo caro

La generación de informes narrativos largos tardaba ~60 segundos la primera vez. Cachear las secciones generadas por sección y entrada hizo que las siguientes cargas fueran **instantáneas**. El usuario paga el coste una vez; el sistema no lo repite.

## El stack

- **Backend:** FastAPI + SQLAlchemy async, migraciones con Alembic.
- **Datos:** PostgreSQL + pgvector.
- **Frontend:** Next.js + React + Tailwind, con componentes Radix.
- **Observabilidad:** trazas con OpenTelemetry para ver dónde se va el tiempo (y los tokens).

## Lecciones

- **La conversación es una máquina de estados**, no un *prompt* gigante. Modelar etapas mejora la coherencia.
- **Cachea lo que es caro y determinista.** No todo lo de un LLM tiene que ser en vivo.
- **Mantén la infraestructura simple.** `pgvector` en tu Postgres existente evita un sistema entero que mantener.

Un buen agente no es el que usa el modelo más grande, sino el que **estructura el problema** para que el modelo brille.
