/* 
   find 2nd max in array
    [5, 4, 1, 7, 8] : 7
    [2, 10] : 2
    [18, 9, 100, 14, 19, 86] : 86
    [10, 4, 5, 3, 2] : 5
    [10, 4, 5] : 5
*/

// Time : O(N)
// Space : O(1)
function findSecondMax(array) {
  let max = -Infinity;
  let smax = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      smax = max;
      max = array[i];
    } else if (array[i] > smax) smax = array[i];
  }
  console.log(smax);
}
findSecondMax([1, 5, 4, 3, 999, 997, 2, 6, 7, 8, 9, 10]);
