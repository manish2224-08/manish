// src/data/projects.js
// Filters list (only the filters you asked for)
export const filters = [
  "All",
  "WordPress",
  "Shopify",
  "Webflow",
  "Wix",
  "Joomla",
  "Squarespace",
  "Framer"
];

// (Optional) local OG image path created during design iterations.
// NOTE: This path is local to the environment where the image was generated.
// To use this image on your live website, move the file into your project's public folder
// (e.g. public/og-portfolio.png) and then update the path to "/og-portfolio.png".
export const OG_IMAGE_LOCAL_PATH = "/mnt/data/A_digital_illustration_features_a_bold,_uppercase,.png";

export const projects = [
  // ---------------- WordPress ----------------
  {
    title: "Couture Law P.A.",
    category: "WordPress",
    description:
      "Personal injury law firm in Florida. Custom WordPress site focused on conversions and lead capture.",
    tech: ["WordPress"],
    link: "https://couturelawoffices.com/"
  },
  {
    title: "Krupnick Campbell Malone",
    category: "WordPress",
    description:
      "Civil litigation & trial attorneys — WordPress site for professional legal services and resources.",
    tech: ["WordPress"],
    link: "https://www.krupnicklaw.com/"
  },
  {
    title: "The Potager Project",
    category: "WordPress",
    description:
      "Gardening blog and resource site with long-form guides and recipe / growing walkthroughs.",
    tech: ["WordPress", "Blog"],
    link: "https://thepotagerproject.com/"
  },
  {
    title: "Corrocoat USA",
    category: "WordPress",
    description:
      "Industrial coatings & linings company site built to showcase solutions and case studies.",
    tech: ["WordPress"],
    link: "https://corrocoatusa.com/"
  },
  {
    title: "Tallahassee 100 Club",
    category: "WordPress",
    description:
      "Community and networking organization website for events, membership, and news.",
    tech: ["WordPress"],
    link: "https://www.tallahassee100club.com/"
  },
  {
    title: "M&L Plumbing",
    category: "WordPress",
    description:
      "Local service business site with contact forms and service pages for plumbing solutions.",
    tech: ["WordPress"],
    link: "https://mandlplumbing.com/"
  },
  {
    title: "Revell Electric & Automated Access Systems",
    category: "WordPress",
    description:
      "Electrical and access automation company site with service listings and lead capture.",
    tech: ["WordPress"],
    link: "https://www.revellelectric.com/"
  },

  // ---------------- Shopify ----------------
  {
    title: "Eurobahn Dynamics (Shopify)",
    category: "Shopify",
    description:
      "Shopify store setup and theme customization to showcase product lines and checkout optimizations.",
    tech: ["Shopify"],
    link: "https://eurobahndynamics.com/"
  },
  {
    title: "ChocoBar (Canada)",
    category: "Shopify",
    description:
      "E-commerce site for craft chocolate and corporate gifting solutions (Shopify build).",
    tech: ["Shopify", "E-commerce"],
    link: "https://chocobar.ca/"
  },

  // ---------------- Webflow ----------------
  {
    title: "Larson Shores Architects",
    category: "Webflow",
    description:
      "Architecture studio site built in Webflow highlighting projects and process.",
    tech: ["Webflow"],
    link: "https://www.larsonshores.com/"
  },
  {
    title: "Boopos",
    category: "Webflow",
    description:
      "Fintech / financing platform marketing site with product pages and data-driven funnels.",
    tech: ["Webflow"],
    link: "https://www.boopos.com/"
  },
  {
    title: "LBC Design Center",
    category: "Webflow",
    description:
      "Local design center website featuring products, gallery and appointment booking.",
    tech: ["Webflow"],
    link: "https://www.lbcdesigncenter.org/"
  },
  {
    title: "Bambu Training",
    category: "Webflow",
    description:
      "Training / e-learning marketing site built for conversion and course promotion.",
    tech: ["Webflow"],
    link: "https://www.bambutraining.com/"
  },
  {
    title: "HunniBuzz",
    category: "Webflow",
    description:
      "Marketing / product showcase site with modern interactions and CMS-driven content.",
    tech: ["Webflow"],
    link: "https://www.hunnibuzz.com/"
  },

  // ---------------- Wix ----------------
  {
    title: "Drink Good Bar",
    category: "Wix",
    description:
      "Bar/restaurant promotional site using Wix with menus and contact/reservation features.",
    tech: ["Wix"],
    link: "https://www.drinkgoodbar.com/"
  },

  // ---------------- Joomla ----------------
  {
    title: "To The Moon & Back Foundation (TTMAB)",
    category: "Joomla",
    description:
      "Nonprofit site focused on advocacy and family support — built on Joomla for content management.",
    tech: ["Joomla", "Nonprofit"],
    link: "https://ttmab.org/"
  },

  // ---------------- Squarespace ----------------
  {
    title: "Doctors Note (Australia)",
    category: "Squarespace",
    description:
      "Online medical-certificate service with appointment and certificate delivery — Squarespace build.",
    tech: ["Squarespace", "Healthcare"],
    link: "https://doctorsnote.com.au/"
  },

  // ---------------- Framer ----------------
  {
    title: "Flow AI Ops",
    category: "Framer",
    description:
      "Marketing site / product pages built in Framer — focused on product messaging and demos.",
    tech: ["Framer"],
    link: "https://flowaiops.com/"
  }
];
