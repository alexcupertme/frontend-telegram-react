import React from "react";
import { useState } from "react";
import Modal from "../../Modal/Modal";

import s from "./Bot.module.css";
import BotTag from "./BotTag/BotTag";
import Arrow from "../../../img/dashboard/arrow.svg";

type TProps = {
  botName: string,
  botNickname: string,
  isWorking: boolean,
  avatarUrl?: string
}

const Bot: React.FC<TProps> = ({botName, botNickname, isWorking, avatarUrl}): JSX.Element => {

  const [modalActive, setModalActive] = useState<boolean>(false)
  const [botOpened, setBotOpened] = useState<boolean>(false)

  const botOpenHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (botOpened) {
      e.stopPropagation()
      setBotOpened(false)
    } else {
      e.stopPropagation()
      setBotOpened(true)
    }
  }

  return (
    <div onClick={(e) => botOpenHandler(e)} className={`${botOpened ? s.opened : ''} ${s.wrapper}`}>
      <div className={s.flex}>
        <div className={`${botOpened ? s.opened : ''} ${s.arrow}`}>
          <img src={Arrow} alt="" />
        </div>
        <div className={s.info}>
          <div className={`${botOpened ? s.opened : ''} ${s.bot__name}`}>
            {botName}
            <div className={s.bot__status} />
          </div>
          <div className={`${botOpened ? s.opened : ''} ${s.bot__nickname}`}>
            @{botNickname}
          </div>
        </div>
        <div className={s.bot__avatar}>
          <img src={avatarUrl} alt="" />
        </div>
      </div>
      <div className={s.tags__container}>
        <BotTag tagText="Магазин" color='green'/>
        <BotTag tagText="Магазин" color='green'/>
        <BotTag tagText="Магазин" color='green'/>
        <BotTag tagText="Магазин" color='green'/>
        <BotTag tagText="Магазин" color='green'/>
        <BotTag tagText="Магазин" color='green'/>
      </div>
      <div className={s.btn__container}>
        <div 
        onClick={() => setModalActive(true)}
        className={s.ltl__btn}>Настройки</div>
        <div className={`${s.ltl__btn} ${s.ltl__btn__sec}`}>Перейти к боту</div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div></div>
      </Modal>
    </div>
  );
};

export default Bot;
