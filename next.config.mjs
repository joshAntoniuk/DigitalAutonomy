/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com']
  },
  font: {
    enable: true,
    formats: ['woff', 'woff2', 'eot', 'ttf', 'otf'],
    display: 'swap',
    domains: [],
    path: '/fonts/'
  }
};

export default nextConfig;
