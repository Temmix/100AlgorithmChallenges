function companyBotStrategy(trainingData: number[][]): number {
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < trainingData.length; i++) {
    let innerArr = trainingData[i];
    if (innerArr[1] === 1) {
      sum += innerArr[0];
      counter++;
    }
  }
  return counter > 0 ? sum / counter : 0;
}

function companyBotStrategy2(trainingData: number[][]): number {
  let sum = 0;
  let counter = 0;
  trainingData.forEach(x => {
    if (x[1] === 1) {
      sum += x[0];
      counter++;
    }
  });
  return counter !== 0 ? sum / counter : 0;
}

console.log(companyBotStrategy2([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));
