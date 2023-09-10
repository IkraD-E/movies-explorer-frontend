import React from "react";


import "./MoviesCard.css"
import { useLocation } from "react-router-dom";

export default function MoviesCard({card, onMovieSaveClick, savedMovieList}) {
    const hours =  Math.floor(card.duration / 60);
    const minutes = card.duration % 60;
    const time = `${hours}ч ${minutes}м`

    const path = useLocation().pathname;
    
    const isSaved = savedMovieList ? savedMovieList.some((item) => item.movieId === card.movieId) : false;
    const cardSaveButtonClassName = (
        `card__save-btn ${isSaved ? "card__save-btn_active" : ""}`
    );

    function handleCardSaveClick() {
        onMovieSaveClick(card)
    }

    return (
        <li className="card">
            <div className="card__rectangle">
                <div className="card__text-container">
                    <h2 className="card__title">{card.nameRU}</h2>
                    <p className="card__duration">{time}</p>
                </div>
                {path === "/movies" ? (
                    <button
                        className={cardSaveButtonClassName}
                        onClick={handleCardSaveClick}
                        type="button"
                    />) : (
                        <button
                        className="card__delete"
                        onClick={handleCardSaveClick}
                        type="button"
                    />)}
            </div>
            <img
                className="card__photo"
                src={card.image}
                alt={card.nameRU}
            />
        </li>
    )
}