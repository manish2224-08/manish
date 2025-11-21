export default function Hero() {
  return (
    <section id="hero">
      <h1 style={{ fontSize: "3.2rem", fontWeight: 800 }}>
        Full Stack Developer & Web Designer
      </h1>

      <p style={{
        maxWidth: "650px",
        marginTop: "20px",
        fontSize: "1.2rem",
        lineHeight: 1.6
      }}>
        I build high-performance, user-friendly, and fully optimized websites 
        across Webflow, Shopify, WordPress, Wix, SquareSpace & Framer. 
        With 6+ years of experience, I specialize in custom builds, CMS automation, 
        API integrations, and speed-optimized modern websites.
      </p>

      <a href="#projects" style={{
        display: "inline-block",
        marginTop: "30px",
        padding: "12px 25px",
        background: "#61dafb",
        color: "#000",
        borderRadius: "6px",
        fontWeight: 600
      }}>
        View My Work
      </a>
    </section>
  );
}
