import React from 'react'

import s from './Input.module.css'

type TProps = {
  placeholder?: string,
  type?: string,
  name?: string,
  value?: string
}

const Input: React.FC<TProps> = ({placeholder, type, name, value}): JSX.Element => {
  return (
    <input className={s.wrapper} 
    placeholder={placeholder} 
    type={type} 
    value={value} 
    name={name}/>
  )
}

export default Input
