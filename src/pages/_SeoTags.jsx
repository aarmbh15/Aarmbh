import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Global Constants (Set these once for your site)
 * IMPORTANT: Replace 'Your Site Domain' and 'Default Title' with your actual information.
 */
const SITE_URL = 'https://your-live-domain.com'; // e.g., 'https://aarmbh15.42web.io'
const SITE_NAME = 'Aarmbh InfoTech';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/default-og-image.jpg`; // Use a 1200x630 image

/**
 * A centralized component to handle all SEO meta tags using React Helmet Async.
 *
 * @param {object} props
 * @param {string} props.title - The specific title for the page (e.g., "Web Development Services").
 * @param {string} props.description - The meta description for the page (MAX 155 chars).
 * @param {string} props.path - The relative path of the page (e.g., "/services").
 * @param {string} [props.keywords] - Optional, comma-separated keywords string.
 * @param {string} [props.ogImage] - Optional, specific OG image URL for the page.
 */
function SeoTags({ title, description, path, keywords, ogImage }) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* Primary SEO Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || 'IT services, web development, software solutions'} />

      {/* Canonical URL - Crucial for SEO, tells Google the "main" URL for this content */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots - Tells crawlers what to do. Ensure index, follow are set. */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph (OG) - For social sharing and previews */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage || DEFAULT_OG_IMAGE} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${SITE_NAME}`} /> {/* If you have a Twitter handle */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || DEFAULT_OG_IMAGE} />

      {/* Optional: Language setting */}
      <html lang="en" />
    </Helmet>
  );
}

export default SeoTags;
