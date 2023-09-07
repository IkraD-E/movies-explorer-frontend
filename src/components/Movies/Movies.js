import React from "react";
import Footer from "../Footer/Footer";
import More from "../More/More";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

function Movies({onCardDeleteClick, onCardSaveClick, movieList}) {
  const movieCount = 3;
  const notNeedMore = movieList.length < movieCount;

  
  return (
    <main className="movies-list">
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
    );
}

export default Movies;