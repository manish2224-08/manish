import React, { useState } from "react";
import { projects, filters } from "../data/projects"; // adjust path if needed

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects-section">
      {/* FILTER BUTTONS */}
      <div className="filters">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`filter-btn ${
              activeFilter === filter ? "active" : ""
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* PROJECT CARDS */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="category">{project.category}</span>
            </div>
          </a>
        ))}
      </div>

      {/* OPTIONAL CSS */}
      <style jsx>{`
        .filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .filter-btn {
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          background: #f2f2f2;
          border: 1px solid #ddd;
          transition: 0.3s;
        }

        .filter-btn.active {
          background: #000;
          color: #fff;
          border-color: #000;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }

        .project-card {
          display: block;
          background: #fff;
          padding: 18px;
          border-radius: 10px;
          border: 1px solid #e5e5e5;
          transition: 0.3s;
          text-decoration: none;
          color: inherit;
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .project-card-content h3 {
          margin: 0 0 8px;
          font-size: 1.2rem;
        }

        .category {
          display: inline-block;
          margin-top: 10px;
          padding: 4px 8px;
          font-size: 12px;
          background: #f4f4f4;
          border-radius: 5px;
          color: #444;
        }
      `}</style>
    </section>
  );
};

export default Projects;
