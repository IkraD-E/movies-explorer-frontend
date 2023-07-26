import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css"

import Header from "../Header/Header";
import Landing from "../Landing/Landing";
function App() {
    const [currentUser, setUserData] = React.useState({});
    return (
      <div className="body">
        <div className="page">
          <Header/>
          <Routes>
            <Route
              path="/"
              element={<Landing/>}
            />
            {/* <Route
              path="/signin"
              element={
                <AuthForm 
                  onSubmit={handleLogInSubmit} 
                  formName="Вход" 
                  btnText="Войти" 
                  afterWords="Ещё не зарегистрированы?&nbsp;"
                  linkText="Регистрация"
                  link="/signup"
                />}
            />
            <Route
              path="/signup"
              element={
                <AuthForm 
                  onSubmit={handleRegisterSubmit} 
                  formName="Регистрация" 
                  btnText="Зарегистрироваться"
                  afterWords="Уже зарегистрированы?&nbsp;"
                  linkText="Войти"
                  link="/signin"
                /> }
            /> */}
          </Routes>
        </div>
      </div>
    );
}

export default App;