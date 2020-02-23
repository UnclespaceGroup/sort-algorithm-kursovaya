import {
  BUBBLE_SORT,
  COCKTAIL_SORT,
  QUICK_SORT, MERGE_SORT, HEAP_SORT, GNOME_SORT
} from 'constants/routes'

const tabs = [
  {
    title: 'Пузырьковая',
    to: BUBBLE_SORT
  },
  {
    title: 'Шейкерная',
    to: COCKTAIL_SORT
  },
  {
    title: 'Быстрая',
    to: QUICK_SORT
  },
  {
    title: 'Сортировка вставками',
    to: MERGE_SORT
  },
  {
    title: 'Пирамидальная сортировка',
    to: HEAP_SORT
  },
  {
    title: 'Гномья сортировка',
    to: GNOME_SORT
  }
]
export default tabs
