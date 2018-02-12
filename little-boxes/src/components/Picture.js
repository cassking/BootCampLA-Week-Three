import React from 'react';
import List from './List'
{/*NOTE TO SELF: AFTER REFACTOR THIS NOT NEEDED*/}

const Picture = props => {

  return (
    <div className='box picture'>
      <h1>{props.header}</h1>
        <img alt={props.alternateText} src={props.src} />

      <List
        header = {props.listHeader}
        listContent ={props.listContent}
      />
    </div>
  )
}

export default Picture;
