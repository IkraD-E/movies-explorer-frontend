import React from "react";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

import "./Movies.css"

function Movies({onCardDeleteClick, onMovieSaveClick, movieList, isShort, setIsShort, savedMovieList, isLoading, searchText, setSearchText}) {

  const handleSearchButtonClick = React.useCallback(
    (input) => {
      setSearchText(input);
    },
    [setSearchText]
  );


  return (
    <main className="movies-list">
      <Search
        isShort={isShort}
        setIsShort={setIsShort}
        searchText={searchText}
        setSearchText={setSearchText}
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

export default Movies;