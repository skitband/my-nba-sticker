/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        siteTitle: 'NBA Stickers',
        siteDescription: 'NBA Stickers For Sale.',
        siteKeywords: 'your company keywords',
        siteUrl: 'https://doggystickers.xyz',
        siteImagePreviewUrl: '/images/main.jpg',
        twitterHandle: '@your_handle'
    },
    images: {
        domains: ['cdn.shopify.com'],
      },
};

export default nextConfig;
