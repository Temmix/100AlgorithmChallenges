function fermactor(n: number): number[] { 
    for(let i = 2; i < n; i++){
        for(let j = 1; j < i; j++){
            if((i ** 2) - (j ** 2) === n)
            return [i,j];
        }
    }
    return [];
}

console.log(fermactor(15));