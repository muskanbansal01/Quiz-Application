import React from 'react';

function ProgressBar({ currentQuestion, totalQuestions }) {
  const progress = ((currentQuestion ) / totalQuestions) * 100;
  return (
    <div style={{width:'30%',padding:'0px 60px',marginLeft:'auto',marginTop:'auto'}}>
      <div className="progress-bar" style={{backgroundColor:'white',borderRadius:'15px',overflow:'hidden'}}>
        <div
          className="progress"
          style={{ width: `${progress}%` , height:10 , backgroundColor:'#346beb'}}
        ></div>
      </div>
      Quiz Completion Progress
    </div>
  );
}

export default ProgressBar;
