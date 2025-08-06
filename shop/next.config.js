/** @type {import('next').NextConfig} */

// const runtimeCaching = require('next-pwa/cache');
// const withPWA = require('next-pwa')({
//   disable: process.env.NODE_ENV === 'development',
//   dest: 'public',
//   runtimeCaching,
// });

module.exports = {
  reactStrictMode: true,
  // REMOVED i18n completely
  // Suppress React warnings in development
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Suppress console warnings in development
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Optimize images
  images: {
    domains: [
      'pickbazarlaravel.s3.ap-southeast-1.amazonaws.com',
      'pixarlaravel.s3.ap-southeast-1.amazonaws.com',
      'lh3.googleusercontent.com',
      'localhost',
      '127.0.0.1',
      'i.pravatar.cc',
      'images.unsplash.com',
    ],
    // Optimize image loading
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Optimize webpack
  webpack: (config, { dev, isServer }) => {
    // Optimize for development
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    
    // Add GraphQL support if needed
    if (process.env.FRAMEWORK_PROVIDER === 'graphql') {
      config.module.rules.push({
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [config.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
      });

      config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader',
      });
    }

    return config;
  },
  // Production optimizations
  ...(process.env.APPLICATION_MODE === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    // Enable compression
    compress: true,
    // Optimize bundle
    swcMinify: true,
  }),
};
