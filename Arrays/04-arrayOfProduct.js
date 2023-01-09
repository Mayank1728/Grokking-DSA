/* 
   Array of Product 
    each index has a product of all the numbers present in the array except the number stored at that index
    [3, 4, 5, 2] : [40, 30, 24, 60]
*/

// Time : O(N)
// Space : O(N)
function arrayOfPrdt(array) {
  let prdt = 1;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    prdt *= array[i];
  }
  for (let i = 0; i < array.length; i++) {
    result[i] = prdt / array[i];
  }
  console.log(result);
}
arrayOfPrdt([5, 4, 2, 1, 3]);

// Time : O(N)
// Space : O(N)
function arrayOfPrdt(array) {
  let fromLeft = [];
  let fromRight = [];
  let result = [];
  let prdt = 1;
  for (let i = 0; i < array.length; i++) {
    prdt *= array[i];
    fromLeft.push(prdt);
  }
  for (let i = 0; i < array.length; i++) {
    fromRight.push(prdt);
    prdt /= array[i];
  }
  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      result.push(fromRight[i + 1]);
    } else if (i == array.length - 1) {
      result.push(fromLeft[i - 1]);
    } else {
      result.push(fromLeft[i - 1] * fromRight[i + 1]);
    }
  }
  console.log(result);
}
