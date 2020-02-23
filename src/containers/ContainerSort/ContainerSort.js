import React, { useState, useMemo } from 'react'
import SectionArraysList from 'components/SectionArraysList/SectionArraysList'
import css from './ContainerSort.module.scss'
import { useLocation } from 'react-router'

const ContainerSort = ({ sortFunction = () => {}, array = [] }) => {
  const [time, setTime] = useState()
  const location = useLocation()
  const [sortedArray, setSortedArray] = useState([])

  const getSortedArray = async () => {
    const arr = array.slice()
    const startTime = new Date().getTime()
    const _sortedArray = await sortFunction(arr)
    const endTime = new Date().getTime()
    setTime(endTime - startTime)
    setSortedArray(_sortedArray)
  }

  useMemo(() => {
    // Если массив обнулился, обнуляем и сортированный список
    if (array.length === 0) {
      setSortedArray([])
    }
  }, [array])

  useMemo(() => {
    setSortedArray([])
  }, [location, setSortedArray])

  return (
    <>
      {(array.length > 0) && (
        <>
          <div className={css.header}>
            <h2>Результат сортировки</h2>
            { time && (sortedArray.length > 0) && <div className={css.time}><span>{time}</span>мс</div>}
          </div>

          <SectionArraysList
            btnText={'Отсортировать'}
            array={sortedArray}
            onClick={() => getSortedArray()}
          />
        </>
      )
      }
    </>
  )
}
export default React.memo(ContainerSort)
