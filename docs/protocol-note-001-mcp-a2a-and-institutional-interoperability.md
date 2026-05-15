# Protocol Note 001

Статус: internal protocol note v1.

## Title

MCP, A2A and institutional interoperability

## Purpose

Эта записка нужна, чтобы не смешивать разные уровни interoperability в одну абстрактную тему "open protocols".

Для ASAIAS важно различать:

- model-to-system connectivity;
- agent-to-agent coordination;
- institutional approval and consequence handling.

## Distinction

### MCP

MCP важен прежде всего как слой подключения AI applications к:

- data sources;
- tools;
- workflows;
- external systems.

Для академии это язык доступа, границ контекста и контролируемых интерфейсов.

### A2A

A2A важен как слой coordination between agents.

Для академии это язык:

- delegation;
- handoffs;
- capability discovery;
- multi-agent cooperation;
- cross-vendor interaction.

## Why the distinction matters

Если смешать эти темы, легко получить ложное впечатление, что interoperability itself already solves governance.

На деле протокол только открывает возможность согласованной работы. Governance still depends on:

- approval design;
- observability;
- intervention rights;
- responsibility mapping;
- archival discipline.

## ASAIAS Interpretation

Самая сильная позиция для ASAIAS здесь такая:

interoperability is not only a technical advantage.

It is a governance test.

Организация, которая умеет соединить много агентов и систем, но не умеет:

- объяснить контуры доступа;
- показать логику доверия;
- документировать переходы;
- зафиксировать final human approval;

не является зрелой только потому, что она "соединена".

## Use In Public Layer

Из этой записки логично выводить:

1. article for institutions on protocol literacy;
2. management publication on workflow governance before scale;
3. research note on accountability in interoperable agent systems.

## Source Basis

- `SRC-019`
- `SRC-020`
- `SRC-024`
- `SRC-025`
