import React from 'react'

import s from './Modal.module.css'

type TProps = {
  active: boolean, 
  setActive: React.Dispatch<React.SetStateAction<boolean>>,
  children: React.ReactNode
}

const Modal: React.FC<TProps> = ({active, setActive, children}): JSX.Element => {
  return (
    <div onClick={() => setActive(false)} className={`${active ? s.active : ''} ${s.wrapper}`}>
      <div onClick={(e) => e.stopPropagation()} className={`${active ? s.active : ''} ${s.modal__content}`}>
        {children}
      </div>
    </div>
  )
}

export default Modal
