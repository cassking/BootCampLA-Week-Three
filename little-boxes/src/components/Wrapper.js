import React from 'react';
import Picture from './Picture'
import List from './List'
import Numbers from './Numbers'
import Box from './Box'
{/*NOTE TO SELF: AFTER REFACTOR THIS NOT NEEDED*/}


const Wrapper = props => {

  let imageHeader = 'Today\'s Image:'
  let imageSource = "https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png"

  let date = (new Date).toString()
  let random = parseInt(Math.random() * 100)
  let numberHeader = 'Today\'s Date and Random Number:'
  let listHeader = 'Here Is a List:'
  let listData = [{id: 1, name: 'Asteroids'},{id: 2, name:'Comets'},{id: 3, name:'Moon'},{id: 4, name:'Planets'},{id: 5, name:'Stars'},{id: 6, name:'Sun'}
  ]
  return (
    <div className='box wrapper'>
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>

      <Numbers
        header={numberHeader}
        body={["Today's date is ", <strong>{date}</strong>,  "and", <em>&nbsp;${random} &nbsp;</em> ]}
      />
      <Picture
        header={imageHeader}
        src={imageSource}
        alternateText="Clever EEs"
        listContent = {listData}
        listHeader={listHeader}
      />
    </div>
  )
};

export default Wrapper;
