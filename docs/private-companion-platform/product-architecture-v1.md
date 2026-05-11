# Product Architecture v1

Статус: concept architecture v1.

## Product Name

Приватная AI-платформа близости, где персональный компаньон получает память, голос, характер и телесный отклик через устройства.

## MVP Promise

Пользователь получает private companion workspace, где AI-компаньон может помнить согласованные факты, говорить голосом, сохранять устойчивый характер и управлять безопасным device/haptics response layer.

## MVP System

```text
local app
  -> consent profile
  -> memory vault
  -> persona engine
  -> voice pipeline
  -> companion runtime
  -> device gateway
  -> safety governor
  -> audit/delete/export tools
```

## Core Modules

| Module | Responsibility |
|---|---|
| Consent Profile | stores allowed memory, voice, device and intimacy settings |
| Memory Vault | local-first long-term memory and retrieval |
| Persona Engine | character traits, tone, boundaries and behavioral continuity |
| Voice Pipeline | wake word, STT, TTS, interruption and latency control |
| Companion Runtime | dialogue, planning, emotion state and tool use |
| Device Gateway | Home Assistant, MQTT, haptics and allowlisted devices |
| Safety Governor | blocks unsafe behavior and device actuation |
| Audit Layer | local event log, export, delete and review |

## Device Rule

No device can be controlled until all conditions are true:

- user explicitly opted in;
- device is allowlisted;
- action type is allowlisted;
- rate limit is defined;
- emergency stop is available;
- action is logged locally;
- action does not involve physical harm, coercion or unsafe intensity.

## First Demo

Safe demo should avoid intimate hardware and use simple embodied feedback:

```text
voice input -> companion response -> memory note -> LED / screen / phone haptic confirmation
```

## Not MVP

- adult device integration;
- biometric inference;
- hidden recording;
- public social network;
- autonomous device control without confirmation;
- imitation of real people;
- claims of therapy, medical benefit or guaranteed emotional outcome.

