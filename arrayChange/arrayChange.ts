function arrayChange(inputArray: number[]): number {
  let count = 0;
  for (let i = 1; i <= inputArray.length - 1; i++) {
    const diff = Math.abs(inputArray[i - 1] + 1 - inputArray[i]);
    inputArray[i] = inputArray[i] + diff;
    count += diff;
  }
  return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([7, 1, 1]));
