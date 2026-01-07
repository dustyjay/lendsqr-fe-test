export const STORAGE_KEYS = {
  TOKEN: 'auth-token'
};

export const ROUTE_KEYS = {
  LOGIN: '/login',
  HOME: '/',
  USERS_LIST: '/users',
  USER_DETAILS: '/users/:id'
};

export const formatCurrency = (value: string | number, currency = 'NGN') => {
  return new Intl.NumberFormat(currency.toUpperCase() === 'NGN' ? 'en-NG' : 'en-US', {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol'
  }).format(+value);
};

export const formatDate = (value: number | string) => {
  try {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true // Use AM/PM format
    }).format(new Date(value));
  } catch (error) {
    console.log(error);
  }
};

export const getDateDiff = (fromDate: string | number, toDate = new Date()) => {
  const date1 = new Date(fromDate); // January 1, 2025
  const date2 = new Date(toDate); // January 10, 2025

  // Calculate the difference in milliseconds
  const timeDiff = date2.getTime() - date1.getTime(); // You can also directly subtract date2 - date1

  // Define milliseconds per day (1000 * 60 * 60 * 24)
  const oneDayInMs = 1000 * 60 * 60 * 24;

  // Convert the millisecond difference to days and round to the nearest whole number
  const daysDiff = Math.round(timeDiff / oneDayInMs);

  if (daysDiff >= 365) {
    return `${Math.floor(daysDiff / 365)} years`;
  }

  if (daysDiff >= 30) {
    return `${Math.floor(daysDiff / 30)} months`;
  }

  return `${Math.floor(daysDiff)} days`;
};

export const isEmailValid = (email: string) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  return emailRegex.test(email);
};
