import React from 'react'

import Sidebar from '../Sidebar/Sidebar'

import s from './User.module.css'

const User: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <Sidebar />
      <div className={s.user__content}>

      </div>
      <Sidebar device='mobile'/>
    </div>
  )
}

export default User;