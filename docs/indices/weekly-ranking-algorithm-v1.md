# Weekly Ranking Algorithm v1

Статус: official weekly ranking algorithm baseline v1.

## Weekly Cycle

Каждую неделю ASAIAS проходит один и тот же цикл:

1. Freeze the universe.
2. Collect evidence.
3. Score entities by rubric.
4. Normalize scores.
5. Apply confidence layer.
6. Run editorial review.
7. Publish official weekly release.
8. Log corrections and carry forward the baseline.

## Step 1. Freeze The Universe

В начале недели фиксируется:

- какой индекс выпускается;
- какой тип сущностей ранжируется;
- какой список участников входит в weekly pool;
- какие новые сущности допускаются как candidate entrants.

Без freeze нельзя честно сравнивать неделю к неделе.

## Step 2. Collect Evidence

Источники собираются по каждой сущности:

- official websites;
- official blogs and release notes;
- conference programs;
- public research pages;
- verified event pages;
- connected inbox updates;
- source map entries;
- editor-reviewed ecosystem notes.

Каждый сигнал получает:

- date;
- source type;
- topic tag;
- strength tag;
- reliability tag.

## Step 3. Score By Rubric

Для каждого индекса вводится пять scoring blocks.

Recommended standard weighting:

- capability / substance: `30%`
- consistency / cadence: `20%`
- governance / responsibility: `15%`
- ecosystem relevance: `20%`
- educational or public clarity: `15%`

Если индекс специализированный, веса меняются, но всегда публикуются рядом с выпуском.

## Step 4. Normalize Scores

После raw scoring все баллы нормализуются до шкалы `0-100`.

Normalized score нужен, чтобы:

- сравнивать сущности внутри одной недели;
- строить trend line;
- видеть week-over-week movement;
- отделять слабый шум от устойчивого сигнала.

## Step 5. Apply Confidence Layer

Confidence не меняет raw факт, но влияет на rank stability.

Пример:

- High confidence: no penalty
- Medium confidence: small volatility cap
- Low confidence: stronger volatility cap and explicit uncertainty note

Это не дает слабодоказанным сущностям резко взлетать только на одном шумном сигнале.

## Step 6. Editorial Review

Редакционный review проверяет:

- нет ли неподтвержденных claims;
- не спутаны ли signal и endorsement;
- не построен ли рост только на hype;
- есть ли у ranking narrative источник;
- нет ли конфликта с ASAIAS publication rules.

## Step 7. Publish Official Weekly Release

Публикация должна содержать:

- title of the index;
- week label;
- top 10 table;
- ranks 11-25 if needed;
- movers up / movers down;
- new entrants;
- methodology snapshot;
- confidence note;
- links to evidence where possible.

## Step 8. Log Corrections

После публикации:

- сохраняется frozen result;
- фиксируются correction requests;
- при необходимости выпускается updated note;
- следующая неделя использует corrected baseline, а не стихийную память.

## Recommended Weekly Output Format

### A. Global Top 10

- Rank
- Entity
- Score
- Confidence
- Change vs last week

### B. Movers

- biggest rise;
- biggest drop;
- strongest new entrant;
- strongest stable leader.

### C. Short Commentary

- one short paragraph per top entity;
- one short methodology paragraph;
- one short caution paragraph where confidence is limited.

## Governance Rule

Weekly rankings can be called **official ASAIAS rankings** only if:

- the methodology is linked;
- the freeze date is stated;
- the evidence pass is complete;
- the editorial review is complete.

## Launch Recommendation

ASAIAS should start with one weekly index first:

`AGASI` or `AGGRI`

Then expand to the rest after the workflow stabilizes.
