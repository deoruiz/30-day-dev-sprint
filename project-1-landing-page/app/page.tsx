"use client";

import { useEffect, useState } from "react";
const heroSlides = [
    {
        id: "certified-quality",
        eyebrow: "AS9100 / ISO9001 certified",
        title: "Certified quality",
        subtitle:
            "Sparton Technology helps engineering and procurement teams source complex machined, fabricated, and assembled components with confidence.",
        cta: "Start your RFQ",
        secondaryCta: "View capabilities",
        stat: "Since 1972",
        image: "/hero/cnc.png",
    },
    {
        id: "one-partner",
        eyebrow: "Machining · fabrication · assembly",
        title: "One manufacturing partner",
        subtitle:
            "Reduce supplier complexity with CNC machining, precision sheet metal fabrication, weldments, assemblies, and production support under one roof.",
        cta: "Explore services",
        secondaryCta: "See industries",
        stat: "80k sq. ft.",
        image: "/hero/prod.png",
    },
    {
        id: "prototype-production",
        eyebrow: "Prototype to production",
        title: "Built for complex parts",
        subtitle:
            "From early-stage prototypes to production and blanket-order programs, Sparton supports manufacturers that need repeatability, documentation, and dependable execution.",
        cta: "Send drawings",
        secondaryCta: "Review process",
        stat: "RFQ ready",
        image: "/hero/sheet.png",
    },
];
function CinematicHero() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeSlide = heroSlides[activeIndex];

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    };

    const goToPreviousSlide = () => {
        setActiveIndex((currentIndex) =>
            currentIndex === 0 ? heroSlides.length - 1 : currentIndex - 1,
        );
    };

    const goToNextSlide = () => {
        setActiveIndex((currentIndex) =>
            currentIndex === heroSlides.length - 1 ? 0 : currentIndex + 1,
        );
    };

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveIndex((currentIndex) =>
                currentIndex === heroSlides.length - 1 ? 0 : currentIndex + 1,
            );
        }, 7000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <section className="relative z-10 w-full py-0">
            <div className="relative min-h-290 overflow-hidden border-y border-white/10 bg-slate-950 shadow-2xl shadow-black/40">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition duration-1000 ${
                            index === activeIndex
                                ? "scale-100 opacity-100"
                                : "scale-105 opacity-0"
                        }`}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                ))}

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.96)_0%,rgba(2,6,23,0.78)_42%,rgba(2,6,23,0.24)_72%,rgba(2,6,23,0.74)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.12)_0%,rgba(2,6,23,0.18)_46%,rgba(2,6,23,0.86)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size[54px_54px] opacity-35" />

                <div
                    className="absolute left-0 top-0 z-20 h-1 bg-cyan-300 transition-all duration-700"
                    style={{
                        width: `${((activeIndex + 1) / heroSlides.length) * 100}%`,
                    }}
                />

                <div className="relative z-10 flex min-h-190 flex-col justify-between p-5 sm:p-8 lg:p-10">
                    <header className="flex items-center justify-between gap-4">
                        <a
                            href="#"
                            className="text-sm font-bold uppercase tracking-[0.24em] text-white"
                        >
                            Sparton
                        </a>

                        <a
                            href="#rfq"
                            className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                        >
                            Request Quote
                        </a>
                    </header>

                    <div className="grid flex-1 items-end gap-10 pb-20 pt-20 lg:grid-cols-[1fr_560px] lg:pb-28">
                        <div className="max-w-3xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-1 w-10 rounded-full bg-cyan-300" />
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100">
                                    {activeSlide.eyebrow}
                                </p>
                            </div>

                            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl">
                                {activeSlide.title}
                            </h1>

                            <p className="mt-7 max-w-2xl border-l-2 border-cyan-300 bg-slate-950/45 px-5 py-4 text-sm leading-7 text-slate-100 shadow-xl shadow-black/20 backdrop-blur sm:text-base">
                                {activeSlide.subtitle}
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="#rfq"
                                    className="rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
                                >
                                    {activeSlide.cta}
                                </a>

                                <a
                                    href="#capabilities"
                                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
                                >
                                    {activeSlide.secondaryCta}
                                </a>
                            </div>
                        </div>

                        <div className="hidden lg:grid">
                            <div className="grid min-h-72 grid-cols-3 gap-4">
                                {heroSlides.map((slide, index) => (
                                    <button
                                        key={slide.id}
                                        type="button"
                                        onClick={() => goToSlide(index)}
                                        className={`group relative min-h-72 overflow-hidden rounded-2xl border text-left shadow-2xl shadow-black/30 transition ${
                                            index === activeIndex
                                                ? "border-cyan-300/70 opacity-100 shadow-[0_0_0_1px_rgba(103,232,249,0.45),0_24px_50px_rgba(0,0,0,0.38)]"
                                                : "border-white/15 opacity-80 hover:-translate-y-2 hover:border-white/40 hover:opacity-100"
                                        }`}
                                        style={{
                                            backgroundImage: `url(${slide.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-950/20 to-slate-950/92" />

                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <span className="mb-3 block h-1 w-8 rounded-full bg-white" />
                                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                                                {slide.stat}
                                            </p>
                                            <p className="mt-2 text-xl font-black uppercase leading-none text-white">
                                                {slide.title}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-5 flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/45 p-2 backdrop-blur">
                                <button
                                    type="button"
                                    onClick={goToPreviousSlide}
                                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
                                    aria-label="Previous hero slide"
                                >
                                    ←
                                </button>

                                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                                    <div
                                        className="h-full rounded-full bg-cyan-300 transition-all duration-700"
                                        style={{
                                            width: `${((activeIndex + 1) / heroSlides.length) * 100}%`,
                                        }}
                                    />
                                </div>

                                <p className="w-10 text-center text-lg font-black tabular-nums text-white">
                                    {String(activeIndex + 1).padStart(2, "0")}
                                </p>

                                <button
                                    type="button"
                                    onClick={goToNextSlide}
                                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
                                    aria-label="Next hero slide"
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default function Home() {
    {
        /*const productionSnapshot = [
        {
            id: "material",
            label: "Material",
            value: "6061 Aluminum",
        },
        {
            id: "process",
            label: "Process",
            value: "5-axis CNC",
        },
        {
            id: "tolerance",
            label: "Tolerance",
            value: "±0.002 in",
        },
        {
            id: "quantity",
            label: "Quantity",
            value: "250 units",
        },
    ];*/
    }
    const redesignComparison = [
        {
            id: "capability",
            before: "Capabilities are spread across dense pages.",
            after: "Machining, fabrication, quality, and RFQ paths are grouped into one clear buyer journey.",
        },
        {
            id: "trust",
            before: "Certifications and proof points are easy to miss.",
            after: "Experience, facility scale, and quality signals appear early where buyers evaluate risk.",
        },
        {
            id: "action",
            before: "The next step feels like a generic contact request.",
            after: "The RFQ path tells buyers exactly what to prepare before starting a quote.",
        },
    ];
    const capabilityDetails = [
        {
            id: "precision-machining",
            title: "Precision machining",
            bestFor:
                "Complex components, tight-tolerance parts, and production runs",
            confidence:
                "Helps engineering buyers quickly see whether the shop can support high-requirement parts.",
        },
        {
            id: "fabrication",
            title: "Integrated fabrication",
            bestFor:
                "Sheet metal, welded assemblies, formed parts, and heavy-gage work",
            confidence:
                "Positions the company as more than a machine shop by showing broader manufacturing support.",
        },
        {
            id: "quality-documentation",
            title: "Quality documentation",
            bestFor:
                "Aerospace, defense, medical, and regulated industrial programs",
            confidence:
                "Gives procurement teams confidence that certification, inspection, and repeatability are part of the process.",
        },
    ];
    {
        /* const redesignWins = [
        {
            id: "clarity",
            problem: "Scattered capability information",
            improvement: "Clear service hierarchy",
            value: "Buyers can understand machining, fabrication, quality, and RFQ paths faster.",
        },
        {
            id: "trust",
            problem: "Important proof buried in page copy",
            improvement: "Visible trust signals",
            value: "Certifications, facility size, and industry experience become easier to notice.",
        },
        {
            id: "conversion",
            problem: "Generic contact flow",
            improvement: "RFQ-focused buyer journey",
            value: "Qualified leads know what information to submit before starting the quote conversation.",
        },
    ];*/
    }
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
    {
        /*const trustSignals = [
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
    ];*/
    }

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
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[48px_48px]" />
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
            <CinematicHero />
            {/*
            <section className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="text-left">
                    <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
                        AS9100 / ISO9001 certified contract manufacturing
                    </p>

                    <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
                        Complex parts. Certified quality. One manufacturing
                        partner.
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                        From CNC machining and precision sheet metal fabrication
                        to assembly and inventory support, Sparton Technology
                        helps manufacturers reduce supplier complexity and move
                        confidently from prototype to production.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#rfq"
                            className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                        >
                            Start your RFQ
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
                        Production-ready support
                    </p>

                    <h2 className="mt-4 text-2xl font-bold tracking-tight">
                        Machining, fabrication, and assembly built to reduce
                        supplier complexity.
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                        Source precision components, fabricated parts,
                        weldments, and value-added assemblies through one
                        certified manufacturing partner with the facility depth
                        to support prototype, production, and blanket-order
                        programs.
                    </p>

                    <div className="mt-6 grid gap-3">
                        <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-semibold text-cyan-100">
                                        Example project profile
                                    </p>

                                    <p className="mt-1 text-xs text-cyan-100/70">
                                        Typical details our team reviews when
                                        quoting complex parts.
                                    </p>
                                </div>

                                <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">
                                    Ready
                                </span>
                            </div>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                {productionSnapshot.map((item) => (
                                    <div
                                        key={item.id}
                                        className="rounded-xl border border-cyan-300/10 bg-slate-950/50 p-4"
                                    >
                                        <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/50">
                                            {item.label}
                                        </p>
                                        <p className="mt-2 text-sm font-semibold text-cyan-50">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
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
            </section> */}
            {/*
            <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-left">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                        Redesign strategy
                    </p>

                    <div className="mt-4 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Turn an older brochure site into a clearer RFQ
                                engine.
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                                The redesign focuses on making Sparton-style
                                strengths easier to understand: capabilities,
                                certifications, industries served, and the path
                                to a serious quote request.
                            </p>
                        </div>
                        <div className="grid gap-4">
                            {redesignWins.map((win) => (
                                <div
                                    key={win.id}
                                    className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-slate-900"
                                >
                                    <div className="grid gap-4 sm:grid-cols-3">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                                Problem
                                            </p>
                                            <p className="mt-2 text-sm text-slate-300">
                                                {win.problem}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                                                Improvement
                                            </p>
                                            <p className="mt-2 text-sm text-slate-300">
                                                {win.improvement}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                                Business value
                                            </p>
                                            <p className="mt-2 text-sm text-slate-300">
                                                {win.value}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
*/}
            <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-left">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
                    <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 sm:p-10">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                            The opportunity
                        </p>

                        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
                            The company already has the proof. The website needs
                            to make it impossible to miss.
                        </h2>

                        <p className="mt-6 text-base leading-8 text-cyan-50/80">
                            Established manufacturers often have decades of
                            credibility, certified systems, and serious
                            production capacity. But when that proof is buried,
                            buyers have to work too hard before they request a
                            quote.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {redesignComparison.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                            >
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-200/70">
                                            Before
                                        </p>
                                        <p className="mt-3 text-sm leading-6 text-slate-400">
                                            {item.before}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                                            After
                                        </p>
                                        <p className="mt-3 text-sm leading-6 text-slate-200">
                                            {item.after}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="capabilities"
                className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-left"
            >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                            Capabilities
                        </p>

                        <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
                            One facility story. Multiple manufacturing paths.
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                            The page should help buyers quickly understand that
                            machining, fabrication, assembly, and quality are
                            connected parts of one production conversation.
                        </p>

                        <div className="mt-10 rounded-3xl border border-white/10 bg-white p-8 text-slate-950 shadow-2xl shadow-black/20">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                                Primary buyer question
                            </p>

                            <h3 className="mt-4 text-2xl font-bold tracking-tight">
                                Can this team handle complex parts from quote to
                                production?
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                A stronger site answers this quickly by
                                connecting capability, quality, materials,
                                industries, and the RFQ process in one guided
                                flow.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-4">
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
                </div>
            </section>

            <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-left">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                            Capability depth
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                            Help technical buyers qualify the shop before they
                            call.
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                            High-value manufacturing buyers scan for fit. The
                            page should make it easy to see what the company can
                            make, where it adds value, and why it is safe to
                            begin a quote conversation.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {capabilityDetails.map((capability) => (
                            <div
                                key={capability.id}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                            >
                                <h3 className="text-lg font-semibold">
                                    {capability.title}
                                </h3>

                                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl bg-slate-900/70 p-4">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                            Best for
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-slate-300">
                                            {capability.bestFor}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-slate-900/70 p-4">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                                            Buyer confidence
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-slate-300">
                                            {capability.confidence}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="industries"
                className="relative z-10 mx-auto max-w-6xl px-6 py-12"
            >
                <div className="flex flex-col gap-6 border-y border-white/10 py-10 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-xl text-left">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                            Industries served
                        </p>
                        <h2 className="mt-3 text-2xl font-bold tracking-tight">
                            Built for buyers in high-requirement markets.
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {industries.map((industry) => (
                            <span
                                key={industry}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                            >
                                {industry}
                            </span>
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
