import React, { useState } from "react";

import createIcon from "../../../img/dashboard/createbot.svg";
import Input from "../../Input/Input";
import Modal from "../../Modal/Modal";
import BotType from "./BotType/BotType";

import s from "./CreateBot.module.css";

const CreateBot: React.FC = (): JSX.Element => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  
  return (
    <React.Fragment>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={s.child__wrapper}>
          <div className={s.title}>
            Создать бота
          </div>
          <Input placeholder={'Название бота'}/>
          <div className={s.types__list}>
            <BotType />
            <BotType />
            <BotType />
          </div>
        </div>
      </Modal>
      <div className={s.wrapper} onClick={() => setModalActive(true)}>
        <img className={s.createIcon} src={createIcon} alt=''/>
        <div className={s.text}>
          Создать нового бота
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateBot;
