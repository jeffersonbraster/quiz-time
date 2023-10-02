import { useState } from "react";
import Header from "./components/Header";
import QuestionSection from "./components/QuestionSection";
import Footer from "./components/Footer";
import ResultSection from "./components/ResultSection";

import {questions} from "./data.js";

const INITIAL_SCORE = 0;

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [score, setScore] = useState(INITIAL_SCORE);

  const [showResult, setShowResult] = useState(false);

  const { question, options, correctAnswer } = questions[currentQuestion];

  const handleOptionClick = (index) => {
    setSelectAnswerIndex(index)
  };

  const handleNextButtonClick = () => {
    const isCorrectAnswer = options[selectedAnswerIndex].text === correctAnswer;
    console.log(isCorrectAnswer)

    setScore((currentState) => isCorrectAnswer ? currentState + 1 : currentState);

    const totalNumberOfQuestions = questions.length - 1;

    if(currentQuestion !== totalNumberOfQuestions) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }

    setSelectAnswerIndex(null);
  }

  const handleTryAgainButton = () => {
    setScore(INITIAL_SCORE);
    setCurrentQuestion(0);
    setShowResult(false);    
  }

  return (
    <div className="flex flex-col h-full pt-[62px] max-w-[842px] m-auto gap-[69px]">
      <Header currentAnswers={score} />

      <main>
        {!showResult ? (
          <>
              <QuestionSection
              question={question}
              options={options}
              correctAnswer={correctAnswer}
              selectAnswerIndex={selectedAnswerIndex}
              handleOptionClick={handleOptionClick}
              />

            <Footer currentQuestion={currentQuestion} questionsLength={questions.length} handleNextButtonClick={handleNextButtonClick} selectedAnswerIndex={selectedAnswerIndex} />
          </>
        ) : (
          <ResultSection correctAnswers={score} handleTryAgainButton={handleTryAgainButton} questionsLength={questions.length} />
        )}
      </main>      
    </div>
  );
}

export default App;
