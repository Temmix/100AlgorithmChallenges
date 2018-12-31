function characterParity(symbol: string): string {
    const value = parseInt(symbol);
    return !value ? 'not a digit' : value % 2 === 0 ? 'even' : 'odd' 
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
