/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Force HTTPS for 1 year (Vercel already enforces this; belt-and-suspenders)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // Prevent this site from being embedded in iframes (clickjacking)
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // Stop browsers from MIME-sniffing responses away from declared Content-Type
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Send full path on same-origin, only origin on cross-origin, nothing on downgrade
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Disable browser features this site never uses
  {
    key: 'Permissions-Policy',
    value: [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=()',
      'usb=()',
      'interest-cohort=()',   // opt out of FLoC/Topics API
      'display-capture=()',
      'encrypted-media=()',
      'gyroscope=()',
      'magnetometer=()',
    ].join(', '),
  },
  // Content Security Policy — built to match exactly what this site loads:
  //   Scripts:  Next.js bundles (self) + inline hydration scripts (unsafe-inline)
  //   Styles:   Next.js CSS (self) + inline style attrs (unsafe-inline) + Google Fonts CSS
  //   Fonts:    Google Fonts files (fonts.gstatic.com)
  //   Images:   Local public/ files (self) + SVG cursor data URI (data:)
  //   Connect:  Only same-origin fetch (the /api/og edge route)
  //   Frames:   None — this site neither embeds nor is embedded
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data:",
      "connect-src 'self'",
      "media-src 'none'",
      "object-src 'none'",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
];

const nextConfig = {
  reactStrictMode: true,

  // Explicitly disable browser source maps in production builds.
  // (Next.js already defaults to false; this documents the intent.)
  productionBrowserSourceMaps: false,

  async headers() {
    return [
      {
        // Apply to every route
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
