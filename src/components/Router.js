import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './Main.js'
import { TriviaGame } from './TriviaGame.js';




const Router = () => {

    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/triviaGame" element={<TriviaGame />} />
            </Routes>
        </BrowserRouter >
    )
}

export default Router