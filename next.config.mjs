/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        swcMinify: true
    },
    images:{
        domains: ['aceternity.com','images.unsplash.com']
    }
};

export default nextConfig;
