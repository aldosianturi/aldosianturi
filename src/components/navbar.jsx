import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <div className="max-w-6xl mx-auto">

        <div className="relative rounded-2xl border border-gray-200/70 dark:border-gray-800 bg-white/75 dark:bg-gray-950/75 backdrop-blur-xl shadow-lg shadow-black/[0.03] dark:shadow-black/20">

          {/* =========================
              DESKTOP / MAIN NAV
          ========================== */}

          <div className="h-16 px-5 sm:px-6 flex items-center justify-between">

            {/* =========================
                LOGO
            ========================== */}

            <button
              onClick={() => scrollTo("home")}
              className="group flex items-center gap-2.5"
            >
              {/* Profile Photo */}

              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 shadow-sm group-hover:scale-105 group-hover:border-blue-500/50 transition-all duration-300">

                <img
                  src="/profile.png"
                  alt="Aldo Sianturi"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Name */}

              <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Aldo
                <span className="text-blue-600 dark:text-blue-400">
                  Sianturi
                </span>
              </span>
            </button>


            {/* =========================
                DESKTOP MENU
            ========================== */}

            <div className="hidden md:flex items-center gap-1">

              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}

            </div>


            {/* =========================
                RIGHT SIDE
            ========================== */}

            <div className="flex items-center gap-2">

              {/* Theme Toggle */}

              <button
                onClick={() => setDark(!dark)}
                aria-label="Toggle dark mode"
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/[0.05] text-gray-600 dark:text-gray-300 hover:scale-105 hover:border-blue-500/50 transition-all duration-300"
              >
                {dark ? "☀" : "☾"}
              </button>


              {/* Mobile Menu */}

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-all"
                aria-label="Toggle menu"
              >
                {menuOpen ? "✕" : "☰"}
              </button>

            </div>

          </div>


          {/* =========================
              MOBILE MENU
          ========================== */}

          {menuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-800 p-3">

              <div className="flex flex-col gap-1">

                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-all"
                  >
                    {item.label}
                  </button>
                ))}

              </div>

            </div>
          )}

        </div>

      </div>
    </nav>
  );
}