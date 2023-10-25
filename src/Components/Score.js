import React from 'react';

function Score({ score, totalQuestions }) {
  return (
    <div>
      <p>Score: {score}/{totalQuestions}</p>
    </div>
  );
}

export default Score;
