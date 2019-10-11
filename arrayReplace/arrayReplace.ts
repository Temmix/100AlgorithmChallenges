function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  inputArray.forEach((x, i) => {
    if (x === elemToReplace) inputArray[i] = substitutionElem;
  });
  return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
