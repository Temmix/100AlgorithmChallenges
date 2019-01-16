function fancyRide(l: number, fares: number[]): string {
    const rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
    const costs = fares.map(x => l * x).filter(x => x <= 20);
    return costs[costs.length - 1].toString();
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));