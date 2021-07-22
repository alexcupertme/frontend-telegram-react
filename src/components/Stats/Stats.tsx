import React from 'react'

import Sidebar from '../Sidebar/Sidebar'

import s from './Stats.module.css'

const Stats: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <Sidebar />
      <div className={s.stats__content}>

      </div>
      <Sidebar device='mobile'/>
    </div>
  )
}

export default Stats;