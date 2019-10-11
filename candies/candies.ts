function candies(n: number, m: number): number {
  return n * Math.floor(m / n);
}

console.log(candies(3, 10));
console.log(candies(3, 12));
console.log(candies(2, 10));
console.log(candies(4, 10));
