const gnomeSort = (array) => {
  let n = array.length, i = 1, j = 2
  while (i < n) {
    if (array[i - 1] < array[i]) {
      i = j
      j++
    } else {
      let t = array[i - 1]
      array[i - 1] = array[i]
      array[i] = t
      i--
      if (i === 0) {
        i = j
        j++
      }
    }
  }
  return array
}
export default gnomeSort
