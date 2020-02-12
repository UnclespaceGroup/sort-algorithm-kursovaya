import React, { useState } from 'react'
import SectionArraysList from 'components/SectionArraysList/SectionArraysList'
import css from './ContainerSort.module.scss'

const ContainerSort = ({ sortFunction = () => {}, array = [] }) => {
  const [time, setTime] = useState()
  const [sortedArray, setSortedArray] = useState([])

  const getSortedArray = async () => {
    const startTime = new Date().getTime()
    const _sortedArray = await sortFunction(array)
    const endTime = new Date().getTime()
    setTime(endTime - startTime)
    setSortedArray(_sortedArray)
  }

  return (
    <>
      <h2>Результат сортировки</h2>
      <SectionArraysList
        array={sortedArray}
        onClick={() => getSortedArray()}
      />
      {time && <div className={css.time}>Потрачено {time} ms</div>}
    </>
  )
}
export default React.memo(ContainerSort)
