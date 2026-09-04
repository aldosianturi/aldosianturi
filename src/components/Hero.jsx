import { useEffect, useState } from "react";

export default function Hero() {
  const words = [
    "Web Developer",
    "UI/UX Enthusiast",
    "React Builder",
    "Data Entry",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // =========================================
  // SMOOTH NAVIGATION
  // =========================================

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // =========================================
  // TYPING ANIMATION
  // =========================================

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1200);

      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);

      setIndex((prev) => (prev + 1) % words.length);

      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center px-6 pt-24"
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="absolute inset-0 -z-20 bg-[#f8fafc] dark:bg-[#080b12]" />

      {/* Grid */}

      <div
        className="absolute inset-0 -z-10 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow */}

      <div className="absolute -top-40 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="absolute -bottom-40 -right-40 -z-10 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[120px]" />

      {/* =========================================
          CONTENT
      ========================================== */}

      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

        {/* =========================================
            LEFT CONTENT
        ========================================== */}

        <div className="text-center lg:text-left">

          {/* Status */}

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-white/[0.04] backdrop-blur-md text-sm text-gray-600 dark:text-gray-300 shadow-sm mb-7">

            <span className="relative flex h-2.5 w-2.5">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />

            </span>

            Available for work

          </div>

          {/* Greeting */}

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-3">
            Hello, I'm
          </p>

          {/* Name */}

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.05]">

            Aldo{" "}

            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              Sianturi.
            </span>

          </h1>

          {/* =========================================
              TYPING
          ========================================== */}

          <div className="mt-6 flex items-center justify-center lg:justify-start">

            <span className="text-xl sm:text-2xl font-medium text-gray-500 dark:text-gray-400">
              I'm a{" "}
            </span>

            <span className="ml-2 text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 min-w-[180px] text-left">

              {words[index].substring(0, subIndex)}

              <span className="inline-block ml-1 h-6 border-r-2 border-blue-600 dark:border-blue-400 animate-pulse" />

            </span>

          </div>

          {/* =========================================
              DESCRIPTION
          ========================================== */}

          <p className="mt-7 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400">

            I build modern, responsive, and visually refined digital
            experiences with a focus on clean interfaces, smooth interactions,
            and thoughtful design.

          </p>

          {/* =========================================
              CTA BUTTONS
          ========================================== */}

          <div className="mt-10 flex flex-wrap items-center gap-4 justify-center lg:justify-start">

            {/* =========================================
                VIEW MY WORK
            ========================================== */}

            <button
              type="button"
              onClick={() => handleScroll("projects")}
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-xl
                bg-white
                px-8
                py-4
                text-base
                font-semibold
                text-gray-900
                shadow-lg
                shadow-white/10
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-blue-500/10
                active:translate-y-0
                cursor-pointer
              "
            >

              {/* Sliding background */}

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:translate-x-0
                "
              />

              {/* Text */}

              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                View My Work
              </span>

              {/* Arrow */}

              <span className="relative z-10 text-lg transition-all duration-300 group-hover:translate-x-2 group-hover:text-white">
                →
              </span>

            </button>

            {/* =========================================
                LET'S TALK
            ========================================== */}

            <button
              type="button"
              onClick={() => handleScroll("contact")}
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-xl
                border
                border-gray-700
                bg-[#0d1118]
                px-8
                py-4
                text-base
                font-semibold
                text-gray-200
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/50
                hover:shadow-lg
                hover:shadow-blue-500/10
                active:translate-y-0
                cursor-pointer
              "
            >

              {/* Sliding background */}

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-white
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:translate-x-0
                "
              />

              {/* Text */}

              <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-900">
                Let's Talk
              </span>

              {/* Arrow */}

              <span className="relative z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:text-gray-900">
                →
              </span>

            </button>

          </div>

          {/* =========================================
              SOCIAL / TECH HINT
          ========================================== */}

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400 dark:text-gray-500">

            <span>React</span>

            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />

            <span>Tailwind CSS</span>

            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />

            <span>UI/UX</span>

          </div>

        </div>

        {/* =========================================
            RIGHT - PROFILE
        ========================================== */}

        <div className="relative flex justify-center lg:justify-end">

          {/* Decorative circle */}

          <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-blue-500/10 dark:border-blue-400/10" />

          <div className="absolute w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] rounded-full border border-violet-500/10 dark:border-violet-400/10" />

          {/* Image */}

          <div className="relative">

            {/* Gradient ring */}

            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 blur-sm opacity-70" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1.5 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 shadow-2xl shadow-blue-500/20">

              <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900">

                <img
                  src="/webprofile.png"
                  alt="Aldo Sianturi"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

            {/* Floating card */}

            <div className="absolute -bottom-3 -left-8 sm:-left-12 px-4 py-3 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/50 dark:border-gray-700 shadow-xl">

              <p className="text-xs text-gray-400 dark:text-gray-500">
                Currently building
              </p>

              <p className="text-sm font-semibold text-gray-800 dark:text-white mt-0.5">
                Digital Experiences ✦
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* =========================================
          SCROLL INDICATOR
      ========================================== */}

      <button
        type="button"
        onClick={() => handleScroll("about")}
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          hidden
          md:flex
          flex-col
          items-center
          gap-2
          text-xs
          text-gray-400
          dark:text-gray-500
          hover:text-gray-700
          dark:hover:text-gray-300
          transition
          cursor-pointer
        "
      >

        <span>
          Scroll to explore
        </span>

        <div className="w-5 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex justify-center pt-1.5">

          <div className="w-1 h-1.5 rounded-full bg-gray-500 dark:bg-gray-400 animate-bounce" />

        </div>

      </button>

    </section>
  );
}