import React from "react";

import "./MoviesCardList.css"

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({movieList, onCardSaveClick, onCardDeleteClick}) {
    const cardCount = 12;

    return (
        <section className="cards" aria-label="places">
            {movieList ? 
                (<ul className="cards__list">
                    {movieList.map((card, index) => (
                        index + 1 > cardCount ||
                        <MoviesCard
                            card={card}
                            key={card.movieId}
                            onCardSaveClick={onCardSaveClick}
                            onCardDeleteClick={onCardDeleteClick}
                        />
                    ))}
                </ul> ) :
                <div className="card-list__empty">
                    <h2 className="card-list__text-empty">Здесь пока пусто</h2>
                </div>
            }
        </section>
    )
}