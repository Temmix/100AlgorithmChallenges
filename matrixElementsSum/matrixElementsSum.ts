function matrixElementsSum(matrix: any[][]): number {
    let sum =  0;
    // for rooms without empty rooms;
    matrix[0].forEach(x => sum += x);

    // for other rooms;
    for(let i = 1; i < matrix.length; i++){ 
        let innerMatrix = matrix[i];
        for(let x = 0; x < innerMatrix.length; x++){
            if(matrix[i-1][x] !== 0) sum += innerMatrix[x];
        }
    }   return sum;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
     [0, 5, 0, 0],
     [2, 0, 3, 3]]
));

console.log(matrixElementsSum(
    [[0, 0, 1, 2],
     [1, 5, 8, 0],
     [2, 0, 3, 3]]
));
