<<<<<<< Updated upstream
import { Routes, Route } from 'react-router-dom';
=======
import React, { lazy, Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
>>>>>>> Stashed changes
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider


// Lazy  load pages for code splitting (performance: reduces initial bundle size)


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

// Memoize static components to prevent unnecessary re-renders
const MemoizedNavigation = memo(Navigation);
const MemoizedFooter = memo(Footer);

// Inline Loading Spinner (fallback for Suspense)
function InlineLoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <i className="fas fa-spinner fa-spin text-4xl text-amber-500"></i>
      <span className="ml-4 text-lg text-gray-600">Loading...</span>
    </div>
  );
}

// Inline Simple NotFound Component (avoids file import error)
function InlineNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="bg-amber-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
        Go Back Home
      </a>
    </div>
  );
}

// Global SEO Defaults (site-wide, can be overridden in individual pages)
function GlobalSEO() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" /> {/* Customize for your brand */}
      <meta name="description" content="Aarambh - Professional freelance development team delivering high-quality web solutions worldwide." />
      <meta name="keywords" content="freelance development, web development, software solutions, Aarambh, projects, services" />
      <meta name="author" content="Aarambh Team" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Defaults for Social Sharing */}
      <meta property="og:site_name" content="Aarambh" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Defaults */}
      <meta name="twitter:creator" content="@aarmbh" /> {/* Replace with your Twitter handle if any */}
      
      {/* Performance Hints: Preconnect/Preload for external resources (e.g., fonts, icons) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />
      
      {/* DNS Prefetch for external links (e.g., from Footer: LinkedIn, GitHub) */}
      <link rel="dns-prefetch" href="https://www.linkedin.com" />
      <link rel="dns-prefetch" href="https://github.com" />
      <link rel="dns-prefetch" href="https://mail.google.com" />
      
      {/* Structured Data (JSON-LD) for Rich SEO Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Aarambh",
          "url": "https://www.youraarambhdomain.com", // REPLACE WITH YOUR ACTUAL DOMAIN
          "logo": "https://www.youraarambhdomain.com/path-to-AarambhLogo.png", // REPLACE WITH LOGO URL
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "aarmbh15@gmail.com",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.linkedin.com/company/aarmbh/",
            "https://github.com/aarmbh15"
          ]
        })}
      </script>
    </Helmet>
  );
}

// Dynamic SEO per Route (updates title, description, canonical based on pathname)
function DynamicSEO() {
  const location = useLocation();
  
  // SEO data per route (extend or modify as needed, including 404)
  
  const seoData = {
    '/': { title: 'Aarambh Sight - Home', description: 'Welcome to Aarambh, your professional freelance development team.' },
    '/about': { title: 'About Us - Aarambh', description: 'Learn more about our freelance development expertise.' },
    '/team': { title: 'Our Team - Aarambh', description: 'Meet the expert developers at Aarambh.' },
    '/dashboard': { title: 'Dashboard - Aarambh', description: 'Client dashboard for project tracking.' },
    '/services': { title: 'Services - Aarambh', description: 'High-quality web and software development services.' },
    '/projects': { title: 'Projects - Aarambh', description: 'Explore our portfolio of successful projects.' },
    '/contact': { title: 'Contact Us - Aarambh', description: 'Get in touch to start your project today.' },
    'notfound': { title: '404 - Page Not Found - Aarambh', description: 'The page you are looking for does not exist.' }, // For 404
    default: { title: 'Aarambh', description: 'Professional web solutions worldwide.' }
  };
  
  const pathKey = location.pathname.toLowerCase();
  const currentSEO = seoData[pathKey] || seoData.default;
  
  return (
    <Helmet>
      <title>{currentSEO.title}</title>
      <meta name="description" content={currentSEO.description} />
      <link rel="canonical" href={`https://www.youraarambhdomain.com${location.pathname}`} /> {/* REPLACE DOMAIN */}
      
      {/* Dynamic OG Tags */}
      <meta property="og:title" content={currentSEO.title} />
      <meta property="og:description" content={currentSEO.description} />
      <meta property="og:url" content={`https://www.youraarambhdomain.com${location.pathname}`} />
      
      {/* Dynamic Twitter Tags */}
      <meta name="twitter:title" content={currentSEO.title} />
      <meta name="twitter:description" content={currentSEO.description} />
    </Helmet>
  );
}

// Inner Layout (includes SEO, Navigation, Content, Footer)
function Layout() {
  return (
    <>
      <GlobalSEO />
      <DynamicSEO />
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <MemoizedNavigation />
        <main className="flex-grow">
          <Suspense fallback={<InlineLoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<InlineNotFound />} /> {/* Use inline 404 */}
            </Routes>
          </Suspense>
        </main>
        <MemoizedFooter />
      </div>
    </>
  );
}

// Main App Component (wrapped with HelmetProvider)
function App() {
  return (
<<<<<<< Updated upstream
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
=======
    <HelmetProvider>
      <Router>
        <Layout />
      </Router>
    </HelmetProvider>
  );
}

export default App;


>>>>>>> Stashed changes
