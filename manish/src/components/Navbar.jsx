export default function Navbar() {
  return (
    <nav style={{
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      background: "#0d1117",
      zIndex: 10,
      borderBottom: "1px solid #222"
    }}>
      <h3 style={{ fontWeight: "700" }}>Manish Chandel</h3>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}