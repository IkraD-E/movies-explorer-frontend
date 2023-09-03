import React from "react";
import Footer from "../Footer/Footer";
import More from "../More/More";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

import "./SavedMovies.css"

function SavedMovies({onCardDeleteClick, onCardSaveClick, children, movieList}) {
  const movieCount = 2;
  const notNeedMore = movieList.length < movieCount;

  return (
    <>
      {children}
      <main className="saved-movies">
        <Search/>
        <MoviesCardList
          movieList={movieList} 
          movieCount={movieCount}
          onCardSaveClick={onCardSaveClick}
          onCardDeleteClick={onCardDeleteClick}
        />
        <More notNeedMore={notNeedMore}/>
        <Footer/>
      </main>
    </>
  );
}

export default SavedMovies;