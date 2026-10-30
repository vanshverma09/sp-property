/**
 * Utility functions for Indian real estate numbering and formatting
 */

export const formatIndianCurrency = (amount) => {
  if (!amount && amount !== 0) return 'Price on Request';
  if (amount >= 10000000) {
    const cr = (amount / 10000000).toFixed(2).replace(/\.00$/, '');
    return `₹${cr} Cr`;
  }
  if (amount >= 100000) {
    const lk = (amount / 100000).toFixed(2).replace(/\.00$/, '');
    return `₹${lk} Lakh`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatArea = (sqYards, unit = 'Sq. Yd.') => {
  if (!sqYards) return '';
  return `${sqYards} ${unit}`;
};
