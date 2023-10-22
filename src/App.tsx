import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {Routes, Route, Link} from "react-router-dom";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classnames/classnames";
const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading ... </div>}>
               <Routes>
                   <Route path={'/about'} element={<AboutPageAsync />} />
                   <Route path={'/'} element={<MainPageAsync />}/>
               </Routes>
            </Suspense>
        </div>
    )
}

export default App;