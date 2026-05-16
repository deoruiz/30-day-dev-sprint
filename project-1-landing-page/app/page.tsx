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
                                    className="rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                                >
                                    {activeSlide.cta}
                                </a>

                                <a
                                    href="#capabilities"
                                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                                >
                                    {activeSlide.secondaryCta}
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/45 p-2 backdrop-blur lg:hidden">
                            <button
                                type="button"
                                onClick={goToPreviousSlide}
                                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                                aria-label="Previous hero slide"
                            >
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M12.5 5L7.5 10L12.5 15"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
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
                                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                                aria-label="Next hero slide"
                            >
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M7.5 5L12.5 10L7.5 15"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
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
                                        className={`group relative min-h-72 overflow-hidden rounded-2xl border text-left shadow-2xl shadow-black/30 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
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
                                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                                    aria-label="Previous hero slide"
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M12.5 5L7.5 10L12.5 15"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
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
                                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                                    aria-label="Next hero slide"
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M7.5 5L12.5 10L7.5 15"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
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

    const scrollToSection = (sectionId: string) => {
        const section = document.querySelector(sectionId);

        if (!section) {
            return;
        }

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const sectionHeadingClass = isLightMode
        ? "text-slate-900"
        : "text-slate-50";
    const sectionBodyClass = isLightMode ? "text-slate-700" : "text-slate-300";
    const mutedBodyClass = isLightMode ? "text-slate-600" : "text-slate-400";
    const eyebrowClass = isLightMode ? "text-cyan-800" : "text-cyan-300";
    const focusRingClass = isLightMode
        ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        : "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

    const themeToggleButton = (
        <button
            type="button"
            onClick={toggleTheme}
            className={`grid h-10 w-10 place-items-center rounded-full border text-sm font-bold transition ${focusRingClass} ${
                isLightMode
                    ? "border-slate-300 bg-white/80 text-slate-950 hover:bg-slate-100"
                    : "border-white/15 bg-slate-950/30 text-white hover:bg-white/10"
            }`}
            aria-label={`Switch to ${isLightMode ? "dark" : "light"} mode`}
            aria-pressed={isLightMode}
        >
            {isLightMode ? "☾" : "☀"}
        </button>
    );

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
        ? "border-slate-300 bg-white text-slate-950 placeholder:text-slate-500 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/20"
        : "border-white/15 bg-slate-900 text-white placeholder:text-slate-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20";

    const funnelConnectorClass = isLightMode
        ? "border-cyan-700/20 bg-white/85 text-slate-700 shadow-lg shadow-cyan-900/10"
        : "border-cyan-300/20 bg-slate-950/65 text-slate-300 shadow-lg shadow-cyan-300/10";

    const funnelArrowClass = isLightMode
        ? "bg-cyan-700 text-white shadow-cyan-700/30 hover:bg-cyan-800"
        : "bg-cyan-300 text-slate-950 shadow-cyan-300/30 hover:bg-cyan-200";

    const renderFunnelConnector = (label: string, href: string) => (
        <div className="relative z-10 mx-auto mt-8 flex max-w-6xl justify-center px-6">
            <div
                className={`relative inline-flex items-center gap-3 overflow-hidden rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur transition ${funnelConnectorClass}`}
            >
                <span
                    className={`pointer-events-none absolute inset-0 animate-premium-glow rounded-full ${
                        isLightMode
                            ? "bg-[radial-gradient(circle_at_30%_50%,rgba(8,145,178,0.22),transparent_34%),radial-gradient(circle_at_80%_50%,rgba(14,116,144,0.16),transparent_30%)]"
                            : "bg-[radial-gradient(circle_at_30%_50%,rgba(103,232,249,0.22),transparent_34%),radial-gradient(circle_at_80%_50%,rgba(34,211,238,0.14),transparent_30%)]"
                    }`}
                />

                <span className="relative z-10">{label}</span>

                <button
                    type="button"
                    onClick={() => scrollToSection(href)}
                    className={`relative z-10 grid h-8 w-8 place-items-center rounded-full shadow-lg transition hover:scale-105 ${focusRingClass} ${funnelArrowClass}`}
                    aria-label={`Jump to ${label.replace("Next: ", "").replace("Final step: ", "")}`}
                >
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                        <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );

    const [hasScrolled, setHasScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const solutionsRef = useRef<HTMLElement | null>(null);
    const [hasSeenSolutions, setHasSeenSolutions] = useState(false);
    const solutionsCarouselRef = useRef<HTMLDivElement | null>(null);
    const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);
    const capabilitiesRef = useRef<HTMLElement | null>(null);
    const [hasSeenCapabilities, setHasSeenCapabilities] = useState(false);
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
        const section = capabilitiesRef.current;

        if (!section) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setHasSeenCapabilities(entry.isIntersecting);
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

    const faqs = [
        {
            id: "quote-details",
            question: "What should I send for a quote?",
            answer: "Send any drawings, CAD files, prints, material requirements, quantities, tolerances, finishes, target timelines, and quality or documentation needs. The more detail your team can share, the clearer the quote path becomes.",
        },
        {
            id: "project-fit",
            question: "What types of projects are a good fit?",
            answer: "Sparton is positioned for teams that need precision machining, sheet metal fabrication, assembly support, inspection planning, or production work where process clarity and accountability matter.",
        },
        {
            id: "prototype-production",
            question:
                "Can one supplier support both prototypes and production?",
            answer: "The goal is to help teams move from early technical review into a clearer production path. Prototype, production, and repeat work should be reviewed around fit, material, tolerance, documentation, and timeline needs.",
        },
        {
            id: "quality-documentation",
            question: "How are quality and documentation handled?",
            answer: "Quality expectations should be part of the conversation before production begins. Buyers should share inspection needs, certification requirements, tolerances, and any documentation expectations during the RFQ stage.",
        },
        {
            id: "industries",
            question: "What industries does this support?",
            answer: "The page is written for high-requirement markets such as aerospace, defense, medical, semiconductor, communications, sensing, filtration, and undersea exploration applications.",
        },
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

    const handleSolutionsCarouselScroll = () => {
        const carousel = solutionsCarouselRef.current;

        if (!carousel) {
            return;
        }

        const cards = Array.from(carousel.children);
        const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;

        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        cards.forEach((card, index) => {
            const element = card as HTMLElement;
            const cardCenter = element.offsetLeft + element.offsetWidth / 2;
            const distance = Math.abs(carouselCenter - cardCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        setActiveSolutionIndex(closestIndex);
    };

    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cyan-300 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-100 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
                Skip to main content
            </a>

            <header
                className={`fixed left-0 right-0 top-0 z-50 border-b transition duration-300 ${
                    hasScrolled || isMobileMenuOpen
                        ? isLightMode
                            ? "border-slate-200 bg-white/95 shadow-lg shadow-slate-950/10 backdrop-blur-xl"
                            : "border-white/10 bg-slate-950/95 shadow-lg shadow-black/20 backdrop-blur-xl"
                        : "border-transparent bg-transparent backdrop-blur-none"
                }`}
            >
                <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8">
                    <div className="hidden items-center gap-6 md:flex">
                        <a
                            href="#"
                            className={`text-sm font-medium drop-shadow transition ${focusRingClass} ${
                                hasScrolled && isLightMode
                                    ? "text-slate-700 hover:text-slate-950"
                                    : "text-white/85 hover:text-white"
                            }`}
                        >
                            Home
                        </a>

                        <a
                            href="#solutions"
                            className={`text-sm font-medium drop-shadow transition ${focusRingClass} ${
                                hasScrolled && isLightMode
                                    ? "text-slate-700 hover:text-slate-950"
                                    : "text-white/85 hover:text-white"
                            }`}
                        >
                            Solutions
                        </a>

                        <a
                            href="#about"
                            className={`text-sm font-medium drop-shadow transition ${focusRingClass} ${
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
                        className={`justify-self-start rounded-full px-3 py-2 text-sm font-black uppercase tracking-[0.22em] drop-shadow-lg transition md:justify-self-center md:px-0 md:py-0 md:tracking-[0.28em] ${focusRingClass} ${
                            isLightMode
                                ? hasScrolled || isMobileMenuOpen
                                    ? "text-slate-950"
                                    : "text-white"
                                : hasScrolled || isMobileMenuOpen
                                  ? "text-white"
                                  : "bg-slate-950/25 text-white backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
                        }`}
                    >
                        Sparton
                    </a>
                    <div className="hidden items-center justify-end gap-4 md:flex">
                        <a
                            href="#rfq"
                            className={`text-sm font-medium drop-shadow transition ${focusRingClass} ${
                                hasScrolled && isLightMode
                                    ? "text-slate-700 hover:text-slate-950"
                                    : "text-white/85 hover:text-white"
                            }`}
                        >
                            Contact Us
                        </a>

                        <a
                            href="#rfq"
                            className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${focusRingClass} ${
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
                            className={`group grid h-10 w-10 place-items-center rounded-full border backdrop-blur transition ${focusRingClass} ${
                                isLightMode
                                    ? "border-slate-300 bg-white/80 text-slate-950 hover:bg-slate-100"
                                    : "border-white/15 bg-slate-950/30 text-white hover:bg-white/10"
                            }`}
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
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
                    id="mobile-menu"
                    aria-hidden={!isMobileMenuOpen}
                    className={`overflow-hidden transition-all duration-300 md:hidden ${
                        isMobileMenuOpen
                            ? isLightMode
                                ? "visible max-h-96 border-t border-slate-200 opacity-100"
                                : "visible max-h-96 border-t border-white/10 opacity-100"
                            : "invisible max-h-0 border-t border-transparent opacity-0"
                    }`}
                >
                    <nav className="mx-auto grid max-w-7xl gap-2 px-4 py-4 sm:px-6">
                        <a
                            href="#"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${focusRingClass} ${
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
                            className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${focusRingClass} ${
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
                            className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${focusRingClass} ${
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
                            className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${focusRingClass} ${
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
                            className={`mt-2 rounded-2xl px-4 py-3 text-center text-sm font-bold transition ${focusRingClass} ${
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
                id="main-content"
                className={`relative min-h-screen overflow-x-hidden transition duration-300 ${
                    isLightMode
                        ? "bg-[#eef1f4] text-slate-950"
                        : "bg-slate-950 text-white"
                }`}
            >
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
                            ? "bg-[linear-gradient(to_right,rgba(51,65,85,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,65,85,0.045)_1px,transparent_1px)]"
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
                                        className={`text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowClass} ${hasSeenSolutions ? "animate-ease-in-top" : "opacity-0"}`}
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

                        <div
                            ref={solutionsCarouselRef}
                            onScroll={handleSolutionsCarouselScroll}
                            aria-label="Manufacturing services carousel"
                            role="region"
                            tabIndex={0}
                            className={`-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] sm:-mx-6 sm:px-6 md:hidden ${focusRingClass}`}
                        >
                            {solutionCards.map((card, index) => (
                                <article
                                    key={card.id}
                                    className={`group relative min-h-[420px] w-[84vw] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30 transition duration-300 hover:border-cyan-300/40 sm:w-[420px] ${
                                        hasSeenSolutions
                                            ? "animate-ease-in-bottom"
                                            : "opacity-0"
                                    }`}
                                    style={{
                                        animationDelay: hasSeenSolutions
                                            ? `${(index % solutionCards.length) * 120}ms`
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
                                            className="mt-6 inline-flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-cyan-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                                        >
                                            Discuss this service
                                            <svg
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M7.5 5L12.5 10L7.5 15"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="hidden gap-5 md:grid md:grid-cols-3">
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
                                            className="mt-6 inline-flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-cyan-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                                        >
                                            Discuss this service
                                            <svg
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M7.5 5L12.5 10L7.5 15"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
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
                            Swipe through 3 core services
                        </p>

                        <div
                            aria-hidden="true"
                            className="mt-3 flex justify-center gap-2 md:hidden"
                        >
                            {solutionCards.map((card, index) => (
                                <span
                                    key={`${card.id}-dot`}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        index === activeSolutionIndex
                                            ? "w-8"
                                            : "w-3"
                                    } ${
                                        index === activeSolutionIndex
                                            ? isLightMode
                                                ? "bg-cyan-700"
                                                : "bg-cyan-300"
                                            : isLightMode
                                              ? "bg-slate-300"
                                              : "bg-white/20"
                                    }`}
                                />
                            ))}
                        </div>
                    </section>

                    {renderFunnelConnector(
                        "Next: confirm manufacturing fit",
                        "#capabilities",
                    )}

                    <section
                        ref={capabilitiesRef}
                        id="capabilities"
                        className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-left"
                    >
                        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                            <div
                                className={
                                    hasSeenCapabilities
                                        ? "animate-ease-in-left"
                                        : "opacity-0"
                                }
                            >
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
                                            className={`text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}
                                        >
                                            Capabilities
                                        </p>
                                    </div>

                                    <h2
                                        className={`mt-4 text-3xl font-bold tracking-tight sm:text-5xl ${sectionHeadingClass}`}
                                    >
                                        Capability, quality, and accountability
                                        in one manufacturing path.
                                    </h2>

                                    <p
                                        className={`mt-5 text-base leading-8 ${sectionBodyClass}`}
                                    >
                                        From first drawing review to finished
                                        component, Sparton helps engineering and
                                        procurement teams keep the critical
                                        details connected: process, material,
                                        tolerance, documentation, timeline, and
                                        delivery.
                                    </p>

                                    <div
                                        className={`mt-8 rounded-3xl border p-6 ${
                                            isLightMode
                                                ? "border-slate-200 bg-white text-slate-950 shadow-xl shadow-slate-950/5"
                                                : "border-white/10 bg-slate-900/70 text-white shadow-xl shadow-black/20"
                                        }`}
                                    >
                                        <p
                                            className={`text-sm font-semibold uppercase tracking-[0.24em] ${eyebrowClass}`}
                                        >
                                            Production confidence
                                        </p>

                                        <h3 className="mt-4 text-2xl font-bold tracking-tight">
                                            Review the part, the process, and
                                            the risk before production starts.
                                        </h3>

                                        <p
                                            className={`mt-4 text-sm leading-7 ${sectionBodyClass}`}
                                        >
                                            The right supplier should understand
                                            more than a single operation.
                                            Sparton helps teams clarify
                                            manufacturing fit, quality
                                            expectations, inspection needs, and
                                            documentation requirements before
                                            work moves forward.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`grid gap-4 ${
                                    hasSeenCapabilities
                                        ? "animate-ease-in-right"
                                        : "opacity-0"
                                }`}
                            >
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
                                            {point.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {renderFunnelConnector(
                        "Next: see where this work matters",
                        "#industries",
                    )}

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

                    <section
                        id="faq"
                        className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-left"
                    >
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

                                    <p
                                        className={`text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}
                                    >
                                        FAQ
                                    </p>
                                </div>

                                <h2
                                    className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${sectionHeadingClass}`}
                                >
                                    Answers before your team starts the quote
                                    conversation.
                                </h2>

                                <p
                                    className={`mt-5 text-sm leading-7 sm:text-base ${sectionBodyClass}`}
                                >
                                    These questions help engineering and
                                    procurement teams understand what to prepare
                                    before sending drawings, requirements, or
                                    production details for review.
                                </p>
                            </div>

                            <div className="grid gap-4">
                                {faqs.map((faq) => (
                                    <details
                                        key={faq.id}
                                        className={`group rounded-2xl border p-5 transition ${standardCardClass}`}
                                    >
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                                            <span>{faq.question}</span>
                                            <span
                                                aria-hidden="true"
                                                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition group-open:rotate-180 ${
                                                    isLightMode
                                                        ? "bg-slate-100 text-cyan-800"
                                                        : "bg-white/10 text-cyan-300"
                                                }`}
                                            >
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    className="h-4 w-4"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M5 7.5L10 12.5L15 7.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>

                                        <p
                                            className={`mt-4 text-sm leading-7 ${mutedBodyClass}`}
                                        >
                                            {faq.answer}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </section>

                    {renderFunnelConnector(
                        "Final step: send drawings for review",
                        "#rfq",
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
                                                    />
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
                                            required
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            className={`rounded-xl border px-4 py-3 text-sm outline-none transition ${formInputClass}`}
                                            placeholder="Jane Smith"
                                        />
                                    </label>

                                    <label className="grid gap-2 text-sm font-medium">
                                        Company
                                        <input
                                            required
                                            name="company"
                                            type="text"
                                            autoComplete="organization"
                                            className={`rounded-xl border px-4 py-3 text-sm outline-none transition ${formInputClass}`}
                                            placeholder="Acme Aerospace"
                                        />
                                    </label>

                                    <label className="grid gap-2 text-sm font-medium md:col-span-2">
                                        Work email
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className={`rounded-xl border px-4 py-3 text-sm outline-none transition ${formInputClass}`}
                                            placeholder="jane@company.com"
                                        />
                                    </label>

                                    <label className="grid min-w-0 gap-2 text-sm font-medium">
                                        Service needed
                                        <div className="relative min-w-0">
                                            <select
                                                required
                                                name="service"
                                                className={`min-w-0 w-full appearance-none rounded-xl border py-3 pl-4 pr-14 text-sm outline-none transition ${formInputClass}`}
                                            >
                                                <option>CNC machining</option>
                                                <option>
                                                    Sheet metal fabrication
                                                </option>
                                                <option>
                                                    Assembly support
                                                </option>
                                                <option>
                                                    Quality / production
                                                    consultation
                                                </option>
                                            </select>

                                            <span
                                                aria-hidden="true"
                                                className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 ${
                                                    isLightMode
                                                        ? "text-slate-500"
                                                        : "text-slate-300"
                                                }`}
                                            >
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        d="M5 7.5L10 12.5L15 7.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </label>

                                    <label className="grid min-w-0 gap-2 text-sm font-medium">
                                        Timeline
                                        <div className="relative min-w-0">
                                            <select
                                                required
                                                name="timeline"
                                                className={`min-w-0 w-full appearance-none rounded-xl border py-3 pl-4 pr-14 text-sm outline-none transition ${formInputClass}`}
                                            >
                                                <option>ASAP</option>
                                                <option>2–4 weeks</option>
                                                <option>1–3 months</option>
                                                <option>Planning ahead</option>
                                            </select>

                                            <span
                                                aria-hidden="true"
                                                className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 ${
                                                    isLightMode
                                                        ? "text-slate-500"
                                                        : "text-slate-300"
                                                }`}
                                            >
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        d="M5 7.5L10 12.5L15 7.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </label>

                                    <label className="grid gap-2 text-sm font-medium md:col-span-2">
                                        Project details
                                        <textarea
                                            required
                                            name="projectDetails"
                                            className={`min-h-32 rounded-xl border px-4 py-3 text-sm outline-none transition ${formInputClass}`}
                                            placeholder="Tell us about materials, quantities, tolerances, certifications, or production needs."
                                        />
                                    </label>
                                </div>

                                <button
                                    type="button"
                                    className={`group mt-6 flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left shadow-2xl transition hover:-translate-y-0.5 active:scale-[0.98] sm:px-6 sm:py-5 ${focusRingClass} ${
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
                                        className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/30 transition group-hover:translate-x-1"
                                    >
                                        <svg
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                d="M7.5 5L12.5 10L7.5 15"
                                                stroke="currentColor"
                                                strokeWidth="1.9"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
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
                    className={`relative z-10 border-t px-6 py-12 ${sectionBorderClass}`}
                >
                    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
                        <div>
                            <a
                                href="#"
                                className={`inline-flex text-sm font-black uppercase tracking-[0.28em] transition ${focusRingClass} ${
                                    isLightMode
                                        ? "text-slate-950"
                                        : "text-white"
                                }`}
                            >
                                Sparton
                            </a>

                            <p
                                className={`mt-5 max-w-sm text-sm leading-7 ${mutedBodyClass}`}
                            >
                                Precision manufacturing support for teams that
                                need clear communication, accountable
                                production, and a dependable path from drawings
                                to quote review.
                            </p>

                            <p className="mt-6 text-xs leading-6 text-slate-500">
                                Unofficial redesign concept created for
                                portfolio practice. Not affiliated with Sparton
                                Technology Corporation.
                            </p>
                        </div>

                        <div>
                            <h3
                                className={`text-xs font-bold uppercase tracking-[0.22em] ${
                                    isLightMode
                                        ? "text-slate-900"
                                        : "text-slate-200"
                                }`}
                            >
                                Navigate
                            </h3>

                            <ul className="mt-5 space-y-3">
                                {[
                                    { label: "Home", href: "#" },
                                    { label: "Solutions", href: "#solutions" },
                                    {
                                        label: "Capabilities",
                                        href: "#capabilities",
                                    },
                                    {
                                        label: "Industries",
                                        href: "#industries",
                                    },
                                    { label: "FAQ", href: "#faq" },
                                ].map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className={`text-sm transition ${focusRingClass} ${
                                                isLightMode
                                                    ? "text-slate-600 hover:text-slate-950"
                                                    : "text-slate-400 hover:text-white"
                                            }`}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3
                                className={`text-xs font-bold uppercase tracking-[0.22em] ${
                                    isLightMode
                                        ? "text-slate-900"
                                        : "text-slate-200"
                                }`}
                            >
                                Capabilities
                            </h3>

                            <ul className="mt-5 space-y-3">
                                {[
                                    "CNC machining",
                                    "Sheet metal fabrication",
                                    "Assembly support",
                                    "Quality assurance",
                                    "Inspection planning",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className={`text-sm ${
                                            isLightMode
                                                ? "text-slate-600"
                                                : "text-slate-400"
                                        }`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div
                            className={`rounded-3xl border p-6 ${
                                isLightMode
                                    ? "border-slate-200 bg-white text-slate-950 shadow-lg shadow-slate-950/5"
                                    : "border-white/10 bg-white/5 text-white"
                            }`}
                        >
                            <p
                                className={`text-xs font-bold uppercase tracking-[0.22em] ${eyebrowClass}`}
                            >
                                Start the quote path
                            </p>

                            <h3 className="mt-4 text-xl font-bold tracking-tight">
                                Have drawings or production details ready?
                            </h3>

                            <p
                                className={`mt-3 text-sm leading-6 ${mutedBodyClass}`}
                            >
                                Send the files, quantities, materials,
                                tolerances, and timeline your team already has.
                            </p>

                            <a
                                href="#rfq"
                                className={`mt-6 inline-flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${focusRingClass} ${
                                    isLightMode
                                        ? "bg-slate-950 text-white hover:bg-slate-800"
                                        : "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                                }`}
                            >
                                Request quote review
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M7.5 5L12.5 10L7.5 15"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div
                        className={`mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between ${sectionBorderClass}`}
                    >
                        <p className="text-slate-500">
                            © 2026 Sparton redesign concept. Built for frontend
                            portfolio practice.
                        </p>

                        <p className="text-slate-500">
                            Designed to improve RFQ clarity, trust, and buyer
                            confidence.
                        </p>
                    </div>
                </footer>
            </main>
        </>
    );
}
