import React, { useEffect, useState } from "react";

import "./MoviesCardList.css"

import MoviesCard from "../MoviesCard/MoviesCard";
import More from "../More/More";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({movieList, onMovieSaveClick, savedMovieList, isLoading, searchText, isShort}) {
    const path = useLocation().pathname;
    const [movieCount, setMovieCount] = useState(path === '/saved-movies' ? movieList.length : 0);
    function loadMoreMovie() {
        if (windowWidth > 800) {
            setMovieCount(movieCount + 12);
        } else if (windowWidth > 420) {
            setMovieCount(movieCount + 8);
        } else {
            setMovieCount(movieCount + 5);
        }
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const checkWindowWidth = () => {
      setTimeout(() => setWindowWidth(window.innerWidth), 1000);
    };
    
    window.addEventListener('resize', checkWindowWidth);

    const moviesCards = React.useCallback(() => {
        if (windowWidth > 420) {
            setMovieCount(3);
        } else {
            setMovieCount(2);
        }
    }, [windowWidth]);

    useEffect(() => {
        if (!(searchText == null) && (searchText.length || isShort )) {
          moviesCards();
        }
    }, [searchText, isShort, moviesCards]);

    const notNeedMore = movieList && movieList.length <= movieCount;

    return (
        <section className="movies" aria-label="movies">
            {isLoading ? (
                <Preloader/>
            ) : ( 
                (!(movieList === null) || movieList.length === 0) ? 
                    (<ul className="movies__list">
                        {movieList.map((movie, index) => (
                            index + 1 > movieCount ||
                            <MoviesCard
                                card={movie}
                                key={movie.movieId}
                                onMovieSaveClick={onMovieSaveClick}
                                savedMovieList={savedMovieList}
                            />
                        ))}
                    </ul> ) : (
                    <div className="movies-list__empty">
                        <h2 className="movies-list__text-empty">Ничего не найдено</h2>
                    </div>)
            )}
            <More notNeedMore={notNeedMore} loadMoreMovie={loadMoreMovie}/>
        </section>
    )
}