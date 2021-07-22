export interface IAuthHandler {  
  loginBlurHandler (
    setLoginDirty?:React.Dispatch<React.SetStateAction<boolean>>, 
  ): void

  mailBlurHandler (
    setMailDirty?:React.Dispatch<React.SetStateAction<boolean>>, 
  ): void

  passwordBlurHandler (
    setPasswordDirty?: React.Dispatch<React.SetStateAction<boolean>>,
  ): void

  passwordRepeatBlurHandler (
    setPasswordRepeatDirty?: React.Dispatch<React.SetStateAction<boolean>>,
  ): void

  loginHandler (
    e: React.ChangeEvent<HTMLInputElement>, 
    setLogin: React.Dispatch<React.SetStateAction<string>>,
    setLoginError: React.Dispatch<React.SetStateAction<string>>,
  ): void

  mailHandler (
    e: React.ChangeEvent<HTMLInputElement>, 
    setMail: React.Dispatch<React.SetStateAction<string>>,
    setMailError: React.Dispatch<React.SetStateAction<string>>,
  ): void

  passwordHandler (
    e: React.ChangeEvent<HTMLInputElement>, 
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setPasswordError: React.Dispatch<React.SetStateAction<string>>,
  ): void

  passwordRepeatHandler (
    e: React.ChangeEvent<HTMLInputElement>, 
    setPasswordRepeat: React.Dispatch<React.SetStateAction<string>>,
    setPasswordRepeatError: React.Dispatch<React.SetStateAction<string>>,
    password: string,
  ): void
}
