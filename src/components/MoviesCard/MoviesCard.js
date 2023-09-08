import React from "react";

import "./MoviesCard.css"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { movieUrl } from "../../consts/urls";

export default function MoviesCard({card, onMovieSaveClick, onCardDeleteClick}) {
    console.log(card);
    const hours =  Math.floor(card.duration / 60);
    const minutes = card.duration % 60;
    const time = `${hours}ч ${minutes}м`

    const path = useLocation().pathname;
    const [isSaved, tuggleIsSaved] = useState(false);
    const isOwn = card.owner === "russ";
    const cardSaveButtonClassName = (
        `card__save-btn ${isSaved ? "card__save-btn_active" : ""}`
    );

    function handleCardSaveClick() {
        onMovieSaveClick(card)
        tuggleIsSaved(!isSaved)
    }

    function handleCardDeleteClick() {
        onCardDeleteClick(card);
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
                src={`${movieUrl}${card.image.url}`}
                alt={card.nameRU}
            />
            {isOwn && <button className='card_delete_button' onClick={handleCardDeleteClick} type="button"/>}
        </li>
    )
}