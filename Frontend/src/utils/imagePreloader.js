/**
 * Global Image Preloader Utility
 * Tracks and preloads all critical images across the application
 */

class ImagePreloader {
  constructor() {
    this.loadedImages = new Set();
    this.failedImages = new Set();
    this.loadingPromises = new Map();
    this.onLoadCallbacks = [];
    this.onProgressCallbacks = [];
  }

  /**
   * Preload a single image
   * @param {string} src - Image source URL
   * @returns {Promise<boolean>} - Resolves to true if loaded, false if failed
   */
  preloadImage(src) {
    // Return existing promise if already loading
    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src);
    }

    // Return immediately if already loaded
    if (this.loadedImages.has(src)) {
      return Promise.resolve(true);
    }

    // Return immediately if previously failed
    if (this.failedImages.has(src)) {
      return Promise.resolve(false);
    }

    // Create new loading promise
    const promise = new Promise((resolve) => {
      const img = new Image();
      
      img.onload = () => {
        this.loadedImages.add(src);
        this.loadingPromises.delete(src);
        this.notifyProgress();
        resolve(true);
      };

      img.onerror = () => {
        this.failedImages.add(src);
        this.loadingPromises.delete(src);
        this.notifyProgress();
        resolve(false);
      };

      // Start loading
      img.src = src;
    });

    this.loadingPromises.set(src, promise);
    return promise;
  }

  /**
   * Preload multiple images
   * @param {string[]} sources - Array of image source URLs
   * @returns {Promise<{loaded: number, failed: number, total: number}>}
   */
  async preloadImages(sources) {
    const uniqueSources = [...new Set(sources)];
    const promises = uniqueSources.map(src => this.preloadImage(src));
    
    const results = await Promise.allSettled(promises);
    
    const loaded = results.filter(r => r.status === 'fulfilled' && r.value === true).length;
    const failed = results.filter(r => r.status === 'fulfilled' && r.value === false).length;
    
    return {
      loaded,
      failed,
      total: uniqueSources.length
    };
  }

  /**
   * Check if an image is loaded
   * @param {string} src - Image source URL
   * @returns {boolean}
   */
  isLoaded(src) {
    return this.loadedImages.has(src);
  }

  /**
   * Register callback for when all images are loaded
   * @param {Function} callback
   */
  onLoad(callback) {
    this.onLoadCallbacks.push(callback);
  }

  /**
   * Register callback for loading progress
   * @param {Function} callback - Called with {loaded, total, percentage}
   */
  onProgress(callback) {
    this.onProgressCallbacks.push(callback);
  }

  /**
   * Notify progress callbacks
   */
  notifyProgress() {
    const total = this.loadedImages.size + this.failedImages.size + this.loadingPromises.size;
    const loaded = this.loadedImages.size;
    const percentage = total > 0 ? (loaded / total) * 100 : 0;

    this.onProgressCallbacks.forEach(callback => {
      try {
        callback({ loaded, total, percentage });
      } catch (error) {
        console.error('Error in progress callback:', error);
      }
    });
  }

  /**
   * Reset preloader state
   */
  reset() {
    this.loadedImages.clear();
    this.failedImages.clear();
    this.loadingPromises.clear();
  }
}

// Create singleton instance
const imagePreloader = new ImagePreloader();

export default imagePreloader;
