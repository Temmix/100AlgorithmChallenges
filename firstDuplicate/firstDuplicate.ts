function firstDuplicate(a: number[]): number {
    if(!a || !a.length) return -1;
    let map = {};
    for(let i = 0; i < a.length; i++){
        if(!map[a[i]]) map[a[i]] = 1;
        else return a[i];
    }
    return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
