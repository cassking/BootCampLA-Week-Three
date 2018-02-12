import React from 'react';
{/*NOTE TO SELF: AFTER REFACTOR THIS NOT NEEDED*/}

const List = props => {

  let newList =  props.listContent.map( (oneItem) =>
    <li key={oneItem.key}>{oneItem.name}</li>
  )
  return (
    <div className='box list'>
      <h1>{props.header}</h1>
      <ul>
        {newList}
      </ul>
    </div>
  )
}

export default List;
