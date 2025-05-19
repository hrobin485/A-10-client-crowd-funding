// BannerHero.jsx
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const slides = [ /* ...same array... */ ];

export default function Banner() {
  const [index, setIndex] = useState(0);

  // auto‑slide effect
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 8000);            // 8s
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* ───────────── left ───────────── */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
            Welcome to{" "}
            <span className="text-blue-600 dark:text-blue-400">Crowd Funding</span>
          </h1>

          <span className="inline-block bg-white/60 dark:bg-gray-900/50 px-6 py-3 rounded-xl text-blue-700 dark:text-blue-300 text-lg">
            <Typewriter
              words={[
                "Fundraising made easy.",
                "Join our community.",
                "Support your dreams.",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>

          <p className="text-gray-600 dark:text-gray-300">
            Empower dreams with your support. Start or back campaigns that matter.
          </p>

          <a
            href="#get-started"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Get Started
          </a>
        </div>

        {/* ───────────── right mini‑carousel ───────────── */}
        <div className="relative h-72 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden shadow-lg">
          {slides.map(({ id, image }, i) => (
            <img
              key={id}
              src={image}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/10 dark:bg-black/20 mix-blend-multiply" />

          {/* nav buttons */}
          <button
            aria-label="previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 btn btn-circle btn-xs sm:btn-sm bg-white/70 hover:bg-white"
            onClick={() =>
              setIndex((i) => (i - 1 + slides.length) % slides.length)
            }
          >
            ❮
          </button>
          <button
            aria-label="next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-circle btn-xs sm:btn-sm bg-white/70 hover:bg-white"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
