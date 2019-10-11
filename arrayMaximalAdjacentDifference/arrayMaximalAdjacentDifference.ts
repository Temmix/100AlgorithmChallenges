function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let response = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const diff = Math.abs(inputArray[i] - inputArray[i + 1]);
    response = response > diff ? response : diff;
  }
  return response;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
