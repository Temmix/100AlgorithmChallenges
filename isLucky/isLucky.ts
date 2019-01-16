function isLucky(n: number): boolean {
    let sumA = 0;
    let sumB = 0;
    const nStr = n.toString();
    const length = nStr.length / 2;
    const allLength = nStr.length;
    for(let i = 1; i <= length; i++){
        sumA += +nStr[i- 1];
        sumB += +nStr[allLength - i];
    } 
    return sumA === sumB;
}

console.log(isLucky(1230));
console.log(isLucky(239017));