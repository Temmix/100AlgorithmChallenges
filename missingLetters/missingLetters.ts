function missingLetters(str: string): string {
   const characters= "abcdefghijklmnopqrstuvwxyz".split('');
   let prev = characters[0]; 
   for(let i = 0; i < str.length; i++){ 
        if(prev !== str[i]) return prev;
        prev = characters[i + 1];
   }
   return undefined;
}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));