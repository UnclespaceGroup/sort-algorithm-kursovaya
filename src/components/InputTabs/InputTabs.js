import React from 'react'
import css from './InputTabs.module.scss'
import cn from 'classnames'

const InputTabs = ({ tabs = [], onChange, value, label }) => {
  return (
    <div className={css.container}>
      <div className={css.label}>{label}</div>
      {
        tabs.map((item, key) => (
          <div className={cn(css.tab, { [css.active]: (item === value) })}
               key={key}
               onClick={() => onChange(item)}
          >
            {item}
          </div>
        ))
      }
    </div>
  )
}
export default InputTabs
