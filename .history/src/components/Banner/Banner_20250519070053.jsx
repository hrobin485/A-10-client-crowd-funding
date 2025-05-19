
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { Typewriter } from "react-simple-typewriter";
import { auth } from "../../Firebase/auth";   

const slides = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/23496627/pexels-photo-23496627/free-photo-of-group-of-friends-taking-selfie-in-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Empower Dreams with Your Support",
    subtitle: "Join our mission to help real people reach real goals.",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg",
    title: "Your Generosity Creates Impact",
    subtitle: "Support meaningful campaigns that change lives.",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/7414020/pexels-photo-7414020.jpeg",
    title: "Start Your Own Campaign Today",
    subtitle: "It’s fast, easy, and completely free to get started.",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/7413919/pexels-photo-7413919.jpeg",
    title: "Together, We Can Make a Difference",
    subtitle: "Every donation counts, no matter the size.",
  },
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  /* auto‑carousel */
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(t);
  }, []);

  /* listen once for auth state */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  /* click handler */
  const handleGetStarted = () => {
    if (user) {
      navigate("/dashboard/overview");   
    } else {
      navigate("/login");                
    }
  };

  return (
    <section className="relative mt-5 rounded-xl bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* ───────── left text ───────── */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
            Welcome to <span className="text-blue-600 dark:text-blue-400">Crowd Funding</span>
          </h1>

          <span className="inline-block bg-white/60 dark:bg-gray-900/50 px-6 py-3 rounded-xl text-blue-700 dark:text-blue-300 text-lg">
            <Typewriter
              words={["Fundraising made easy.", "Join our community.", "Support your dreams."]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>

          <p className="text-gray-600 dark:text-gray-300">
            Empower dreams with your support. Start or back campaigns that
            matter, follow their progress in real‑time, and be part of every
            milestone—from the very first pledge to the final celebration.
          </p>


          <button
            onClick={handleGetStarted}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* ───────── right mini‑carousel ───────── */}
        <div className="relative h-72 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden shadow-lg">
          {slides.map(({ id, image }, i) => (
            <img
              key={id}
              src={image}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/10 dark:bg-black/20 mix-blend-multiply" />

          {/* nav buttons */}
          <button
            aria-label="previous slide"
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 btn btn-circle btn-xs sm:btn-sm bg-white/70 hover:bg-white"
          >
            ❮
          </button>
          <button
            aria-label="next slide"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-circle btn-xs sm:btn-sm bg-white/70 hover:bg-white"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
