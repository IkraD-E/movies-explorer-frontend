import React from "react";
import Footer from "../Footer/Footer";
import More from "../More/More";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

function Movies({onCardDeleteClick, onCardSaveClick, children, movieList}) {
  
  return (
    <main className="movies-list">
      {children}
      <Search/>
        <MoviesCardList
          movieList={movieList} 
          onCardSaveClick={onCardSaveClick}
          onCardDeleteClick={onCardDeleteClick}
        />
        <More/>
      <Footer/>
    </main>
    );
}

export default Movies;