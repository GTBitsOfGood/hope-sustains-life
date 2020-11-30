/**
 * Compute n mod m for negative number.
 * Javascript returns negative number for n % m so cannot use the modulo operator directly
 * @param {Number} n
 * @param {Number} m
 * @returns {Number} n % m
 */
export function mod(n, m) {
  return ((n % m) + m) % m;
}
