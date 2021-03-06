/*
This is a problem from the Udemy course on algorithms (https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/9816152#overview).
In this particular example problem, I'm supposed to use a Frequency Counter.

Write a function called same, which accepts two arrays.  The function should return true if every value in the array has its corresponding
value squared in the second array.  The frequency of values must be the same.

same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) // false
same([1, 2, 1], [4, 4, 1]) // false (must be the same frequency)
*/

const same = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false;
  }
  const counter = {};
  for(let i = 0; i < arr1.length; i++) {
    if(counter[arr1[i] * arr1[i]] === undefined) {
      counter[arr1[i] * arr1[i]] = 1;
    } else {
      counter[arr1[i] * arr1[i]]++;
    }
  }
  for(let h = 0; h < arr2.length; h++) {
    if(counter[arr2[h]] === undefined) {
      return false;
    }
    if(counter[arr2[h]] === 0) {
      return false;
    }
    if(counter[arr2[h]] > 0) {
      counter[arr2[h]]--;
    }
  }

  return true;
}