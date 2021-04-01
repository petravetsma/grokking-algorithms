function quicksort(arr) {
  if (arr.length < 2) return arr
  if (arr.length === 2) {
    if (arr[0] > arr[1]) return [arr[1], arr[0]]
    return arr
  }
  let pivot = arr[0]
  let nr = arr.slice(1)
  let less = []
  let more = []
  for (let i = 0; i < nr.length; i++) {
    if (nr[i] > pivot) {
      more.push(nr[i])
    }
    else {
      less.push(nr[i])
    }
  }
  return [...quicksort(less), pivot, ...quicksort(more)]
}


console.log(quicksort([7,1,5,8,9,19,1,2,3,4,5,6,7,7,7,7,7,10]))
