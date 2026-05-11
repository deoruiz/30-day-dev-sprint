export default function Home() {
    const qualityPoints = [
        {
            id: "certified-process",
            title: "Certified quality systems",
            description:
                "Position AS9100 and ISO-aligned quality systems as proof that the shop can support high-requirement industries.",
        },
        {
            id: "inspection",
            title: "Inspection-ready production",
            description:
                "Highlight inspection discipline, documentation, and repeatable process control for complex parts.",
        },
        {
            id: "production-confidence",
            title: "Prototype to production confidence",
            description:
                "Help buyers understand that the company can support both early-stage development and ongoing production needs.",
        },
    ];
    const quoteRequirements = [
        "Part drawings or CAD files",
        "Material and finish requirements",
        "Estimated quantities",
        "Target timeline",
        "Quality or certification needs",
    ];
    const navLinks = [
        {
            id: "capabilities",
            label: "Capabilities",
            href: "#capabilities",
        },
        {
            id: "industries",
            label: "Industries",
            href: "#industries",
        },
        {
            id: "process",
            label: "RFQ Process",
            href: "#process",
        },
    ];
    const trustSignals = [
        {
            id: "founded",
            value: "1972",
            label: "Custom manufacturing experience since",
        },
        {
            id: "facility",
            value: "80k",
            label: "Square-foot manufacturing facility",
        },
        {
            id: "certified",
            value: "AS9100",
            label: "Aerospace quality certification",
        },
    ];

    const capabilities = [
        {
            id: "cnc-machining",
            title: "CNC machining",
            description:
                "5-axis, vertical, horizontal, and turning capabilities for complex precision components.",
        },
        {
            id: "sheet-metal",
            title: "Sheet metal fabrication",
            description:
                "Laser cutting, punching, forming, welding, and fabricated assemblies under one roof.",
        },
        {
            id: "quality",
            title: "Quality assurance",
            description:
                "Certification-backed inspection and process discipline for high-requirement industries.",
        },
    ];

    const industries = [
        "Aerospace",
        "Defense",
        "Medical",
        "Semiconductor",
        "Communication",
        "Detection & sensing",
        "Water filtration",
        "Undersea exploration",
    ];

    const processSteps = [
        {
            id: "drawings",
            step: "01",
            title: "Send drawings or requirements",
            description:
                "Make it easy for buyers to submit part files, materials, quantities, tolerances, and timelines.",
        },
        {
            id: "review",
            step: "02",
            title: "Engineering review",
            description:
                "Clarify manufacturability, production needs, quality requirements, and next-step recommendations.",
        },
        {
            id: "quote",
            step: "03",
            title: "Receive a production-ready quote",
            description:
                "Give procurement teams a clear path from inquiry to quote without digging through a dated website.",
        },
    ];

    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
            <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
            <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
                <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <a href="#" className="text-sm font-bold tracking-tight">
                        Sparton Concept
                    </a>

                    <div className="hidden items-center gap-6 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className="text-sm text-slate-300 transition hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#rfq"
                        className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                    >
                        Request Quote
                    </a>
                </nav>
            </header>

            <section className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="text-left">
                    <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
                        Unofficial redesign concept · Precision manufacturing
                    </p>

                    <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
                        Precision CNC machining and fabrication for
                        mission-critical parts.
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                        A modern RFQ-focused website concept for established
                        U.S. manufacturers serving aerospace, defense, medical,
                        semiconductor, and industrial buyers.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#rfq"
                            className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                        >
                            Request a quote
                        </a>

                        <a
                            href="#capabilities"
                            className="rounded-xl border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                            View capabilities
                        </a>
                    </div>

                    <div className="mt-10 grid gap-3 sm:grid-cols-3">
                        {trustSignals.map((signal) => (
                            <div
                                key={signal.value}
                                className="flex items-start justify-between gap-4"
                            >
                                <div>
                                    <p className="text-3xl font-bold">
                                        {signal.value}
                                    </p>
                                    <p className="mt-3 text-sm leading-6 text-slate-400">
                                        {signal.label}
                                    </p>
                                </div>

                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-2xl shadow-black/30">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                        RFQ-ready positioning
                    </p>

                    <h2 className="mt-4 text-2xl font-bold tracking-tight">
                        Built to help buyers qualify capability faster.
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                        A stronger manufacturing website should quickly answer
                        what the company makes, who it serves, what quality
                        systems support the work, and how a serious buyer can
                        start a quote.
                    </p>

                    <div className="mt-6 grid gap-3">
                        <div className="rounded-2xl bg-slate-900/80 p-4">
                            <p className="text-sm font-semibold">
                                Buyer question
                            </p>
                            <p className="mt-2 text-sm text-slate-400">
                                Can this shop handle complex, high-requirement
                                parts?
                            </p>
                        </div>
                        <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-semibold text-cyan-100">
                                        Quote readiness score
                                    </p>
                                    <p className="mt-1 text-xs text-cyan-100/70">
                                        Capability, quality, and RFQ path
                                        visible above the fold.
                                    </p>
                                </div>

                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-100">
                                    92%
                                </div>
                            </div>

                            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-900">
                                <div className="h-full w-[92%] rounded-full bg-cyan-300" />
                            </div>
                        </div>
                        <div className="rounded-2xl bg-slate-900/80 p-4">
                            <p className="text-sm font-semibold">
                                Website answer
                            </p>
                            <p className="mt-2 text-sm text-slate-400">
                                Show certifications, capabilities, industries,
                                facility depth, and a clear RFQ path above the
                                fold.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="capabilities"
                className="mx-auto max-w-6xl px-6 py-20 text-left"
            >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Capabilities
                </p>

                <div className="mt-4 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Built to communicate manufacturing depth faster.
                        </h2>
                    </div>

                    <p className="text-sm leading-7 text-slate-300 sm:text-base">
                        The goal of this redesign is to make core services,
                        quality signals, and buyer next steps immediately clear
                        for procurement and engineering teams.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 lg:grid-cols-3">
                    {capabilities.map((capability) => (
                        <div
                            key={capability.id}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                        >
                            <h3 className="font-semibold">
                                {capability.title}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-slate-400">
                                {capability.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section
                id="industries"
                className="mx-auto max-w-6xl px-6 py-20 text-left"
            >
                <div className="rounded-3xl border border-white/10 bg-white/3 p-6 sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                        Industries served
                    </p>

                    <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                        Designed for buyers who need trust before they request a
                        quote.
                    </h2>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                        High-requirement industries need more than a contact
                        form. They need fast answers about capability, quality,
                        experience, and production readiness.
                    </p>

                    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {industries.map((industry) => (
                            <div
                                key={industry}
                                className="rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4"
                            >
                                <p className="text-sm font-medium text-slate-200">
                                    {industry}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-left">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                            Quality assurance
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                            Reduce buyer risk with clearer quality signals.
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                            For aerospace, defense, medical, and semiconductor
                            buyers, quality is not a nice-to-have. A stronger
                            website should make certification, inspection, and
                            production discipline easy to understand before the
                            first quote request.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {qualityPoints.map((point) => (
                            <div
                                key={point.id}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                            >
                                <h3 className="font-semibold">{point.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="process"
                className="mx-auto max-w-6xl px-6 py-20 text-left"
            >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                    RFQ journey
                </p>

                <div className="mt-4 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            A clearer path from first visit to qualified
                            inquiry.
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                            This concept gives engineering and procurement
                            buyers a simple route to submit requirements,
                            understand capabilities, and start a serious quoting
                            conversation.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {processSteps.map((step) => (
                            <div
                                key={step.id}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                            >
                                <p className="text-sm font-semibold text-slate-500">
                                    {step.step}
                                </p>
                                <h3 className="mt-3 font-semibold">
                                    {step.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="rfq" className="mx-auto max-w-6xl px-6 py-20">
                <div className="grid gap-6 rounded-3xl border border-white/10 bg-white p-6 text-slate-950 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                            Request for quote
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                            Make it easier for serious buyers to start the quote
                            conversation.
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                            A stronger RFQ section helps engineering and
                            procurement teams understand what to send before
                            they reach out, reducing back-and-forth and
                            improving lead quality.
                        </p>

                        <div className="mt-8 rounded-2xl bg-slate-100 p-5">
                            <p className="font-semibold">
                                Helpful quote details
                            </p>

                            <ul className="mt-4 space-y-3">
                                {quoteRequirements.map((requirement) => (
                                    <li
                                        key={requirement}
                                        className="flex gap-3 text-sm text-slate-600"
                                    >
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-950" />
                                        <span>{requirement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <label className="grid gap-2 text-sm font-medium">
                                Name
                                <input
                                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                                    placeholder="Jane Smith"
                                />
                            </label>

                            <label className="grid gap-2 text-sm font-medium">
                                Company
                                <input
                                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                                    placeholder="Acme Aerospace"
                                />
                            </label>

                            <label className="grid gap-2 text-sm font-medium sm:col-span-2">
                                Work email
                                <input
                                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                                    placeholder="jane@company.com"
                                />
                            </label>

                            <label className="grid min-w-0 gap-2 text-sm font-medium">
                                Service needed
                                <select className="min-w-0 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm outline-none transition focus:border-slate-500">
                                    <option>CNC machining</option>
                                    <option>Sheet metal fabrication</option>
                                    <option>Assembly support</option>
                                    <option>
                                        Quality / production consultation
                                    </option>
                                </select>
                            </label>

                            <label className="grid min-w-0 gap-2 text-sm font-medium">
                                Timeline
                                <select className="min-w-0 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm outline-none transition focus:border-slate-500">
                                    <option>ASAP</option>
                                    <option>2–4 weeks</option>
                                    <option>1–3 months</option>
                                    <option>Planning ahead</option>
                                </select>
                            </label>

                            <label className="grid gap-2 text-sm font-medium sm:col-span-2">
                                Project details
                                <textarea
                                    className="min-h-32 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                                    placeholder="Tell us about materials, quantities, tolerances, certifications, or production needs."
                                />
                            </label>
                        </div>

                        <button className="mt-6 w-full rounded-xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800">
                            Submit RFQ request
                        </button>

                        <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                            Demo form for redesign concept only. No submission
                            is connected yet.
                        </p>
                    </div>
                </div>

                <p className="mt-8 text-center text-xs leading-6 text-slate-500">
                    Unofficial redesign concept created for portfolio practice.
                    Not affiliated with Sparton Technology Corporation.
                </p>
            </section>
        </main>
    );
}
