import swap from 'utils/swap'

const partition = (items, left, right) => {
  let pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right
  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }
    while (items[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }
  return i
}

const quickSort = (array, left = 0, right = array.length) => {
  let index
  if (array.length > 1) {
    index = partition(array, left, right)
    if (left < index - 1) {
      quickSort(array, left, index - 1)
    }
    if (index < right) {
      quickSort(array, index, right)
    }
  }
  return array
}

export default quickSort

