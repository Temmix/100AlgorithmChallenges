function alternatingSums(a: number[]): number[] {
    let sumA = 0;
    let sumB = 0;
   
    a.forEach((x,i) => {
        if(i % 2 === 0) sumA += x;
        else sumB+= x;
    })
    return [sumA, sumB];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))