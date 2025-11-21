export default function Contact() {
  return (
    <section id="contact" style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>Contact</h2>

      <p style={{ marginBottom: "25px", opacity: 0.8 }}>
        Want to work together? Let’s build something great.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap"
        }}
      >
        {/* Email Button */}
        <a
          href="mailto:themanishchandel@gmail.com"
          style={{
            padding: "12px 25px",
            background: "#ffb226",
            color: "#000",
            borderRadius: "8px",
            fontWeight: 600,
            minWidth: "160px",
            textAlign: "center"
          }}
        >
          Email Me
        </a>

        {/* Download Resume Button */}
        <a
          href="/Manish_Chandel_TwoColumn_Resume.pdf"
          download
          style={{
            padding: "12px 25px",
            background: "#61dafb",
            color: "#000",
            borderRadius: "8px",
            fontWeight: 600,
            minWidth: "160px",
            textAlign: "center"
          }}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
