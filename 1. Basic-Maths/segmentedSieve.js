function sieveSegmented(n) {
  const segmentSize = Math.floor(Math.sqrt(n)); // Segment size is chosen as square root of the upper limit

  const primes = []; // Array to store the prime numbers

  // Helper function for the sieve of Eratosthenes
  function sieveEratosthenes(limit) {
    const sieve = new Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false;

    for (let i = 2; i <= Math.sqrt(limit); i++) {
      if (sieve[i]) {
        for (let j = i * i; j <= limit; j += i) {
          sieve[j] = false;
        }
      }
    }

    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (sieve[i]) {
        primes.push(i);
      }
    }

    return primes;
  }

  // Step 1: Generate primes up to square root of n
  const sqrtPrimes = sieveEratosthenes(Math.floor(Math.sqrt(n)));

  // Step 3-6: Iterate over segments
  for (let low = 0; low < n; low += segmentSize) {
    const high = Math.min(low + segmentSize, n);

    // Create and initialize the sieve for the current segment
    const sieve = new Array(high - low + 1).fill(true);

    // Sieve the primes in the current segment
    for (const prime of sqrtPrimes) {
      // Find the start index for sieving multiples of prime in the current segment
      const start = Math.ceil(low / prime) * prime;

      // Sieve the multiples of prime within the current segment
      for (let i = start; i <= high; i += prime) {
        sieve[i - low] = false;
      }
    }

    // Add the remaining primes in the current segment to the array
    for (let i = low; i <= high; i++) {
      if (sieve[i - low] && i > 1) {
        primes.push(i);
      }
    }
  }

  return primes;
}

// Example usage:
const limit = 1000;
const primes = sieveSegmented(limit);
console.log(primes);
