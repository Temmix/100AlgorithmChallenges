function addBorder(picture: string[]): string[] {
    const wall = "*".repeat(picture[0].length + 2) ;
    let list = [];
    picture.forEach(x => { list.push(`*${x}*`) })
    list.push(wall);
    list.unshift(wall); 
    return list;
}

 console.log(addBorder(["abc", "ded"]));
 console.log(addBorder(["abcd", "edfg"]));