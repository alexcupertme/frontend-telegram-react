import React from 'react'

import s from './BotTag.module.css'

type TProps = {
  tagText: string,
  color: string
}

const BotTag: React.FC<TProps> = ({tagText, color}): JSX.Element => {
  return (
    <div className={`${s.wrapper} ${color === 'blue' ? s.blue : color === 'green' ? s.green : s.purple}`}>
      <div className={`${s.tag__text}`}>
        {tagText}
      </div>
    </div>
  )
}

export default BotTag;