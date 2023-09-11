import React from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

import "./Profile.css"
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Profile({onSubmit, signOut}) {
  const currentUser = React.useContext(CurrentUserContext);
  const {
    values,
    handleChange,
    errors,
    isValid,
    setValues,
  } = useFormAndValidation();

  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [setValues, currentUser.name, currentUser.email]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  const submitAble = isValid && (currentUser.name !== values.name || currentUser.email !== values.email)
  
  return (
    <main className="profile">
      <section className="profile__section">
        <h1 className="profile__header">Привет, {currentUser.name}</h1>
        <form 
          className="profile__form"
          onSubmit={handleSubmit}
        >
          <div className="profile__input-container">
            <div className="profile__input-box">
              <label htmlFor="name" className="profile__label">Имя</label>
              <input 
              required 
              minLength="2" 
              maxLength="30" 
              type="text" 
              id="name"
              name="name"
              className={`profile__input ${errors.name ? ("profile__input_invalid") : ""}`}
              placeholder={currentUser.name}
              value={values.name || ""}
              onChange={handleChange}
              />
            </div>
            <span className={`profile__error name-error ${errors.name && "profile__error_active"}`}>{errors.name || ""}</span>
          </div>
          <div className="profile__input-container">
            <div className="profile__input-box">
              <label htmlFor="email" className="profile__label">E-mail</label>
              <input 
                required 
                minLength="2" 
                maxLength="30" 
                type="email" 
                id="email"
                name="email"
                className={`profile__input ${errors.email ? ("profile__input_invalid") : ""}`}
                placeholder={currentUser.email}
                value={values.email || ""}
                onChange={handleChange}
                pattern='^.+@.+\..+$'
              />
            </div>
            <span className={`profile__error email-error ${errors.email && "profile__error_active"}`}>{errors.email || ""}</span>
            </div>
          <button 
            className={`profile__submit ${submitAble ? "" : "profile__submit_disabled"}`}
            disabled={!submitAble && true}
            type="submit"
          >
            Редактировать
          </button>
        </form>
          <p className="profile__log-out" onClick={signOut}>
            Выйти из аккаунта
          </p>
      </section>
    </main>
  );
}

export default Profile;