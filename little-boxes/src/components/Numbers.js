import React from 'react';
{/*NOTE TO SELF: AFTER REFACTOR THIS NOT NEEDED*/}
const Numbers = props => {

  return (
    <div className='box numbers'>
      <h1>{props.header}</h1>
      <p>{props.body}</p>
    </div>
  )
}

export default Numbers;
