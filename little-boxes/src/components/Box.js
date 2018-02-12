import React from 'react';


const Box = props => {
  let boxClass = `box ${props.boxClass}`
  let content
  if(props.paragraph){
    content = <p>{props.paragraph}</p>
  }
  if(props.src) {
    content = <img alt={props.alternateText} src={props.src} />
  }
  if(props.body) {
    content = <p>{props.body}</p>
  }

  return (
    <div className={boxClass}>
      <h1>{props.header}</h1>
     {content}
    </div>

  )
}


export default Box;
