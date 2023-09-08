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


import { cardList } from "../../utils/const";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [currentUser, setUserData] = React.useState({});
  const [movieList, setMovies] = React.useState(cardList);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();
  
  const [userEmail, setUserEmail] = React.useState("");
  function handleSetUserEmail(email) {
    setUserEmail(email);
  }

  function handleTokenCheck() {
    mainApi.checkToken()
        .then(res => res.json())
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
    isLoggedIn && Promise.all([mainApi.getUserDataFromServer(), moviesApi.getMoviesFromServer()])
      .then(([userData, movies]) => {
          setUserData(userData);
          setMovies(movies.reverse());
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
      .then((res => res.json()))
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
  function onMovieSaveClick(card) {
    const isLiked = card.owner.some(i => i._id === currentUser._id);

    moviesApi.changeSaveCardStatus(card.id, isLiked)
      .then((newCard) => {
        setMovies((state) => state.map((oldCard) => oldCard.id === card.id ? newCard : oldCard));
      })
      .catch(err => console.log(`Ошибка при добавлении лайка: ${err.status}`));
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
                >
                </AuthForm>
              }
            />
            <Route
              path="/movies"
              element={<ProtectedRoute
                element={Movies}
                movieList={movieList}
                isLoggedIn={isLoggedIn}
                onMovieSaveClick={onMovieSaveClick}
              />}
            />
            <Route
              path="/saved-movies"
              element={<ProtectedRoute
                element={SavedMovies}
                movieList={movieList}
                isLoggedIn={isLoggedIn}
                onMovieSaveClick={onMovieSaveClick}
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