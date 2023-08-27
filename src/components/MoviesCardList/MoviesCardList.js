import React from "react";

import "./MoviesCardList.css"

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({movieList, onMovieSaveClick, onMovieDeleteClick}) {
    const movieCount = 5;

    return (
        <section className="movies" aria-label="movies">
            {movieList ? 
                (<ul className="movies__list">
                    {movieList.map((movie, index) => (
                        index + 1 > movieCount ||
                        <MoviesCard
                            card={movie}
                            key={movie.movieId}
                            onMovieSaveClick={onMovieSaveClick}
                            onMovieDeleteClick={onMovieDeleteClick}
                        />
                    ))}
                </ul> ) :
                <div className="movies-list__empty">
                    <h2 className="movies-list__text-empty">Здесь пока пусто</h2>
                </div>
            }
        </section>
    )
}