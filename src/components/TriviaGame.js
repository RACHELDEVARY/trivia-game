import React, { useEffect, useState } from 'react'
import './TriviaGame.css'
import { Answers } from './Answers'
import { Answer } from './Answer'
import { Score } from './Score'

export const TriviaGame = () => {
    const [sortedArr, setSortedArr] = useState([])
    const [index, setIndex] = useState(0)
    const [finish, setFinish] = useState(0)
    const [score, setScore] = useState(0)
    let data
    let answers
    const continueGame = (userAnsware) => {
        if (index < sortedArr.length - 1) {
            if (userAnsware == sortedArr[index].correct_answer) {
                setScore(score + 10)
            }
            setIndex(currentState => currentState + 1)
        }
        else {
            setFinish(1)
        }
    }

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch
                    ("https://opentdb.com/api.php?amount=10&type=multiple")
                data = await res.json();
                if (data) {
                    data.results.sort((a, b) => {
                        let x = a.difficulty.toLowerCase()
                        let y = b.difficulty.toLowerCase()
                        if (y == "hard" || y == "medium" && x == "easy")
                            return -1
                        if (x == "hard" || x == "medium" && y == "easy")
                            return 1
                        return 0

                    })
                    setSortedArr(data.results)
                }
            }
            catch (err) {
                console.log("error", err.message)
            }
        }
        getData()
    }, [])

    if (!sortedArr.length)
        return (
            <div className="trivia">
                <h1>Loading...</h1>
            </div>)
    else {
        answers = [...sortedArr[index].incorrect_answers]
        answers.push(sortedArr[index].correct_answer)
        // console.log("answers", answers)
        return (
            <div className="trivia">
                {!finish && <h1>{sortedArr[index].question}</h1>}
                {!finish && <Answers>
                    <Answer answer={answers[0]} continuegame={continueGame} />
                    <Answer answer={answers[1]} continuegame={continueGame} />
                    <Answer answer={answers[2]} continuegame={continueGame} />
                    <Answer answer={answers[3]} continuegame={continueGame} />
                </Answers>}
                {finish && <Score finalScore={score} />}
            </div>
        )
    }
}