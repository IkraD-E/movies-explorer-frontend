import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import logo from "../../images/header__logo.svg";

import "./AuthForm.css"

function AuthForm({onSubmit, isRegistration, formName, btnText, afterWords, linkText, link}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(
      userEmail.values, userPassword.values, userName.values
    );
  }
  const userEmail = useForm("");
  const userPassword = useForm("");
  const userName = useForm("");
  console.log(isRegistration);

  return (
    <main className="content">
      <section className="auth">
        <img className="auth__logo" src={logo} alt="Логотип"/>
        <h1 className="auth__header">{formName}</h1>
        <form 
          className="auth__form"
          onSubmit={handleSubmit}
        >
          <div className="auth__set">
            {isRegistration 
              &&
              <>
                <label for="name" className="auth__label">Имя</label>
                <input 
                required 
                minLength="2" 
                maxLength="30" 
                type="text" 
                id="name"
                name="name"
                className="auth__input"
                placeholder="Введите имя" 
                value={userName.values}
                onChange={userName.handleChange}
                />
              </>
            }
            <label for="email" className="auth__label">E-mail</label>
            <input 
              required 
              minLength="2" 
              maxLength="30" 
              type="text" 
              id="email"
              name="email"
              className="auth__input"
              placeholder="Введите Email"
              value={userEmail.values}
              onChange={userEmail.handleChange}
            />
            <label for="email" className="auth__label">Пароль</label>
            <input 
              required 
              minLength="2" 
              maxLength="30" 
              type="password" 
              id="password"
              name="password"
              className="auth__input"
              placeholder="Введите пароль" 
              value={userPassword.values}
              onChange={userPassword.handleChange}
            />
          </div>
          <button 
            className="auth__submit" 
            type="submit"
          >
            {btnText}
          </button>
        </form>
        <div className="afterwords">
          <p className="afterwords__text">{afterWords}</p>
          <Link className="afterwords__link" to={link}>
            {linkText}
          </Link>
        </div>
      </section>
    </main>
  )
}
  
export default AuthForm;