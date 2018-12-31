function almostIncreasingSequence(sequence: number[]): boolean {
    let count = 0; 
    for(let i = 0; i <= sequence.length - 1; i++){
        if (sequence[i + 1] && (sequence[i + 1] - sequence[i] !== 1)) 
        {   
            count++; 
            if(sequence[i + 2] && (sequence[i + 2] - sequence[i] === 1)) {
                count--;
            } 
        }
    } 
    return count <= 1;
}

 console.log(almostIncreasingSequence([1, 3, 2, 1]));
 console.log(almostIncreasingSequence([1, 3, 2]));
 console.log(almostIncreasingSequence([1, 2, 3, 4, 5]));
 console.log(almostIncreasingSequence([1, 2, 7, 3, 4, 5])); 