import React from 'react';

const FetchButton = props => {

  let handleClickData = () => {
    props.fetchData()
  }
  return(
    <button onClick={handleClickData}>Get Favorite Thing</button>
  )
}

export default FetchButton;
