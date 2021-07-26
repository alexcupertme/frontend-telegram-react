import React, { useState } from 'react'

import checkmark from '../../../../img/dashboard/checkmark.svg'

import s from './BotType.module.css'

type TProps = {
  radioId?: string,
  radioName?: string
}

const BotType: React.FC<TProps> = ({radioId, radioName}): JSX.Element => {

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
      <div className={s.radio}>
        <input className={s.radio__input} type="radio" id={radioId} name={radioName}/> 
        <label className={s.radio__label} htmlFor={radioId}>Лабел</label>
        {/* <div className={s.checkmark}>
          <img src={checkmark} alt="" />
        </div> */}
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

