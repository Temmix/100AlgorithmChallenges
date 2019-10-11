function allLongestStrings(inputArray: string[]): string[] {
  let length = Math.max(...inputArray.map(x => x.length));
  return inputArray.filter(a => a.length === length);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "temi", "max", "desh", "maxwell"]));
console.log(allLongestStrings(["morphy", "jess", "hammed", "loud", "Youlla"]));
