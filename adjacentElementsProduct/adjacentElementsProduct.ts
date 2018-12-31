function adjacentElementsProduct(inputArray: number[]): number {
   let product = inputArray[0] * inputArray[1];
    for(let i = 1; i < inputArray.length-1 ; i++){
        const inner = inputArray[i] * inputArray[i + 1];
        product = product < inner ? inner : product;
    }
  
   return product;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([3, 6, -12, -5, 7, 3]));
console.log(adjacentElementsProduct([3, 16, -2, -25, 17, -31]));