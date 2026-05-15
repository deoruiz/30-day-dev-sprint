"use client";

import { useEffect, useRef, useState } from "react";
const solutionCards = [
    {
        id: "cnc-machining",
        status: "Available",
        title: "CNC machining",
        metric: "Multi-axis",
        description:
            "Precision milling, turning, and production-ready machining for complex components and tight requirements.",
        image: "/hero/cnc.png",
    },
    {
        id: "fabrication",
        status: "Integrated",
        title: "Sheet metal fabrication",
        metric: "One facility",
        description:
            "Laser cutting, forming, welding, and fabricated assemblies supported by coordinated production teams.",
        image: "/hero/sheet.png",
    },
    {
        id: "quality",
        status: "Certified",
        title: "Quality and inspection",
        metric: "AS9100",
        description:
            "Inspection discipline, documentation support, and quality-focused production for demanding industries.",
        image: "/hero/prod.png",
    },
];
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
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion) {
            return;
        }

        const intervalId = window.setInterval(() => {
            setActiveIndex((currentIndex) =>
                currentIndex === heroSlides.length - 1 ? 0 : currentIndex + 1,
            );
        }, 7000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <section className="relative z-10 w-full py-0">
            <div className="relative min-h-[680px] overflow-hidden border-y border-white/10 bg-slate-950 shadow-2xl shadow-black/40 md:min-h-[760px]">
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
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:54px_54px] opacity-35" />
                <div
                    className="absolute left-0 top-0 z-20 h-1 bg-cyan-300 transition-all duration-700"
                    style={{
                        width: `${((activeIndex + 1) / heroSlides.length) * 100}%`,
                    }}
                />

                <div className="relative z-10 flex min-h-[680px] flex-col justify-between p-5 sm:p-8 lg:min-h-[760px] lg:p-10">
                    <div className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1fr_560px] lg:items-end lg:pb-28 lg:pt-20">
                        <div className="max-w-3xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-1 w-10 rounded-full bg-cyan-300" />
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100">
                                    {activeSlide.eyebrow}
                                </p>
                            </div>

                            <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl">
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

                        <div className="mt-6 flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/45 p-2 backdrop-blur lg:hidden">
                            <button
                                type="button"
                                onClick={goToPreviousSlide}
                                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
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

                            <p className="w-9 text-center text-sm font-black tabular-nums text-white">
                                {String(activeIndex + 1).padStart(2, "0")}
                            </p>

                            <button
                                type="button"
                                onClick={goToNextSlide}
                                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
                                aria-label="Next hero slide"
                            >
                                →
                            </button>
                        </div>

                        <div className="hidden lg:grid">
                            <div className="grid min-h-72 grid-cols-3 gap-4">
                                {heroSlides.map((slide, index) => (
                                    <button
                                        key={slide.id}
                                        type="button"
                                        onClick={() => goToSlide(index)}
                                        aria-pressed={index === activeIndex}
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
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/92" />
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
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    const isLightMode = theme === "light";

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark",
        );
    };

    const themeToggleButton = (
        <button
            type="button"
            onClick={toggleTheme}
            className={`grid h-10 w-10 place-items-center rounded-full border text-sm font-bold transition ${
                isLightMode
                    ? "border-slate-300 bg-white/80 text-slate-950 hover:bg-slate-100"
                    : "border-white/15 bg-slate-950/30 text-white hover:bg-white/10"
            }`}
            aria-label={`Switch to ${isLightMode ? "dark" : "light"} mode`}
        >
            {isLightMode ? "☾" : "☀"}
        </button>
    );

    const [hasScrolled, setHasScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const solutionsRef = useRef<HTMLElement | null>(null);
    const [hasSeenSolutions, setHasSeenSolutions] = useState(false);
    useEffect(() => {
        const section = solutionsRef.current;

        if (!section) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasSeenSolutions(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.25,
            },
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const capabilityDetails = [
        {
            id: "precision-machining",
            title: "Precision machining",
            bestFor:
                "Tight-tolerance components, production parts, prototypes, fixtures, and complex machined assemblies.",
            confidence:
                "Engineering teams can start with a clear understanding of process fit, material needs, tolerances, and production expectations.",
        },
        {
            id: "fabrication",
            title: "Sheet metal and fabrication",
            bestFor:
                "Formed parts, laser-cut components, welded structures, fabricated enclosures, and heavy-gage assemblies.",
            confidence:
                "Procurement teams can reduce vendor fragmentation by sourcing machined and fabricated work through one coordinated partner.",
        },
        {
            id: "quality-documentation",
            title: "Inspection and documentation",
            bestFor:
                "Aerospace, defense, medical, semiconductor, and industrial programs with quality, traceability, or repeatability needs.",
            confidence:
                "Quality requirements can be addressed early, helping teams align drawings, tolerances, certifications, and inspection expectations before production.",
        },
    ];
    const qualityPoints = [
        {
            id: "certified-process",
            title: "Certified quality systems",
            description:
                "AS9100 / ISO9001-aligned systems help support customers with demanding aerospace, defense, medical, and industrial requirements.",
        },
        {
            id: "inspection",
            title: "Inspection-ready production",
            description:
                "Inspection planning, documentation, and process discipline help teams align on tolerances, repeatability, and production expectations.",
        },
        {
            id: "production-confidence",
            title: "Prototype to production confidence",
            description:
                "From early-stage builds to ongoing production programs, Sparton helps customers move forward with clearer quality expectations.",
        },
    ];
    const quoteRequirements = [
        "Part drawings or CAD files",
        "Material and finish requirements",
        "Estimated quantities",
        "Target timeline",
        "Quality or certification needs",
    ];

    const capabilities = [
        {
            id: "cnc-machining",
            title: "CNC machining",
            description:
                "Precision milling, turning, and multi-axis machining for complex components, tight tolerances, and production-ready parts.",
        },
        {
            id: "sheet-metal",
            title: "Sheet metal fabrication",
            description:
                "Laser cutting, punching, forming, welding, and fabricated assemblies supported by experienced production teams.",
        },
        {
            id: "quality",
            title: "Quality assurance",
            description:
                "Inspection, documentation, and certification-focused processes built for aerospace, defense, medical, and industrial requirements.",
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
            title: "Share drawings and requirements",
            description:
                "Send part files, materials, quantities, tolerances, timelines, and any certification or documentation needs.",
        },
        {
            id: "review",
            step: "02",
            title: "Review fit and manufacturability",
            description:
                "Sparton reviews the project details to understand process fit, production needs, quality expectations, and next-step recommendations.",
        },
        {
            id: "quote",
            step: "03",
            title: "Move forward with a clear quote",
            description:
                "Receive a quote path built around the project scope, timeline, materials, and production requirements.",
        },
    ];

    return (
        <>
            <header
                className={`fixed left-0 right-0 top-0 z-50 border-b transition duration-300 ${
                    hasScrolled || isMobileMenuOpen
                        ? isLightMode
                            ? "border-slate-200 bg-white/95 shadow-lg shadow-slate-950/10 backdrop-blur-xl"
                            : "border-white/10 bg-slate-950/95 shadow-lg shadow-black/20 backdrop-blur-xl"
                        : "border-transparent bg-transparent backdrop-blur-none"
                }`}
            >
                {" "}
                <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8">
                    {" "}
                    <div className="hidden items-center gap-6 md:flex">
                        <a
                            href="#"
                            className="text-sm font-medium text-white/85 drop-shadow transition hover:text-white"
                        >
                            Home
                        </a>

                        <a
                            href="#solutions"
                            className={`text-sm font-medium drop-shadow transition ${
                                hasScrolled && isLightMode
                                    ? "text-slate-700 hover:text-slate-950"
                                    : "text-white/85 hover:text-white"
                            }`}
                        >
                            Solutions
                        </a>

                        <a
                            href="#about"
                            className={`text-sm font-medium drop-shadow transition ${
                                hasScrolled && isLightMode
                                    ? "text-slate-700 hover:text-slate-950"
                                    : "text-white/85 hover:text-white"
                            }`}
                        >
                            About Us
                        </a>
                    </div>
                    <a
                        href="#"
                        className={`justify-self-start rounded-full px-3 py-2 text-sm font-black uppercase tracking-[0.22em] drop-shadow-lg transition md:justify-self-center md:px-0 md:py-0 md:tracking-[0.28em] ${
                            hasScrolled && isLightMode
                                ? "text-slate-950"
                                : "bg-slate-950/25 text-white backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
                        }`}
                    >
                        Sparton
                    </a>
                    <div className="hidden items-center justify-end gap-4 md:flex">
                        <a
                            href="#rfq"
                            className={`text-sm font-medium drop-shadow transition ${
                                hasScrolled && isLightMode
                                    ? "text-slate-700 hover:text-slate-950"
                                    : "text-white/85 hover:text-white"
                            }`}
                        >
                            Contact Us
                        </a>

                        <a
                            href="#rfq"
                            className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                                isLightMode
                                    ? "bg-slate-950 text-white hover:bg-slate-800"
                                    : "bg-white text-slate-950 hover:bg-slate-200"
                            }`}
                        >
                            Request Quote
                        </a>

                        {themeToggleButton}
                    </div>
                    <div className="flex items-center justify-self-end gap-2 md:hidden">
                        <button
                            type="button"
                            onClick={() =>
                                setIsMobileMenuOpen((isOpen) => !isOpen)
                            }
                            className={`group grid h-10 w-10 place-items-center rounded-full border backdrop-blur transition ${
                                isLightMode
                                    ? "border-slate-300 bg-white/80 text-slate-950 hover:bg-slate-100"
                                    : "border-white/15 bg-slate-950/30 text-white hover:bg-white/10"
                            }`}
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="relative h-4 w-5">
                                <span
                                    className={`absolute left-0 top-1 h-0.5 w-5 rounded-full transition ${
                                        isLightMode
                                            ? "bg-slate-950"
                                            : "bg-white"
                                    } ${isMobileMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
                                />
                                <span
                                    className={`absolute left-0 bottom-1 h-0.5 w-5 rounded-full transition ${
                                        isLightMode
                                            ? "bg-slate-950"
                                            : "bg-white"
                                    } ${isMobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
                                />
                            </span>
                        </button>

                        {themeToggleButton}
                    </div>
                </nav>
                <div
                    className={`overflow-hidden transition-all duration-300 md:hidden ${
                        isMobileMenuOpen
                            ? isLightMode
                                ? "max-h-96 border-t border-slate-200 opacity-100"
                                : "max-h-96 border-t border-white/10 opacity-100"
                            : "max-h-0 border-t border-transparent opacity-0"
                    }`}
                >
                    <nav className="mx-auto grid max-w-7xl gap-2 px-4 py-4 sm:px-6">
                        <a
                            href="#"
                            className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                                isLightMode
                                    ? "border-slate-200 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-950"
                                    : "border-white/10 bg-white/5 text-white/85 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            Home
                        </a>

                        <a
                            href="#solutions"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                                isLightMode
                                    ? "border-slate-200 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-950"
                                    : "border-white/10 bg-white/5 text-white/85 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            Solutions
                        </a>

                        <a
                            href="#about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                                isLightMode
                                    ? "border-slate-200 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-950"
                                    : "border-white/10 bg-white/5 text-white/85 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            About Us
                        </a>

                        <a
                            href="#rfq"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                                isLightMode
                                    ? "border-slate-200 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-950"
                                    : "border-white/10 bg-white/5 text-white/85 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            Contact Us
                        </a>

                        <a
                            href="#rfq"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`mt-2 rounded-2xl px-4 py-3 text-center text-sm font-bold transition ${
                                isLightMode
                                    ? "bg-slate-950 text-white hover:bg-slate-800"
                                    : "bg-white text-slate-950 hover:bg-slate-200"
                            }`}
                        >
                            Request Quote
                        </a>
                    </nav>
                </div>
            </header>

            <main
                className={`relative min-h-screen overflow-x-hidden transition duration-300 ${
                    isLightMode
                        ? "bg-slate-100 text-slate-950"
                        : "bg-slate-950 text-white"
                }`}
            >
                {" "}
                <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
                <CinematicHero />
                <section
                    ref={solutionsRef}
                    id="solutions"
                    className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
                >
                    <div className="mb-10 flex flex-col gap-4 text-left md:flex-row md:items-end md:justify-between">
                        <div>
                            <p
                                className={`text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300 ${
                                    hasSeenSolutions
                                        ? "animate-ease-in-top"
                                        : "opacity-0"
                                }`}
                            >
                                Solutions
                            </p>

                            <h2
                                className={`mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl ${
                                    isLightMode
                                        ? "text-slate-950"
                                        : "text-white"
                                } ${hasSeenSolutions ? "animate-ease-in-left" : "opacity-0"}`}
                            >
                                Manufacturing capabilities built around serious
                                production needs.
                            </h2>
                        </div>

                        <p
                            className={`max-w-xl text-sm leading-7 sm:text-base ${
                                isLightMode
                                    ? "text-slate-600"
                                    : "text-slate-400"
                            } ${hasSeenSolutions ? "animate-ease-in-right" : "opacity-0"}`}
                        >
                            Explore core services designed to help engineering
                            and procurement teams source complex parts with
                            fewer handoffs and clearer accountability.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {solutionCards.map((card, index) => (
                            <article
                                key={card.id}
                                className={`group relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 ${
                                    hasSeenSolutions
                                        ? "animate-ease-in-bottom"
                                        : "opacity-0"
                                }`}
                                style={{
                                    animationDelay: hasSeenSolutions
                                        ? `${index * 120}ms`
                                        : "0ms",
                                }}
                            >
                                <div
                                    className="absolute inset-0 scale-100 bg-cover bg-center transition duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url(${card.image})`,
                                    }}
                                />

                                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/30 to-slate-950/95" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.22),transparent_32%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/45 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                                    <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
                                    {card.status}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                                    <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur">
                                        {card.metric}
                                    </div>

                                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                                        {card.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-6 text-slate-300">
                                        {card.description}
                                    </p>

                                    <a
                                        href="#rfq"
                                        className="mt-6 inline-flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-cyan-300 hover:text-slate-950"
                                    >
                                        Discuss this service
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </article>
                        ))}
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
                                Manufacturing support from first quote to
                                finished component.
                            </h2>

                            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                                Sparton Technology brings machining,
                                fabrication, assembly, and quality support into
                                one coordinated production environment, helping
                                teams source complex components with fewer
                                handoffs and clearer accountability.
                            </p>

                            <div className="mt-10 rounded-3xl border border-white/10 bg-white p-8 text-slate-950 shadow-2xl shadow-black/20">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                                    Integrated production
                                </p>

                                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                                    Complex components are easier to manage when
                                    critical processes stay connected.
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-600">
                                    From machined parts and formed metal to
                                    weldments and value-added assemblies,
                                    Sparton helps buyers move through quoting,
                                    review, production, and delivery with one
                                    manufacturing partner.
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
                <section className="relative z-10 mx-auto max-w-6xl px-6 py-12 text-left">
                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                                Capability depth
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                Built for buyers who need more than a
                                single-process supplier.
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                                Sparton supports technical teams that need
                                manufacturing flexibility, quality discipline,
                                and a partner who can understand the full path
                                from drawing review to repeat production.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {capabilityDetails.map((capability) => (
                                <div
                                    key={capability.id}
                                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
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
                                Quality expectations should be clear before
                                production begins.
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                                For high-requirement industries, quality is part
                                of the manufacturing conversation from the
                                start. Sparton helps teams align around
                                drawings, tolerances, inspection needs, and
                                documentation before work moves into production.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {qualityPoints.map((point) => (
                                <div
                                    key={point.id}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                                >
                                    <h3 className="font-semibold">
                                        {point.title}
                                    </h3>
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
                    className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-left"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                        RFQ journey
                    </p>

                    <div className="mt-4 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Start with the details that help a quote move
                                faster.
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                                Share drawings, materials, quantities,
                                tolerances, timelines, and quality requirements
                                so our team can review your project with the
                                right context from the start.
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
                <section
                    id="rfq"
                    className="relative z-10 mx-auto max-w-6xl px-6 py-20"
                >
                    <div className="grid gap-6 rounded-3xl border border-white/10 bg-white p-6 text-slate-950 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                                Request for quote
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                Make it easier for serious buyers to start the
                                quote conversation.
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
                                        name="name"
                                        type="text"
                                        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                                        placeholder="Jane Smith"
                                    />
                                </label>

                                <label className="grid gap-2 text-sm font-medium">
                                    Company
                                    <input
                                        name="company"
                                        type="text"
                                        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                                        placeholder="Acme Aerospace"
                                    />
                                </label>

                                <label className="grid gap-2 text-sm font-medium md:col-span-2">
                                    Work email
                                    <input
                                        name="email"
                                        type="email"
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

                                <label className="grid gap-2 text-sm font-medium md:col-span-2">
                                    Project details
                                    <textarea
                                        className="min-h-32 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                                        placeholder="Tell us about materials, quantities, tolerances, certifications, or production needs."
                                    />
                                </label>
                            </div>

                            <button className="mt-6 w-full rounded-xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800">
                                Request a manufacturing quote{" "}
                            </button>

                            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                                Demo form for redesign concept only. No
                                submission is connected yet.
                            </p>
                        </div>
                    </div>
                </section>
                <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-xs leading-6 text-slate-500">
                    <p>
                        Unofficial redesign concept created for portfolio
                        practice. Not affiliated with Sparton Technology
                        Corporation.
                    </p>
                </footer>
            </main>
        </>
    );
}
