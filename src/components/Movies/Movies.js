import React from "react";
import Footer from "../Footer/Footer";
import More from "../More/More";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

function Movies({onCardDeleteClick, onCardSaveClick, children, movieList}) {
  
  return (
    <>
      {children}
      <Search/>
        <MoviesCardList
          movieList={movieList} 
          onCardSaveClick={onCardSaveClick}
          onCardDeleteClick={onCardDeleteClick}
        />
        <More/>
      <Footer/>
    </>
    );
}

export default Movies;