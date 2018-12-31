function arrayConversion(inputArray: number[]): number[] { 
    let isOdd = inputArray.length % 2 === 0; 
     
    while(inputArray.length !== 1){   
        helper(inputArray, isOdd)
        isOdd = !isOdd;
    }
    return inputArray;
}

function helper(inputArray: number[], isOdd: boolean) : number[] {
    if(isOdd){
        for(let i = 0; i <= inputArray.length - 1; i++){
           inputArray[i] = (inputArray[i] + inputArray[i + 1]);
           i++;
       } 
    }
   else {
       for(let i = 0; i <= inputArray.length - 1; i++){
           inputArray[i] = (inputArray[i] * inputArray[i + 1]);
           i++;
      } 
    }
   return inputArray;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])); 
