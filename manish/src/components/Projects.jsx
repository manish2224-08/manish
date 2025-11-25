import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio",
    category: "React",
    image: "/project1.png",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    category: "Full Stack",
    image: "/project2.png",
  },
  {
    id: 3,
    title: "WordPress Business Site",
    category: "WordPress",
    image: "/project3.png",
  },
  {
    id: 4,
    title: "Mobile App UI",
    category: "UI/UX",
    image: "/project4.png",
  },
];

const categories = ["All", "React", "Full Stack", "WordPress", "UI/UX"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" style={{ padding: "60px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Projects</h2>

      {/* Filter Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: "10px 20px",
              borderRadius: "6px",
              border: "1px solid #555",
              background: activeCategory === cat ? "#ffb226" : "transparent",
              color: activeCategory === cat ? "#000" : "#fff",
              fontWeight: 600,
              cursor: "pointer",
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
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "#111",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #222",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <h3>{project.title}</h3>
              <p style={{ marginTop: "5px", opacity: 0.7 }}>{project.category}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
