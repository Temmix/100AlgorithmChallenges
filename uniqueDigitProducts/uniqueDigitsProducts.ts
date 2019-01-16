function uniqueDigitProducts(a: number[]): number {
    const list = [];
    a.forEach(x => list.push(helper(x))); 
    return new Set(list).size;
}

function helper(value){
    let product = 1;
    value.toString().split('').forEach(x => product *= x); 
    return product;
}
console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));