import swap from 'utils/swap'
/**
* Функция пузырьковой сортировки
*/
const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let wasSwap = false;
    for (let j = 0, endJ = array.length - i; j < endJ; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }
  return array
}

export default bubbleSort
