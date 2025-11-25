import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "WordPress", "Shopify", "Webflow", "Wix", "Joomla", "Squarespace", "Framer"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" style={{ padding: "40px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Projects</h2>

      {/* FILTER BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "30px",
        }}
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              padding: "10px 20px",
              borderRadius: "25px",
              border: activeFilter === f ? "2px solid #ffb226" : "2px solid #333",
              background: "transparent",
              color: activeFilter === f ? "#ffb226" : "#fff",
              cursor: "pointer",
              transition: "0.25s",
            }}
            onMouseEnter={(e) => (e.target.style.borderColor = "#ffb226")}
            onMouseLeave={(e) =>
              (e.target.style.borderColor =
                activeFilter === f ? "#ffb226" : "#333")
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {filteredProjects.map((p, i) => (
          <div
            key={i}
            style={{
              background: "#1a1f24",
              padding: "20px",
              borderRadius: "14px",
              border: "1px solid #222",
              transition: "0.3s",
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>{p.title}</h3>

            <p style={{ marginBottom: "10px", opacity: 0.9 }}>
              {p.description}
            </p>

            <p style={{ opacity: 0.6, marginBottom: "12px" }}>
              Tech: {p.tech.join(", ")}
            </p>

            <a
              href={p.link}
              target="_blank"
              style={{
                color: "#61dafb",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
