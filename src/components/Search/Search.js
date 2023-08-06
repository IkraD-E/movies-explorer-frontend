import React from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

import searchImage from "../../images/search__image.svg"
import searchImageWhite from "../../images/search__image_white.svg"
import searchTumb from "../../images/search__tumb.svg"

import "./Search.css"

function Search() {
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormAndValidation();

  return (
    <section className="search">
      <div className="search__container">
        <img className="search__image" src={searchImage} alt="Найти"/>
        <form className="search__form">
          <input 
            required 
            minLength="2" 
            maxLength="30" 
            type="text" 
            id="movie"
            name="movie"
            placeholder="Фильм" 
            className="search__input"
            value={values.movie || ""}
            onChange={handleChange}
          />
          <div className="search__btn-container">
            <button 
              className="search__submit"
              type="submit"
            >
              <img className="search__image" src={searchImageWhite} alt="Найти"/>
            </button>
          </div>
          <button
            className="search__base"
            type="button"
          >
            <img className="search__tumb" src={searchTumb} alt="Переключатель короткометражек"/>
          </button>
        </form>
        <p className="search__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default Search;
