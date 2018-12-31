// To be fixed.
function arrayPreviousLess(items: number[]): number[] {

    for(let i = 0; i < items.length - 1; i++){
        if (i == 0) 
            items.unshift(-1);
        else {
            if (items[i] > items[i - 1]) items.unshift(i, items[i -1]);
        }
    }
    return items;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));