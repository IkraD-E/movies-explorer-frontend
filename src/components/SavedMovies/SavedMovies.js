import React from "react";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

function SavedMovies({onCardDeleteClick, onCardSaveClick, children, movieList}) {
  return (
    <main className="saved-movies">
      {children}
      <Search/>
      <MoviesCardList
        movieList={movieList} 
        onCardSaveClick={onCardSaveClick}
        onCardDeleteClick={onCardDeleteClick}
      />
      <Footer/>
    </main>
  );
}

export default SavedMovies;