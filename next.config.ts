/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// Use the EXACT SAME spelling everywhere:
const basePath = '/appointment-functionality'; // Correct spelling

const nextConfig = {
  // Remove experimental.appDir - it's deprecated
  
  // Production settings
  ...(isProd && {
    output: 'export',
    basePath: basePath,
    trailingSlash: true,
  }),
  
  images: {
    unoptimized: isProd,
  },
  
  // Optional: Add compiler for better performance
  compiler: {
    removeConsole: isProd,
  },
}

module.exports = nextConfig;