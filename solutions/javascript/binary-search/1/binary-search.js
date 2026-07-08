//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const find = (arr, num) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((max + min)/2);
    if(arr[middle] > num) {
      max = middle - 1;
    } else if(arr[middle] < num) {
      min = middle + 1;
    } else if(arr[middle] === num) {
      return middle;
    }
  }
  throw new Error("Value not in array");
};
