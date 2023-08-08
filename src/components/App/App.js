import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";

import "./App.css"

import Landing from "../Landing/Landing";
import AuthForm from "../AuthForm/AuthForm";

import { api } from '../../utils/Api';
import { auth } from "../../utils/Auth";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";


import { cardList } from "../../utils/const";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  const [currentUser, setUserData] = React.useState({});
  const [movieList, setMovies] = React.useState(cardList);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = React.useState("");
  function handleSetUserEmail(email) {
    setUserEmail(email);
  }

  const [serverCallbackStatus, setServerCallbackStatus] = React.useState(false);
  function handleSetServerCallbackStatus(res) {
    setServerCallbackStatus(res.ok);
  }

  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  function handleOpenInfoTooltipPopup() {
    setIsInfoTooltipPopupOpen(true);
  }

  function handleTokenCheck() {
    auth.checkToken()
        .then(res => res.json())
        .then(res => {
          if (res) {
            setLoggedIn(true);
            handleSetUserEmail(res.email);
            navigate("/", {replace: true});
          }
        })
        .catch(err => console.log(`Ошибка проверки токена: ${err}`));
  }

  
  function handleRegisterSubmit(email, password) {
    auth.addNewUserToServer(email, password)
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
    auth.handleUserAuthorization(email, password)
      .then((res => res.json()))
      .then((data) =>{
        if (data){
          setLoggedIn(true);
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
    auth.logout();
    setLoggedIn(false);
    navigate('/signin');
  }

  React.useEffect(() => {
    loggedIn && Promise.all([api.getUserDataFromServer(), api.getMoviesFromServer()])
      .then(([userData, movies]) => {
          setUserData(userData);
          setMovies(movies.reverse());
    })
      .catch(err => console.log(err));
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Routes>
            <Route
              path="/"
              element={
                <Landing>
                  <Header/>
                </Landing>
              }
            />
            <Route
              path="/signin"
              element={
                <AuthForm 
                  onSubmit={handleLogInSubmit} 
                  formName="Рады видеть!" 
                  btnText="Войти" 
                  afterWords="Ещё не зарегистрированы?&nbsp;"
                  linkText="Регистрация"
                  link="/signup"
                >
                  <Header/>
                </AuthForm>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthForm 
                  onSubmit={handleRegisterSubmit} 
                  isRegistration={true}
                  formName="Добро пожаловать!" 
                  btnText="Зарегистрироваться"
                  afterWords="Уже зарегистрированы?&nbsp;"
                  linkText="Войти"
                  link="/signin"
                >
                  <Header/>
                </AuthForm>
              }
            />
            <Route
              path="/movies"
              element={
                <Movies
                  movieList={movieList}>
                  <Header/>
                </Movies>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  movieList={movieList}>
                  <Header/>
                </SavedMovies>
              }
            />
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