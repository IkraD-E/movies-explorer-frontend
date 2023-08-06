import { CurrentUserContext } from "../../context/CurrentUserContext";
import React from "react";

import "./MoviesCard.css"

export default function MoviesCard({card, onCardSaveClick, onCardDeleteClick}) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner === "russ";
    const isSaved = card.owner.some(i => i === currentUser._id);
    const cardSaveButtonClassName = (
        `card__save-btn ${isSaved && "card__save-btn_active"}`
    );


    function handleCardSaveClick() {
        onCardSaveClick(card);
    }

    function handleCardDeleteClick() {
        onCardDeleteClick(card);
    }

    return (
        <li className="card">
            <div className="card__rectangle">
                <div className="card__text-container">
                    <h2 className="card__title">{card.nameRU}</h2>
                    <p className="card__duration">{card.duration}</p>
                    
                </div>
                <button
                    className={cardSaveButtonClassName}
                    onClick={handleCardSaveClick}
                    type="button"
                />
            </div>
            <img
                className="card__photo"
                src={card.image}
                alt={card.nameRU}
            />
            {isOwn && <button className='card_delete_button' onClick={handleCardDeleteClick} />}
        </li>
    )
}