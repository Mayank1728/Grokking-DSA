/* 
   Two Sum
*/

// Bruteforce
// Time : O(N^2)
// Space : O(1)
function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        console.log([array[i], array[j]]);
        return;
      }
    }
  }
  console.log('Not found');
  return -1;
}

twoSum([1, 21, 3, 14, 5, 60, 7, 6], 81);

// Hashmap
// Time : O(N)
// Space : O(N)
function twoSum(array, target) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    let findPair = target - array[i];
    if (map[findPair]) {
      console.log([array[i], findPair]);
      return;
    } else {
      map[array[i]] = 1;
    }
  }
  return false;
}

// Sorting
// Time : O(NlogN)
// Space : O(1)
function twoSum(array, target) {
  array.sort((a, b) => a - b);
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let sum = array[start] + array[end];
    if (sum == target) {
      console.log([array[start], array[end]]);
      return;
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}
