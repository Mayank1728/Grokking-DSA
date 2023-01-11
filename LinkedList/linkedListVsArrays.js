// Why do we use linkedlist ?
/* 
   Disadvantages of using arrays:
   
    1. You cannot resize arrays in C++ or java.

    2. Adding or removing element from the start of the array is costly
       As it takes O(N) time, Why ? first you need to create 
       additional array with +1 size of previous one. Then
       put the element at the start. Now copy each element from
       older array to newer array.

      **Resizeable array (vector in c++ or ArrayList in java) do the same
      thing under the hood. whenever the vector get full and you push element
      to it, size of the vector is doubled and all the elements of previous
      array are copied and now the element is appended to this array.

    3. Similarly removing element from the array is costly.
   
   This is where LinkedList shines. It is dynamic in nature which means you can
   easily resize it. 
   Moreover, LinkedList provides O(1) push, shift and unshift time complexity.
   O(N) time complexity for deleting a node.

   However, there are some tradeoffs
    1. You can't access the elements in constant or O(1) time
*/
