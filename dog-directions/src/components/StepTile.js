import React from 'react';

const StepTile = props => {
//DONT FORGET TO USE PROPS HERE, SINCE COMING FROM PARENT
//need to define this in child to not trigger it on mount
//i _think_
  let handleClick = () => {
    props.setSelectedStep(props.id)
  }
  return(
    <li className={props.className} onClick={handleClick}>{props.step}</li>
  )
}

export default StepTile;
