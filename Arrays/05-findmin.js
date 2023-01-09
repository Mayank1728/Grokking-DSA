// Time : O(N)
// Space : O(1)
function findMin(array) {
  let min = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) min = array[i];
  }
  console.log(min);
}
findMin([30, 49, 1, 2, 2, -5, 290, 23, 1, -9, 0]);
