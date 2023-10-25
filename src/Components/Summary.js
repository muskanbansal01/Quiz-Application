import React from 'react';

function Summary({ userAnswers, quizData, score, restartQuiz }) {
  return (
    <div style={{marginLeft:'10px'}}>
      <h2>Quiz Summary</h2>
      {quizData.map((question, index) => (
        <div key={index}>
          <p>Question {index + 1}: {question.question}</p>
          <p>Your Answer: {userAnswers[index]}</p>
          <p>Correct Answer: {question.correctAnswer}</p>
        </div>
      ))}
      <p>Your Final Score: {score}/{quizData.length}</p>
      <button onClick={restartQuiz} style={{border:'none',borderRadius: '5px',
      cursor: 'pointer',padding: '10px 20px',marginBottom:'15px'}}>Restart Quiz</button>
    </div>
  );
}

export default Summary;
