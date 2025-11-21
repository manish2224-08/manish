import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        style={{
          padding: "18px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          background: "#0d1117",
          zIndex: 1000,
          borderBottom: "1px solid #222",
          height: "70px" // important!
        }}
      >
        <h3 style={{ fontWeight: 700 }}>Manish Chandel</h3>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: "flex", gap: "22px" }}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Hamburger Button */}
        <div
          className="hamburger"
          onClick={() => setOpen(!open)}
          style={{
            width: "32px",
            height: "24px",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "0.3s"
          }}
        >
          <span
            style={{
              width: "100%",
              height: "4px",
              background: "#fff",
              borderRadius: "4px",
              transition: "0.3s",
              transform: open ? "rotate(45deg) translateY(10px)" : "none"
            }}
          />
          <span
            style={{
              width: "100%",
              height: "4px",
              background: "#fff",
              borderRadius: "4px",
              opacity: open ? 0 : 1,
              transition: "0.3s"
            }}
          />
          <span
            style={{
              width: "100%",
              height: "4px",
              background: "#fff",
              borderRadius: "4px",
              transition: "0.3s",
              transform: open ? "rotate(-45deg) translateY(-10px)" : "none"
            }}
          />
        </div>
      </nav>

      {/* FIXED MOBILE DROPDOWN BELOW HEADER */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mobile-menu"
            style={{
              position: "fixed",
              top: "70px", // exactly navbar height
              left: 0,
              width: "100%",
              background: "#0d1117",
              borderBottom: "1px solid #222",
              zIndex: 9999,
              overflow: "hidden"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                gap: "18px",
                textAlign: "center"
              }}
            >
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
              <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RESPONSIVE CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            .hamburger {
              display: flex !important;
            }
          }
        `}
      </style>
    </>
  );
}
