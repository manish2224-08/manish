export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-start px-6 lg:px-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Full Stack Developer <br />
        <span className="text-indigo-400">& Web Designer</span>
      </h1>

      <p className="max-w-2xl mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
        I build high-performance, user-friendly, and fully optimized websites
        across Webflow, Shopify, WordPress, Wix, SquareSpace & Framer.
        With 6+ years of experience, I specialize in custom builds, CMS
        automation, API integrations, and speed-optimized modern websites.
      </p>

      <a
        href="#projects"
        className="mt-10 inline-block px-8 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition-all shadow-lg font-semibold"
      >
        View My Work
      </a>
    </section>
  );
}
