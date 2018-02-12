import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom'

import style from './styles/app.scss'
import Wrapper from './components/Wrapper';
import Picture from './components/Picture';
import List from './components/List';
import Box from './components/Box';

let wrapperParagraph = "Lorem ipsum dolor sit amet, consectetur adLorem ipsum dolor sit amet, consectetur adLorem ipsum dolor sit amet, consectetur adLorem ipsum dolor sit amet, consectetur adLorem ipsum dolor sit amet, consectetur adLorem ipsum dolor sit amet, consectetur adLorem ipsum dolor sit amet, consectetur adLorem ipsum dolor sit amet, consectetur adLorem ipsum dolor sit amet, consectetur ad"

let imageHeader = 'Today\'s Image Refactored:'
let imageSource = "https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png"

let date = (new Date).toString()
let random = parseInt(Math.random() * 100)
let numberHeader = 'Today\'s Date and Random Number Refactored:'
let listHeader = 'Here Is a List Refactored:'
let listData = [{id: 1, name: 'Asteroids'},{id: 2, name:'Comets'},{id: 3, name:'Moon'},{id: 4, name:'Planets'},{id: 5, name:'Stars'},{id: 6, name:'Sun'}
]
let newList =  listData.map( (oneItem, index) =>
  <li key={index}>{oneItem.name}</li>
)
ReactDOM.render(
  <div>

    <Box
      boxClass='wrapper'
      header='I Am the Wrapper Refactored'
      paragraph={wrapperParagraph}
    />
    <Box
      boxClass='picture'
      header={imageHeader}
      src={imageSource}
      alternateText="Clever EEs"
    />
    <Box
      boxClass='numbers'
      header={numberHeader}
      body={["Today's date is ", <strong>{date}</strong>,  "and", <em>&nbsp;${random} &nbsp;</em> ]}
    />
    <Box
      boxClass='list'
      header={listHeader}
      body={newList}
    />

  </div>,
  document.getElementById('app')
);
