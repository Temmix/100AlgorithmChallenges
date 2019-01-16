function htmlEndTagByStartTag(startTag: string): string { 
     let endTag = startTag.split(' ')[0].slice(1); 
     return endTag.indexOf('>') !== -1 ? `</${endTag}` : `</${endTag}>`
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))