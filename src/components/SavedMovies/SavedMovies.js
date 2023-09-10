import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

import "./SavedMovies.css"

function SavedMovies({onCardDeleteClick, onMovieSaveClick, movieList, isShort, setIsShort, isLoading}) {
  return (
    <main className="saved-movies">
      <Search
        isShort={isShort}
        setIsShort={setIsShort}
      />
      <MoviesCardList
        movieList={movieList} 
        onMovieSaveClick={onMovieSaveClick}
        onCardDeleteClick={onCardDeleteClick}
        isLoading={isLoading}
      />
      <Footer/>
    </main>
  );
}

export default SavedMovies;