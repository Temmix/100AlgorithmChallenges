function reflectString(inputString: string): string {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let response = ''; 
    inputString.split('').forEach((x,i) => {
        response += alphabets[25 - alphabets.indexOf(inputString[i])]
    }); 
   return response;
}

console.log(reflectString("name"));
