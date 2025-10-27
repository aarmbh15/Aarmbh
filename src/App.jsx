// import { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";
// import LoadingSpinner from "./components/LoadingSpinner";

// // Lazy load pages
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Team = lazy(() => import("./pages/Team"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));
// const Services = lazy(() => import("./pages/Services"));
// const Projects = lazy(() => import("./pages/Projects"));
// const Contact = lazy(() => import("./pages/Contact"));

// /**
//  * Master keyword groups delivered by senior — consolidated and de-duplicated-ish.
//  * You can tweak these strings if you want shorter or different ordering per page.
//  */
// const GENERAL_KEYWORDS = [
//   "IT services",
//   "software development",
//   "web development",
//   "mobile app development",
//   "IT consulting",
//   "cloud solutions",
//   "digital transformation",
//   "custom software",
//   "enterprise software",
//   "IT support",
//   "technology services",
//   "managed IT",
//   "IT infrastructure",
//   "cybersecurity",
//   "software maintenance",
//   "data analytics",
//   "AI solutions",
//   "automation",
//   "tech support"
// ].join(", ");

// const WEB_APP_KEYWORDS = [
//   "web design",
//   "website development",
//   "full stack development",
//   "frontend development",
//   "backend development",
//   "React development",
//   "Node.jsx development",
//   "mobile app development",
//   "cross platform apps",
//   "UI UX design",
//   "responsive website",
//   "eCommerce website development"
// ].join(", ");

// const SEO_DIGITAL_KEYWORDS = [
//   "digital marketing",
//   "SEO optimization",
//   "website performance",
//   "technical SEO",
//   "content optimization",
//   "website analytics",
//   "page speed optimization",
//   "keyword research",
//   "online branding",
//   "website visibility",
//   "google ranking"
// ].join(", ");

// const BUSINESS_KEYWORDS = [
//   "enterprise IT services",
//   "ERP solutions",
//   "CRM development",
//   "SaaS development",
//   "business automation",
//   "IT strategy",
//   "digital solutions for business",
//   "startup IT support",
//   "IT outsourcing",
//   "business growth technology"
// ].join(", ");

// function App() {
//   // Per-route short keywords (kept concise) — merged with general groups below.
//   const homeKeywords = `Aarmbh, IT solutions, web & app development, digital services`;
//   const aboutKeywords = `Aarmbh about, company profile, mission vision, tech team`;
//   const teamKeywords = `Aarmbh team, software engineers, developers, designers`;
//   const dashboardKeywords = `project dashboard, client dashboard, project management`;
//   const servicesKeywords = `web development services, app development services, software services`;
//   const projectsKeywords = `portfolio, case studies, software projects, web projects`;
//   const contactKeywords = `contact Aarmbh, IT enquiries, request a quote`;

//   // Helper to combine a page's keywords with the large keyword groups
//   const combine = (pageKeywords, extras = "") =>
//     `${pageKeywords}, ${extras ? extras + ", " : ""}${WEB_APP_KEYWORDS}, ${SEO_DIGITAL_KEYWORDS}, ${BUSINESS_KEYWORDS}, ${GENERAL_KEYWORDS}`;

//   return (
//     <HelmetProvider>
//       <Router>
//         <div className="min-h-screen bg-gray-50 flex flex-col">
//           <Navigation />

//           <main className="flex-grow">
//             <Suspense fallback={<LoadingSpinner />}>
//               <Routes>
//                 {/* ------------------ Home ------------------ */}
//                 <Route
//                   path="/"
//                   element={
//                     <>
//                       <Helmet>
//                         <title>Home - Aarmbh IT Solutions</title>
//                         <meta
//                           name="description"
//                           content="Aarmbh IT Solutions offers innovative web and software development services."
//                         />
//                         <meta
//                           name="keywords"
//                           content={combine(homeKeywords)}
//                         />
//                         <meta property="og:title" content="Home - Aarmbh IT Solutions" />
//                         <meta property="og:description" content="Discover cutting-edge IT solutions for your business." />
//                         <meta property="og:type" content="website" />
//                         <meta property="og:url" content="https://aarmbh15.42web.io/" />
//                         <meta property="og:image" content="https://aarmbh15.42web.io/images/og-home.jpg" />
//                         <meta name="robots" content="index, follow" />
//                         <link rel="canonical" href="https://aarmbh15.42web.io/" />
//                       </Helmet>
//                       <Home />
//                     </>
//                   }
//                 />

