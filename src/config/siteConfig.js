// ============================================================
// 🎨 SITE CONFIG — Edit this file to customize for any client
// ============================================================

export const siteConfig = {
  // ── Business Info ─────────────────────────────────────────
  business: {
    name: "Vision Kit Eyeware ",
    tagline: "See the World Clearly",
    description: "Affordable, Stylish & Same-Day Glasses in Hyderabad, Free eye checkup with every visit.",
    logo: "/logo.svg",         // place your logo in /public
    rating: "4.9",
    totalCustomers: "100+",
    phone: "+91 98765 43210",
    whatsapp: "+919876543210", // for WhatsApp button
    email: "hello@bc-opticals.com",
    address: "opp. Bartan Wali Gali, Near Jama Masjid, Sadar Baazar, Purani Mandi, Firozabad, Uttar Pradesh 283203",
    mapEmbedUrl: "https://maps.app.goo.gl/8XGNxAKXAudKvaWW8",
    hours: "Monday – Sunday: 6:00 AM – 11:00 PM",
  },

  // ── Theme / Colors ─────────────────────────────────────────
  theme: {
    primaryColor: "#2563EB",    // blue-600
    accentColor:  "#38BDF8",    // sky-400
    darkBg:       "#0F172A",    // slate-900
    heroOverlay:  "rgba(15,23,42,0.65)",
  },

  // ── Navigation ─────────────────────────────────────────────
  nav: [
    { label: "Services",  href: "#services"  },
    { label: "Products",  href: "#products"  },
    { label: "Reviews",   href: "#reviews"   },
    { label: "Why Us",    href: "#why-us"    },
    { label: "Contact",   href: "#contact"   },
  ],

  // ── Hero Section ───────────────────────────────────────────
  hero: {
    headline: "See the World Clearly with",
    highlightedWord: "Vision Kit Eyewear ",
    subtext: "Affordable, Stylish & Same-Day Glasses in Hyderabad. Free eye checkup with every visit.",
    backgroundImage: "/hero-bg.jpg",  // place in /public
    badges: ["Same Day Glasses", "Free Eye Testing", "100+ Happy Customers"],
    ctaPrimary:   { label: "📞 Call Now",     href: "tel:+919876543210" },
    ctaSecondary: { label: "Get Directions",  href: "#contact" },
  },

  // ── Services ───────────────────────────────────────────────
  services: [
    {
      id: "eye-checkup",
      icon: "Eye",
      title: "Free Eye Checkup",
      description: "Comprehensive eye testing by experienced professionals at no cost.",
    },
    {
      id: "prescription",
      icon: "Glasses",
      title: "Prescription Glasses",
      description: "Wide range of lenses for every prescription — single vision, bifocal & progressive.",
    },
    {
      id: "sunglasses",
      icon: "Sun",
      title: "Sunglasses Collection",
      description: "UV-protected sunglasses in trending styles for men, women & kids.",
    },
    {
      id: "contact-lenses",
      icon: "CircleDot",
      title: "Contact Lenses",
      description: "Daily, monthly & colored contact lenses from trusted brands.",
    },
    {
      id: "frame-repair",
      icon: "Wrench",
      title: "Frame Repair",
      description: "Quick adjustments, nose pad replacement & frame repair on the spot.",
    },
  ],

  // ── Products ───────────────────────────────────────────────
  products: [
    {
      id: "stylish-frames",
      title: "Stylish Frames",
      badge: "Trending",
      badgeColor: "blue",
      price: "₹499",
      image: "/products/frames.jpg",
    },
    {
      id: "sunglasses",
      title: "Sunglasses",
      badge: "UV Protected",
      badgeColor: "green",
      price: "₹499",
      image: "/products/sunglasses.jpg",
    },
    {
      id: "kids-eyewear",
      title: "Kids Eyewear",
      badge: "Fun & Safe",
      badgeColor: "orange",
      price: "₹499",
      image: "/products/kids.jpg",
    },
  ],

  // ── Testimonials ───────────────────────────────────────────
  testimonials: [
    {
      id: 1,
      name: "Priya Verma",
      initials: "PV",
      role: "Verified Customer",
      review: "Free eye checkup + great price. Saved me so much money compared to other shops.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rahul Sharma",
      initials: "RS",
      role: "Verified Customer",
      review: "Got my glasses the same day! Amazing service and very friendly staff.",
      rating: 5,
    },
    {
      id: 3,
      name: "Anita Singh",
      initials: "AS",
      role: "Verified Customer",
      review: "Best optical shop in Hyderabad. Wide frame collection at unbeatable prices.",
      rating: 5,
    },
  ],

  // ── Why Choose Us ──────────────────────────────────────────
  whyUs: [
    { icon: "Star",      title: "4.9★ Rated Shop",       description: "Trusted by 100+ customers in Firozabad" },
    { icon: "Zap",       title: "Same Day Delivery",      description: "Walk in, choose & walk out with your glasses" },
    { icon: "Eye",       title: "Free Eye Testing",       description: "Professional checkup at zero cost" },
    { icon: "IndianRupee", title: "Affordable Pricing",   description: "Premium quality at prices that don't burn a hole" },
    { icon: "Grid",      title: "Wide Frame Collection",  description: "1000+ frames for every style & budget" },
  ],

  // ── Footer ─────────────────────────────────────────────────
  footer: {
    tagline: "Clear Vision, Better Life. Firozabad's most trusted optical shop for affordable and stylish eyewear.",
    quickLinks: ["Services", "Products", "Reviews", "Why Us", "Contact"],
    services: ["Free Eye Testing", "Prescription Glasses", "Sunglasses", "Contact Lenses", "Frame Repair"],
  },
};