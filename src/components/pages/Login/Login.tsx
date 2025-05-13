import { FormEvent } from 'react';
import s from './Login.module.css';

export const Login = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className={s.loginContainer}>
      <h2 className={s.title}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={s.formContainer}>
          <label className={s.label} htmlFor="username">Login:</label>
          <input className={s.textInput} type="text" id="username" name="username" required />
        </div>

        <div className={s.formContainer}>
          <label className={s.label} htmlFor="password">Password:</label>
          <input className={s.passwordInput} type="password" id="password" name="password" required />
        </div>

        <div className={`${s.formContainer} ${s.checkboxContainer}`}>
          <input className={s.checkbox} type="checkbox" id="remember-me" />
          <label className={s.label} htmlFor="remember-me">Remember me</label>
        </div>

        <button className={s.submitButton} type="submit">Log In</button>
      </form>
    </div>
  )
}