//                 {/* ------------------ About ------------------ */}
//                 <Route
//                   path="/about"
//                   element={
//                     <>
//                       <Helmet>
//                         <title>About Us - Aarmbh IT Solutions</title>
//                         <meta
//                           name="description"
//                           content="Learn more about Aarmbh IT Solutions — our mission, vision, and expertise in IT services."
//                         />
//                         <meta
//                           name="keywords"
//                           content={combine(aboutKeywords)}
//                         />
//                         <meta property="og:title" content="About Us - Aarmbh IT Solutions" />
//                         <meta property="og:description" content="Empowering businesses with cutting-edge IT and digital solutions." />
//                         <meta property="og:type" content="website" />
//                         <meta property="og:url" content="https://aarmbh15.42web.io/about" />
//                         <meta property="og:image" content="https://aarmbh15.42web.io/images/og-about.jpg" />
//                         <meta name="robots" content="index, follow" />
//                         <link rel="canonical" href="https://aarmbh15.42web.io/about" />
//                       </Helmet>
//                       <About />
//                     </>
//                   }
//                 />

//                 {/* ------------------ Team ------------------ */}
//                 <Route
//                   path="/team"
//                   element={
//                     <>
//                       <Helmet>
//                         <title>Our Team - Aarmbh IT Solutions</title>
//                         <meta
//                           name="description"
//                           content="Meet Aarmbh's expert team in web and software development."
//                         />
//                         <meta
//                           name="keywords"
//                           content={combine(teamKeywords)}
//                         />
//                         <meta property="og:title" content="Our Team - Aarmbh IT Solutions" />
//                         <meta property="og:description" content="Our skilled professionals drive IT innovation." />
//                         <meta property="og:type" content="website" />
//                         <meta property="og:url" content="https://aarmbh15.42web.io/team" />
//                         <meta property="og:image" content="https://aarmbh15.42web.io/images/og-team.jpg" />
//                         <meta name="robots" content="index, follow" />
//                         <link rel="canonical" href="https://aarmbh15.42web.io/team" />
//                       </Helmet>
//                       <Team />
//                     </>
//                   }
//                 />

//                 {/* ------------------ Dashboard ------------------ */}
//                 <Route
//                   path="/dashboard"
//                   element={
//                     <>
//                       <Helmet>
//                         <title>Dashboard - Aarmbh IT Solutions</title>
//                         <meta
//                           name="description"
//                           content="Manage your IT projects with Aarmbh's dashboard."
//                         />
//                         <meta
//                           name="keywords"
//                           content={combine(dashboardKeywords)}
//                         />
//                         <meta property="og:title" content="Dashboard - Aarmbh IT Solutions" />
//                         <meta property="og:description" content="Track and manage your IT projects efficiently." />
//                         <meta property="og:type" content="website" />
//                         <meta property="og:url" content="https://aarmbh15.42web.io/dashboard" />
//                         <meta property="og:image" content="https://aarmbh15.42web.io/images/og-dashboard.jpg" />
//                         <meta name="robots" content="index, follow" />
//                         <link rel="canonical" href="https://aarmbh15.42web.io/dashboard" />
//                       </Helmet>
//                       <Dashboard />
//                     </>
//                   }
//                 />

