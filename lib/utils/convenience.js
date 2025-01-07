export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isEnglishOnly(str) {
  return /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/.test(str);
}

export function firstUpperCase(str = "") {
  return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
}
