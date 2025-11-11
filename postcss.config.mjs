import { config } from 'reshaped/config/postcss'

// Merge Reshaped's PostCSS config with our custom plugins
export default {
  plugins: {
    ...config.plugins,
    'postcss-nesting': {},
    '@tailwindcss/postcss': {},
  },
}
