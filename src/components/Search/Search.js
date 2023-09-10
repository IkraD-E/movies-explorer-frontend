import React from "react";
import { useState } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

import searchImage from "../../images/search__image.svg"
import searchImageWhite from "../../images/search__image_white.svg"

import "./Search.css"

function Search({isShort, setIsShort}) {
  function tugleisTumbActive() {
    setIsShort(!isShort)
  }

  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.search) {
      errors.search = '';
    } else {
      errors.search = 'Нужно ввести ключевое слово';
    }
    return;
  };

  return (
    <section className="search" aria-label="search">
      <div className="search__container">
        <img className="search__image" src={searchImage} alt="Найти"/>
        <form className="search__form" onSubmit={handleSubmit}>
          <div className="search__form-container">
            <div className="search__input-container">
              <input 
                required 
                minLength="2" 
                maxLength="30" 
                type="text" 
                id="search"
                name="search"
                placeholder="Фильм" 
                className="search__input"
                value={values.search || ""}
                onChange={handleChange}
              />
              <span className={`search__error input-error ${errors.search && "search__error_active"}`}>{errors.search || ""}</span>
            </div>
            <div className="search__btn-container">
              <button 
                className="search__submit"
                type="submit"
              >
                <img className="search__image-submit" src={searchImageWhite} alt="Найти"/>
              </button>
            </div>
          </div>
          <div className="search__filter">
            <button
              className={`search__tumb ${isShort ? "search__tumb_active" : ""}`}
              type="button"
              onClick={setIsShort}
            >
            </button>
            <p className="search__text">Короткометражки</p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Search;
