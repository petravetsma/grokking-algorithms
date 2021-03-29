function recursionLength(arr) {
  if (arr.length === 0) return 0
  arr.pop()
  return 1 + recursionLength(arr)
}

console.log(recursionLength([1,2,3,4,5])) // 5
