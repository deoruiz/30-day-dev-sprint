export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
          Day 1 of the 30 Day Dev Sprint
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Building clean, useful web apps with TypeScript, React, and Next.js.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          This is the first project in my developer sprint: a conversion-focused
          landing page built from scratch, improved every day, and deployed as
          proof of progress.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Start the sprint
          </a>

          <a
            href="#"
            className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            View projects
          </a>
        </div>
      </section>
    </main>
  );
}