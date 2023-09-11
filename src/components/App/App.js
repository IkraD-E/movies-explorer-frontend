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
  const [beatFilmsSearchText, setBeatFilmsSearchText] = React.useState(
    localStorage.getItem('beatFilmsSearchText') ?? '' 
  );
  function setBeatFilmsSearchTextInStorage(data) {
    setSavedMoviesSearchText(data);
    localStorage.setItem('beatFilmsSearchText', data)
  }

  const [beatFilmsIsShort, setBeatFilmsIsShort] = React.useState(
    localStorage.getItem('beatFilmsIsShort') ?? '' 
  );

  function tugleisBeatFilmsIsShort() {
    localStorage.setItem('beatFilmsIsShort', JSON.stringify(!beatFilmsIsShort));
    setBeatFilmsIsShort(!beatFilmsIsShort)
  }

  const [savedMovieList, setSavedMovies] = React.useState([]);
  const [savedMoviesSearchText, setSavedMoviesSearchText] = React.useState('');
  function setSavedMoviesSearchTextInStorage(data) {
    setSavedMoviesSearchText(data);
    localStorage.setItem('savedSearchText', data)
  }
  const [savedMoviesIsShort, setSavedMoviesIsShort] = React.useState(
    localStorage.getItem('savedMoviesIsShort') ?? '' 
  );
  function tugleisSavedFilmsIsShort() {
    localStorage.setItem('savedMoviesIsShort', JSON.stringify(!savedMoviesIsShort));
    setSavedMoviesIsShort(!savedMoviesIsShort)
  }
  const navigate = useNavigate();
  

  const [isLoading, setIsLoading] = React.useState(false);
  const [isFetching, setIsFetching] = React.useState(false);

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
        }
      })
      .catch(err => {
        setIsLoggedIn(false)
        console.log(`Ошибка проверки токена: ${err}`)
      });
  }

  React.useEffect(() => {
    handleTokenCheck();
  }, [])

  React.useEffect(() => {
    if (!beatFilmsMoviesList) {
      if ('beatFilmsMovies' in localStorage) {
        const filmList = movieEdit(JSON.parse(localStorage.getItem('beatFilmsMovies')));
        setBeatFilmsMoviesList(filmList);
        setBeatFilmsSearchText(localStorage.getItem('beatFilmsSearchText'));
      } else {
        setIsLoading(true);
        moviesApi
          .getMoviesFromServer()
          .then((movies) => {
            const filmList = movieEdit(movies);
            setBeatFilmsMoviesList(filmList);
            localStorage.setItem('beatFilmsMovies', JSON.stringify(movies));
          })
          .catch((err) => console.log("Ошибка получения карточек"))
          .finally(() => setIsLoading(false));
      }
    }
  }, [beatFilmsMoviesList])

  React.useEffect(() => {
    isLoggedIn && Promise.all(
        [
          mainApi.getUserDataFromServer(), 
        ])
      .then(([userData]) => {
        setUserData(userData);
        localStorage.setItem('beatFilmsSearchText', beatFilmsSearchText);
        localStorage.setItem(
          'beatFilmsIsShort',
          JSON.stringify(beatFilmsIsShort)
        );
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
    setIsFetching(true);
    mainApi.addNewUserToServer(email, password, name)
      .then((res) =>{
        setIsLoggedIn(true);
        handleSetServerCallbackStatus(res);
        navigate("/movies", {replace: true});
      })
      .catch(err => {
        handleSetServerCallbackStatus(err);
        handleOpenInfoTooltipPopup();
        console.log(`Ошибка добавления нового пользователя на сервер: ${err.status}`);
      })
      .finally(() => setIsFetching(false));
  }

  function handleLogInSubmit({email, password}) {
    setIsFetching(true);
    mainApi.handleUserAuthorization(email, password)
      .then((data) =>{
        if (data){
          setIsLoggedIn(true);
          navigate("/movies", {replace: true});
          return data;
        }
      })
      .catch(err => {
        handleSetServerCallbackStatus(err);
        handleOpenInfoTooltipPopup();
        console.log(`Ошибка входа пользователя: ${err}`);
      })
      .finally(() => setIsFetching(false));
  }

  function handleSignOut() {
    mainApi.logout();
    setIsLoggedIn(false);
    setBeatFilmsMoviesList("");
    setBeatFilmsMoviesList("");
    setBeatFilmsSearchText("");
    setSavedMoviesIsShort("");
    setSavedMoviesSearchText("");
    setSavedMoviesIsShort("");
    navigate('/');
    setUserData("");
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
          setSavedMovies([savedMovie, ...savedMovieList])
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
  const filtredMovies = React.useCallback((movies, searchText, isShort) => {
    if (searchText === null) {
      localStorage.setItem('beatFilmsSearchText', "")
      console.log(localStorage.getItem('beatFilmsSearchText'))
      searchText = localStorage.getItem('beatFilmsSearchText');
      
    }
    if (!movies) {
      return null;
    }
    return movies.filter(
      (movie) =>
        (isShort ? movie.duration <= 40 : movie) &&
        movie.nameRU.toLowerCase().includes(searchText.toLowerCase())
    );
  }, []);

  function handleProfileSubmit({ name, email }){
    setIsFetching(true);
    console.log(name, email);
    mainApi
      .setUserInfo(name, email)
      .then((userData) => {
        setUserData({
          name: userData.name,
          email: userData.email,
        });
        isInfoTooltipPopupOpen(true);
      })
      .catch((err) => {
        if (err === 409) {
          console.log(`Пользователь с указанной почтой уже существует: ${err}`);
        } else {
          console.log(`Ошибка: ${err}`);
        }
      })
      .finally(() => setIsFetching(false));
  };
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
                  isFetching={isFetching}
                  setIsFetching={setIsFetching}
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
                  isFetching={isFetching}
                  setIsFetching={setIsFetching}
                >
                </AuthForm>
              }
            />
            <Route
              path="/movies"
              element={<ProtectedRoute
                element={Movies}
                movieList={filtredMovies(
                  beatFilmsMoviesList,
                  beatFilmsSearchText,
                  beatFilmsIsShort,
                )}
                savedMovieList={savedMovieList}
                searchText={beatFilmsSearchText}
                setSearchText={setBeatFilmsSearchTextInStorage}
                isLoggedIn={isLoggedIn}
                onMovieSaveClick={onMovieSaveClick}
                isShort={beatFilmsIsShort}
                setIsShort={tugleisBeatFilmsIsShort}
                isLoading={isLoading}
              />}
            />
            <Route
              path="/saved-movies"
              element={<ProtectedRoute
                element={SavedMovies}
                movieList={filtredMovies(
                  savedMovieList,
                  savedMoviesSearchText,
                  savedMoviesIsShort,
                )}
                isLoggedIn={isLoggedIn}
                searchText={savedMoviesSearchText}
                setSearchText={setSavedMoviesSearchTextInStorage}
                onMovieSaveClick={onMovieSaveClick}
                isShort={savedMoviesIsShort}
                setIsShort={tugleisSavedFilmsIsShort}
                isLoading={isLoading}
              />}
            />
            <Route
              path="/profile"
              element={<ProtectedRoute
                element={Profile}
                isLoggedIn={isLoggedIn}
                signOut={handleSignOut}
                onSubmit={handleProfileSubmit}
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