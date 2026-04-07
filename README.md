# hello-world-ai

The companion starter for [TSD_AI_Workflow](https://github.com/TurtleWolfe/TSD_AI_Workflow). A minimal Docker-first Next.js 15 + React 19 + TypeScript + Tailwind 4 project with the 30-command Claude Code starter kit pre-installed.

**You just cloned this. Here's what to do.**

---

## Quick start (5 minutes)

```bash
# Inside the repo you just cloned:
cp .env.example .env
docker compose up
```

Wait for the "ready" line. Open [http://localhost:3000](http://localhost:3000) in a browser. You should see the "Hello, TSD" landing page.

That's it. The dev server is running, hot reload works, and Claude Code is configured. You're ready to ship.

---

## What's in here

| Path | What |
|---|---|
| `README.md` | This file |
| `CLAUDE.md` | Rules Claude reads on every session |
| `docker-compose.yml` | The Docker dev environment |
| `.env.example` | Variable names — copy to `.env` (gitignored) |
| `.gitignore` | Standard Node + Docker ignores |
| `package.json` | Next.js 15 + React 19 + TypeScript + Tailwind 4 |
| `next.config.ts` | Next config |
| `tsconfig.json` | TypeScript strict mode |
| `tailwind.config.ts` | Tailwind 4 config |
| `postcss.config.js` | PostCSS config for Tailwind |
| `src/app/layout.tsx` | Root layout |
| `src/app/page.tsx` | The landing page you see at localhost:3000 |
| `src/app/globals.css` | Global styles + Tailwind directives |
| `.claude/commands/` | **30 starter-kit slash commands** (priming, SpecKit, git, quality, testing, session, reading) |

---

## Your first edit

Once `docker compose up` is running and the page loads:

1. **Open a second terminal** in this directory
2. Launch Claude Code: `claude`
3. At the prompt, run: `/prep`
   You should see exactly: `Read project context. Ready.`
4. Ask Claude to make a change:
   ```
   change the h1 on src/app/page.tsx from "Hello, TSD" to "Hello, [your name]"
   ```
5. Claude proposes the diff. Approve it. The browser hot-reloads.
6. Run: `/commit`
   This runs lint + type-check inside the container, then creates a conventional commit with the Claude Code footer.
7. `git log -1` shows your commit.

**You just shipped a real change in under 15 minutes. That's the whole point.**

---

## The starter kit

`.claude/commands/` ships with 30 commands across 7 families:

| Family | Commands |
|---|---|
| **Priming** | `prep`, `prime`, `prime_repositories` |
| **SpecKit** | `speckit.specify`, `speckit.clarify`, `speckit.plan`, `speckit.tasks`, `speckit.implement`, `speckit.analyze`, `speckit.checklist`, `speckit.constitution`, `speckit.taskstoissues`, `speckit.workflow` |
| **Git** | `commit`, `ship` |
| **Quality** | `code-review`, `security-audit`, `secrets-scan`, `audit` |
| **Testing** | `test`, `test-a11y`, `test-components`, `test-fail`, `test-hooks` |
| **Session** | `session-stats`, `session-summary`, `status`, `clean-start` |
| **Reading** | `read-spec`, `read-issues` |

The 10 SpecKit commands need [`github/spec-kit`](https://github.com/github/spec-kit) initialized in the project. **This starter does NOT pre-initialize it** — run it yourself when you're ready:

```bash
uvx --from git+https://github.com/github/spec-kit.git@v0.5.0 specify init
```

The other 20 commands work out of the box.

---

## Renaming this for your own project

When you clone this as the starting point for a real project:

```bash
cp -a hello-world-ai my-real-project
cd my-real-project

# Update these two files to use your project name
$EDITOR package.json docker-compose.yml
# Find: hello-world-ai
# Replace: my-real-project

# Reset git history
rm -rf .git
git init
git add -A
git commit -m "chore: bootstrap from hello-world-ai starter"
```

You're ready to start building.

---

## What this is NOT

- **Not a production template.** This is a minimum viable starter for learning the workflow. Production apps have auth, database, error handling, etc.
- **Not a Next.js tutorial.** Read [Next.js docs](https://nextjs.org/docs) for that.
- **Not a Claude Code tutorial.** Read [TSD_AI_Workflow](https://github.com/TurtleWolfe/TSD_AI_Workflow) for that.

---

## Curriculum links

This starter is the companion to:

- **Chapter 01 — Bootstrap a Repo** — clone this, rename it, ship a commit
- **Chapter 02 — Give It Context** — write a `CLAUDE.md` that catches mistakes
- **Chapter 03 — Slash Commands** — install the starter kit (already done here)
- **Chapter 04 — The SpecKit Loop** — ship a real feature end-to-end

Visit the curriculum at [`~/repos/TSD_AI_Workflow/`](../TSD_AI_Workflow/) (or wherever you cloned it).
