import React, { useState } from 'react'

import checkmark from '../../../../img/dashboard/checkmark.svg'

import s from './BotType.module.css'

// type TProps = {
//   selected: boolean,
//   setSelected: React.Dispatch<React.SetStateAction<boolean>>
// }

const BotType: React.FC = (): JSX.Element => {

  const [typeSelected, setTypeSelected] = useState<boolean>(false)

  function setSelectedHandler (e: any): void {
    if (typeSelected) {
      setTypeSelected(false)
    } else {
      setTypeSelected(true)
    }
  }
  
  return (
    <div 
    onClick={(e) => setSelectedHandler(e)} 
    className={`${typeSelected ? s.selected : ''} ${s.wrapper}`}>
      <div className={s.checkbox}>
        <div className={s.checkmark}>
          <img src={checkmark} alt="" />
        </div>
      </div>
      <div className={s.type__info}>
        <div className={s.type}>
          Продажник
        </div>
        <div className={s.description}>
          Бот, продающий всякую никому нахуй не нужную хуйню
        </div>
        <div className={s.price}>
          100р/сутки
        </div>
      </div>
    </div>
  )
}


export default BotType

