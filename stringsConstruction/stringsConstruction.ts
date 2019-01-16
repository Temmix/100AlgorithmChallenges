function stringsConstruction(a: string, b: string): number {
    const map = {};
    b.split('').forEach(x => {
        if(!map[x]) map[x] = 1;
        else map[x] = map[x] + 1;
    });
    const list = [];
    a.split('').forEach(x => list.push(!map[x] ? 0 : map[x])); 
    return Math.min(...list);
}

console.log(stringsConstruction('abc', 'abcbac'));