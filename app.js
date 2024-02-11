//finding duplicate items

let element = [12, 13, 13, 24, 56, 45, 34, 12, 24, 86];

for (let i = 0; i <= element.length; i++) {
  for (let y = 0; y <= element.length; y++) {
    if (i != y) {
      if (element[i] === element[y]) {
        element.splice(y, 1);
      }
    }
  }
}
console.log(element);
