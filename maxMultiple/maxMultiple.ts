function maxMultiple(divisor: number, bound: number): number  {
    return divisor * Math.floor(bound/divisor);
}

console.log(maxMultiple(3,10));
console.log(maxMultiple(5,19));
console.log(maxMultiple(7,106));