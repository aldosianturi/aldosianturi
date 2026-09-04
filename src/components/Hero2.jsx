import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiNodedotjs,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";

export default function Hero2() {
  const highlights = [
    {
      number: "01",
      title: "Fast Development",
      description:
        "Mengembangkan website dengan workflow yang efisien, responsive, dan tetap memperhatikan kualitas.",
      icon: "ri-speed-up-line",
    },
    {
      number: "02",
      title: "Modern Interface",
      description:
        "Membangun interface yang clean, modern, dan nyaman digunakan dengan perhatian pada detail visual.",
      icon: "ri-palette-line",
    },
    {
      number: "03",
      title: "Clean Code",
      description:
        "Menulis kode yang terstruktur, mudah dibaca, dan mudah dikembangkan untuk kebutuhan berikutnya.",
      icon: "ri-code-s-slash-line",
    },
  ];

    const techStack = [
    {
      name: "React",
      icon: SiReact,
      color: "group-hover:text-cyan-400",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "group-hover:text-yellow-400",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "group-hover:text-cyan-400",
    },
    {
      name: "HTML",
      icon: SiHtml5,
      color: "group-hover:text-orange-500",
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      color: "group-hover:text-blue-500",
    },
    {
      name: "Git",
      icon: SiGit,
      color: "group-hover:text-orange-600",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      color: "group-hover:text-gray-900 dark:group-hover:text-white",
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "group-hover:text-pink-500",
    },
    {
      name: "REST API",
      icon: SiPostman,
      color: "group-hover:text-orange-500",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "group-hover:text-green-500",
    },
  ];

  const approach = [
    {
      number: "01",
      title: "Understand",
      description:
        "Memahami kebutuhan, tujuan, dan masalah sebelum mulai membangun.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Menyusun interface yang clean, responsive, dan mudah digunakan.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Mengubah konsep menjadi website dengan kode yang terstruktur.",
    },
    {
      number: "04",
      title: "Refine",
      description:
        "Melakukan testing, optimasi, dan polishing terhadap setiap detail.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-white dark:bg-[#080b12] scroll-mt-16 overflow-hidden"
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================== */}

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 -left-40 w-[300px] h-[300px] bg-purple-500/5 dark:bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* =========================================
            INTRO
        ========================================== */}

        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 items-end">

          {/* Left */}

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-4">
              About Me
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.08]">
              Turning ideas into{" "}
              <span className="text-gray-400 dark:text-gray-600">
                digital experiences.
              </span>
            </h2>
          </div>

          {/* Right */}

          <div>
            <p className="text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400">
              I'm Aldo, a Front-End Developer passionate about crafting
              modern, interactive, and visually refined digital experiences.
              I enjoy combining technology and design to create interfaces
              that are not only beautiful, but also intuitive and functional.
            </p>

            <p className="mt-5 text-sm sm:text-base leading-7 text-gray-500 dark:text-gray-500">
              I'm constantly exploring new technologies, improving my workflow,
              and experimenting with creative ideas to make every project
              better.
            </p>
          </div>

        </div>

        {/* =========================================
            PERSONAL INFO
        ========================================== */}

        <div className="mt-10 flex flex-wrap gap-3">

          <div className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/[0.025] text-sm text-gray-600 dark:text-gray-400">
            📍 Pekanbaru, Indonesia
          </div>

          <div className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/[0.025] text-sm text-gray-600 dark:text-gray-400">
            💻 Front-End Developer
          </div>

          <div className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/[0.025] text-sm text-gray-600 dark:text-gray-400">
            🎨 UI / UX Enthusiast
          </div>

          <div className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/[0.025] text-sm text-gray-600 dark:text-gray-400">
            🚀 Always Learning
          </div>

        </div>

        {/* =========================================
            WHAT I BRING
        ========================================== */}

        <div className="mt-28">

          <div className="mb-10">

            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
              What I Bring
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Building with purpose.
            </h3>

            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-gray-500 dark:text-gray-400">
              Setiap project adalah kesempatan untuk menggabungkan development,
              design, dan user experience menjadi sebuah produk digital yang
              lebih baik.
            </p>

          </div>

          {/* Highlight Cards */}

          <div className="grid md:grid-cols-3 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden">

            {highlights.map((item, index) => (
              <div
                key={item.number}
                className={`group relative p-8 sm:p-10 bg-gray-50/70 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.04] transition-all duration-500 ${
                  index !== highlights.length - 1
                    ? "border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800"
                    : ""
                }`}
              >

                {/* Top */}

                <div className="flex items-center justify-between">

                  <span className="text-sm font-mono text-gray-400 dark:text-gray-600">
                    {item.number}
                  </span>

                  <span className="text-gray-300 dark:text-gray-700 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-xl">
                    ↗
                  </span>

                </div>


                {/* Icon */}

                <div className="mt-10 w-14 h-14 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-center shadow-sm group-hover:border-blue-500/40 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/[0.08] group-hover:scale-105 transition-all duration-300">

                  <i
                    className={`${item.icon} text-2xl text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-300`}
                  />

                </div>


                {/* Content */}

                <div className="mt-8">

                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>

                </div>


                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500" />

              </div>
            ))}

          </div>

        </div>

        {/* =========================================
            TECH STACK
        ========================================== */}

        <div className="mt-28">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

            <div>

              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
                Tech Stack
              </p>

              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Tools I work with.
              </h3>

            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500 dark:text-gray-500">
              Teknologi yang saya gunakan untuk membangun interface, aplikasi
              web, dan digital experiences.
            </p>

          </div>

          {/* Tech Stack Cards */}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">

            {techStack.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="group relative flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] hover:border-blue-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                >

                  {/* Icon */}

                  <div className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm group-hover:scale-110 transition-transform duration-300">

                    <Icon
                      className={`text-2xl text-gray-500 dark:text-gray-500 ${tech.color} transition-colors duration-300`}
                    />

                  </div>

                  {/* Text */}

                  <div className="min-w-0">

                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {tech.name}
                    </p>

                    <p className="text-[11px] text-gray-400 dark:text-gray-600 mt-0.5">
                      Technology
                    </p>

                  </div>

                  {/* Hover Arrow */}

                  <span className="absolute top-3 right-3 text-xs text-gray-300 dark:text-gray-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                    ↗
                  </span>

                </div>
              );
            })}

          </div>

        </div>

        {/* =========================================
            MY APPROACH
        ========================================== */}

        <div className="mt-28">

          <div className="mb-12">

            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
              My Approach
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              From idea to reality.
            </h3>

          </div>

          <div className="relative">

            {/* Connecting Line */}

            <div className="hidden md:block absolute top-6 left-6 right-6 h-px bg-gray-200 dark:bg-gray-800" />

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

              {approach.map((item) => (
                <div
                  key={item.number}
                  className="relative group"
                >

                  {/* Number */}

                  <div className="relative z-10 w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#080b12] flex items-center justify-center font-mono text-xs text-gray-500 dark:text-gray-400 group-hover:border-blue-500 group-hover:text-blue-500 group-hover:scale-105 transition-all duration-300">
                    {item.number}
                  </div>

                  <h4 className="mt-6 text-lg font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* =========================================
            BEYOND THE CODE
        ========================================== */}

        <div className="mt-28 relative rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/[0.025] p-8 sm:p-12 overflow-hidden">

          {/* Glow */}

          <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-blue-500/10 blur-[80px]" />

          <div className="relative max-w-3xl">

            <p className="text-sm font-medium text-gray-400 dark:text-gray-500 mb-4">
              Beyond the code
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              Always curious. Always building. Always improving.
            </h3>

            <p className="mt-5 text-sm sm:text-base leading-7 text-gray-500 dark:text-gray-400">
              When I'm not coding, I enjoy exploring new design ideas,
              learning new technologies, and experimenting with creative
              digital projects. For me, every project is another opportunity
              to learn something new.
            </p>

          </div>

        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================== */}

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5">

          <p className="text-sm text-gray-400 dark:text-gray-500">
            Always learning. Always building.
          </p>

          <div className="flex gap-3">

            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>

      </div>
    </section>
  );
} 