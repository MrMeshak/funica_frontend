/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ikea.com',
        pathname: '/au/en/images/products/**'
      }
    ]
  }
};

module.exports = nextConfig;
