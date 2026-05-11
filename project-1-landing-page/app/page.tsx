export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
          30 Day Dev Sprint · Project 1
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
          I’m building real frontend skill through calm, focused daily shipping.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          This project is my first proof piece: a responsive, conversion-focused
          landing page built with Next.js, TypeScript, and Tailwind CSS.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#features"
            className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            See what I’m building
          </a>

          <a
            href="#progress"
            className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View my progress
          </a>
        </div>

        <div
          id="features"
          className="mt-16 grid w-full gap-4 text-left sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-semibold">Responsive layout</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Built to look clean on phones, tablets, and desktop screens.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-semibold">Clear conversion path</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Every section will guide visitors toward one simple next action.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-semibold">Daily proof</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Each commit shows visible progress and stronger frontend skill.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}