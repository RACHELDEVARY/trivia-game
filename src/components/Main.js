import React from 'react'
import { useNavigate } from "react-router-dom";



export const Main = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/triviaGame")
    }
    return (
        <div>
            <h1>Wellcome to the trivia game!!</h1>
            <button onClick={handleClick}>get started</button>
        </div>
    )
}