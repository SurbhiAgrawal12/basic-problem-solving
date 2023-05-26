const countPrime = (n) => {
  let count = 0;
  //Create a boolean array "prime[0..n]" and initialize all entries it as true.
  let primes = new Array(n + 1).fill(true);
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i < n; i++) {
    if (primes[i]) {
      count++;
    }
    // Update all multiples of i
    //we can initialize j with i*i as well
    for (let j = i * 2; j <= n; j += i) {
      primes[j] = false;
    }
  }
  return count;
};
TC = O(n * log(log(n)));
/**
 * complexity explanation:
 * 1. when n = 2, we have marked all the multiples of 2 as non-primes, so elements left = n/2
 * 2. when n = 3, we have marked all the multiples of 3 as non-primes, so elements left = n/3
 * 3. when n = 5, we have marked all the multiples of 5 as non-primes, so elements left = n/5
 * 4. when n = 7, we have marked all the multiples of 7 as non-primes, so elements left = n/7
 * 5. when n = 11, we have marked all the multiples of 11 as non-primes, so elements left = n/11
 *
 * total iterations = (n/2 + n/3 +  n/5 + n/7 + n/11 ........ ) = n(1/2+1/3+1/5+1/7+1/11....)
 * it seems to be a harmonic progression of prime numbers
 * HP = log(logn)
 *
 * TC = O(n*log(logn))
 * 
 * A harmonic progression, also known as a harmonic sequence, is a sequence of numbers in which the reciprocal of each term is in arithmetic progression. In other words, a sequence of numbers is considered a harmonic progression if the reciprocals of the terms form an arithmetic progression.

The general form of a harmonic progression is:

1/a, 1/(a + d), 1/(a + 2d), 1/(a + 3d), ...

In this sequence, "a" represents the first term, and "d" represents the common difference between consecutive terms in the reciprocal sequence.

For example, a harmonic progression with a first term of 1 and a common difference of 1/2 would look like:

1, 1/2, 1/4, 1/6, 1/8, ...

Here, each term is the reciprocal of an arithmetic progression with a first term of 1 and a common difference of 1/2.

Harmonic progressions have applications in various areas of mathematics and physics, particularly in areas involving oscillations, waves, and resonance. They are also used in music theory and signal processing.
 */
