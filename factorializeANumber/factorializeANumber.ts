function factorializeANumber(num: number): number {
    return helper(num);
}

function helper(value){
    return value <= 1 ? 1 : value * helper(value - 1); 
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));