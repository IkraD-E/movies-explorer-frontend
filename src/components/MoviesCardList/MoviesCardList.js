import React, { useEffect, useState } from "react";

import "./MoviesCardList.css"

import MoviesCard from "../MoviesCard/MoviesCard";
import More from "../More/More";

export default function MoviesCardList({movieList, onMovieSaveClick, savedMovieList}) {
    const [movieCount, setMovieCount] = useState(0);
    const [movieMoreCount, setMovieMoreCount] = useState(0);
    const moviesNum = {
        mobile: 2,
        tablet: 2,
        laptop: 3,
    };

    const moviesMoreNum = {
        mobile: 5,
        tablet: 8,
        laptop: 12,
    };

    function loadMoreMovie(){
        setMovieCount(movieCount + movieMoreCount)
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const checkWindowWidth = () => {
      setTimeout(() => setWindowWidth(window.innerWidth), 1000);
    };
    
    useEffect(() => {
        window.addEventListener('resize', checkWindowWidth);

        if (windowWidth > 1024) {
        setMovieCount(moviesMoreNum.laptop);
        setMovieMoreCount(moviesNum.laptop);
        } else if (windowWidth > 768) {
        setMovieCount(moviesMoreNum.tablet);
        setMovieMoreCount(moviesNum.tablet);
        } else {
        setMovieCount(moviesMoreNum.mobile);
        setMovieMoreCount(moviesNum.mobile);
        }

        return () => window.removeEventListener('resize', checkWindowWidth);
    }, [windowWidth]);

    const notNeedMore = movieList.length < movieCount;

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
                            savedMovieList={savedMovieList}
                        />
                    ))}
                </ul> ) :
                <div className="movies-list__empty">
                    <h2 className="movies-list__text-empty">Ничего не найдено</h2>
                </div>
            }
            <More notNeedMore={notNeedMore} loadMoreMovie={loadMoreMovie}/>
        </section>
    )
}