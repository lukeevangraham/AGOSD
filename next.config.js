/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com"],
  },
  swcMinify: true,
  env: {
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
    NEXT_PUBLIC_APP_SECRET: process.env.NEXT_PUBLIC_APP_SECRET,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/news-and-events/ago-chapter-events.html",
        destination: "/events",
        permanent: true,
      },
      {
        source: "/news-and-events/community-sponsored-events.html",
        destination: "/events",
        permanent: true,
      },
      {
        source: "/jobs/job-listings.html",
        destination: "/jobs",
        permanent: true,
      },
      {
        source: "/about-us/our-board.html",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
