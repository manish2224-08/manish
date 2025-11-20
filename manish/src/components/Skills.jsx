import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px"
      }}>
        {skills.map((s, i) => (
          <span key={i} style={{
            padding: "10px 15px",
            background: "#1a1f24",
            borderRadius: "6px",
            border: "1px solid #222"
          }}>
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}