import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import CustomCursor from "./components/CustomCursor";

// ─── Lazy-loaded pages ────────────────────────────────────────────────
const Home     = lazy(() => import("./pages/Home.jsx"));
const About    = lazy(() => import("./pages/About.jsx"));
const Team     = lazy(() => import("./pages/Tech.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Contact  = lazy(() => import("./pages/Contact.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));

// ─── Site constants ───────────────────────────────────────────────────
const SITE_URL  = "https://aarmbhinfotech.com";
const SITE_NAME = "Aarmbh InfoTech Pvt. Ltd.";
const OG_IMAGE  = `${SITE_URL}/images/og-home.jpg`;

// ─── Per-page SEO config ──────────────────────────────────────────────
// Each page has its own focused title, description, keywords, OG image,
// and robots directive. No shared mega-keyword blob — Google prefers
// concise, page-relevant keywords.
const SEO = {
  home: {
    title: `${SITE_NAME} | Web, App & AI Development – Pune, India`,
    description:
      "Aarmbh InfoTech – expert web, mobile app & AI development company in Pune. React, Node.js, Flutter, Python. Free consultation. Fast delivery.",
    keywords:
      "Aarmbh Infotech, Aarambh Infotech, Arambh Infotech, web development company pune, app development india, React Node.js development, mobile app flutter, AI development, software company india, digital transformation, custom software",
    ogImage: OG_IMAGE,
    canonical: `${SITE_URL}/`,
    robots: "index, follow",
  },
  about: {
    title: `About ${SITE_NAME} | Vision, Mission & Team – Pune`,
    description:
      "Learn about Aarmbh InfoTech — our mission, vision, values and team. Expert developers in Pune building innovative web, mobile & AI solutions for businesses worldwide.",
    keywords:
      "about aarmbh infotech, company profile, mission vision values, software team pune, IT company india, tech expertise, web development team",
    ogImage: `${SITE_URL}/images/og-about.jpg`,
    canonical: `${SITE_URL}/about`,
    robots: "index, follow",
  },
  team: {
    title: `Our Expert Team | Developers & IT Consultants – ${SITE_NAME}`,
    description:
      "Meet Aarmbh's team of full-stack developers, mobile engineers, AI specialists, and UI/UX designers building world-class digital products.",
    keywords:
      "aarmbh team, software developers pune, full stack engineers, mobile app developers, IT consultants india, react developers, flutter developers",
    ogImage: `${SITE_URL}/images/og-team.jpg`,
    canonical: `${SITE_URL}/team`,
    robots: "index, follow",
  },
  services: {
    title: `Web, App, AI & Software Development Services | ${SITE_NAME}`,
    description:
      "Aarmbh InfoTech offers web development, mobile apps, AI/ML, UI/UX design, backend, hosting. Scalable solutions. Free consultation.",
    keywords:
      "web development services, mobile app development, AI machine learning, UI UX design, backend development, software development pune, healthcare IT, custom software india, ERP solutions, flutter app",
    ogImage: `${SITE_URL}/images/og-services.jpg`,
    canonical: `${SITE_URL}/services`,
    robots: "index, follow",
  },
  projects: {
    title: `Portfolio & Projects | Web, App & AI Solutions – ${SITE_NAME}`,
    description:
      "Explore Aarmbh InfoTech's project portfolio — React web apps, Flutter mobile apps, AI chatbots, and enterprise solutions for clients across industries.",
    keywords:
      "aarmbh portfolio, software projects, web development portfolio, mobile app projects, react projects india, flutter projects, AI projects, case studies pune",
    ogImage: `${SITE_URL}/images/og-projects.jpg`,
    canonical: `${SITE_URL}/projects`,
    robots: "index, follow",
  },
  contact: {
    title: `Contact ${SITE_NAME} | Free Consultation – Pune, India`,
    description:
      "Contact Aarmbh InfoTech for a free project consultation. Web, mobile app, AI & software development. Pune, India. Response within 24 hours.",
    keywords:
      "contact aarmbh infotech, free consultation, web development quote, IT services enquiry, hire developers pune, software development quote india",
    ogImage: `${SITE_URL}/images/og-contact.jpg`,
    canonical: `${SITE_URL}/contact`,
    robots: "index, follow",
  },
  dashboard: {
    title: `Client Dashboard – ${SITE_NAME}`,
    description: "Manage your ongoing projects, track progress, and communicate with the Aarmbh team.",
    keywords: "",
    ogImage: OG_IMAGE,
    canonical: `${SITE_URL}/dashboard`,
    robots: "noindex, nofollow", // Private area — keep out of search index
  },
};

// ─── Reusable SEO Helmet ──────────────────────────────────────────────
function PageHelmet({ page }) {
  const s = SEO[page];
  return (
    <Helmet>
      <title>{s.title}</title>
      <meta name="description" content={s.description} />
      {s.keywords && <meta name="keywords" content={s.keywords} />}
      <meta name="robots" content={s.robots} />
      <link rel="canonical" href={s.canonical} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={s.canonical} />
      <meta property="og:title"       content={s.title} />
      <meta property="og:description" content={s.description} />
      <meta property="og:image"       content={s.ogImage} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:locale"      content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={s.title} />
      <meta name="twitter:description" content={s.description} />
      <meta name="twitter:image"       content={s.ogImage} />
    </Helmet>
  );
}

// ─── WhatsApp FAB (hidden on specific routes) ─────────────────────────
function WhatsAppFab() {
  const { pathname } = useLocation();
  const hideOn = ["/login", "/checkout", "/careers", "/dashboard"];
  if (hideOn.includes(pathname)) return null;
  return (
    <FloatingWhatsApp
      phone="9881033442"
      message="Hello! I'm interested in your services. Can we discuss?"
      label="WhatsApp us"
      position="br"
      showLabel={false}
      showOnScroll={false}
      size={56}
    />
  );
}

// ─── App ──────────────────────────────────────────────────────────────
function App() {
  return (
    <HelmetProvider>
      <Router>
        <CustomCursor />
        <ScrollToTop />

        <div className="min-h-screen bg-gray-950 flex flex-col">
          <Navigation />

          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<><PageHelmet page="home" /><Home /></>} />
                <Route path="/about" element={<><PageHelmet page="about" /><About /></>} />
                <Route path="/team" element={<><PageHelmet page="team" /><Team /></>} />
                <Route path="/services" element={<><PageHelmet page="services" /><Services /></>} />
                <Route path="/projects" element={<><PageHelmet page="projects" /><Projects /></>} />
                <Route path="/contact" element={<><PageHelmet page="contact" /><Contact /></>} />
                <Route path="/dashboard" element={<><PageHelmet page="dashboard" /><Dashboard /></>} />
              </Routes>
            </Suspense>
          </main>

          <WhatsAppFab />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;