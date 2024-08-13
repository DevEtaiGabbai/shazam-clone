/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [],
        remotePatterns: [
            { hostname: '*.mzstatic.com' },
        ],
    }
};

export default nextConfig;