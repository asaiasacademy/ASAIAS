# GitHub Access Policy

Статус: mandatory project rule v1.

## Главное правило

ASAIAS должен подключаться к GitHub только через локальный, проектный GitHub-доступ ASAIAS.

Нельзя использовать:

- активный глобальный GitHub CLI account, если он не является ASAIAS account / ASAIAS organization;
- чужой personal GitHub owner;
- глобальный `~/.ssh/config` как единственный источник маршрутизации;
- глобальные `git config --global user.name` и `user.email` как идентичность проекта;
- SSH keys других проектов, организаций или учебных экспериментов;
- remote, в котором owner не является `ASAIAS` или явно утвержденной ASAIAS organization.

## Required Setup Pattern

Любое подключение GitHub для этого проекта должно быть изолировано:

```text
project-local SSH key
  -> project-local SSH config or wrapper
  -> git config --local core.sshCommand
  -> ASAIAS-owned GitHub remote
```

Canonical local wrapper setup:

```text
scripts/asaias-setup-github.cmd
scripts/asaias-gh.cmd
scripts/asaias-git-ssh.cmd
scripts/asaias-preflight.cmd
scripts/asaias-create-repo.cmd
scripts/asaias-set-remote.cmd
```

Operational instructions: `docs/github-local-wrapper.md`.

## Remote Rule

Remote может быть добавлен только после явного решения:

```text
owner: asaiasacademy / approved ASAIAS organization
repo: ASAIAS
visibility: explicit public/private decision
```

Запрещено автоматически создавать или пушить в:

```text
<personal-account>/ASAIAS
<unrelated-organization>/ASAIAS
```

Текущий approved owner для проекта: `asaiasacademy`.

## Local Config Rule

В этом репозитории Git identity задается только локально:

```powershell
git config --local user.name "<ASAIAS identity>"
git config --local user.email "<ASAIAS email>"
git config --local core.sshCommand "<project-local wrapper>"
```

Если локальная ASAIAS identity не задана, push запрещен.

## GitHub CLI Rule

`gh` можно использовать только через project-local wrapper:

```powershell
scripts\asaias-gh.cmd
```

Перед использованием проверить:

```powershell
scripts\asaias-gh.cmd auth status
```

Если активный account не ASAIAS-approved, нельзя создавать repo, issues, milestones, secrets, Pages, releases или PR через этот account.

## Other Projects Rule

Другие проекты на этом компьютере должны авторизоваться через свои отдельные SSH profiles, keys, wrappers and remotes. ASAIAS не должен использовать их доступы, а они не должны использовать ASAIAS-доступ.

## Pre-Push Checklist

Перед любым `git push`:

```powershell
git remote -v
git config --local --get user.name
git config --local --get user.email
git config --local --get core.sshCommand
scripts\asaias-gh.cmd auth status
scripts\asaias-preflight.cmd
```

Push разрешен только если remote, identity and SSH command указывают на ASAIAS-approved доступ.
