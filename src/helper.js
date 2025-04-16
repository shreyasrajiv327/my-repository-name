// helper.js

// Dummy utility to check if a number is even
export function isEven(num) {
  return num % 2 === 0;
}

// Dummy utility to generate a random number between min and max
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Dummy utility to capitalize the first letter of a string
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Dummy utility to delay execution (simulating async behavior)
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Dummy logger
export function logMessage(message) {
  console.log(`[Helper Log]: ${message}`);
}
