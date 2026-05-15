# Signal Memo 003

Статус: internal signal memo v1.

## Title

From capability to governability

## Executive Read

Сильный AI system сегодня уже нельзя оценивать только по тому, на что он способен.

Главный вопрос постепенно меняется:

не "что система умеет?",
а "насколько ей можно управлять в реальной работе?"

Для ASAIAS это означает переход к новой оптике:

- capability;
- interoperability;
- observability;
- evaluation;
- approval.

Именно вместе, а не по отдельности.

## Core Signals

### Signal 01. Workflow quality is becoming more important than isolated model quality

Рынок быстро движется к системам, где результат рождается из:

- tool use;
- memory or retrieved context;
- orchestration;
- multi-step execution;
- correction logic.

Значит, одной оценки модели уже недостаточно.

Source basis:

- `SRC-018`
- `SRC-024`

### Signal 02. Governability now depends on visible runtime state

Если человек не видит, как система пришла к результату, человеческое утверждение становится слабее.

Отсюда рост значения:

- traces;
- run inspection;
- evaluation loops;
- intervention points;
- logged corrections.

Source basis:

- `SRC-030`
- `SRC-031`
- `SRC-032`

### Signal 03. Protocols matter because they reshape consequence paths

Protocols полезны не только как integration convenience.

Они меняют:

- кто с кем взаимодействует;
- как переносится контекст;
- где возникают новые risk boundaries;
- как распределяется ответственность.

Source basis:

- `SRC-019`
- `SRC-020`
- `SRC-025`

## What This Means For ASAIAS

### 1. We should start ranking governability signals

ASAIAS уже готова не только писать статьи и memo, но и превращать наблюдения в index/rating language.

### 2. Public materials should shift from hype talk to runtime talk

Сильный публичный язык академии сейчас:

- visible workflows;
- explicit interfaces;
- reviewable traces;
- accountable autonomy;
- final human approval.

### 3. The next educational line is evidence-first AI

Нужно учить не только строить агент, но и:

- показывать ход его работы;
- измерять качество;
- объяснять границы;
- архивировать следы.

## Suggested Public Derivatives

1. AGASI Week 01 release.
2. AGASI Week 01 rating note.
3. public note on traceability as institutional trust.

## Bottom Line

Следующая зрелость AI systems измеряется не только capability.

Она измеряется governability:

- how observable the system is;
- how accountable the workflow is;
- how reversible the action path is;
- how real the human approval layer remains.
