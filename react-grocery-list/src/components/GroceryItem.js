import React from 'react';
{/*NOTES TO SELF: CREATED A HARDCODED GROCERY ITEM FIRST TO SEE IF I GOT ANYTHING BACK JUST A SIMPLE <LI></LI> WITH text inside*/}
{/*AFTER i had the GROCERYLIST created i then used the props here*/}

const GroceryItem = props => {
  return(
    <li>
      {props.itemName}
      <button type="button" onClick={props.eventHandler}> Delete </button>
    </li>
  )

}
export default GroceryItem;
