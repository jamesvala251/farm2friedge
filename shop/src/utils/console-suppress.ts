// Console warning suppression for development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    // Suppress fetchPriority warning
    if (args[0] && typeof args[0] === 'string' && args[0].includes('fetchPriority')) {
      return;
    }
    // Suppress react-i18next warning
    if (args[0] && typeof args[0] === 'string' && args[0].includes('react-i18next')) {
      return;
    }
    // Suppress Fast Refresh warning
    if (args[0] && typeof args[0] === 'string' && args[0].includes('Fast Refresh')) {
      return;
    }
    originalWarn.apply(console, args);
  };
} 