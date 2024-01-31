/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        swcPlugins: [['next-superjson-plugin', {}]],
    },
};

module.exports = nextConfig;

// '',
//             'avatars.githubusercontent.com',
//             'lh3.googleusercontent.com',
