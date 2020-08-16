// Consider all words of length N, containing only of letters "a", "b", and/or "c", that do not contain two identical neighbouring letters.
// For example "aba" is such a word but "abb" is not (two letter "b" occur next to each other)

// We are interested in finding the K alphabetically smallest words of length N that do not contain two identical neighbouring letters.
// For eg, the first four words consisting of two letters are: "ab","ac","ba","bc". All correct two-letters words are "ab","ac","ba","bc","ca","cb".

// Find and fix bug(s) in a given implementation of a function:
//     function solution(N, K);

// that, given integers N and K, returns an array of strings: the first K words of the alphabetically sorted sequence of words of length N,
// In which no two neighbouring letters are the same. If K is bigger than the sequence's length, the entire sequence is returned.

// example:
// 1. Given n =2 and k = 4, the function should return ["ab", "ac", "ba", "bc"] as explained above.

// 2. Given n =3 and k = 20, the function should return ["aba", "abc", "aca", "acb", "bab","bac","bca","bcb","cab","cac","cba","cbc"].