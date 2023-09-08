import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

function Movies({onCardDeleteClick, onMovieSaveClick, movieList}) {

  return (
    <main className="movies-list">
      <Search/>
        <MoviesCardList
          movieList={movieList}
          onMovieSaveClick={onMovieSaveClick}
          onCardDeleteClick={onCardDeleteClick}
        />
      <Footer/>
    </main>
    );
}

export default Movies;