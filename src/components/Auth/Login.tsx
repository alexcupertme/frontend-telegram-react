import React, { useState } from "react";
import { Link } from "react-router-dom";
import { chandler } from '../../handlers/AuthHandlers'

import purplesolid from "../../img/auth/purplesolid.svg";
import purplesolidlittle from "../../img/auth/purplesolidlittle.svg";
import robot from "../../img/auth/robot.svg";
import particles from "../../img/auth/particles/Group.svg";
import mobparticles from "../../img/auth/particles/mobparticles.svg";

import s from "./Login.module.css";
import { SignInHandler } from "../../actions/user";
import { useDispatch } from "react-redux";

const Login: React.FC = (): JSX.Element => {

  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [mailDirty, setMailDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);

  const [mailError, setMailError] = useState<string>("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState<string>("Пароль не может быть пустым");

  const dispatch = useDispatch()

  return (
    <div className={s.wrapper}>
      <img className={s.purplesolid} src={purplesolid} alt="" />
      <img className={s.purplesolidlittle} src={purplesolidlittle} alt="" />
      <img className={s.particles} src={particles} alt="" />
      <img className={s.mobparticles} src={mobparticles} alt="" />
      <img className={s.robot} src={robot} alt="" />
      <div className={s.context__window}>
        <p className={s.window__title}>Конструктор ботов</p>
        <p className={s.window__subtitle}>
          Для работы с нашим проектом Вам необходимо авторизоваться.
          Зарегистрируйтесь или войдите в свой аккаунт
        </p>
        <div className={s.long__input__container}>
          <input
            onChange={e => chandler.mailHandler(e, setMail, setMailError)}
            onBlur={() => chandler.mailBlurHandler(setMailDirty)}
            value={mail}
            name="mail"
            className={s.long__input}
            placeholder="Email"
          />
          {(mailDirty && mailError) ?
            (<div className={s.red__checkmark}></div>) : mailDirty ?
              (<div className={s.green__checkmark}></div>) :
              (<div className={s.grey__checkmark}></div>)}
        </div>
        <div className={s.long__input__container}>
          <input
            onChange={e => chandler.passwordHandler(e, setPassword, setPasswordError)}
            onBlur={() => chandler.passwordBlurHandler(setPasswordDirty)}
            value={password}
            name="password"
            className={s.long__input}
            placeholder="Пароль"
          />
          {(passwordDirty && passwordError) ?
            (<div className={s.red__checkmark}></div>) : passwordDirty ?
              (<div className={s.green__checkmark}></div>) :
              (<div className={s.grey__checkmark}></div>)}
        </div>
        {mailError || passwordError ? (
          <div className={`${s.long__button} ${s.disabled__button}`}>
            <div className={s.button__text}>Войти</div>
          </div>
        ) : (
          <div onClick={() => dispatch(SignInHandler(mail, password))} className={`${s.long__button}`}>
            <div className={s.button__text}>Войти</div>
          </div>
        )}
        <div className={s.error__container}>
          {(mailDirty && mailError) ? (<div className={s.error__text}>{mailError}</div>) :
            (passwordDirty && passwordError) ? (<div className={s.error__text}>{passwordError}</div>) : (<div></div>)}
        </div>
        <div className={s.spacebetween}>
          <div className={s.rectangle7}></div>
          <p className={s.bootstump}>или</p>
          <div className={s.rectangle7}></div>
        </div>
        <Link className={s.link} to="/register">
          Создайте аккаунт
        </Link>
      </div>
    </div>
  );
};

export default Login;
