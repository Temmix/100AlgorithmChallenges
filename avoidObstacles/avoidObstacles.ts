function avoidObstacles(inputArray: number[]): number {
  inputArray.sort((a, b) => a - b);
  const min = inputArray[0],
    max = inputArray[inputArray.length - 1];
  const list = [];
  for (let i = min; i < max; i++) {
    if (inputArray.indexOf(i) === -1) list.push(i);
  }
  console.log(list);
  return Math.min(...list);
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
