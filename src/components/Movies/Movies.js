import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";



function Movies({onCardDeleteClick, onCardSaveClick, children}) {
  const cardsList = [ 
    {
      "country": "russ",
      "director": "russ",
      "duration": 1230,
      "year": "russ",
      "description": "russ",
      "image": "https://img2.joyreactor.cc/pics/post/full/%D0%9A%D0%B0%D0%BB%D1%8F%D0%BA%D0%B8-%D0%9C%D0%B0%D0%BB%D1%8F%D0%BA%D0%B8-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-%D1%81%D0%BA%D0%B5%D1%82%D1%87%D0%B8-%D0%9A%D0%B0%D0%BB%D1%8F%D0%BA--%D0%9C%D0%B0%D0%BB%D1%8F%D0%BA-8055795.png",
      "trailerLink": "russ",
      "thumbnail": "russ",
      "owner": [
        "russ",
        "12"
      ],
      "movieId": "1",
      "nameRU": "russ",
      "nameEN": "russ",
    },
    {
      "country": "russ",
      "director": "russ",
      "duration": "russ",
      "year": "russ",
      "description": "russ",
      "image": "https://img2.joyreactor.cc/pics/post/full/%D0%9A%D0%B0%D0%BB%D1%8F%D0%BA%D0%B8-%D0%9C%D0%B0%D0%BB%D1%8F%D0%BA%D0%B8-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-%D1%81%D0%BA%D0%B5%D1%82%D1%87%D0%B8-%D0%9A%D0%B0%D0%BB%D1%8F%D0%BA--%D0%9C%D0%B0%D0%BB%D1%8F%D0%BA-8055795.png",
      "trailerLink": "russ",
      "thumbnail": "russ",
      "owner": [
        "russ",
        "12"
      ],
      "movieId": "2",
      "nameRU": "russ",
      "nameEN": "russ",
    },
  ]

  return (
    <>
      {children}
      <Search/>
      <MoviesCardList
        cardsList={cardsList} 
        onCardSaveClick={onCardSaveClick}
        onCardDeleteClick={onCardDeleteClick}
      />
      <Footer/>
    </>
    );
}

export default Movies;