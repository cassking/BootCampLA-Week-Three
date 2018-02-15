import React from 'react';

const Destination = props => {

  return (
        <li key={props.id} id={props.id}
          onClick={props.destinationClick} className={props.className}>
          {props.id}{props.name}{props.selectedText}
        </li>
  )
}

export default Destination;
