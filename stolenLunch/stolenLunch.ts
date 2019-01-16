function stolenLunch(note: string): string {
    const al = "abcdefghijklmnopqrstuvwxyz '".split('');
    const notes = note.split(':');
    let response = []
    notes[0].split('').forEach(x => {
        if(al.indexOf(x) === -1){
           response.push(al[x])
        } else response.push(x);
    });
    let code = [];
    notes[1].trim().split('').forEach(x => {
        code.push(al.indexOf(x))
    }) 
    return `${response.join('')}: ${code.join('')} `;
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));