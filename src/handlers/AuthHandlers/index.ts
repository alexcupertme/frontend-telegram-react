import React from "react";
import { IAuthHandler } from "../handlers.interface";

export class CHandler implements IAuthHandler {
  public loginBlurHandler(
    setLoginDirty?: React.Dispatch<React.SetStateAction<boolean>>
  ): void {
    if (setLoginDirty) {
      setLoginDirty(true);
    }
  }

  public mailBlurHandler(
    setMailDirty: React.Dispatch<React.SetStateAction<boolean>>
  ): void {
    if (setMailDirty) {
      setMailDirty(true);
    }
  }

  public passwordBlurHandler(
    setPasswordDirty?: React.Dispatch<React.SetStateAction<boolean>>
  ): void {
    if (setPasswordDirty) {
      setPasswordDirty(true);
    }
  }

  public passwordRepeatBlurHandler(
    setPasswordRepeatDirty?: React.Dispatch<React.SetStateAction<boolean>>
  ): void {
    if (setPasswordRepeatDirty) {
      setPasswordRepeatDirty(true);
    }
  }

  public mailHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    setMail: React.Dispatch<React.SetStateAction<string>>,
    setMailError: React.Dispatch<React.SetStateAction<string>>
  ) {
    setMail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setMailError("Email некорректный");
    } else {
      setMailError("");
    }
  }

  public loginHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    setLogin: React.Dispatch<React.SetStateAction<string>>,
    setLoginError: React.Dispatch<React.SetStateAction<string>>
  ): void {
    setLogin(e.target.value);
    if (!e.target.value) {
      setLoginError("Логин не может быть пустым");
    } else {
      setLoginError("");
    }
  }

  public passwordHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setPasswordError: React.Dispatch<React.SetStateAction<string>>
  ): void {
    setPassword(e.target.value);
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-_])[A-Za-z\d@$!%*?&-_]{8,24}$/;
    if (!re.test(String(e.target.value))) {
      setPasswordError("Ваш пароль хуйня ебанная");
    } else {
      setPasswordError("");
    }
  }

  public passwordRepeatHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    setPasswordRepeat: React.Dispatch<React.SetStateAction<string>>,
    setPasswordRepeatError: React.Dispatch<React.SetStateAction<string>>,
    password: string
  ): void {
    setPasswordRepeat(e.target.value);
    if (password !== e.target.value) {
      setPasswordRepeatError("Пароли не совпадают");
    } else {
      setPasswordRepeatError("");
    }
  }
}

export const chandler = new CHandler();
