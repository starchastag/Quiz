import React,{useContext} from 'react'
import { QuizContext } from '../Helper/Context'
// import { QuizContext } from '../Helper/Context';



const Mainmenu = () => {
    const {gameState,setGameState} = useContext(QuizContext);
  return (
   <>
    <div className="mainmenu">
    
        <button onClick={() => {
            setGameState("quiz");
        }}>Start Quiz</button>

    </div>
   </>
  )
}

export default Mainmenu