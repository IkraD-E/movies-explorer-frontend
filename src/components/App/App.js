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

function App() {
  const [currentUser, setUserData] = React.useState({});
  const [movieList, setMovies] = React.useState(cardList);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const navigate = useNavigate();
  
  const [userEmail, setUserEmail] = React.useState("");
  function handleSetUserEmail(email) {
    setUserEmail(email);
  }

  function handleTokenCheck() {
    moviesApi.checkToken()
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
    isLoggedIn && Promise.all([mainApi.getUserDataFromServer(), mainApi.getMoviesFromServer()])
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

  function handleRegisterSubmit(email, password) {
    moviesApi.addNewUserToServer(email, password)
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

  function handleLogInSubmit(email, password) {
    moviesApi.handleUserAuthorization(email, password)
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
    moviesApi.logout();
    setIsLoggedIn(false);
    navigate('/signin');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header isLoggedIn={isLoggedIn}/>
          <Routes>
            <Route
              path="/"
              element={
                <Main>
                </Main>
              }
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
                >
                </AuthForm>
              }
            />
            <Route
              path="/movies"
              element={
                <Movies
                  movieList={movieList}
                >
                </Movies>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  movieList={movieList}
                >
                </SavedMovies>
              }
            />
            <Route
              path="/profile"
              element={
                <Profile>
                </Profile>
              }
            ></Route>
            <Route
              path="*"
              element={<NotFound/>}
            />
          </Routes>
        </div>
    </div>
    </CurrentUserContext.Provider>
    
  );
}

export default App;