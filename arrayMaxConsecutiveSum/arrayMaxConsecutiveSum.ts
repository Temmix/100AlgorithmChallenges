function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let list: number[] = [];
  for (let i = 0; i < inputArray.length - (k - 1); i++) {
    list.push(inputArray[i] + inputArray[i + 1]);
  }
  return Math.max(...list);
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
