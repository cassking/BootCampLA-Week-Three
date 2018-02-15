import React from 'react';

const Question = props => {
  
  return (
    <div>
    <div className="question">
      <div key={props.id} id={props.id} className={props.classNameButton} onClick={props.clickButton}>+</div>
      <h2 className="header">{props.question}</h2>
    </div>
    <ul className="faq">
        <li>
          <p className={props.className}>{props.answer}</p>
          <div className="sexy_line"></div>
        </li>
      </ul>
    </div>

  )
}

export default Question;
