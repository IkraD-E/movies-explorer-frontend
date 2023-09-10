import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

function Movies({onCardDeleteClick, onMovieSaveClick, movieList, isShort, setIsShort, savedMovieList}) {

  return (
    <main className="movies-list">
      <Search
        isShort={isShort}
        setIsShort={setIsShort}
      />
        <MoviesCardList
          movieList={movieList}
          savedMovieList={savedMovieList}
          onMovieSaveClick={onMovieSaveClick}
          onCardDeleteClick={onCardDeleteClick}
        />
      <Footer/>
    </main>
    );
}

export default Movies;