//                 {/* ------------------ Services ------------------ */}
//                 <Route
//                   path="/services"
//                   element={
//                     <>
//                       <Helmet>
//                         <title>Services - Aarmbh IT Solutions</title>
//                         <meta
//                           name="description"
//                           content="Explore Aarmbh's IT services: web, app, and software development."
//                         />
//                         <meta
//                           name="keywords"
//                           content={combine(servicesKeywords)}
//                         />
//                         <meta property="og:title" content="Services - Aarmbh IT Solutions" />
//                         <meta property="og:description" content="Comprehensive IT solutions for modern businesses." />
//                         <meta property="og:type" content="website" />
//                         <meta property="og:url" content="https://aarmbh15.42web.io/services" />
//                         <meta property="og:image" content="https://aarmbh15.42web.io/images/og-services.jpg" />
//                         <meta name="robots" content="index, follow" />
//                         <link rel="canonical" href="https://aarmbh15.42web.io/services" />
//                       </Helmet>
//                       <Services />
//                     </>
//                   }
//                 />

//                 {/* ------------------ Projects ------------------ */}
//                 <Route
//                   path="/projects"
//                   element={
//                     <>
//                       <Helmet>
//                         <title>Projects - Aarmbh IT Solutions</title>
//                         <meta
//                           name="description"
//                           content="View Aarmbh's portfolio of IT and software projects."
//                         />
//                         <meta
//                           name="keywords"
//                           content={combine(projectsKeywords)}
//                         />
//                         <meta property="og:title" content="Projects - Aarmbh IT Solutions" />
//                         <meta property="og:description" content="Showcasing our innovative IT project portfolio." />
//                         <meta property="og:type" content="website" />
//                         <meta property="og:url" content="https://aarmbh15.42web.io/projects" />
//                         <meta property="og:image" content="https://aarmbh15.42web.io/images/og-projects.jpg" />
//                         <meta name="robots" content="index, follow" />
//                         <link rel="canonical" href="https://aarmbh15.42web.io/projects" />
//                       </Helmet>
//                       <Projects />
//                     </>
//                   }
//                 />

//                 {/* ------------------ Contact ------------------ */}
//                 <Route
//                   path="/contact"
//                   element={
//                     <>
//                       <Helmet>
//                         <title>Contact Us - Aarmbh IT Solutions</title>
//                         <meta
//                           name="description"
//                           content="Contact Aarmbh for IT and software development inquiries."
//                         />
//                         <meta
//                           name="keywords"
//                           content={combine(contactKeywords)}
//                         />
//                         <meta property="og:title" content="Contact Us - Aarmbh IT Solutions" />
//                         <meta property="og:description" content="Reach out for expert IT and software solutions." />
//                         <meta property="og:type" content="website" />
//                         <meta property="og:url" content="https://aarmbh15.42web.io/contact" />
//                         <meta property="og:image" content="https://aarmbh15.42web.io/images/og-contact.jpg" />
//                         <meta name="robots" content="index, follow" />
//                         <link rel="canonical" href="https://aarmbh15.42web.io/contact" />
//                       </Helmet>
//                       <Contact />
//                     </>
//                   }
//                 />
//               </Routes>
//             </Suspense>
//           </main>

//           <Footer />
//         </div>
//       </Router>
//     </HelmetProvider>
//   );
// }
// export default App;


import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
// FIX: Changing file extensions to .jsx for compatibility with the module resolver.
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";

