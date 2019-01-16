function sortByHeight(a: number[]): number[] {
    const obstacles = []
    a.forEach((x,i) => {
        if(x === -1) obstacles.push(i)
    }); 
    const list = a.filter(x => x !== -1);
    list.sort((a,b) => a - b);
    obstacles.forEach(x => list.splice(x, 0, -1)); 
    return list;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));