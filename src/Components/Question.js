import React,{useState} from 'react';
function Question({ question, onAnswerSubmit,correctAnswer }) {

const [answer,setAnswer] = useState("");
const [isfeedback,setFeedback] = useState(false);
const onSubmit = (option)=>{

setTimeout(()=>{
  onAnswerSubmit(option);
  setFeedback(false);
},2000)

  
  setFeedback(true);
  
}
  return (
    <div>
      <h2>{question.question}</h2>
      <ul style={{listStyleType : 'none'}}>
        {question.options.map((option, index) => (
          <li key={index} >
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={answer === option}
                 onChange={() => setAnswer(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      {isfeedback ? (
        <div>
          <p>Correct answer is {correctAnswer}</p>
          <p>Your answer is = {answer} </p>
        </div>
      ):<button onClick={() => onSubmit(answer)} style={{border:'none',borderRadius: '5px',
      cursor: 'pointer',padding: '10px 20px'}}>Submit</button>}
      
    </div>
  );
}

export default Question;
