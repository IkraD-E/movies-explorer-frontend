import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";

import "./App.css"

import Main from "../Main/Main";
import AuthForm from "../AuthForm/AuthForm";

import { mainApi } from '../../utils/MainApi';
import { moviesApi } from "../../utils/MoviesApi";

import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";

import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { movieUrl } from "../../consts/urls";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setUserData] = React.useState({});

  const [beatFilmsMoviesList, setBeatFilmsMoviesList] = React.useState(null);
  const [savedMovieList, setSavedMovies] = React.useState([]);
  
  const [beatFilmsIsShort, setBeatFilmsIsShort] = React.useState(false);
  function tugleisBeatFilmsIsShort() {
    setBeatFilmsIsShort(!beatFilmsIsShort)
  }
  const [savedMoviesIsShort, setSavedMoviesIsShort] = React.useState(false);
  function tugleisSavedFilmsIsShort() {
    setSavedMoviesIsShort(!beatFilmsIsShort)
  }
  const [searchValue, setSearchValue] = React.useState({});
  const navigate = useNavigate();
  
  const [userEmail, setUserEmail] = React.useState("");
  function handleSetUserEmail(email) {
    setUserEmail(email);
  }
  function movieEdit(moviesData) {
    const newMoviesData = moviesData.map((movie) => {
        const editedMovie = {
          ...movie,
          movieId: movie.id,
          image: movieUrl + movie.image.url,
          thumbnail: movieUrl + movie.image.formats.thumbnail.url,
        };
        delete editedMovie.id;
        delete editedMovie.created_at;
        delete editedMovie.updated_at;

        return editedMovie;
      }
    )
    return newMoviesData;
  }

  function handleTokenCheck() {
    mainApi.checkToken()
        .then(res => {
          if (res) {
            setIsLoggedIn(true);
            handleSetUserEmail(res.email);
            navigate("/", {replace: true});
          }
        })
        .catch(err => console.log(`Ошибка проверки токена: ${err}`));
  }

  React.useEffect(() => {
    handleTokenCheck();
  }, [])

  React.useEffect(() => {
    if (!beatFilmsMoviesList) {
      if ('beatFilmsMovies' in localStorage) {
        const filmList = movieEdit(JSON.parse(localStorage.getItem('beatFilmsMovies')));
        setBeatFilmsMoviesList(filmList);
      } else {
        moviesApi
          .getMoviesFromServer()
          .then((movies) => {
            const filmList = movieEdit(movies);
            setBeatFilmsMoviesList(filmList);
            localStorage.setItem('beatFilmsMovies', JSON.stringify(movies));
          })
          .catch((err) => console.log("Ошибка получения карточек"))
      }
    }
  }, [beatFilmsMoviesList])

  React.useEffect(() => {
    isLoggedIn && Promise.all(
        [
          mainApi.getUserDataFromServer(), 
          moviesApi.getMoviesFromServer(),
        ])
      .then(([userData, movies ]) => {
        setUserData(userData);
        // setBeatFilmsMoviesList(movies.reverse());
    })
      .catch(err => console.log(err));
  }, [isLoggedIn]);

  React.useEffect(() => {
    isLoggedIn && mainApi.getSavedMoviesFromServer()
      .then((movies) => {
        setSavedMovies(movies.reverse());
    })
      .catch(err => console.log(err));
  }, [isLoggedIn]);

  const [serverCallbackStatus, setServerCallbackStatus] = React.useState(false);
  function handleSetServerCallbackStatus(res) {
    setServerCallbackStatus(res.ok);
  }

  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  function handleOpenInfoTooltipPopup() {
    setIsInfoTooltipPopupOpen(true);
  }

  function handleRegisterSubmit({email, password, name}) {
    mainApi.addNewUserToServer(email, password, name)
      .then((res) =>{
        handleSetServerCallbackStatus(res);
        handleOpenInfoTooltipPopup();
      })
      .catch(err => {
        handleSetServerCallbackStatus(err);
        handleOpenInfoTooltipPopup();
        console.log(`Ошибка добавления нового пользователя на сервер: ${err.status}`);
      });
  }

  function handleLogInSubmit({email, password}) {
    mainApi.handleUserAuthorization(email, password)
      .then((data) =>{
        if (data){
          setIsLoggedIn(true);
          navigate("/", {replace: true});
          handleSetUserEmail(email);
          return data;
        }
      })
      .catch(err => {
        handleSetServerCallbackStatus(err);
        handleOpenInfoTooltipPopup();
        console.log(`Ошибка входа пользователя: ${err}`);
      });
  }

  function handleSignOut() {
    mainApi.logout();
    setIsLoggedIn(false);
    navigate('/');
  }

  function closeAllPopups() {
    setIsInfoTooltipPopupOpen(false);
  }
  
  function onMovieSaveClick(movieData) {
    const isSaved = savedMovieList.some(saved => saved.movieId === movieData.movieId);
    if (!isSaved) {
      mainApi
        .addNewMovieToServer(movieData)
        .then((savedMovie) => {
          console.log(savedMovie);
          setSavedMovies([savedMovie, ...savedMovieList])
          console.log(savedMovieList);
        })
        .catch(err => console.log(`Ошибка при добавлении лайка: ${err.status}`));
    } else {
      const savedMovieId = savedMovieList
        .find((item) => item.movieId === movieData.movieId)._id;
      mainApi
        .deleteSaveCardStatus(savedMovieId)
        .then(() => {
          setSavedMovies((movies) =>
            movies.filter((movie) => movie.movieId !== movieData.movieId)
          );
        })
        .catch(err => console.log(`Ошибка при удалении лайка: ${err.status}`));
    }
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header isLoggedIn={isLoggedIn}/>
          <Routes>
            <Route
              path="/"
              element={<Main/>}
            />
            <Route
              path="/signin"
              element={
                <AuthForm 
                  formName="Рады видеть!" 
                  btnText="Войти" 
                  afterWords="Ещё не зарегистрированы?&nbsp;"
                  linkText="Регистрация"
                  link="/signup"
                  onSubmit={handleLogInSubmit}
                  isLoggedIn={isLoggedIn}
                >
                </AuthForm>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthForm 
                  isRegistration={true}
                  formName="Добро пожаловать!" 
                  btnText="Зарегистрироваться"
                  afterWords="Уже зарегистрированы?&nbsp;"
                  linkText="Войти"
                  link="/signin"
                  onSubmit={handleRegisterSubmit}
                  isLoggedIn={isLoggedIn}
                >
                </AuthForm>
              }
            />
            <Route
              path="/movies"
              element={<ProtectedRoute
                element={Movies}
                movieList={beatFilmsMoviesList}
                savedMovieList={savedMovieList}
                isLoggedIn={isLoggedIn}
                onMovieSaveClick={onMovieSaveClick}
                isShort={beatFilmsIsShort}
                setIsShort={tugleisBeatFilmsIsShort}
              />}
            />
            <Route
              path="/saved-movies"
              element={<ProtectedRoute
                element={SavedMovies}
                movieList={savedMovieList}
                isLoggedIn={isLoggedIn}
                onMovieSaveClick={onMovieSaveClick}
                isShort={savedMoviesIsShort}
                setIsShort={tugleisSavedFilmsIsShort}
              />}
            />
            <Route
              path="/profile"
              element={<ProtectedRoute
                element={Profile}
                isLoggedIn={isLoggedIn}
                signOut={handleSignOut}
              />}
            />
            <Route
              path="*"
              element={<NotFound/>}
            />
          </Routes>
          <InfoTooltip 
            isOpen={isInfoTooltipPopupOpen}
            onClose={closeAllPopups}
            serverCallbackStatus={serverCallbackStatus}
          />
        </div>
    </div>
    </CurrentUserContext.Provider>
    
  );
}

export default App;