

export const formatDateTime = (date: Date): string =>
    new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
}).format(date);

export const formatMonth = (date: Date): string =>
    new Intl.DateTimeFormat('en-US', {
    month: 'long',
}).format(date);

export const formatCurrency = (number: number): string => 
    new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  }).format(number);

  export const formatNumber = (number: number): string  => 
    new Intl.NumberFormat('en-US', {
  }).format(number);
