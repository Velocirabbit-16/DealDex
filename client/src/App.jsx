import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './container/Main.jsx';
import FillerPage from './component/FillerPage.jsx';
import RegisterPage from './component/RegisterPage.jsx';
import LoginPage from './component/LoginPage.jsx';
import { UserContextProvider } from './UserContext.js';
import Navigation from "./container/Navigation.jsx"

export default function App() {
  //navbar here, above h1
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Navigation />}>

        <Route index element={<Main />} />  

        </Route>
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/login'} element={<LoginPage />} />
      </Routes>
    </UserContextProvider>
  );
}
