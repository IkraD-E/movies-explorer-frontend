import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";

import "./App.css"

import Main from "../Main/Main";
import AuthForm from "../AuthForm/AuthForm";

import { api } from '../../utils/Api';
import { auth } from "../../utils/Auth";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";


import { cardList } from "../../utils/const";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";

function App() {
  const [currentUser, setUserData] = React.useState({});
  const [movieList, setMovies] = React.useState(cardList);

  const [navTabOpen, setNavTab] = React.useState(false);
  function tuggleClickNavTab() {
    setNavTab(!navTabOpen);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Routes>
            <Route
              path="/"
              element={
                <Main>
                  <Header
                    navTabOpen={navTabOpen}
                    tuggleClickNavTab={tuggleClickNavTab}
                  >
                  </Header>
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
                  <Header/>
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
                  <Header/>
                </AuthForm>
              }
            />
            <Route
              path="/movies"
              element={
                <Movies
                  movieList={movieList}
                >
                  <Header
                    navTabOpen={navTabOpen}
                    tuggleClickNavTab={tuggleClickNavTab}
                  >
                  </Header>
                </Movies>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  movieList={movieList}>
                  <Header
                    navTabOpen={navTabOpen}
                    tuggleClickNavTab={tuggleClickNavTab}
                  >
                  </Header>
                </SavedMovies>
              }
            />
            <Route
              path="/profile"
              element={
                <Profile>
                <Header
                  navTabOpen={navTabOpen}
                  tuggleClickNavTab={tuggleClickNavTab}
                >
                </Header>
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