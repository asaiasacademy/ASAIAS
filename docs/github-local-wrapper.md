# ASAIAS Local GitHub Wrapper

Статус: operational setup v1.

## Purpose

ASAIAS uses a project-local GitHub gateway so this repository does not reuse other GitHub accounts, SSH keys or global `gh` configuration on the same computer.

## What Is Local

All sensitive local state lives in:

```text
.asaias-local/
```

This directory is ignored by Git and must never be committed.

## Setup

Run:

```powershell
scripts\asaias-setup-github.cmd
```

This creates:

- `.asaias-local/gh/` for project-local GitHub CLI auth;
- `.asaias-local/ssh/id_ed25519_asaias` for the ASAIAS SSH key;
- `.asaias-local/ssh/config` for the ASAIAS-only SSH host;
- local Git config for `core.sshCommand`, `ssh.variant`, `user.name`, and `user.email`.

## Authorize GitHub CLI

Use the wrapper, not global `gh`:

```powershell
scripts\asaias-gh.cmd auth login --hostname github.com --git-protocol ssh --scopes repo,workflow,admin:public_key,project
```

Then check:

```powershell
scripts\asaias-gh.cmd auth status
scripts\asaias-preflight.cmd
```

## Add SSH Key To GitHub

The setup command prints the public key. Add it to the ASAIAS-approved GitHub account or organization access route.

Do not add this key to unrelated projects.

If `gh auth login` asks which SSH key to upload, choose `Skip` because the ASAIAS project-local key is stored in `.asaias-local/ssh/` and has already been added manually.

## Create A Repository

After authorization, create the repository only under the approved ASAIAS owner.

Current approved owner:

```text
asaiasacademy
```

Repository name:

```text
ASAIAS
```

```powershell
scripts\asaias-create-repo.cmd -Name ASAIAS -Visibility private
```

This command is intentionally hardcoded to the approved owner in `scripts/asaias-owner.ps1`.

## Set Remote

Use the ASAIAS-local SSH host:

```powershell
scripts\asaias-set-remote.cmd -Name ASAIAS
```

Then:

```powershell
scripts\asaias-preflight.cmd
git push -u origin main
```

## Hard Rule

Do not use global `gh`, global SSH profiles, unrelated personal accounts or unrelated organizations for this project.
