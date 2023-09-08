import React, { useEffect, useState } from "react";

import "./MoviesCardList.css"

import MoviesCard from "../MoviesCard/MoviesCard";
import More from "../More/More";

export default function MoviesCardList({movieList, onMovieSaveClick, onMovieDeleteClick}) {
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
        setMovieCount(movieCount + 3)
    }

    const checkWindowWidth = () => {
      setTimeout(() => setWindowWidth(window.innerWidth), 1000);
    };
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    
    useEffect(() => {
        window.addEventListener('resize', setWindowWidth);

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

        return () => window.removeEventListener('resize', setWindowWidth);
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
                            key={movie.id}
                            onMovieSaveClick={onMovieSaveClick}
                            onMovieDeleteClick={onMovieDeleteClick}
                        />
                    ))}
                </ul> ) :
                <div className="movies-list__empty">
                    <h2 className="movies-list__text-empty">Здесь пока пусто</h2>
                </div>
            }
            <More notNeedMore={notNeedMore} loadMoreMovie={loadMoreMovie}/>
        </section>
    )
}