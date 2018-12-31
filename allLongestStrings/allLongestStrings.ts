function allLongestStrings(inputArray: string[]): string[] {
    let length = 1;
    inputArray.forEach(x => {
        length = x.length > length ? x.length : length;
    });
    return inputArray.filter(x => x.length === length);

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "temi", "max", "desh", "maxwell"]));
console.log(allLongestStrings(["morphy", "jess", "hammed", "loud", "Youlla"]));