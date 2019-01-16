function minesweeper(matrix) {
    if(!Array.isArray(matrix)) return null;
    const list = [];
    for(let i = 0; i < matrix.length; i++){
       let iMatrix = matrix[i];
       let iList = []
    // first row
         if(i === 0) { 
            for(let x = 0; x < iMatrix.length; x++){
               // first cell 
               if(x === 0){ 
                  iList.push([iMatrix[x + 1], matrix[i+1][x], matrix[x+1][x+1]].filter(a => a === true).length);
               } else if(x === iMatrix.length - 1) {
                  // last cell 
                  iList.push([iMatrix[x -1], matrix[i+1][x], matrix[i+1][x-1]].filter(a => a === true).length);
               } else {
                  // middle 
                  iList.push([iMatrix[x-1],iMatrix[x+1], matrix[i+1][x], matrix[i+1][x-1], matrix[i+1][x+1]].filter(a => a === true).length);
               }
            }
            list.push(iList.splice(0)); 
         } 
       else if (i === matrix.length - 1){
    // last row
            for(let x = 0; x < iMatrix.length; x++){
               // first cell
               if(x === 0){ 
                  iList.push([iMatrix[x+1], matrix[i-1][x], matrix[i-1][x+1]].filter(a => a === true).length);
               } else if(x === iMatrix.length - 1){
                  // last cell 
                  iList.push([iMatrix[x-1], matrix[i-1][x], matrix[i-1][x-1]].filter(a => a === true).length);
               } else {
                  // middle 
                  iList.push([iMatrix[x+1], iMatrix[x-1], matrix[i-1][x], matrix[i-1][x-1], matrix[i-1][x+1]].filter(a => a === true).length);
               }
            }
             list.push(iList.splice(0)); 
         } 
       else {
     // middle row
             for(let x = 0; x <iMatrix.length; x++){
                // first cell
                if(x === 0){ 
                   iList.push([iMatrix[x+1], matrix[i-1][x], matrix[i-1][x+1], matrix[i+1][x], matrix[i+1][x+1]].filter(a => a === true).length);
                } else if(x === iMatrix.length -1){
                   // last cell 
                   iList.push([iMatrix[x-1], matrix[i-1][x], matrix[i-1][x-1], matrix[i+1][x], matrix[i+1][x-1]].filter(a => a === true).length);
                } else {
                   // middle cell 
                   iList.push([iMatrix[x+1], iMatrix[x-1], matrix[i-1][x], matrix[i-1][x-1], matrix[i-1][x+1], matrix[i+1][x], matrix[i+1][x-1], matrix[i+1][x+1]].filter(a => a === true).length);
                }
             }
             list.push(iList.splice(0)); 
         }
    } 
    return list;
 }

console.log(minesweeper(
    [[true, false, false],
     [false, true, false],
     [false, false, false]]));