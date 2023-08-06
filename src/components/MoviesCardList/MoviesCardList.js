import React from "react";

import "./MoviesCardList.css"

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({cardsList, onCardSaveClick, onCardDeleteClick}) {
    return (
        <section className="cards" aria-label="places">
            <ul className="cards__list">
                {cardsList.map((card) => (
                    <MoviesCard
                        card={card}
                        key={card.movieId}
                        onCardSaveClick={onCardSaveClick}
                        onCardDeleteClick={onCardDeleteClick}
                    />
                ))}
            </ul>
        </section>
    )
}