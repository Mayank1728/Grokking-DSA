/* 
   Rotate array by index
    [1, 2, 3, 4, 5], 1 : [5, 1, 2, 3, 4]
    [1, 2, 3, 4, 5], 3 : [3, 4, 5, 1, 2]
    [1, 2, 3, 4, 5], 5 : [1, 2, 3, 4, 5]
    [1, 2, 3, 4, 5], 7 : [4, 5, 1, 2, 3]
*/

// Time : O(N)
// Space : O(N)
function rightRotate(array, n) {
  let start = n;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (start < array.length) {
      result[start++] = array[i];
    } else {
      start = start % array.length;
      result[start++] = array[i];
    }
  }
  console.log(result);
}
rightRotate([1, 2, 3, 4, 5], 5);
