function extractEachKth(inputArray:number[], k: number): number[] {
   const list = [];
   inputArray.filter((x,i) => {
       if(i !== 0 && inputArray[i] % k !== 0) list.push(x)
   });
   return list;
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));