function characterParity(symbol: string): string {
  return isNaN(+symbol) ? "not a digit" : +symbol % 2 === 0 ? "even" : "odd";
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));
