import React, { useState, useContext } from 'react'
import { Questions } from '../Helper/QuestionsBank'
import { QuizContext } from '../Helper/Context';
import EndScreen from './EndScreen';
import "../App.css"

const Quiz = () => {

  const { score, setScore , setGameState} = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState("");
  const {desc , setDesc} = useState("");


  const nextQuestion = () => {
    if (Questions[currQuestion].answer == optionChoosen) {
      setScore(score + 1);
    }
    alert(score);
    setCurrQuestion(currQuestion + 1);
  }

  const finishQuiz = () => {
    if (Questions[currQuestion].answer == optionChoosen) {
      setScore(score + 1);
    }
    setGameState("endScreen")
  }

  const showDesc = () => {

  }

  return (
    <>
      <div className='quiz'>
        <h1>{Questions[currQuestion].promt}</h1>
        <div className="options">
          <button onClick={() => setOptionChoosen("A")}>{Questions[currQuestion].optionA}</button>
          <button onClick={() => setOptionChoosen("B")}>{Questions[currQuestion].optionB}</button>
          <button onClick={() => setOptionChoosen("C")}>{Questions[currQuestion].optionC}</button>
          <button onClick={() => setOptionChoosen("D")}>{Questions[currQuestion].optionD}</button>
        </div>
        {currQuestion == Questions.length - 1 ? (
          <button onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button className='nextQues' onClick={nextQuestion}>Next question</button>
        )}
        <button onClick={showDesc}>Show Description</button>

      </div>
    </>
  )
}

export default Quiz