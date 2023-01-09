/* 
   Merge 2 sorted arrays
    [1, 7, 8, 10], [3, 4,5]     : [1, 3, 4, 5, 7, 8, 10]
    [], []                      : false
    [], [1,4,5,7]               : [1,4,5,7]
    [2], [4]                    : [2,4]
    [10], [8]                   : [8, 10]
    [-3, 5, 100], [-10, -6, -5] : [-10, -6, -5, -3, 5, 100]
    [3, 4, 7, 7,9], [1, 5,5,5]  : [1, 3, 4, 5, 5, 5, 7, 7, 9]
*/

// Time : O(M + N)
// Space : O(M + N)
function mergeSort(array1, array2) {
  // aptr : a pointer
  // bptr : b pointer
  let aptr = 0;
  let bptr = 0;
  const A = array1.length;
  const B = array2.length;
  let result = [];

  // check
  if (!A && !B) {
    console.log('Empty arrays');
    return false;
  }
  if (!A || !B) {
    console.log(A ? array1 : array2);
    return A ? array1 : array2;
  }

  while (aptr < A && bptr < B) {
    if (array1[aptr] < array2[bptr]) result.push(array1[aptr++]);
    else result.push(array2[bptr++]);
  }
  while (aptr < A) {
    result.push(array1[aptr++]);
  }
  while (bptr < B) {
    result.push(array2[bptr++]);
  }
  console.log(result);
  return result;
}
mergeSort([1, 7, 8, 10], [3, 4, 5]);
mergeSort([], []);
mergeSort([], [1, 4, 5, 7]);
mergeSort([2], [4]);
mergeSort([10], [8]);
mergeSort([-3, 5, 100], [-10, -6, -5]);
mergeSort([3, 4, 7, 7, 9], [1, 5, 5, 5]);

// Time : O(KlogK) where K = M + N
// Space : O(M + N)
function mergeSort(array1, array2) {
  console.log([...array1, ...array2].sort((a, b) => a - b));
}
