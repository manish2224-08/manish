import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-20 bg-[#0f172a] text-white"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center mb-14"
      >
        Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl bg-[#1e293b]/60 backdrop-blur border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Title */}
            <h3 className="text-xl font-bold text-indigo-400 mb-3">
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed mb-4">
              {p.description}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Button */}
            <a
              href={p.link}
              target="_blank"
              className="inline-block mt-2 px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition shadow-md font-semibold"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
