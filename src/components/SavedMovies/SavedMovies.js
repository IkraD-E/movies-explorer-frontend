import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

import "./SavedMovies.css"

function SavedMovies({onCardDeleteClick, onMovieSaveClick, children, movieList}) {
  return (
    <>
      {children}
      <main className="saved-movies">
        <Search/>
        <MoviesCardList
          movieList={movieList} 
          onMovieSaveClick={onMovieSaveClick}
          onCardDeleteClick={onCardDeleteClick}
        />
        <Footer/>
      </main>
    </>
  );
}

export default SavedMovies;