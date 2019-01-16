function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    let count = 0;
    let plant = 0;
    while(plant < desiredHeight){
        plant += upSpeed;
        count++;
        if(plant >= desiredHeight) break;
        plant -= downSpeed;
    }
    return count;
}

console.log(growingPlant(100, 10, 910))