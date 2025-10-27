import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner'; // Assume a simple spinner component

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const Team = lazy(() => import('./pages/Team'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route
              path="/"
              element={
                <Home>
                  <title>Home - Aarmbh IT Solutions</title>
                  <meta name="description" content="Aarmbh IT Solutions offers innovative web and software development services." />
                  <meta name="keywords" content="IT services, web development, software development, app development, Aarmbh" />
                  <meta property="og:title" content="Home - Aarmbh IT Solutions" />
                  <meta property="og:description" content="Discover cutting-edge IT solutions for your business." />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://aarmbh15.42web.io/" />
                  <meta property="og:image" content="https://aarmbh15.42web.io/images/og-home.jpg" />
                  <meta name="robots" content="index, follow" />
                  <link rel="canonical" href="https://aarmbh15.42web.io/" />
                </Home>
              }
            />
            <Route
              path="/team"
              element={
                <Team>
                  <title>Our Team - Aarmbh IT Solutions</title>
                  <meta name="description" content="Meet Aarmbh's expert team in web and software development." />
                  <meta name="keywords" content="IT team, software developers, web developers, Aarmbh team" />
                  <meta property="og:title" content="Our Team - Aarmbh IT Solutions" />
                  <meta property="og:description" content="Our skilled professionals drive IT innovation." />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://aarmbh15.42web.io/team" />
                  <meta property="og:image" content="https://aarmbh15.42web.io/images/og-team.jpg" />
                  <meta name="robots" content="index, follow" />
                  <link rel="canonical" href="https://aarmbh15.42web.io/team" />
                </Team>
              }
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard>
                  <title>Dashboard - Aarmbh IT Solutions</title>
                  <meta name="description" content="Manage your IT projects with Aarmbh's dashboard." />
                  <meta name="keywords" content="IT dashboard, project management, software analytics, Aarmbh" />
                  <meta property="og:title" content="Dashboard - Aarmbh IT Solutions" />
                  <meta property="og:description" content="Track and manage your IT projects efficiently." />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://aarmbh15.42web.io/dashboard" />
                  <meta property="og:image" content="https://aarmbh15.42web.io/images/og-dashboard.jpg" />
                  <meta name="robots" content="index, follow" />
                  <link rel="canonical" href="https://aarmbh15.42web.io/dashboard" />
                </Dashboard>
              }
            />
            <Route
              path="/services"
              element={
                <Services>
                  <title>Services - Aarmbh IT Solutions</title>
                  <meta name="description" content="Explore Aarmbh's IT services: web, app, and software development." />
                  <meta name="keywords" content="IT services, web development, app development, software solutions, Aarmbh" />
                  <meta property="og:title" content="Services - Aarmbh IT Solutions" />
                  <meta property="og:description" content="Comprehensive IT solutions for modern businesses." />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://aarmbh15.42web.io/services" />
                  <meta property="og:image" content="https://aarmbh15.42web.io/images/og-services.jpg" />
                  <meta name="robots" content="index, follow" />
                  <link rel="canonical" href="https://aarmbh15.42web.io/services" />
                </Services>
              }
            />
            <Route
              path="/projects"
              element={
                <Projects>
                  <title>Projects - Aarmbh IT Solutions</title>
                  <meta name="description" content="View Aarmbh's portfolio of IT and software projects." />
                  <meta name="keywords" content="IT projects, software portfolio, web development projects, Aarmbh" />
                  <meta property="og:title" content="Projects - Aarmbh IT Solutions" />
                  <meta property="og:description" content="Showcasing our innovative IT project portfolio." />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://aarmbh15.42web.io/projects" />
                  <meta property="og:image" content="https://aarmbh15.42web.io/images/og-projects.jpg" />
                  <meta name="robots" content="index, follow" />
                  <link rel="canonical" href="https://aarmbh15.42web.io/projects" />
                </Projects>
              }
            />
            <Route
              path="/contact"
              element={
                <Contact>
                  <title>Contact Us - Aarmbh IT Solutions</title>
                  <meta name="description" content="Contact Aarmbh for IT and software development inquiries." />
                  <meta name="keywords" content="contact IT services, software support, web development inquiries, Aarmbh" />
                  <meta property="og:title" content="Contact Us - Aarmbh IT Solutions" />
                  <meta property="og:description" content="Reach out for expert IT and software solutions." />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://aarmbh15.42web.io/contact" />
                  <meta property="og:image" content="https://aarmbh15.42web.io/images/og-contact.jpg" />
                  <meta name="robots" content="index, follow" />
                  <link rel="canonical" href="https://aarmbh15.42web.io/contact" />
                </Contact>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;