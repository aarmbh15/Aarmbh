import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import CustomCursor from './components/CustomCursor';

// Lazy load pages
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Team = lazy(() => import("./pages/Team.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

// --- Consolidated Keyword Groups for Targeted SEO ---

// General IT Services Keywords (Base relevance)
const GENERAL_IT_KEYWORDS =
  "IT services, software development, web development, mobile app development, IT consulting, cloud solutions, digital transformation, custom software, enterprise software, IT support, technology services, managed IT, IT infrastructure, cybersecurity, software maintenance, data analytics, AI solutions, automation, tech support";

// Web & App Development Focused Keywords (Strongest for Home, Services, Projects)
const WEB_APP_KEYWORDS =
  "web design, website development, full stack development, frontend development, backend development, React development, Node.js development, Java development, Python development, mobile app development, Android app development, iOS app development, cross platform apps, UI UX design, responsive website, eCommerce website development";

// SEO & Digital Presence Keywords (Good for Home, Services, Contact)
const SEO_KEYWORDS =
  "digital marketing, SEO optimization, website performance, technical SEO, content optimization, website visibility, google ranking, page speed optimization, keyword research, online branding, website analytics";

// Business & Enterprise Solutions Keywords (Strongest for About, Services)
const BUSINESS_KEYWORDS =
  "enterprise IT services, ERP solutions, CRM development, SaaS development, business automation, IT strategy, digital solutions for business, startup IT support, IT outsourcing, business growth technology";

// --- Per-Route Short Keywords (Specific targeting) ---
const pageSpecificKeywords = {
  home: "Aarmbh InfoTech, web & app development, digital services,",
  about: "Aarmbh about, company profile, mission vision, tech team, corporate identity",
  team: "Aarmbh team, software engineers, developers, designers, IT experts",
  dashboard: "project dashboard, client portal, project management, Aarmbh client access", 
  services: "web development services, app development services, software services, custom IT solutions",
  projects: "portfolio, case studies, software projects, web projects, completed IT solutions",
  contact: "contact Aarmbh, IT enquiries, request a quote, sales support",
};

/**
 * Helper to combine a page's specific keywords with relevant general groups.
 * This ensures the most relevant keywords are listed first.
 */
const combineKeywords = (page) => {
  let groups = [GENERAL_IT_KEYWORDS];
  
  if (["home", "services", "projects"].includes(page)) {
    groups.push(WEB_APP_KEYWORDS);
    groups.push(SEO_KEYWORDS);
  }
  
  if (["about", "services"].includes(page)) {
    groups.push(BUSINESS_KEYWORDS);
  }
  
  if (["contact"].includes(page)) {
    groups.push(SEO_KEYWORDS);
  }
  
  // Start with the most specific keywords, followed by relevant general groups
  const combined = `${pageSpecificKeywords[page]}, ${groups.join(", ")}`;
  
  // Basic deduplication and cleanup (optional but good practice)
  return Array.from(new Set(combined.split(',').map(s => s.trim()))).join(', ');
};


// --- WhatsApp FAB component (kept as is) ---
function WhatsAppFabRouterAware() {
  const { pathname } = useLocation();
  const hideOn = ["/login", "/checkout", "/careers"];
  if (hideOn.includes(pathname)) return null;

  return (
    <FloatingWhatsApp
      phone="9423512942"
      message="Hello! I’m interested in your services."
      label="WhatsApp us"
      position="br"
      showLabel={false}
      showOnScroll={false}
      size={56}
    />
  );
}

// --- Main App Component (Updated with Targeted Keywords & ScrollToTop placement) ---
function App() {
  return (
    <HelmetProvider>
      <Router>
        <CustomCursor />
        {/* ScrollToTop component MUST be inside the Router to use useLocation */}
        <ScrollToTop /> 

        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navigation />

          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* ------------------ Home ------------------ */}
                <Route
                  path="/"
                  element={
                    <>
                      <Helmet>
        <title>Aarmbh InfoTech (Aarambh | Arambh | Aarambha) | Web & App Development Company India</title>
        <meta
          name="description"
          content="Aarmbh InfoTech Pvt. Ltd. — Official website of Aarambh Infotech | Arambh Infotech | Aarambha Infotech. Leading web development, mobile app development & custom software company based in Surat, Gujarat, India."
        />
        <meta
          name="keywords"
          content={
            "Aarmbh Infotech, Aarambh Infotech, Arambh Infotech, Aarambha Infotech, Arambha Infotech, Aaramba Infotech, " +
            combineKeywords("home")
          }
        />
        <meta property="og:title" content="Aarmbh InfoTech (also Aarambh / Arambh Infotech) | Web & App Development" />
        <meta property="og:description" content="Official website of Aarmbh InfoTech (commonly searched as Aarambh, Arambh, Aarambha Infotech). Expert in React, Node.js, Mobile Apps & AI solutions." />
      </Helmet>
                      <Home />
                    </>
                  }
                />

                {/* ------------------ About ------------------ */}
                <Route
                  path="/about"
                  element={
                    <>
                      <Helmet>
                        <title>About Aarmbh InfoTech | Mission, Vision & Expertise</title>
                        <meta
                          name="description"
                          content="Learn more about Aarmbh InfoTech—our mission, vision, and expertise in IT services, dedicated to driving digital growth for businesses and enterprise clients."
                        />
                        <meta
                          name="keywords"
                          content={combineKeywords("about")} // Targeted Keywords
                        />
                        <meta
                          property="og:title"
                          content="About Us - Aarmbh InfoTech"
                        />
                        <meta
                          property="og:description"
                          content="Empowering businesses with cutting-edge IT and digital solutions."
                        />
                        <meta property="og:type" content="website" />
                        <meta
                          property="og:url"
                          content="https://aarmbhinfotech.com/about"
                        />
                        <meta
                          property="og:image"
                          content="https://aarmbhinfotech.com/images/og-about.jpg"
                        />
                        <meta name="robots" content="index, follow" />
                        <link
                          rel="canonical"
                          href="https://aarmbhinfotech.com/about"
                        />
                      </Helmet>
                      <About />
                    </>
                  }
                />

                {/* ------------------ Team ------------------ */}
                <Route
                  path="/team"
                  element={
                    <>
                      <Helmet>
                        <title>Our Expert Team - Aarmbh Developers & IT Consultants</title>
                        <meta
                          name="description"
                          content="Meet Aarmbh's expert team of full-stack developers, IT consultants, and digital specialists who build and manage innovative web and software solutions."
                        />
                        <meta
                          name="keywords"
                          content={combineKeywords("team")} // Targeted Keywords
                        />
                        <meta
                          property="og:title"
                          content="Our Team - Aarmbh InfoTech"
                        />
                        <meta
                          property="og:description"
                          content="Our skilled professionals drive IT innovation and deliver custom software and web solutions."
                        />
                        <meta property="og:type" content="website" />
                        <meta
                          property="og:url"
                          content="https://aarmbhinfotech.com/team"
                        />
                        <meta
                          property="og:image"
                          content="https://aarmbhinfotech.com/images/og-team.jpg"
                        />
                        <meta name="robots" content="index, follow" />
                        <link
                          rel="canonical"
                          href="https://aarmbhinfotech.com/team"
                        />
                      </Helmet>
                      <Team />
                    </>
                  }
                />

                {/* ------------------ Dashboard ------------------ */}
                <Route
                  path="/dashboard"
                  element={
                    <>
                      <Helmet>
                        <title>Dashboard - Aarmbh InfoTech (Client Area)</title>
                        <meta
                          name="description"
                          content="Securely manage your ongoing IT projects, track development progress, and view analytics with Aarmbh's client dashboard."
                        />
                        <meta
                          name="keywords"
                          content={combineKeywords("dashboard")}
                        />
                        <meta
                          property="og:title"
                          content="Dashboard - Aarmbh InfoTech"
                        />
                        <meta
                          property="og:description"
                          content="Track and manage your IT projects efficiently."
                        />
                        <meta property="og:type" content="website" />
                        <meta
                          property="og:url"
                          content="https://aarmbhinfotech.com/dashboard"
                        />
                        <meta
                          property="og:image"
                          content="https://aarmbhinfotech.com/images/og-dashboard.jpg"
                        />
                        <meta name="robots" content="noindex, nofollow" /> {/* Correctly set to noindex/nofollow for a private area */}
                        <link
                          rel="canonical"
                          href="https://aarmbhinfotech.com/dashboard"
                        />
                      </Helmet>
                      <Dashboard />
                    </>
                  }
                />

                {/* ------------------ Services ------------------ */}
                <Route
                  path="/services"
                  element={
                    <>
                      <Helmet>
                        <title>IT Services: Web, Mobile App & Custom Software Development | Aarmbh</title>
                        <meta
                          name="description"
                          content="Explore Aarmbh's comprehensive IT services: custom web development, mobile app development (iOS/Android), full-stack engineering, cloud solutions, and strategic IT consulting."
                        />
                        <meta
                          name="keywords"
                          content={combineKeywords("services")} // Targeted Keywords
                        />
                        <meta
                          property="og:title"
                          content="Services - Aarmbh InfoTech"
                        />
                        <meta
                          property="og:description"
                          content="Comprehensive IT solutions for modern businesses."
                        />
                        <meta property="og:type" content="website" />
                        <meta
                          property="og:url"
                          content="https://aarmbhinfotech.com/services"
                        />
                        <meta
                          property="og:image"
                          content="https://aarmbhinfotech.com/images/og-services.jpg"
                        />
                        <meta name="robots" content="index, follow" />
                        <link
                          rel="canonical"
                          href="https://aarmbhinfotech.com/services"
                        />
                      </Helmet>
                      <Services />
                    </>
                  }
                />

                {/* ------------------ Projects ------------------ */}
                <Route
                  path="/projects"
                  element={
                    <>
                      <Helmet>
                        <title>IT & Software Development Portfolio | Aarmbh Projects</title>
                        <meta
                          name="description"
                          content="View Aarmbh's portfolio of successful IT projects, including custom enterprise software, e-commerce platforms, and advanced mobile applications built with modern frameworks."
                        />
                        <meta
                          name="keywords"
                          content={combineKeywords("projects")} // Targeted Keywords
                        />
                        <meta
                          property="og:title"
                          content="Projects - Aarmbh InfoTech"
                        />
                        <meta
                          property="og:description"
                          content="Showcasing our innovative IT project portfolio."
                        />
                        <meta property="og:type" content="website" />
                        <meta
                          property="og:url"
                          content="https://aarmbhinfotech.com/projects"
                        />
                        <meta
                          property="og:image"
                          content="https://aarmbhinfotech.com/images/og-projects.jpg"
                        />
                        <meta name="robots" content="index, follow" />
                        <link
                          rel="canonical"
                          href="https://aarmbhinfotech.com/projects"
                        />
                      </Helmet>
                      <Projects />
                    </>
                  }
                />

                {/* ------------------ Contact ------------------ */}
                <Route
                  path="/contact"
                  element={
                    <>
                      <Helmet>
                        <title>Contact Aarmbh InfoTech for Web & App Development Quote</title>
                        <meta
                          name="description"
                          content="Contact Aarmbh for IT and software development inquiries, sales, and support. Reach out to start your next digital project or request a free consultation."
                        />
                        <meta
                          name="keywords"
                          content={combineKeywords("contact")} // Targeted Keywords
                        />
                        <meta
                          property="og:title"
                          content="Contact Us - Aarmbh InfoTech"
                        />
                        <meta
                          property="og:description"
                          content="Reach out for expert IT and software solutions."
                        />
                        <meta property="og:type" content="website" />
                        <meta
                          property="og:url"
                          content="https://aarmbhinfotech.com/contact"
                        />
                        <meta
                          property="og:image"
                          content="https://aarmbhinfotech.com/images/og-contact.jpg"
                        />
                        <meta name="robots" content="index, follow" />
                        <link
                          rel="canonical"
                          href="https://aarmbhinfotech.com/contact"
                        />
                      </Helmet>
                      <Contact />
                    </>
                  }
                />
              </Routes>
            </Suspense>
          </main>

          <WhatsAppFabRouterAware />

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;