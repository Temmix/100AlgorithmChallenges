function houseNumbersSum(inputArray: number[]): number { 
    let sum = 0;
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray.indexOf(0) === i) break;
        sum += inputArray[i];
    }
    return sum;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));