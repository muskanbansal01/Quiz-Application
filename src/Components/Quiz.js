import React, { useState } from 'react';
import Question from './Question';
import Timer from './Timer';
import Summary from './Summary';
import ProgressBar from './ProgressBar';
import { quizData } from '../quizData';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));
  const [score, setScore] = useState(0);
  const [resettimer,setResettimer] = useState(false);
  const [isQuizCompleted , setisQuizCompleted] = useState(false);


  const handleAnswerSubmit = (selectedAnswer) => {
    console.log("answersubmitted");
    setResettimer(true);
const correctAnswer = quizData[currentQuestion].correctAnswer;
    const newScore = selectedAnswer === correctAnswer ? score + 1 : score;

    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = selectedAnswer;
      return updatedAnswers;
    });

    setScore(newScore);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
   else{
    setisQuizCompleted(true);
   }

  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(Array(quizData.length).fill(null));
    setScore(0);
    setisQuizCompleted(false);
  };

  const handleNext = ()=>{
    if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
     else{
      setisQuizCompleted(true);
     }
  }
  const totalQuestions = quizData.length;
  //const isQuizCompleted = currentQuestion < totalQuestions;

  return (
    <div style={{ marginLeft: '20px' }}>
      {isQuizCompleted ? (
        <Summary
          userAnswers={userAnswers}
          quizData={quizData}
          score={score}
          restartQuiz={restartQuiz}
        />
      ) : (
        <div>
          <ProgressBar currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
          <Timer 
          onTimerEnd={handleNext}
          triggertimer = {resettimer}
          setResettimer={setResettimer}/>
          <Question
            question={quizData[currentQuestion]}
            onAnswerSubmit={handleAnswerSubmit}

            correctAnswer={quizData[currentQuestion]?.correctAnswer}
          />
          
        </div>
      )}
    </div>
  );
}

export default Quiz;
