import React from 'react'
import css from './InputCount.module.scss'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

const InputCount = ({ value, step = 100, onChange, min = 0, max = 10000, label }) => {
  return (
    <div className={css.container}>
      <div className={css.label}>{label}</div>
      <div className={css.wrapper}>
        <InputRange
          step={step}
          maxValue={max}
          minValue={min}
          value={value}
          onChange={value => onChange(value)} />
      </div>
    </div>
  )
}
export default InputCount
