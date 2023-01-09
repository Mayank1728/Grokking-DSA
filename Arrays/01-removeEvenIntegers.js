/* 
   Remove Even Integers from the given array
    [5,42,89, 6,7] -> [5, 89, 7]
    [] -> false
    [4] -> []
    [5] -> [5]
    [1,2,4,5,3] -> [1, 5, 3]
*/

// Time : O(N)
// Space : O(N)
function removeEven(array = [5, 42, 89, 6, 7]) {
  if (!array) return false;
  let result = [];
  for (let i = 0; i < array.length; i++)
    if (array[i] % 2 !== 0) result.push(array[i]);

  console.log(result);
}

removeEven([1, 5, 3]);
// Always the later function is called when the func names are same.

// using filter
// Time : O(N)
// Space : O(N)
function removeEven(array) {
  if (!array) return false;
  console.log(array.filter((element) => element % 2 != 0));
}
