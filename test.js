function isSame(arr1, arr2) {
  // You have to write your code here
  if (typeof arr1 !== "object" || typeof arr2 !== "object") {
    return "Invalid";
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
}
console.log(isSame([1, "4", 4], [1, 4, 4]));
