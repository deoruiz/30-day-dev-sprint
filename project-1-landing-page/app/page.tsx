"use client";

import { useEffect, useRef, useState } from "react";
const solutionCards = [
    {
        id: "cnc-machining",
        status: "Available",
        title: "CNC machining",
        metric: "Multi-axis",
        description:
            "Precision milling, turning, and production machining for components where tolerance, repeatability, and clean communication matter.",
        image: "/hero/cnc.png",
    },
    {
        id: "fabrication",
        status: "Integrated",
        title: "Sheet metal fabrication",
        metric: "One facility",
        description:
            "Laser cutting, forming, welding, and fabricated assemblies managed with the same attention to fit, finish, and production flow.",
        image: "/hero/sheet.png",
    },
    {
        id: "quality",
        status: "Certified",
        title: "Quality and inspection",
        metric: "AS9100",
        description:
            "Inspection planning, documentation support, and quality discipline for customers who need confidence before parts move forward.",
        image: "/hero/prod.png",
    },
];
const heroSlides = [
    {
        id: "certified-quality",
        eyebrow: "AS9100 / ISO9001 certified",
        title: "Built for parts that need to be right",
        subtitle:
            "Precision machining, fabrication, assembly, and inspection support for teams that need dependable parts, clear documentation, and a supplier that understands production pressure.",
        cta: "Start your RFQ",
        secondaryCta: "View capabilities",
        stat: "Since 1972",
        image: "/hero/cnc.png",
    },
    {
        id: "one-partner",
        eyebrow: "Machining · fabrication · assembly",
        title: "Fewer suppliers. Cleaner handoffs.",
        subtitle:
            "Bring CNC machining, sheet metal fabrication, weldments, assemblies, and production support into one coordinated manufacturing path.",
        cta: "Explore services",
        secondaryCta: "See industries",
        stat: "80k sq. ft.",
        image: "/hero/prod.png",
    },
    {
        id: "prototype-production",
        eyebrow: "Prototype to production",
        title: "Move from drawing to delivery with confidence",
        subtitle:
            "Share your part files, materials, quantities, tolerances, and quality needs. Sparton helps turn technical requirements into a clear quote path.",
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

    const sectionHeadingClass = isLightMode ? "text-slate-950" : "text-white";
    const sectionBodyClass = isLightMode ? "text-slate-600" : "text-slate-300";
    const mutedBodyClass = isLightMode ? "text-slate-600" : "text-slate-400";

    const standardCardClass = isLightMode
        ? "border-slate-200 bg-white text-slate-950 shadow-lg shadow-slate-950/5 hover:border-slate-300"
        : "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10";

    const deepCardClass = isLightMode
        ? "border-slate-200 bg-white text-slate-950 shadow-lg shadow-slate-950/5 hover:border-slate-300"
        : "border-white/10 bg-slate-900/60 text-white hover:border-white/20 hover:bg-white/10";

    const innerPanelClass = isLightMode
        ? "bg-slate-100 text-slate-600"
        : "bg-slate-900/70 text-slate-300";

    const sectionBorderClass = isLightMode
        ? "border-slate-200"
        : "border-white/10";

    const formInputClass = isLightMode
        ? "border-slate-200 bg-white text-slate-950 placeholder:text-slate-400 focus:border-slate-500"
        : "border-white/10 bg-slate-900 text-white placeholder:text-slate-500 focus:border-cyan-300";

    const funnelConnectorClass = isLightMode
        ? "border-slate-200 bg-white/80 text-slate-700 shadow-lg shadow-slate-950/5"
        : "border-white/10 bg-slate-950/60 text-slate-300 shadow-lg shadow-black/20";

    const funnelArrowClass = isLightMode
        ? "bg-cyan-700 text-white"
        : "bg-cyan-300 text-slate-950";

    const renderFunnelConnector = (label: string) => (
        <div className="relative z-10 mx-auto mt-8 flex max-w-6xl justify-center px-6">
            <div
                className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur transition ${funnelConnectorClass}`}
            >
                <span>{label}</span>
                <span
                    aria-hidden="true"
                    className={`grid h-7 w-7 place-items-center rounded-full ${funnelArrowClass}`}
                >
                    ↓
                </span>
            </div>
        </div>
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
                setHasSeenSolutions(entry.isIntersecting);
            },
            {
                threshold: 0.15,
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
                "Tight-tolerance components, prototypes, fixtures, production parts, and machined assemblies.",
            confidence:
                "Start with a clear review of process fit, material needs, tolerance expectations, and production requirements.",
        },
        {
            id: "fabrication",
            title: "Sheet metal and fabrication",
            bestFor:
                "Formed parts, laser-cut components, welded structures, fabricated enclosures, and heavy-gage assemblies.",
            confidence:
                "Keep machining and fabrication work connected when the project needs fewer handoffs and stronger accountability.",
        },
        {
            id: "quality-documentation",
            title: "Inspection and documentation",
            bestFor:
                "Aerospace, defense, medical, semiconductor, and industrial programs with traceability or repeatability needs.",
            confidence:
                "Align drawings, tolerances, certifications, and inspection expectations before production begins.",
        },
    ];
    const qualityPoints = [
        {
            id: "certified-process",
            title: "Certified quality systems",
            description:
                "AS9100 / ISO9001-aligned systems support customers with demanding aerospace, defense, medical, and industrial requirements.",
        },
        {
            id: "inspection",
            title: "Inspection-ready production",
            description:
                "Inspection planning and documentation support help teams clarify tolerances, repeatability, and acceptance expectations.",
        },
        {
            id: "production-confidence",
            title: "Confidence from prototype to production",
            description:
                "Whether the project starts as an early build or an ongoing production program, the quality path stays part of the plan.",
        },
    ];
    const quoteRequirements = [
        "Part drawings, CAD files, or prints",
        "Material, finish, and tolerance requirements",
        "Estimated quantities or production volume",
        "Target timeline or delivery window",
        "Inspection, certification, or documentation needs",
    ];

    const capabilities = [
        {
            id: "cnc-machining",
            title: "CNC machining",
            description:
                "Precision milling, turning, and multi-axis machining for parts with demanding tolerances, materials, and repeatability needs.",
        },
        {
            id: "sheet-metal",
            title: "Sheet metal fabrication",
            description:
                "Laser cutting, punching, forming, welding, and fabricated assemblies for teams that need consistent fit and production-ready execution.",
        },
        {
            id: "quality",
            title: "Quality assurance",
            description:
                "Inspection, documentation, and certification-focused support for industries where proof matters as much as the finished part.",
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
            title: "Send the technical package",
            description:
                "Share drawings, CAD files, materials, quantities, tolerances, finishes, timelines, and documentation needs.",
        },
        {
            id: "review",
            step: "02",
            title: "Review the manufacturing path",
            description:
                "Sparton reviews the work for process fit, quality requirements, production expectations, and any details that need clarification.",
        },
        {
            id: "quote",
            step: "03",
            title: "Move forward with a clearer quote",
            description:
                "Your team receives a quote path shaped around the scope, requirements, timeline, and production needs of the project.",
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
                <div
                    className={`pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl ${
                        isLightMode ? "bg-cyan-300/30" : "bg-cyan-500/20"
                    }`}
                />
                <div
                    className={`pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full blur-3xl ${
                        isLightMode ? "bg-blue-300/20" : "bg-blue-500/10"
                    }`}
                />
                <div
                    className={`pointer-events-none absolute inset-0 bg-[size:48px_48px] ${
                        isLightMode
                            ? "bg-[linear-gradient(to_right,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.055)_1px,transparent_1px)]"
                            : "bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]"
                    }`}
                />
                <CinematicHero />
                <div className="relative">
                    <section
                        ref={solutionsRef}
                        id="solutions"
                        className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
                    >
                        <div className="mb-10 flex flex-col gap-4 text-left md:flex-row md:items-end md:justify-between">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`hidden h-3 w-3 rounded-full ring-4 md:block ${
                                            isLightMode
                                                ? "bg-cyan-600 ring-cyan-600/15"
                                                : "bg-cyan-300 ring-cyan-300/15"
                                        }`}
                                    />

                                    <p
                                        className={`text-sm font-semibold uppercase tracking-[0.3em] ${
                                            isLightMode
                                                ? "text-cyan-700"
                                                : "text-cyan-300"
                                        } ${hasSeenSolutions ? "animate-ease-in-top" : "opacity-0"}`}
                                    >
                                        Solutions
                                    </p>
                                </div>

                                <h2
                                    className={`mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl ${
                                        sectionHeadingClass
                                    } ${hasSeenSolutions ? "animate-ease-in-left" : "opacity-0"}`}
                                >
                                    Manufacturing support for complex parts,
                                    tight requirements, and real production
                                    timelines.
                                </h2>
                            </div>

                            <p
                                className={`max-w-xl text-sm leading-7 sm:text-base ${
                                    isLightMode
                                        ? "text-slate-600"
                                        : "text-slate-400"
                                } ${hasSeenSolutions ? "animate-ease-in-right" : "opacity-0"}`}
                            >
                                Whether you are sourcing a machined component,
                                fabricated assembly, or inspection-ready
                                production run, Sparton gives your team a
                                clearer path from technical review to quote.
                            </p>
                        </div>

                        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
                            {" "}
                            {solutionCards.map((card, index) => (
                                <article
                                    key={card.id}
                                    className={`group relative min-h-[420px] w-[82vw] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 sm:w-[420px] md:min-h-[460px] md:w-auto md:shrink ${
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
                        <p
                            className={`mt-2 text-center text-xs font-semibold uppercase tracking-[0.18em] md:hidden ${
                                isLightMode
                                    ? "text-slate-500"
                                    : "text-slate-400"
                            }`}
                        >
                            Swipe to explore services
                        </p>
                    </section>

                    {renderFunnelConnector("Next: confirm manufacturing fit")}

                    <section
                        id="capabilities"
                        className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-left"
                    >
                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`hidden h-3 w-3 rounded-full ring-4 md:block ${
                                            isLightMode
                                                ? "bg-cyan-600 ring-cyan-600/15"
                                                : "bg-cyan-300 ring-cyan-300/15"
                                        }`}
                                    />

                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                                        Capabilities
                                    </p>
                                </div>

                                <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
                                    One manufacturing partner for the work that
                                    cannot afford confusion.
                                </h2>

                                <p
                                    className={`mt-5 max-w-2xl text-base leading-8 ${sectionBodyClass}`}
                                >
                                    From first drawing review to finished
                                    component, Sparton helps engineering and
                                    procurement teams keep the critical details
                                    connected: process, material, tolerance,
                                    documentation, timeline, and delivery.
                                </p>

                                <div
                                    className={`mt-10 rounded-3xl border p-8 shadow-2xl ${
                                        isLightMode
                                            ? "border-slate-200 bg-white text-slate-950 shadow-slate-950/10"
                                            : "border-white/10 bg-white text-slate-950 shadow-black/20"
                                    }`}
                                >
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                                        Integrated production
                                    </p>

                                    <h3 className="mt-4 text-2xl font-bold tracking-tight">
                                        When the requirements are technical, the
                                        supplier path should be simple.
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-600">
                                        Send the specs once. Review the path
                                        clearly. Move forward with a team that
                                        can support machining, fabrication,
                                        assembly, and quality expectations
                                        without adding unnecessary supplier
                                        handoffs.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4">
                                {capabilities.map((capability) => (
                                    <div
                                        key={capability.id}
                                        className={`rounded-2xl border p-6 transition hover:-translate-y-1 ${standardCardClass}`}
                                    >
                                        <h3 className="font-semibold">
                                            {capability.title}
                                        </h3>
                                        <p
                                            className={`mt-3 text-sm leading-6 ${mutedBodyClass}`}
                                        >
                                            {capability.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {renderFunnelConnector("Next: review capability depth")}

                    <section className="relative z-10 mx-auto max-w-6xl px-6 py-12 text-left">
                        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`hidden h-3 w-3 rounded-full ring-4 md:block ${
                                            isLightMode
                                                ? "bg-cyan-600 ring-cyan-600/15"
                                                : "bg-cyan-300 ring-cyan-300/15"
                                        }`}
                                    />
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                                        Capability depth
                                    </p>
                                </div>
                                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                    Built for teams that need capability,
                                    quality, and accountability in the same
                                    conversation.
                                </h2>

                                <p
                                    className={`mt-5 text-sm leading-7 sm:text-base ${sectionBodyClass}`}
                                >
                                    The right supplier should understand the
                                    part, the process, and the production risk.
                                    Sparton helps teams review the details early
                                    so quoting, planning, and production can
                                    move with fewer surprises.
                                </p>
                            </div>

                            <div className="grid gap-4">
                                {capabilityDetails.map((capability) => (
                                    <div
                                        key={capability.id}
                                        className={`rounded-2xl border p-5 transition hover:-translate-y-1 ${deepCardClass}`}
                                    >
                                        <h3 className="text-lg font-semibold">
                                            {capability.title}
                                        </h3>

                                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                            <div
                                                className={`rounded-2xl p-4 ${innerPanelClass}`}
                                            >
                                                {" "}
                                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                                    Best for
                                                </p>
                                                <p
                                                    className={`mt-2 text-sm leading-6 ${sectionBodyClass}`}
                                                >
                                                    {capability.bestFor}
                                                </p>
                                            </div>

                                            <div
                                                className={`rounded-2xl p-4 ${innerPanelClass}`}
                                            >
                                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                                                    Buyer confidence
                                                </p>
                                                <p
                                                    className={`mt-2 text-sm leading-6 ${sectionBodyClass}`}
                                                >
                                                    {capability.confidence}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {renderFunnelConnector("Next: see where this work matters")}

                    <section
                        id="industries"
                        className="relative z-10 mx-auto max-w-6xl px-6 py-12"
                    >
                        <div
                            className={`flex flex-col gap-6 border-y py-10 lg:flex-row lg:items-center lg:justify-between ${sectionBorderClass}`}
                        >
                            <div className="max-w-xl text-left">
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`hidden h-3 w-3 rounded-full ring-4 md:block ${
                                            isLightMode
                                                ? "bg-cyan-600 ring-cyan-600/15"
                                                : "bg-cyan-300 ring-cyan-300/15"
                                        }`}
                                    />
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                                        Industries served
                                    </p>
                                </div>
                                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                                    Trusted where requirements are specific and
                                    mistakes are expensive.
                                </h2>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {industries.map((industry) => (
                                    <span
                                        key={industry}
                                        className={`rounded-full border px-4 py-2 text-sm ${
                                            isLightMode
                                                ? "border-slate-200 bg-white text-slate-700"
                                                : "border-white/10 bg-white/5 text-slate-300"
                                        }`}
                                    >
                                        {industry}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {renderFunnelConnector("Next: reduce production risk")}

                    <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-left">
                        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`hidden h-3 w-3 rounded-full ring-4 md:block ${
                                            isLightMode
                                                ? "bg-cyan-600 ring-cyan-600/15"
                                                : "bg-cyan-300 ring-cyan-300/15"
                                        }`}
                                    />
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                                        Quality assurance
                                    </p>
                                </div>
                                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                    Quality should not wait until the part is
                                    finished.
                                </h2>

                                <p
                                    className={`mt-5 text-sm leading-7 sm:text-base ${sectionBodyClass}`}
                                >
                                    When drawings, tolerances, inspection needs,
                                    and documentation requirements are reviewed
                                    early, everyone has a better path forward.
                                    Sparton brings quality into the conversation
                                    before production begins.
                                </p>
                            </div>

                            <div className="grid gap-4">
                                {qualityPoints.map((point) => (
                                    <div
                                        key={point.id}
                                        className={`rounded-2xl border p-6 transition hover:-translate-y-1 ${standardCardClass}`}
                                    >
                                        <h3 className="font-semibold">
                                            {point.title}
                                        </h3>
                                        <p
                                            className={`mt-3 text-sm leading-6 ${mutedBodyClass}`}
                                        >
                                            {" "}
                                            {point.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {renderFunnelConnector("Next: prepare the quote request")}

                    <section
                        id="process"
                        className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-left"
                    >
                        <div className="flex items-center gap-3">
                            <span
                                className={`hidden h-3 w-3 rounded-full ring-4 md:block ${
                                    isLightMode
                                        ? "bg-cyan-600 ring-cyan-600/15"
                                        : "bg-cyan-300 ring-cyan-300/15"
                                }`}
                            />
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                                RFQ journey
                            </p>
                        </div>
                        <div className="mt-4 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                    A better quote starts with the right
                                    details.
                                </h2>

                                <p
                                    className={`mt-5 text-sm leading-7 sm:text-base ${sectionBodyClass}`}
                                >
                                    Send the files and requirements your team
                                    already uses: drawings, materials,
                                    quantities, tolerances, timelines, and
                                    quality needs. The more complete the
                                    request, the clearer the quote path becomes.
                                </p>
                            </div>

                            <div className="grid gap-4">
                                {processSteps.map((step) => (
                                    <div
                                        key={step.id}
                                        className={`rounded-2xl border p-6 transition hover:-translate-y-1 ${standardCardClass}`}
                                    >
                                        <p className="text-sm font-semibold text-slate-500">
                                            {step.step}
                                        </p>
                                        <h3 className="mt-3 font-semibold">
                                            {step.title}
                                        </h3>
                                        <p
                                            className={`mt-3 text-sm leading-6 ${mutedBodyClass}`}
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {renderFunnelConnector(
                        "Final step: send the project details",
                    )}

                    <section
                        id="rfq"
                        className="relative z-10 mx-auto max-w-6xl px-6 py-24"
                    >
                        <div
                            className={`pointer-events-none absolute left-1/2 top-8 h-16 w-16 -translate-x-1/2 rounded-full blur-2xl ${
                                isLightMode
                                    ? "bg-cyan-400/40"
                                    : "bg-cyan-300/30"
                            }`}
                        />
                        <div
                            className={`relative grid gap-6 overflow-hidden rounded-3xl border p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10 ${
                                isLightMode
                                    ? "border-cyan-700/20 bg-white text-slate-950 shadow-2xl shadow-cyan-900/10"
                                    : "border-cyan-300/20 bg-slate-900 text-white shadow-2xl shadow-cyan-300/10"
                            }`}
                        >
                            <div
                                className={`pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
                                    isLightMode
                                        ? "bg-cyan-300/30"
                                        : "bg-cyan-300/20"
                                }`}
                            />
                            <div>
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`hidden h-3 w-3 rounded-full ring-4 md:block ${
                                            isLightMode
                                                ? "bg-cyan-600 ring-cyan-600/15"
                                                : "bg-cyan-300 ring-cyan-300/15"
                                        }`}
                                    />
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                                        Request for quote
                                    </p>
                                </div>
                                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                    Ready to review a part, assembly, or
                                    production need?
                                </h2>

                                <p
                                    className={`mt-5 text-sm leading-7 sm:text-base ${sectionBodyClass}`}
                                >
                                    Send the drawings, specs, and production
                                    details your team already has. We’ll review
                                    the work for process fit, quality
                                    requirements, timeline, and the clearest
                                    path to a dependable quote.
                                </p>

                                <div
                                    className={`mt-8 rounded-2xl p-5 ${
                                        isLightMode
                                            ? "bg-slate-100"
                                            : "bg-slate-950"
                                    }`}
                                >
                                    {" "}
                                    <p className="font-semibold">
                                        Include what you have{" "}
                                    </p>
                                    <ul className="mt-4 space-y-3">
                                        {quoteRequirements.map(
                                            (requirement) => (
                                                <li
                                                    key={requirement}
                                                    className={`flex gap-3 text-sm ${sectionBodyClass}`}
                                                >
                                                    <span
                                                        className={`mt-1 h-2 w-2 rounded-full ${
                                                            isLightMode
                                                                ? "bg-slate-950"
                                                                : "bg-cyan-300"
                                                        }`}
                                                    />{" "}
                                                    <span>{requirement}</span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div
                                className={`rounded-2xl border p-5 sm:p-6 ${
                                    isLightMode
                                        ? "border-slate-200 bg-slate-50"
                                        : "border-white/10 bg-slate-950"
                                }`}
                            >
                                <div className="grid gap-4 md:grid-cols-2">
                                    <label className="grid gap-2 text-sm font-medium">
                                        Name
                                        <input
                                            name="name"
                                            type="text"
                                            className={`rounded-xl border px-4 py-3 text-sm outline-none transition ${formInputClass}`}
                                            placeholder="Jane Smith"
                                        />
                                    </label>

                                    <label className="grid gap-2 text-sm font-medium">
                                        Company
                                        <input
                                            name="company"
                                            type="text"
                                            className={`rounded-xl border px-4 py-3 text-sm outline-none transition ${formInputClass}`}
                                            placeholder="Acme Aerospace"
                                        />
                                    </label>

                                    <label className="grid gap-2 text-sm font-medium md:col-span-2">
                                        Work email
                                        <input
                                            name="email"
                                            type="email"
                                            className={`rounded-xl border px-4 py-3 text-sm outline-none transition ${formInputClass}`}
                                            placeholder="jane@company.com"
                                        />
                                    </label>

                                    <label className="grid min-w-0 gap-2 text-sm font-medium">
                                        Service needed
                                        <select
                                            className={`min-w-0 w-full rounded-xl border px-4 py-3 pr-10 text-sm outline-none transition ${formInputClass}`}
                                        >
                                            <option>CNC machining</option>
                                            <option>
                                                Sheet metal fabrication
                                            </option>
                                            <option>Assembly support</option>
                                            <option>
                                                Quality / production
                                                consultation
                                            </option>
                                        </select>
                                    </label>

                                    <label className="grid min-w-0 gap-2 text-sm font-medium">
                                        Timeline
                                        <select
                                            className={`min-w-0 w-full rounded-xl border px-4 py-3 pr-10 text-sm outline-none transition ${formInputClass}`}
                                        >
                                            <option>ASAP</option>
                                            <option>2–4 weeks</option>
                                            <option>1–3 months</option>
                                            <option>Planning ahead</option>
                                        </select>
                                    </label>

                                    <label className="grid gap-2 text-sm font-medium md:col-span-2">
                                        Project details
                                        <textarea
                                            className={`min-h-32 rounded-xl border px-4 py-3 text-sm outline-none transition ${formInputClass}`}
                                            placeholder="Tell us about materials, quantities, tolerances, certifications, or production needs."
                                        />
                                    </label>
                                </div>

                                <button
                                    type="button"
                                    className={`group mt-6 flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left shadow-2xl transition hover:-translate-y-0.5 active:scale-[0.98] sm:px-6 sm:py-5 ${
                                        isLightMode
                                            ? "bg-slate-950 text-white shadow-slate-950/20 hover:bg-slate-800"
                                            : "bg-cyan-300 text-slate-950 shadow-cyan-300/25 hover:bg-cyan-200"
                                    }`}
                                >
                                    <span>
                                        <span className="block text-sm font-black uppercase tracking-[0.16em] sm:text-base">
                                            Send drawings for review
                                        </span>
                                        <span
                                            className={`mt-1 block text-xs font-semibold normal-case tracking-normal ${
                                                isLightMode
                                                    ? "text-slate-300"
                                                    : "text-slate-700"
                                            }`}
                                        >
                                            Share your specs and we’ll review
                                            the quote path.
                                        </span>
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/30 text-lg transition group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </button>

                                <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                                    Demo form for redesign concept only. No
                                    submission is connected yet.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <footer
                    className={`relative z-10 border-t px-6 py-8 text-center text-xs leading-6 text-slate-500 ${sectionBorderClass}`}
                >
                    {" "}
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
