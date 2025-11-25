import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );

}

export default function App({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="fixed bottom-5 right-5 px-4 py-2 rounded-full border border-gray-400 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white shadow"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      {children}
    </>
  );
}
