export default function Home() {
    const learningItems = [
        {
          id: "react-components",  
          title: "React components",
            description:
                "I am learning how to build pages from small, reusable pieces of UI.",
        },
        {
          id: "tailwind-styling",
          title: "Tailwind styling",
            description:
                "I am practicing layout, spacing, colors, borders, and responsive design through utility classes.",
        },
        {
          id: "git-workflow",
          title: "Git workflow",
            description:
                "I am building the habit of checking changes, committing progress, and pushing proof to GitHub.",
        },
        {
          id: "product-thinking",
          title: "Product thinking",
            description:
                "I am learning how to make pages clear, useful, and focused on one strong next action.",
        },
        {
          id: "local-development",
          title: "Local development",
            description:
                "I am learning how to run projects on localhost, use ports, and preview changes instantly.",
        },
    ];
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
                <p className="mb-5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
                    30 Day Dev Sprint · Project 1
                </p>

                <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
                    I’m building real frontend skill through calm, focused daily
                    shipping.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                    This project is my first proof piece: a responsive,
                    conversion-focused landing page built with Next.js,
                    TypeScript, and Tailwind CSS.
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
                            Built to look clean on phones, tablets, and desktop
                            screens.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="font-semibold">Clear conversion path</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            Every section will guide visitors toward one simple
                            next action.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="font-semibold">Daily proof</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            Each commit shows visible progress and stronger
                            frontend skill.
                        </p>
                    </div>
                </div>

                <div
                    id="progress"
                    className="mt-16 w-full rounded-3xl border border-white/10 bg-white/3 p-6 text-left sm:p-8"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                        Progress log
                    </p>

                    <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                        Day 1: from setup to shipped UI.
                    </h2>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                        Today I set up my local development environment, created
                        my first Next.js app, learned how localhost and ports
                        work, replaced the default starter page, and committed
                        my first custom landing page section.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl bg-white/5 p-5">
                            <p className="text-3xl font-bold">01</p>
                            <p className="mt-2 text-sm text-slate-400">
                                Working local app running on port 3001.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white/5 p-5">
                            <p className="text-3xl font-bold">02</p>
                            <p className="mt-2 text-sm text-slate-400">
                                Custom hero and feature cards built with
                                Tailwind.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white/5 p-5">
                            <p className="text-3xl font-bold">03</p>
                            <p className="mt-2 text-sm text-slate-400">
                                GitHub commit history started with visible
                                proof.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-16 w-full text-left">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                        Learning stack
                    </p>

                    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                What I’m learning as I build.
                            </h2>

                            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                                Every section of this page is teaching me a real
                                frontend skill: layout, component structure,
                                responsive design, and clear product
                                communication.
                            </p>
                        </div>

                        <p className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400">
                            5 skills in progress
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {learningItems.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                            >
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
