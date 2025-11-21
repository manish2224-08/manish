import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          background: "#0d1117",
          zIndex: 20,
          borderBottom: "1px solid #222"
        }}
      >
        <h3 style={{ fontWeight: "700" }}>Manish Chandel</h3>

        {/* Desktop Menu */}
        <div
          className="desktop-menu"
          style={{
            display: "flex",
            gap: "20px"
          }}
        >
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="hamburger"
          onClick={() => setOpen(!open)}
          style={{
            width: "32px",
            height: "24px",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer",
            display: "none"
          }}
        >
          <span
            style={{
              height: "4px",
              width: "100%",
              background: "#fff",
              borderRadius: "6px",
              transition: "0.3s",
              transform: open ? "rotate(45deg) translateY(10px)" : "none"
            }}
          ></span>
          <span
            style={{
              height: "4px",
              width: "100%",
              background: "#fff",
              borderRadius: "6px",
              opacity: open ? 0 : 1,
              transition: "0.3s"
            }}
          ></span>
          <span
            style={{
              height: "4px",
              width: "100%",
              background: "#fff",
              borderRadius: "6px",
              transition: "0.3s",
              transform: open ? "rotate(-45deg) translateY(-10px)" : "none"
            }}
          ></span>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#0d1117",
              borderBottom: "1px solid #222",
              overflow: "hidden"
            }}
            className="mobile-menu"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                gap: "15px",
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

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none;
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
