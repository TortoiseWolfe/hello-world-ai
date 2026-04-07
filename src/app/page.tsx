export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full space-y-8">
        <header className="space-y-2 text-center">
          <h1 className="text-5xl font-bold tracking-tight">Hello, TSD</h1>
          <p className="text-lg text-slate-600">
            You just cloned <code className="font-mono bg-slate-200 px-2 py-1 rounded text-sm">hello-world-ai</code>.
            The dev server is running. Hot reload works.
          </p>
        </header>

        <section className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Next steps</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>
              Open Claude Code in this directory: <code className="font-mono bg-slate-100 px-2 py-0.5 rounded text-sm">claude</code>
            </li>
            <li>
              Run <code className="font-mono bg-slate-100 px-2 py-0.5 rounded text-sm">/prep</code> to load this project&apos;s
              <code className="font-mono bg-slate-100 px-2 py-0.5 rounded text-sm ml-1">CLAUDE.md</code>
            </li>
            <li>
              Ask Claude to change the <code className="font-mono bg-slate-100 px-2 py-0.5 rounded text-sm">h1</code> on
              this page to your name
            </li>
            <li>
              Run <code className="font-mono bg-slate-100 px-2 py-0.5 rounded text-sm">/commit</code> to ship the change
            </li>
          </ol>
        </section>

        <section className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Learn more</h2>
          <p className="text-slate-700">
            This starter is the companion to the{' '}
            <a
              href="https://github.com/TortoiseWolfe/AI_Workflow"
              className="text-blue-600 hover:underline font-medium"
            >
              AI_Workflow
            </a>{' '}
            curriculum — six chapters that teach the discipline this starter is built on.
          </p>
          <p className="text-slate-700">
            Start with <strong>Chapter 01 — Bootstrap a Repo</strong> in the curriculum repo to walk through
            renaming this starter, shipping your first commit, and learning the slash command workflow.
          </p>
        </section>

        <footer className="text-center text-sm text-slate-500">
          Powered by Next.js 15, React 19, TypeScript, and Tailwind CSS 4. Docker-first, secrets-safe.
        </footer>
      </div>
    </main>
  );
}
