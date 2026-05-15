# Governance Memo 001

Статус: internal governance memo v1.

## Title

From model policy to system accountability

## Why this memo exists

Многие организации всё ещё говорят об AI governance так, как будто речь идёт главным образом о policy page, acceptable use или abstract ethics language.

Но для agentic systems этого уже недостаточно.

Governance всё чаще определяется через:

- workflow boundaries;
- tool permissions;
- observability;
- evaluation loops;
- approval gates;
- consequence review.

## Working Thesis

Institution-ready AI governance should be described not only at the model level, but at the system level.

Иначе получается ложная безопасность:

- политика есть;
- модель сильная;
- интерфейс красивый;

но неясно:

- кто утвердил выполнение;
- кто видит отклонение;
- кто имеет право вмешаться;
- что считается достаточным evidence после работы системы.

## Five Accountability Shifts

### 1. From model quality to workflow accountability

Сильная модель не заменяет описание workflow.

Организации должны фиксировать:

- unit of work;
- allowed actions;
- escalation paths;
- approval conditions.

### 2. From abstract safety to visible controls

Без traces, logs, review points and intervention rights safety остаётся лозунгом.

### 3. From single output review to lifecycle review

Проверять нужно не только финальный ответ, но и:

- source access;
- tool calls;
- routing decisions;
- retry logic;
- correction handling.

### 4. From vendor trust to interface trust

Даже при сильном поставщике риск часто возникает на стыках:

- connector layer;
- local context;
- internal tools;
- multi-agent handoffs.

### 5. From passive oversight to explicit approval architecture

Human approval должен быть спроектирован, а не подразумеваться.

## ASAIAS Application

Этот memo нужно использовать как внутренний фильтр перед:

- public commentary;
- course updates;
- demo design;
- future indexes and ratings.

Минимальные вопросы для ASAIAS:

1. What is the workflow boundary?
2. Which tools are in scope?
3. What is visible during execution?
4. Who can intervene?
5. Who gives final approval?
6. What gets archived for traceability?

## Source Basis

- `SRC-018`
- `SRC-021`
- `SRC-022`
- `SRC-023`
- `SRC-024`

## Next Use

This memo should feed:

- `Signal Memo 002`
- one public management publication;
- one public research note on accountability;
- future index language for governability and traceability.
