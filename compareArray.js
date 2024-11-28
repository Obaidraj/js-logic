const arr1 = [2, 3, 4];
const arr2 = [9, 4, 16];
function checkArrays(arr1, arr2) {
  const checkMul = [];
  for (const element of arr1) {
    if (arr2.includes(element * element)) {
      checkMul.push(true);
    } else {
      checkMul.push(false);
    }
  }
  return checkMul
}

const result = checkArrays(arr1, arr2);
console.log(result.every(element => element === true));

