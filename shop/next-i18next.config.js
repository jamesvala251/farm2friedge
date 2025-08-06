const invariant = require('tiny-invariant');
const path = require('path');

// For Demo - Keep English Only
const DEFAULT_LANGUAGE = 'en';

module.exports = {
  i18n: {
    defaultLocale: DEFAULT_LANGUAGE,
    locales: [DEFAULT_LANGUAGE], // Only English
    localeDetection: false, // Disable automatic locale detection
  },
  react: { useSuspense: false },
  localePath: path.resolve('./public/locales'),
  // Disable reload on prerender for better performance
  reloadOnPrerender: false,
  // Add interpolation configuration
  interpolation: {
    escapeValue: false,
  },
  // Optimize loading - only load English
  load: 'languageOnly',
  // Cache translations
  cache: {
    enabled: true,
    expirationTime: 60 * 60 * 1000, // 1 hour
  },
  // Disable unnecessary features for demo
  debug: false,
  saveMissing: false,
  missingKeyHandler: false,
};
