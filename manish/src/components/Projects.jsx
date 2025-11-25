import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  // Extract unique categories from your project data
  const categories = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.tech)))
  ];

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(active));

  return (
    <section id="projects" style={{ padding: "60px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Projects</h2>

      {/* Filter Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "40px"
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: "10px 18px",
              borderRadius: "8px",
              cursor: "pointer",
              border: "1px solid #333",
              background: active === cat ? "#ffb226" : "#111",
              color: active === cat ? "#000" : "#fff",
              fontWeight: 600,
              transition: "0.3s"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px"
        }}
      >
        <AnimatePresence>
          {filtered.map((p, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "#1a1f24",
                borderRadius: "12px",
                border: "1px solid #222",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                cursor: "pointer"
              }}
            >
              <h3 style={{ marginBottom: "5px" }}>{p.title}</h3>

              <p style={{ opacity: 0.8 }}>{p.description}</p>

              <div style={{ opacity: 0.6, fontSize: "0.9rem" }}>
                Tech: {p.tech.join(", ")}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "10px",
                  fontWeight: 600,
                  color: "#61dafb"
                }}
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
