function houseOfCats(legs: number): number[] {
    const list = [];
    let catLeg = 4, humanLeg = 2;
    if(legs > catLeg){
         const possible = Math.ceil(legs / humanLeg); 
         let count = 0;
        for(let i = 0;  i < possible ; i++){ 
            if( (catLeg) + (humanLeg * (possible - i)) === legs ){
                count++;
                list.push(count);
            }
        } 
         list.push(Math.floor(possible));
    } else {
        list.push(Math.floor(legs/2));
    }
    // return list;
}

console.log(houseOfCats(10));
console.log(houseOfCats(6));
console.log(houseOfCats(12));
console.log(houseOfCats(3));
console.log(houseOfCats(4));
console.log(houseOfCats(5));
