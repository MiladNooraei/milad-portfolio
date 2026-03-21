import ogImage from "@/assets/og-image.png";

const base = import.meta.env.BASE_URL;

export const siteConfig = {
  name: "Milad Nooraei",
  description:
    "Master of Data Science student at Monash University with experience in data analysis, visualization, and data-driven problem solving.",
  url: "https://miladnooraei.github.io/milad-portfolio",
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
    { text: "Home", href: `${base}` },
    { text: "About", href: `${base}about` },
    { text: "Projects", href: `${base}services` },
    { text: "Contact", href: `${base}contact` },
  ],
};
