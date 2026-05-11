# Governance

Статус: baseline v1.

## Принцип

Академия управляется как public proof-first educational project. Репозиторий является главным источником решений, но не хранит private student data.

## Decision Flow

```text
issue -> branch -> pull request -> checks -> review -> merge -> public roadmap update
```

## GitHub Access Governance

ASAIAS может быть подключен только к ASAIAS-owned GitHub remote через project-local SSH key/config/wrapper and local git identity. Любой remote, owner, SSH key или GitHub CLI account, не относящийся к ASAIAS, считается governance violation.

Политика: `docs/github-access-policy.md`.

## Роли

| Роль | Ответственность |
|---|---|
| Maintainer | принимает решения о merge, roadmap и claims |
| Academic Reviewer | проверяет курс, задания, evidence и certificate criteria |
| Research Reviewer | проверяет source map, bulletin и внешние источники |
| Finance Reviewer | проверяет pricing, refund, treasury и scholarship правила |
| Community Contributor | предлагает правки, переводы, demos, issues |

## Claims Policy

Разрешено говорить:

- проектная академическая инициатива;
- образовательная и исследовательская среда;
- public pilot;
- course review;
- certificate path after review;
- demo for learning purposes.

Нельзя говорить без доказательств:

- аккредитованная академия;
- официальная организация;
- государственная структура;
- подтвержденные партнеры;
- гарантированный доход;
- гарантированная работа;
- автоматический сертификат после оплаты.

## Source Map Rule

Любая публикация, включая международную, перед использованием на сайте должна быть внесена в `docs/source-map.md`.

## Legal Entity Rule

Юридическое лицо не регистрируется первым шагом. Регистрация рассматривается после появления регулярных платежей, B2B contracts, bank account, payroll, grants, sponsorship или налоговых обязательств.
