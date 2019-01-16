function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
 let counter = 0;
 const list = [];
 if(counter < numberOfDigits){
     while(true){ 
        if(counter == numberOfDigits) return list[list.length - 1];
        if(counter > numberOfDigits) return list[list.length - 2];
        counter += current.toString().length;
        list.push(current);
        current++;
     }
 }
}


console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));
console.log(pagesNumberingWithInk(8, 40));