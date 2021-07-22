import React from 'react'

import Sidebar from '../Sidebar/Sidebar'

import s from './Settings.module.css'

const Settings: React.FC = (): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <Sidebar />
      <div className={s.settings__content}>

      </div>
      <Sidebar device='mobile'/>
    </div>
  )
}

export default Settings;