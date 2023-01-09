/* 
   Rearrange arrays so that the -ve ones are on the left end
   and +ve ones are on the right end.
    [5, 9, -2, 3, -4, -1] : [-1,-4,-2, 3, 9, 5]
    3 ways:
    1. BruteForce is by sorting
    2. scanning the array twice by pushing all the -ves
      first then pushing the positive.
    3. In one pass swapping when left is +ve and right is -ve.
*/

// Time : O(N) in One pass
// Space : O(1) No extra space used
function reArrange(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] > -1 && array[right] < 0) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    } else if (array[left] > -1 && array[right] > -1) right--;
    else if (array[left] < 0 && array[right] < 0) left++;
    else {
      left++;
      right--;
    }
  }
  console.log(array);
}
reArrange([10, -1, 20, 4, 5, -9, -6]);
