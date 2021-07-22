import React from "react";

import s from "./StatsBlock.module.css";

type TProps = {
  type: string, 
  count?: number,
  botsCount?: number,
}

const StatsBlock: React.FC<TProps> = ({type, count, botsCount}): JSX.Element => {
  if (!botsCount) {
    botsCount = 0;
  }

  return (
    <div className={s.wrapper}>
      <div className={s.count}>
        {count}
        {type === "balance" ? <span>₽</span> : <span></span>}
      </div>
      <div className={s.description}>
        {type === "sales" ? (
          <div>
            продаж с <span className={s.bots__count}>{botsCount}</span> ботов
          </div>
        ) : type === "messages" ? (
          <div>
            сообщений разослали <span className={s.bots__count}>{botsCount}</span> ботов
          </div>
        ) : (
          <div>остаток на балансе</div>
        )}
      </div>
      <div className={s.more__link}>Подробнее</div>
    </div>
  );
}

export default StatsBlock;
