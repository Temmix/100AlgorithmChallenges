function arrayConversion(inputArray: number[]): number[] {
  let isOdd = true;
  while (inputArray.length !== 1) {
    inputArray = helper(inputArray, isOdd);
    isOdd = !isOdd;
  }
  return inputArray;
}

function helper(inputArray: number[], isOdd: boolean): number[] {
  const list = [];
  if (isOdd) {
    for (let i = 0; i <= inputArray.length - 1; i++) {
      list.push(inputArray[i] + inputArray[i + 1]);
      i++;
    }
  } else {
    for (let i = 0; i <= inputArray.length - 1; i++) {
      list.push(inputArray[i] * inputArray[i + 1]);
      i++;
    }
  }
  return list;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
