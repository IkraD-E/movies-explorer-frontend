import React from "react";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

import "./SavedMovies.css"

function SavedMovies({onCardDeleteClick, onMovieSaveClick, movieList, isShort, setIsShort, isLoading, searchText, setSearchText, savedMovieList}) {
  const handleSearchButtonClick = React.useCallback(
    (input) => {
      setSearchText(input);
    },
    [setSearchText]
  );

  return (
    <main className="saved-movies">
      <Search
        isShort={isShort}
        setIsShort={setIsShort}
        searchText={searchText}
        searchSubmit={handleSearchButtonClick}
      />
      <MoviesCardList
        movieList={movieList} 
        savedMovieList={savedMovieList}
        onMovieSaveClick={onMovieSaveClick}
        onCardDeleteClick={onCardDeleteClick}
        isLoading={isLoading}
        searchText={searchText}
      />
      <Footer/>
    </main>
  );
}

export default SavedMovies;