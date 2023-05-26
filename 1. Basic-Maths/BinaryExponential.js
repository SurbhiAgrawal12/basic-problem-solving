/**
 * Binary exponentiation, also known as exponentiation by squaring, 
 * is a technique used to compute the power of a number efficiently. 
 * It is particularly useful when dealing with large exponents.

The binary exponentiation algorithm works by breaking down the exponent into its binary 
representation. It leverages the properties of exponentiation to compute the result iteratively,
avoiding unnecessary multiplication operations.

Here's how the binary exponentiation algorithm works:

1. Start with the base x and the exponent n.
2. Initialize a result variable, res, to 1.
3. Convert the exponent n to its binary representation.
4. Iterate through the bits of the binary representation, starting from the most significant bit
(leftmost bit) to the least significant bit (rightmost bit).

For each bit:
    1. If the bit is 1, multiply res by the current value of x.
        Square x (i.e., x = x * x).
    2. After iterating through all the bits of the exponent, the final value of res is the 
       result of x raised to the power of n.
    3. By using the binary representation of the exponent, the algorithm reduces the number of
       multiplications required. Instead of multiplying x by itself n times, it squares x 
       iteratively and multiplies it by res only when the corresponding bit in the binary 
       representation of n is 1.

The binary exponentiation algorithm has a time complexity of O(log n), where n is the exponent. This makes it much more efficient than the naive approach of performing n multiplications.
This algorithm is widely used in various applications, including modular exponentiation, calculating Fibonacci numbers, and solving certain mathematical problems efficiently.
 */

/*
 We'll calculate the value of (2^13) % 7 using binary exponentiation.

Start with the base x = 2 and the exponent n = 13.

Initialize the result variable res to 1.

Convert the exponent n = 13 to binary, which is 1101.

Iterate through the bits of the binary representation of n, from left to right.

For the leftmost bit (the most significant bit), which is 1:

Multiply res by the current value of x (res = 1 * 2 = 2).
Square x (x = 2 * 2 = 4).
For the next bit (0):

Skip the multiplication since the bit is 0.
Square x (x = 4 * 4 = 16).
For the next bit (1):

Multiply res by the current value of x (res = 2 * 16 = 32).
Square x (x = 16 * 16 = 256).
For the last bit (1):

Multiply res by the current value of x (res = 32 * 256 = 8192).
Square x (x = 256 * 256 = 65536).
After iterating through all the bits of the exponent, the final value of res is 8192. This represents (2^13) % 7.

To find the result modulo 7, we perform the final modulo operation: 8192 % 7, which gives us the result 3.

Therefore, (2^13) % 7 = 3.

By using the binary exponentiation algorithm, we can efficiently compute the result (2^13) % 7 by performing fewer multiplications compared to the naive approach of directly multiplying 2 by itself 13 times.
*/
