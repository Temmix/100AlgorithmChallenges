function extractMatrixColumn(matrix: number[][], column: number): number[] {
    const list = [];
    matrix.forEach(x => list.push(x[column]));
    return list;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));