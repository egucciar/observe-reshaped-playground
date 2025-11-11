/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reshaped requires transpiling and optimization
  transpilePackages: ['reshaped'],
  experimental: {
    optimizePackageImports: ['reshaped'],
  },
  webpack: (config, { isServer }) => {
    // Optimize CSS Module chunking to prevent duplicates
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks?.cacheGroups,
            styles: {
              name: 'styles',
              type: 'css/mini-extract',
              chunks: 'all',
              enforce: true,
            },
          },
        },
      }
    }
    return config
  },
}

module.exports = nextConfig
