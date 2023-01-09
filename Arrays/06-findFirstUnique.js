/* 
   Find first unique occurence
    [1, 3, 4, 5, 4, 1, 3] : 5
    [1, 3, 5, 2] : 1
    [1, 9, 3, 9, 9, 7, 1, 3] : 7
    [2, 2, 7, 6, 7, 8, 7, 6, 8]: false
*/

function firstOcc(array) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) map[array[i]] = 1;
    else map[array[i]] += 1;
  }
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] === 1) {
      console.log(array[i]);
      return;
    }
  }
  console.log('NOT found');
  return;
}
firstOcc([1, 3, 4, 5, 4, 1, 3]);
firstOcc([1, 3, 5, 2]);
firstOcc([1, 9, 3, 9, 9, 7, 1, 3]);
firstOcc([2, 2, 7, 6, 7, 8, 7, 6, 8]);
