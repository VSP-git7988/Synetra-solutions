import { services } from "./services";
import { industries } from "./industries";

export const site = {
  name: "Synetra Solutions LLC",
  shortName: "Synetra Solutions",
  url: "https://www.synetrasolutions.com", // TODO: confirm production domain
  logo: "/logo.png", // TODO: replace placeholder file in /public with the final client logo
  tagline: "Intelligence, talent and delivery for what's next.",
  description:
    "Synetra Solutions is an AI-first consulting and talent partner delivering AI solutions, executive search, staffing, project delivery and data management services across the US.",
  blurb:
    "An AI-first consulting and talent partner. We bring together data, technology and exceptional people to help organizations move faster and decide better.",

  contact: {
    phone: "+1 (000) 000-0000", // TODO: client to provide
    email: "info@synetrasolutions.com", // TODO: confirm
    address: "Address coming soon", // TODO
    hours: "Monday – Friday, 9:00 AM – 6:00 PM ET", // TODO: confirm
  },

  social: {
    linkedin: "#", // TODO
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", menu: "services" as const },
    { label: "Industries", href: "/industries", menu: "industries" as const },
    { label: "Contact", href: "/contact" },
  ],

  // TODO: placeholder figures — client to supply real numbers
  stats: [
    { value: "15+", label: "Years of Experience" },
    { value: "2,500+", label: "Placements Made" },
    { value: "300+", label: "Projects Delivered" },
    { value: "12", label: "Industries Served" },
  ],

  // TODO: replace with real client logos (with permission)
  clientLogos: ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6", "Client 7", "Client 8"],
};

export const footerLinks = {
  services: services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  industries: industries.map((i) => ({ label: i.title, href: `/industries/${i.slug}` })),
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Contact Us", href: "/contact" },
  ],
};
