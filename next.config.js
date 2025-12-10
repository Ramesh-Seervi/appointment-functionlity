// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line
  images: {
    unoptimized: true, // Also add this
  },
}

module.exports = nextConfig