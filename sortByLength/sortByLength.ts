function sortByLength(inputArray: string[]): string[] {
    inputArray.sort((a,b) => a.length - b.length);
    return inputArray;
}

console.log(sortByLength(["abc",
"",
"aaa",
"a",
"zz"]));