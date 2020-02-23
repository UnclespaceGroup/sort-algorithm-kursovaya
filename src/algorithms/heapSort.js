const heapSort = (array) => {
  if (array.length === 0) return []
  let n = array.length, i = Math.floor(n / 2), j, k, t
  while (true) {
    if (i > 0) t = array[--i]
    else {
      n--
      if (n === 0) return array
      t = array[n]
      array[n] = array[0]
    }
    j = i
    k = j * 2 + 1
    while (k < n) {
      if (k + 1 < n && array[k + 1] > array[k]) k++
      if (array[k] > t) {
        array[j] = array[k]
        j = k
        k = j * 2 + 1
      } else break
    }
    array[j] = t
  }
}
export default heapSort
