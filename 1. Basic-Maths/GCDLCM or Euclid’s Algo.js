/**
 * Euclid's algorithm is a method for finding the greatest common divisor (GCD) of two
 * positive integers. It is named after the ancient Greek mathematician Euclid.
 *
 * The algorithm works based on the observation that if you subtract the smaller number
 * from the larger number repeatedly, the GCD remains the same.
 *
 * gcd(a, b) =>  gcd(a-b, b) => gcd(a%b, b)
 * this formula is proved using mathematical induction
 *
 * lcm(a,b)*gcd(a,b) = a*b
 */
const GCD = (a, b) => {
  if (a == 0) {
    return b;
  }
  if (b == 0) {
    return a;
  }
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
    return a;
  }
};
function gcd(a, b) {
  while (b !== 0) {
    const r = a % b;
    a = b;
    b = r;
  }
  return a;
}

// Example usage:
const num1 = 48;
const num2 = 36;

const result = gcd(num1, num2);
console.log("GCD:", result);
