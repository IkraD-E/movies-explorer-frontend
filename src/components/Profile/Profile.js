import React from "react";

import "./Profile.css"
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Profile({onSubmit, children}) {
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <>
      {children}
      <section className="profile">
          <h1 className="profile__header">Привет, IkraD!</h1>
          <form 
            className="profile__form"
            onSubmit={handleSubmit}
          >
            <div className="profile__input-container">
              <label for="name" className="profile__label">Имя</label>
                  <input 
                  required 
                  minLength="2" 
                  maxLength="30" 
                  type="text" 
                  id="name"
                  name="name"
                  className={`profile__input ${errors.name ? ("profile__input_invalid") : ""}`}
                  placeholder="Введите имя" 
                  value={values.name || ""}
                  onChange={handleChange}
                  />
                  <span className={`profile__error name-error ${errors.name && "profile__error_active"}`}>{errors.name || ""}</span>
            </div>
            <div className="profile__input-container">
              <label for="email" className="profile__label">E-mail</label>
              <input 
                required 
                minLength="2" 
                maxLength="30" 
                type="email" 
                id="email"
                name="email"
                className={`profile__input ${errors.email ? ("profile__input_invalid") : ""}`}
                placeholder="Введите Email"
                value={values.email || ""}
                onChange={handleChange}
              />
              <span className={`profile__error email-error ${errors.email && "profile__error_active"}`}>{errors.email || ""}</span>
            </div>
            <button 
              className={`profile__btn ${isValid ? "" : "profile__submit_disabled"}`}
              type="submit"
            >
              Редактировать
            </button>
          </form>
          <button className="profile__btn profile__btn_signout" type="submit">
            Выйти из аккаунта
          </button>
        </section>
    </>
  );
}

export default Profile;