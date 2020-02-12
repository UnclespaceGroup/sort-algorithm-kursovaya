// Функция вызывающая фукцию F count раз
const _times = (count, F) => {
  for (let i = 0; i < count; i++) F()
}
/**
* Функция пузырьковой сортировки
* Иммутабельна, возвращает новый массив, не изменяет исходный
*/
const bubbleSort = (_array) => {
  const array = _array.slice()
  _times(array.length - 1, () => {
    for (let i = 1; i < array.length; i++) {
      const isSwap = array[i] < array[i - 1]
      if (isSwap) {
        const a = array[i]
        array[i] = array[i - 1]
        array[i - 1] = a
      }
    }
  })
  return array
}

export default bubbleSort
