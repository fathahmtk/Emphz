// emphz_global.js

// 1. Create a single global object to avoid polluting the global scope.
window.emphz = {
  // 2. Product helper for SKU generation and other product-related utilities.
  product: {
    /**
     * Generates a Stock Keeping Unit (SKU) for a product.
     * @param {string} productName - The name of the product.
     * @param {string} categoryName - The name of the product's category.
     * @returns {string} The generated SKU (e.g., "ENC-GRP-3").
     */
    getSKU: function(productName, categoryName) {
      if (!productName || !categoryName) {
        return "INVALID-SKU";
      }
      const catCode = categoryName.slice(0, 3).toUpperCase();
      const prodCode = productName.slice(0, 3).toUpperCase();
      const wordCount = productName.split(' ').length;
      return `${catCode}-${prodCode}-${wordCount}`;
    }
  },

  // 3. Date helper for consistent date formatting.
  date: {
    /**
     * Formats a Date object into a YYYY-MM-DD string.
     * @param {Date} date - The date to format.
     * @returns {string} The formatted date string.
     */
    formatISO: function(date) {
      if (!(date instanceof Date) || isNaN(date)) {
        return "0000-00-00";
      }
      return date.toISOString().split('T')[0];
    }
  },

  // 4. Currency helper for formatting numbers into INR currency strings.
  currency: {
    /**
     * Formats a number as an Indian Rupee (INR) currency string.
     * @param {number} amount - The amount to format.
     * @returns {string} The formatted currency string (e.g., "₹1,23,456.78").
     */
    formatINR: function(amount) {
      if (typeof amount !== 'number') {
        return "₹0.00";
      }
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
      }).format(amount);
    }
  }
};