function properNounCorrection(noun: string): string {
    if(!noun) return null;
    let all = noun.toLowerCase().split('');
    return `${all[0].toUpperCase()}${all.splice(1).join('')}`
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));
console.log(properNounCorrection('mAkInDe'));