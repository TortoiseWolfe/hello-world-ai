# CLAUDE.md

Instructions for Claude Code when working in `hello-world-ai`. This is the **companion starter** for [TSD_AI_Workflow](https://github.com/TurtleWolfe/TSD_AI_Workflow).

## Purpose

This repo is the smallest possible Docker-first Next.js project with Claude Code pre-configured. It exists so TSD interns can clone it on Day 1 and ship a real commit in under 15 minutes — no scaffolding, no setup, no friction.

When someone clones this and renames it for a real project, this `CLAUDE.md` is the starting template for their `CLAUDE.md`. They'll add project-specific rules over time.

## Core Development Principles

1. **Proper Solutions Over Quick Fixes** — Implement correctly the first time
2. **Root Cause Analysis** — Fix underlying issues, not symptoms
3. **Clean Architecture** — Follow established patterns consistently
4. **No Technical Debt** — Never commit TODOs or workarounds without an issue link

## Docker-First Development (MANDATORY)

**CRITICAL:** This project requires Docker. Local `pnpm`/`npm` commands are not supported.

### NEVER Install Packages Locally

```bash
# FORBIDDEN — never run these on the host
pnpm install
pnpm add <package>
npm install
yarn install
npx <anything>

# CORRECT — always use Docker
docker compose exec hello-world-ai pnpm install
docker compose exec hello-world-ai pnpm add <package>
```

**Why this is critical:**
- Creates host `node_modules` with wrong permissions (Docker-owned)
- Causes conflicts between host and container dependencies
- Breaks the Docker-first architecture
- Creates cleanup nightmares (Docker-owned files can't be deleted by host user)

**If you accidentally installed locally:**
```bash
docker compose down
docker compose run --rm hello-world-ai rm -rf node_modules
docker compose up
```

### NEVER Use sudo

When permission errors show up, **never** `sudo chown`. Use Docker:

```bash
# WRONG
sudo chown -R $USER:$USER .next

# CORRECT
docker compose exec hello-world-ai rm -rf .next
docker compose down && docker compose up
```

## Secrets: Never Hardcoded in Committed Files

**CRITICAL:** No secret, token, key, or credential may appear as a literal value in any committed file.

1. All secrets go in `.env` (gitignored). No exceptions.
2. Committed files use `${VAR:-placeholder}` where the placeholder is inert (e.g., `set-in-env-file`).
3. `.env.example` shows variable names only with commented-out or placeholder values.
4. If a secret leaks into git history, scrub it with `git-filter-repo` and force push. Never allowlist.

## Stack

- **Framework:** Next.js 15
- **UI:** React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **Package manager:** pnpm
- **Node version:** 22 (in container)
- **Testing:** Vitest (when added)

## Essential Commands

```bash
# Start development (foreground)
docker compose up

# Start in background
docker compose up -d

# Run a command inside the container
docker compose exec hello-world-ai pnpm run dev
docker compose exec hello-world-ai pnpm install
docker compose exec hello-world-ai pnpm add <package>

# Stop
docker compose down

# Clean restart (use /clean-start command)
docker compose down && docker compose up --build
```

## Project Structure

```
hello-world-ai/
├── README.md
├── CLAUDE.md                      # this file
├── docker-compose.yml
├── .env.example
├── .gitignore
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── .claude/
│   └── commands/                  # 30 starter-kit slash commands
└── src/
    └── app/
        ├── layout.tsx             # Root layout
        ├── page.tsx               # Landing page
        └── globals.css            # Global + Tailwind
```

## Component Pattern

When you add real components (this starter has none), follow the **5-file atomic pattern**:

```
src/components/ComponentName/
├── index.tsx                          # Barrel export
├── ComponentName.tsx                  # Implementation
├── ComponentName.test.tsx             # Unit test (Vitest + RTL)
├── ComponentName.stories.tsx          # Storybook story
└── ComponentName.accessibility.test.tsx  # a11y test
```

See the [TSD_AI_Workflow five-file-components principle](https://github.com/TurtleWolfe/TSD_AI_Workflow) for the full rationale.

## SpecKit (Optional)

This starter does NOT pre-initialize SpecKit. To use the 10 `/speckit.*` slash commands in `.claude/commands/`, run:

```bash
uvx --from git+https://github.com/github/spec-kit.git@v0.5.0 specify init
```

This creates `.specify/` with the templates and scripts the SpecKit commands depend on.

If you don't initialize SpecKit, the other 20 starter-kit commands still work fine.

## Slash Commands

The `.claude/commands/` directory has 30 starter-kit commands. The most important on Day 1:

- `/prep` — read this CLAUDE.md silently, output "Ready."
- `/commit` — lint + type-check inside Docker, then conventional commit with Claude Code footer
- `/ship` — commit + merge feature branch to main
- `/test` — run the test suite inside Docker
- `/code-review` — 5-phase audit (security, performance, quality, tests, docs)

For the full catalog, see [TSD_AI_Workflow Chapter 03](https://github.com/TurtleWolfe/TSD_AI_Workflow/tree/main/03-slash-commands).

---

## Notes for Claude

- Respect Docker-first. Never run package managers on the host.
- Respect the secrets rule. Never hardcode credentials in committed files.
- This is a minimal starter. Don't add features that aren't requested.
- If the user is following TSD_AI_Workflow, they may ask you to make small edits to demonstrate the workflow. Keep changes minimal and focused.
- Don't summarize this CLAUDE.md when loaded. Just read it and be ready.
