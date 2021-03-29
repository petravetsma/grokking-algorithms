function recursionSum(arr) {
  return arr.length === 0 ? 0 : arr.pop() + recursionSum(arr)
}

console.log(recursionSum([1,2,3,4,5])) // 15
