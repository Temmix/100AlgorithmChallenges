function alphabetSubsequence(s: string): boolean {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = true;
  let prev = alphabets.indexOf(s[0]);
  for (let i = 1; i <= s.length - 1; i++) {
    if (prev >= alphabets.indexOf(s[i])) {
      result = false;
      break;
    }
    prev = alphabets.indexOf(s[i]);
  }
  return result;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
