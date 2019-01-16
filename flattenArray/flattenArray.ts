function flattenArray(arr: any[]): any[] {
    if(!arr || !arr.length) return null;
    
    const list = [];
    for(let i = 0; i < arr.length ; i++){
        console.log(arr[i])
        list.push(helperx(arr[i]));
    }
    return list
}

function helperx(arr : any){
    console.log(arr)
    if(!Array.isArray(arr) && !arr.length) return arr;
    else { 
        
        for(let x = 0; x < arr.length; x++){  
            console.log(arr[x]) 
            if(Array.isArray(arr[x])) { 
                return helperx(arr[x]);
            }
            return helperx(arr[x]);
       }
    }
    //else return helperx(...arr);
}
//console.log(flattenArray([[["a"]], [["b"]]]));
//console.log(flattenArray([5,6,7]));
console.log(flattenArray([1,[2], [ [[4]], 5 ] ] ));
//console.log(flattenArray([1, [2], [ 3, [[4]] ] ] ));
