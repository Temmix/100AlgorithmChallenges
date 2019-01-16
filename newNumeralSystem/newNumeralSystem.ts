function newNumeralSystem(number: string): string[] {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let index = characters.indexOf(number) ;
    const list = [];
    for(let i = 0; i < index; i++){
        let inner = index - i;
        list.push(`${characters[i]} + ${characters[inner]}`);
        if(inner === i) break;
    }
    return list;
}   

console.log(newNumeralSystem('G'));
console.log(newNumeralSystem('Z'));