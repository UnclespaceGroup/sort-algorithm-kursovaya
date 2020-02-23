import React from 'react'
import css from './Tabs.module.scss'
import { NavLink } from 'react-router-dom'

const Tabs = ({ tabs = [] }) => (
  <div className={css.container}>
    {
      tabs.map((tab, key) => (
        <NavLink key={key}
                 activeClassName={css.active}
                 to={tab.to}
                 className={css.tab}
                 exact
        >
          {tab.title}
        </NavLink>
      ))
    }
  </div>
)
export default Tabs
