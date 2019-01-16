function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] { 
    return cost_per_mile.map((x,i) => +((cost_per_minute[i] * ride_time) + (cost_per_mile[i] * ride_distance)).toFixed(1));
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
