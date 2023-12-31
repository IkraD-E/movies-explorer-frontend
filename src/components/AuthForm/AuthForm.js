import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import Preloader from "../Preloader/Preloader";

import "./AuthForm.css"

function AuthForm({isLoggedIn, isRegistration, formName, btnText, afterWords, linkText, link, onSubmit, isFetching}) {
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormAndValidation();

  function submit(e) {
    e.preventDefault();
    onSubmit(
      values
    );
  }

  if (isLoggedIn) {
    return <Navigate to='/movies' replace={true}/>;
  }

  return (
    <main className="content">
      {isFetching ? 
      (<Preloader/>) : (
      <section className="auth">
        <h1 className="auth__header">{formName}</h1>
        <form 
          className="auth__form"
          onSubmit={submit}
        >
          <div className="auth__set">
            {isRegistration 
              &&
              <>
                <label htmlFor="name" className="auth__label">Имя</label>
                <input 
                required 
                minLength="2" 
                maxLength="30" 
                type="text" 
                id="name"
                name="name"
                className={`auth__input ${errors.name ? ("auth__input_invalid") : ""}`}
                placeholder="Введите имя" 
                value={values.name || ""}
                onChange={handleChange}
                />
                <span className={`auth__error name-error ${errors.name && "auth__error_active"}`}>{errors.name || ""}</span>
              </>
            }
            <label htmlFor="email" className="auth__label">E-mail</label>
            <input 
              required 
              minLength="2" 
              maxLength="30" 
              type="email" 
              id="email"
              name="email"
              className={`auth__input ${errors.email ? ("auth__input_invalid") : ""}`}
              placeholder="Введите Email"
              value={values.email || ""}
              onChange={handleChange}
              pattern='^.+@.+\..+$'
            />
            <span className={`auth__error email-error ${errors.email && "auth__error_active"}`}>{errors.email || ""}</span>
            <label htmlFor="password" className="auth__label">Пароль</label>
            <input 
              required 
              minLength="8" 
              maxLength="30" 
              type="password" 
              id="password"
              name="password"
              className={`auth__input ${errors.password ? ("auth__input_invalid") : ""}`}
              placeholder="Введите пароль" 
              value={values.password || ""}
              onChange={handleChange}
            />
            <span className={`auth__error password-error ${errors.password && "auth__error_active"}`}>{errors.password || ""}</span>
          </div>
          <button 
            className={`auth__submit ${isValid ? "" : "auth__submit_disabled"}`}
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
      </section>)}
    </main>
  )
}
  
export default AuthForm;