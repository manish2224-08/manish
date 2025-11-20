import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        gap: "25px"
      }}>
        {projects.map((p, i) => (
          <div key={i} style={{
            background: "#1a1f24",
            padding: "20px",
            borderRadius: "10px",
            border: "1px solid #222"
          }}>
            <h3>{p.title}</h3>
            <p style={{ margin: "10px 0" }}>{p.description}</p>
            <p style={{ opacity: 0.7 }}>Tech: {p.tech.join(", ")}</p>

            <a href={p.link} style={{ display: "inline-block", marginTop: "10px", color: "#61dafb" }}>
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}