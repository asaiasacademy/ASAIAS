# Signal Memo 002

Статус: internal signal memo v1.

## Title

Protocol literacy and interoperability are becoming management literacy

## Executive Read

Если говорить совсем прямо, следующий большой сдвиг выглядит так:

AI systems начинают оцениваться не только по качеству модели, а по качеству интерфейсов между людьми, агентами, инструментами и организациями.

Это значит, что для ASAIAS тема `protocol literacy` больше не является технической экзотикой. Она становится частью стратегического управления.

Нужно понимать:

- как система получает контекст;
- как агент обращается к инструментам;
- как несколько агентов взаимодействуют между собой;
- где именно проходит граница доверия;
- кто видит ход работы и кто утверждает результат.

## Core Signals

### Signal 01. Protocols are no longer optional plumbing

MCP и A2A показывают, что рынок постепенно оформляет interoperability как самостоятельный слой.

Это означает, что вопрос "как соединить систему" становится не сугубо инженерным, а управленческим:

- какой контур данных открывается;
- какие действия разрешены;
- какие интерфейсы считаются доверенными;
- где сохраняется след исполнения.

Source basis:

- `SRC-019`
- `SRC-020`
- `SRC-025`

### Signal 02. Agent design now assumes explicit tools, guardrails and state

Официальная agent-логика OpenAI подчёркивает, что зрелая система строится через модель, инструменты и инструкции, а затем дополняется orchestration, guardrails, results and state.

Для ASAIAS это прямой сигнал:

- management literacy must include interface literacy;
- protocol choices affect governance choices;
- observability and evaluation should be discussed before scale, not after failure.

Source basis:

- `SRC-018`
- `SRC-024`

### Signal 03. Interoperability is becoming a trust question

Чем больше в системе внешних инструментов, workflow-переходов и multi-agent coordination, тем важнее вопрос:

кто именно отвечает за корректность перехода между слоями.

Если система умеет "много всего", но у неё неясны:

- handoff rules;
- approval gates;
- intervention rights;
- logging discipline;

то такая система не готова к институциональному доверию.

Source basis:

- `SRC-018`
- `SRC-019`
- `SRC-020`
- `SRC-024`

## What This Means For ASAIAS

### 1. Protocol literacy should become a standing academy topic

ASAIAS должна объяснять не только модели, но и:

- context protocols;
- tool boundaries;
- agent-to-agent coordination;
- approval architecture;
- trust surfaces around interoperability.

### 2. Public commentary should treat interoperability as governance

Сильная линия для академии:

не "какой протокол победит", а
"какая interoperability architecture остаётся управляемой, наблюдаемой и человечески утверждаемой".

### 3. Future demos must show boundaries, not only capability

Демонстрации и курсы должны показывать:

- что агент может;
- что агент не может;
- что остаётся visible to a human;
- где человек останавливает, перенаправляет или утверждает результат.

## Suggested Derivatives

1. Public article: why protocol literacy is becoming an institutional AI competence.
2. Public publication: rules for governing agentic workflows before scale.
3. Public research note: interoperability, accountability and the human approval layer.

## Bottom Line

Следующий этап AI competition будет идти не только по линии capability.

Он пойдёт по линии:

- interoperability;
- traceability;
- approval design;
- trust architecture.

Именно здесь ASAIAS может говорить особенно уверенно и полезно.
