/**
 * a%n = [0...n-1]
 *
 * sometimes in questions it is mentioned that print ur ans llike
 * ans%10^9 + 7
 * to calculate a^b , we  write a for loop for(b times) so complexity becomes O(b)
 *
 * now to reduce the complexity:
 * a^b = (a^(b/2))^2 - if b is even
 * a^b = (a^(b/2))^2 * a - if b is odd
 *
 * ques: calculate (x^n)%m
 */

const modularExponential = (x, n, m) => {
  let res = 1;

  while (n > 0) {
    if (n & 1) {
      //odd
      res = ((res % m) * (x % m)) % m;
    }
    x = ((x % m) * (x % m)) % m;
    n = n >> 1; // b/2 can be writte like b>>2 cos it is less expensive, right shift karo one se toh divide by 2 hota hai
  }
  return res;
};
/**
 * Modular exponentiation is the process of efficiently computing the value of (x^n) % m,
 * where x is the base, n is the exponent, and m is the modulus.
 *
 * 1. The modularExponential function takes three parameters: x (base), n (exponent),
 *    and m (modulus). It returns the value of (x^n) % m.
 * 2. The res variable is initialized to 1. It will store the result of the modular
 *    exponentiation.
 * 3. The code enters a while loop that continues as long as n is greater than 0.
 * 4. Inside the loop, it checks if n is odd using the bitwise AND operator (&).
 *    If n is odd, it means the current bit of the binary representation of n is set to 1.
 *     In that case, it performs an intermediate modular multiplication to update the result.
 * 5. The intermediate modular multiplication is performed using the expression
 *    ((res % m) * (x % m)) % m. Taking the modulo at each step helps keep the intermediate
 *    values within a manageable range.
 * 6. After the intermediate multiplication, x is updated by squaring it modulo m. 
 *    This step corresponds to advancing to the next bit of the binary representation of n.
 * 7. The exponent n is halved by performing a right shift operation (n = n >> 1). 
 *    This operation effectively divides n by 2 since it discards the least significant bit.
 * 8. Once the loop ends, the final result is stored in res, which represents (x^n) % m, 
 *    and it is returned.

The code uses a technique called binary exponentiation to calculate modular exponentiation 
efficiently. By iteratively squaring x and halving n, it avoids the need to perform a full 
exponentiation from scratch.

This algorithm significantly reduces the number of multiplications needed and improves the
efficiency of computing (x^n) % m for large values of n.
 */
