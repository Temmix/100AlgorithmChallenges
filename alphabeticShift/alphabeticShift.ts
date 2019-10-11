// What of if you wanna move this by * shifting, make this algorithm flexible
function alphabeticShiftByShifter(
  inputString: string,
  shifter: number
): string {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const list = inputString.split("");
  let result = [];
  list.forEach(x => {
    let idx = alphabets.indexOf(x);
    if (idx != -1 && idx + shifter > 25) {
      idx = idx + shifter - 25;
    } else {
      idx += shifter;
    }
    result.push(alphabets[idx]);
  });
  return result.join("");
}

console.log(alphabeticShiftByShifter("crazy", 5));
console.log(alphabeticShiftByShifter("mad", 5));
console.log(alphabeticShiftByShifter("zellious", 5));
console.log(alphabeticShiftByShifter("zyzyzy", 5));

function alphabeticShift(inputString: string): string {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const list = inputString.split("");
  let result = [];
  list.forEach(x => {
    let index = alphabets.indexOf(x) !== 25 ? alphabets.indexOf(x) : -1;
    result.push(alphabets[index + 1]);
  });
  return result.join("");
}

console.log(alphabeticShift("crazy"));
console.log(alphabeticShift("mad"));
console.log(alphabeticShift("zellious"));
console.log(alphabeticShift("zyzyzy"));

function alphabeticShiftWithDictionary(inputString: string): string {
  const alphabets = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "k",
    k: "l",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "w",
    w: "x",
    x: "y",
    y: "z",
    z: "a"
  };
  const list = inputString.split("");
  let result = [];
  list.forEach(x => {
    result.push(alphabets[x]);
  });
  return result.join("");
}

console.log(alphabeticShiftWithDictionary("crazy"));
console.log(alphabeticShiftWithDictionary("mad"));
console.log(alphabeticShiftWithDictionary("zellious"));
console.log(alphabeticShiftWithDictionary("zyzyzy"));
