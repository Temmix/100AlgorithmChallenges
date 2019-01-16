function proCategorization(pros: string[], preferences: string[][]): string[][][] {
    let all = [];
    preferences.forEach(x => all.push(...x));
    const mergedPreferences = Array.from(new Set(all).values());
    
    const list = [];
    for(let i = 0; i < mergedPreferences.length; i++){
        let indexes = [];
        preferences.forEach((x,y) => {
            if(x.indexOf(mergedPreferences[i]) !== -1) indexes.push(y);
        });  
        list.push([[mergedPreferences[i]], pros.filter((x,g) => indexes.indexOf(g) !== -1)]);
        indexes.length = 0;
    } 
    return list;
}

console.log(proCategorization(
    ["Jack", "Leon", "Maria"], 
    [["Computer repair", "Handyman", "House cleaning"],
    ["Computer lessons", "Computer repair", "Data recovery service"],
    ["Computer lessons", "House cleaning"]]));