import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "60px 0" }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "2.2rem",
          letterSpacing: "1px"
        }}
      >
        Projects
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          padding: "0 20px",
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.25 }
            }}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              padding: "25px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 5px 12px rgba(0,0,0,0.25)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ marginBottom: "10px", fontSize: "1.3rem" }}>
              {p.title}
            </h3>

            <p style={{ opacity: 0.8, marginBottom: "15px" }}>
              {p.description}
            </p>

            <p
              style={{
                opacity: 0.5,
                fontSize: "0.9rem",
                marginBottom: "15px",
              }}
            >
              Tech: {p.tech.join(", ")}
            </p>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffb226",
                fontWeight: "600",
                textDecoration: "none",
                marginTop: "auto"
              }}
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

