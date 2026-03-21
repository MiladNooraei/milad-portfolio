import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Milad Nooraei",
  description:
    "Master of Data Science student at Monash University with experience in data analysis, visualization, and data-driven problem solving.",
  url: "http://localhost:4321", // change later after deployment
  lang: "en",
  locale: "en_US",
  author: "Milad Nooraei",
  twitter: "",

  ogImage: ogImage,

  socialLinks: {
    twitter: "",
    github: "https://github.com/MiladNooraei",
    discord: "",
  },

  navLinks: [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Projects", href: "/services" },
    { text: "Contact", href: "/contact" },
  ],
};
