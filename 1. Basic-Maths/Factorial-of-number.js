/**
 * find factorial of 212, (212!)%m, where m = 10^9+7
 * 
 * Factorial is a mathematical function that represents the product of all positive integers 
 * from 1 to a given number. It is denoted by the symbol "!". For a positive integer "n", the
 * factorial of "n" is calculated as follows:

    n! = n * (n-1) * (n-2) * ... * 3 * 2 * 1

    For example, the factorial of 5 (written as 5!) is:
    5! = 5 * 4 * 3 * 2 * 1 = 120

    The expression (212!) % m means calculating the remainder when the factorial of 212 is 
    divided by the number "m". In other words, it represents the modulo operation applied to 
    the factorial of 212.

    The modulo operation calculates the remainder of a division. In this case, (212!) % m 
    finds the remainder when the factorial of 212 is divided by "m", which is equal to 10^9 + 7.
    
    The modulo operation allows us to focus on the remainder rather than the exact value, 
    which can simplify computations and make them more tractable.

    For example, if the result of (212!) % m is required for further calculations or comparisons,
    working with the remainder modulo "m" might be more practical than dealing with the entire 
    factorial value directly.

    the purpose of taking the modulo in this context is not to manage the size of the result, 
    but rather to obtain a more manageable representation of the factorial.

    The primary reason for using modulo in (212!) % m is related to the properties of modular 
    arithmetic. By taking the modulo of a large factorial, we can obtain a result that is 
    congruent to the actual value but within a smaller range.
 */
const m = BigInt(1e9 + 7); // Convert m to BigInt for accurate modulo calculation

function factorialMod(n, mod) {
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) {
    result = (result * BigInt(i)) % mod;
  }
  return result;
}

const n = BigInt(212);
const factorialModM = factorialMod(n, m);
console.log(factorialModM.toString());

/**
 * In this code, the factorialMod function calculates the factorial modulo mod using a loop.
 * It starts from 2 and multiplies the current result with each number up to n, taking 
 * the modulo mod at each step to prevent the result from growing too large.

    By using BigInt, which allows working with arbitrary-precision integers, 
    the code can handle the large numbers involved in the calculation.

    When you run the code, it will output the value of (212!) % m as a string.
    Please note that the output may be a very large number, so printing it as a string is 
    necessary to preserve the accuracy.
 */
/**
 * In JavaScript, 1e9 is a shorthand notation for the number 1 followed by 9 zeros, which represents 1 billion.

The letter 'e' in 1e9 stands for exponentiation, and it indicates that the number should be multiplied by 10 raised to the power of the exponent that follows it. In this case, 1e9 is equivalent to 1 * 10^9, which results in 1 billion.

Here are a few examples to illustrate the usage of 1e9 in JavaScript:
console.log(1e9); // Output: 1000000000

const billion = 1e9;
console.log(billion); // Output: 1000000000

console.log(2.5e6); // Output: 2500000 (2.5 * 10^6)

console.log(4e-3); // Output: 0.004 (4 * 10^-3)
As shown in the examples, 1e9 can be used as a convenient way to express very large or very small numbers in JavaScript.
 */
