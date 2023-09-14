import React, { useEffect, useState } from "react";

import "./MoviesCardList.css"

import MoviesCard from "../MoviesCard/MoviesCard";
import More from "../More/More";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({movieList, onMovieSaveClick, savedMovieList, isLoading, searchText, isShort}) {
    const path = useLocation().pathname;
    const [movieCount, setMovieCount] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    console.log(movieList);
    console.log(movieList.length);
    console.log(`asdf ${movieCount}`);
    const moviesCards = React.useCallback(() => {
        if (windowWidth > 1024) {
            setMovieCount(12);
        } else if (windowWidth > 600) {
            setMovieCount(8);
        } else {
            setMovieCount(5);
        }
    }, [windowWidth]);

    function loadMoreMovie() {
        if (windowWidth > 1024) {
            setMovieCount(movieCount + 3);
        } else {
            setMovieCount(movieCount + 2);
        }
    };

    


    const checkWindowWidth = () => {
      setTimeout(() => setWindowWidth(window.innerWidth), 1000);
    };
    


    useEffect(() => {
        if (searchText.length || isShort) {
          moviesCards();
        }
        return () => window.removeEventListener('resize', checkWindowWidth);
    }, [searchText, isShort, moviesCards, movieList]);

    const notNeedMore = (movieList && movieList.length <= movieCount );
    return (
        <section className="movies" aria-label="movies">
            {isLoading ? (
                <Preloader/>
            ) : ( 
                (!(movieList === null) && movieList.length !== 0) ? 
                    (<ul className="movies__list">
                        {movieList.map((movie, index) => (
                            index + 1 > (path === '/saved-movies' ? movieList.length : movieCount) ||
                            <MoviesCard
                                card={movie}
                                key={movie.movieId}
                                onMovieSaveClick={onMovieSaveClick}
                                savedMovieList={savedMovieList}
                            />
                        ))}
                    </ul> ) : (
                        (searchText && (!(movieList === null) || Array(movieList) === 0) ? 
                        <div className="movies-list__empty">
                            <h2 className="movies-list__text-empty">Ничего не найдено</h2>
                        </div> : 
                        "")
                    )
            )}
            {movieCount > 0 && movieList !== null && path !== '/saved-movies' && <More notNeedMore={notNeedMore} loadMoreMovie={loadMoreMovie}/>}
        </section>
    )
}