// Lazy load pages
// FIX: Changing file extensions to .jsx for pages.
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Team = lazy(() => import("./pages/Team.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

// --- Consolidated Keywords for better SEO ---

// General IT Services Keywords
const GENERAL_IT_KEYWORDS =
  "IT services, software development, web development, mobile app development, IT consulting, cloud solutions, digital transformation, custom software, enterprise software, IT support, technology services, managed IT, IT infrastructure, cybersecurity, software maintenance, data analytics, AI solutions, automation, tech support, Aarmbh IT Solutions";

// Web & App Development Focused Keywords
const WEB_APP_KEYWORDS =
  "web design, website development, full stack development, frontend development, backend development, React development, Node.jsx development, Java development, Python development, mobile app development, Android app development, iOS app development, cross platform apps, UI UX design, responsive website, eCommerce website development";

// SEO & Digital Presence Keywords
const SEO_KEYWORDS =
  "digital marketing, SEO optimization, website performance, technical SEO, content optimization, website analytics, page speed optimization, keyword research, online branding, website visibility, google ranking";

// Business & Enterprise Solutions Keywords
const BUSINESS_KEYWORDS =
  "enterprise IT services, ERP solutions, CRM development, SaaS development, business automation, IT strategy, digital solutions for business, startup IT support, IT outsourcing, business growth technology";

// A good balance for all pages is a mix of all relevant categories.
// We'll use a combination of all of them for a broad catch, and only slightly
// adjust the description/title for context.
const ALL_KEYWORDS = [
  GENERAL_IT_KEYWORDS,
  WEB_APP_KEYWORDS,
  SEO_KEYWORDS,
  BUSINESS_KEYWORDS,
].join(", ");

function WhatsAppFabRouterAware() {
  const { pathname } = useLocation();

  // Add paths where the FAB should NOT appear
  const hideOn = ["/login", "/checkout", "/careers"];

  if (hideOn.includes(pathname)) return null;

  // Note: FloatingWhatsApp component is assumed to handle styling and placement (position="br" - bottom right)
  return (
    <FloatingWhatsApp
      phone="9423512942"           // countrycode + number, no "+" or spaces
      message="Hello! I’m interested in your services."
      label="WhatsApp us"
      position="br"                // br | bl | tr | tl
      showLabel={false}            // icon-only; tooltip/hover text handled inside component
      showOnScroll={false}         // set true to show after scrolling
      size={56}                    // outer circle size
    />
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
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
                        <title>Home - Aarmbh IT Solutions</title>
                        <meta
                          name="description"
                          content="Aarmbh IT Solutions offers innovative web, mobile, and custom software development services along with expert IT consulting and digital transformation strategies."
                        />
                        <meta
                          name="keywords"
                          content={ALL_KEYWORDS}
                        />
                        <meta
                          property="og:title"
                          content="Home - Aarmbh IT Solutions"
                        />
                        <meta
                          property="og:description"
                          content="Discover cutting-edge IT solutions for your business—from web development and mobile apps to IT infrastructure and digital strategy."
                        />
                        <meta property="og:type" content="website" />
                        <meta
                          property="og:url"
                          content="https://aarmbh15.42web.io/"
                        />
                        <meta
                          property="og:image"
                          content="https://aarmbh15.42web.io/images/og-home.jpg"
                        />
                        <meta name="robots" content="index, follow" />
                        <link
                          rel="canonical"
                          href="https://aarmbh15.42web.io/"
                        />
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
                        <title>About Us - Aarmbh IT Solutions</title>
                        <meta
                          name="description"
                          content="Learn more about Aarmbh IT Solutions—our mission, vision, and expertise in IT services, dedicated to driving digital growth for businesses."
                        />
                        <meta
                          name="keywords"
                          content={ALL_KEYWORDS}
                        />
                        <meta
                          property="og:title"
                          content="About Us - Aarmbh IT Solutions"
                        />
                        <meta
                          property="og:description"
                          content="Empowering businesses with cutting-edge IT and digital solutions."
                        />
                        <meta property="og:type" content="website" />
                        <meta
                          property="og:url"
                          content="https://aarmbh15.42web.io/about"
                        />
                        <meta
                          property="og:image"
                          content="https://aarmbh15.42web.io/images/og-about.jpg"
                        />
                        <meta name="robots" content="index, follow" />
                        <link
                          rel="canonical"
                          href="https://aarmbh15.42web.io/about"
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
                        <title>Our Expert Team - Aarmbh IT Solutions</title>
                        <meta
                          name="description"
                          content="Meet Aarmbh's expert team of full-stack developers, IT consultants, and digital specialists who build and manage innovative solutions."
                        />
                        <meta
                          name="keywords"
                          content={ALL_KEYWORDS}
                        />
                        <meta
                          property="og:title"
                          content="Our Team - Aarmbh IT Solutions"
                        />
                        <meta
                          property="og:description"
                          content="Our skilled professionals drive IT innovation and deliver custom software and web solutions."
                        />
                        <meta property="og:type" content="website" />
                        <meta
                          property="og:url"
                          content="https://aarmbh15.42web.io/team"
                        />
                        <meta
                          property="og:image"
                          content="https://aarmbh15.42web.io/images/og-team.jpg"
                        />
                        <meta name="robots" content="index, follow" />
                        <link
                          rel="canonical"
                          href="https://aarmbh15.42web.io/team"
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
                        <title>Dashboard - Aarmbh IT Solutions</title>
                        <meta
                          name="description"
                          content="Securely manage your ongoing IT projects, track development progress, and view analytics with Aarmbh's client dashboard."
                        />
                        <meta
                          name="keywords"
                          content={ALL_KEYWORDS}
                        />
                        <meta
                          property="og:title"
                          content="Dashboard - Aarmbh IT Solutions"
                        />
                        <meta
                          property="og:description"
                          content="Track and manage your IT projects efficiently."
                        />
                        <meta property="og:type" content="website" />
                        <meta
                          property="og:url"
                          content="https://aarmbh15.42web.io/dashboard"
                        />
                        <meta
                          property="og:image"
                          content="https://aarmbh15.42web.io/images/og-dashboard.jpg"
                        />
                        <meta name="robots" content="noindex, nofollow" /> {/* Changed to noindex/nofollow as this is likely a private/client area */}
                        <link
                          rel="canonical"
                          href="https://aarmbh15.42web.io/dashboard"
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
                        <title>IT Services & Solutions - Aarmbh</title>
                        <meta
                          name="description"
                          content="Explore Aarmbh's comprehensive IT services: custom web and mobile app development, cloud solutions, IT consulting, and digital transformation strategy."
                        />
                        <meta
                          name="keywords"
                          content={ALL_KEYWORDS}
                        />
                        <meta
                          property="og:title"
                          content="Services - Aarmbh IT Solutions"
                        />
                        <meta
                          property="og:description"
                          content="Comprehensive IT solutions for modern businesses."
                        />
                        <meta property="og:type" content="website" />
                        <meta
                          property="og:url"
                          content="https://aarmbh15.42web.io/services"
                        />
                        <meta
                          property="og:image"
                          content="https://aarmbh15.42web.io/images/og-services.jpg"
                        />
                        <meta name="robots" content="index, follow" />
                        <link
                          rel="canonical"
                          href="https://aarmbh15.42web.io/services"
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
                        <title>IT & Software Portfolio - Aarmbh Solutions</title>
                        <meta
                          name="description"
                          content="View Aarmbh's portfolio of successful IT projects, including custom software, e-commerce platforms, and advanced mobile applications."
                        />
                        <meta
                          name="keywords"
                          content={ALL_KEYWORDS}
                        />
                        <meta
                          property="og:title"
                          content="Projects - Aarmbh IT Solutions"
                        />
                        <meta
                          property="og:description"
                          content="Showcasing our innovative IT project portfolio."
                        />
                        <meta property="og:type" content="website" />
                        <meta
                          property="og:url"
                          content="https://aarmbh15.42web.io/projects"
                        />
                        <meta
                          property="og:image"
                          content="https://aarmbh15.42web.io/images/og-projects.jpg"
                        />
                        <meta name="robots" content="index, follow" />
                        <link
                          rel="canonical"
                          href="https://aarmbh15.42web.io/projects"
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
                        <title>Contact Aarmbh IT Solutions</title>
                        <meta
                          name="description"
                          content="Contact Aarmbh for IT and software development inquiries, sales, and support. Let's start your next digital project."
                        />
                        <meta
                          name="keywords"
                          content={ALL_KEYWORDS}
                        />
                        <meta
                          property="og:title"
                          content="Contact Us - Aarmbh IT Solutions"
                        />
                        <meta
                          property="og:description"
                          content="Reach out for expert IT and software solutions."
                        />
                        <meta property="og:type" content="website" />
                        <meta
                          property="og:url"
                          content="https://aarmbh15.42web.io/contact"
                        />
                        <meta
                          property="og:image"
                          content="https://aarmbh15.42web.io/images/og-contact.jpg"
                        />
                        <meta name="robots" content="index, follow" />
                        <link
                          rel="canonical"
                          href="https://aarmbh15.42web.io/contact"
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

