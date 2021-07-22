import React, { useState } from "react";
import { Link } from "react-router-dom";

import purplesolid from "../../img/auth/purplesolid.svg";
import purplesolidlittle from "../../img/auth/purplesolidlittle.svg";
import robot from "../../img/auth/robot.svg";
import particles from "../../img/auth/particles/Group.svg";
import mobparticles from "../../img/auth/particles/mobparticles.svg";

import s from "./Register.module.css";
import { RegisterHandler } from "../../actions/user";
import { chandler } from "../../handlers/AuthHandlers";
import { useDispatch } from "react-redux";

const Register: React.FC = (): JSX.Element => {
  const [mail, setMail] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");

  const [mailDirty, setMailDirty] = useState<boolean>(false);
  const [loginDirty, setLoginDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [passwordRepeatDirty, setPasswordRepeatDirty] = useState<boolean>(false);

  const [mailError, setMailError] = useState<string>("Email не может быть пустым");
  const [loginError, setLoginError] = useState<string>("Логин не может быть пустым");
  const [passwordError, setPasswordError] = useState<string>(
    "Пароль не может быть пустым"
  );
  const [passwordRepeatError, setPasswordRepeatError] = useState<string>(
    "Пароль не может быть пустым"
  );

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
            onChange={(e) => chandler.loginHandler(e, setLogin, setLoginError)}
            value={login}
            onBlur={() => chandler.loginBlurHandler(setLoginDirty)}
            name="login"
            className={s.long__input}
            placeholder="Логин"
          />
          {loginDirty && loginError ? (
            <div className={s.red__checkmark}></div>
          ) : loginDirty ? (
            <div className={s.green__checkmark}></div>
          ) : (
            <div className={s.grey__checkmark}></div>
          )}
        </div>
        <div className={s.long__input__container}>
          <input
            onChange={(e) => chandler.mailHandler(e, setMail, setMailError)}
            value={mail}
            onBlur={() => chandler.mailBlurHandler(setMailDirty)}
            name="mail"
            className={s.long__input}
            placeholder="Email"
          />
          {mailDirty && mailError ? (
            <div className={s.red__checkmark}></div>
          ) : mailDirty ? (
            <div className={s.green__checkmark}></div>
          ) : (
            <div className={s.grey__checkmark}></div>
          )}
        </div>
        <div className={s.flex}>
          <div className={s.short__input__container}>
            <input
              onChange={(e) => chandler.passwordHandler(e, setPassword, setPasswordError)}
              value={password}
              onBlur={() => chandler.passwordBlurHandler(setPasswordDirty)}
              name="password"
              className={s.short__input}
              placeholder="Пароль"
            />
            {passwordDirty && passwordError ? (
              <div className={s.red__checkmark}></div>
            ) : passwordDirty ? (
              <div className={s.green__checkmark}></div>
            ) : (
              <div className={s.grey__checkmark}></div>
            )}
          </div> 
          <div className={s.short__input__container}>
            <input
              onChange={(e) => chandler.passwordRepeatHandler(e, setPasswordRepeat, setPasswordRepeatError, password)}
              value={passwordRepeat}
              onBlur={() => chandler.passwordRepeatBlurHandler(setPasswordRepeatDirty)}
              name="passwordRepeat"
              className={s.short__input}
              placeholder="Повтор пароля"
            />
            {(password && passwordError) || (passwordRepeatDirty && passwordRepeatError) ? (
              <div className={s.red__checkmark}></div>
            ) : passwordRepeatDirty ? (
              <div className={s.green__checkmark}></div>
            ) : (
              <div className={s.grey__checkmark}></div>
            )}
          </div>
        </div>
        {mailError || passwordError || passwordRepeatError ? (
          <div className={`${s.long__button} ${s.disabled__button}`}>
            <div className={s.button__text}>Зарегистрируйтесь</div>
          </div>
        ) : (
          <div
            onClick={() => dispatch(RegisterHandler(login, mail, password))}
            className={`${s.long__button}`}
          >
            <div className={s.button__text}>Зарегистрируйтесь</div>
          </div>
        )}
        <div className={s.error__container}>
          {loginDirty && loginError ? (
            <div className={s.error__text}>{loginError}</div>
          ) : mailDirty && mailError ? (
            <div className={s.error__text}>{mailError}</div>
          ) : passwordDirty && passwordError ? (
            <div className={s.error__text}>{passwordError}</div>
          ) : passwordRepeatDirty && passwordRepeatError ? (
            <div className={s.error__text}>{passwordRepeatError}</div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={s.spacebetween}>
          <div className={s.rectangle7} />
          <p className={s.bootstump}>или</p>
          <div className={s.rectangle7} />
        </div>
        <Link className={s.link} to="/login">
          Войдите в свой аккаунт
        </Link>
      </div>
    </div>
  );
};

export default Register;
