/**
 * Notific Loader Helper
 * Ensures Notific is properly loaded and provides helper functions
 */

/**
 * Initialize Notific if available
 */
export function initNotific() {
  if (typeof window !== 'undefined' && window.Notific && window.Notific.Loading) {
    // Initialize Notific Loading module if needed
    if (!window.Notific.Loading.Init) {
      // Already initialized or doesn't need initialization
      return true;
    }
    try {
      window.Notific.Loading.Init({});
      return true;
    } catch (error) {
      console.warn('Failed to initialize Notific:', error);
      return false;
    }
  }
  return false;
}

/**
 * Show loading indicator
 * @param {string} message - Loading message
 */
export function showLoader(message = 'Loading...') {
  if (typeof window !== 'undefined' && window.Notific && window.Notific.Loading) {
    try {
      window.Notific.Loading.Dots(message);
    } catch (error) {
      console.warn('Failed to show loader:', error);
    }
  }
}

/**
 * Hide loading indicator
 * @param {number} delay - Delay in milliseconds before hiding
 */
export function hideLoader(delay = 0) {
  if (typeof window !== 'undefined' && window.Notific && window.Notific.Loading) {
    try {
      window.Notific.Loading.Remove(delay);
    } catch (error) {
      console.warn('Failed to hide loader:', error);
    }
  }
}

/**
 * Check if Notific is available
 * @returns {boolean}
 */
export function isNotificAvailable() {
  return typeof window !== 'undefined' && window.Notific && window.Notific.Loading;
}
