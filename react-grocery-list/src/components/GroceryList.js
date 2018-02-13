import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = props => {
  {/*let  inventoryData = [
    { id: 1, name: "Oranges" },
    { id: 2, name: "Bananas" },
    { id: 3, name: "Bread" }
  ];*/}
  {/*NOTES TO SELF: CREATED THE LIST FIRST WITH MY PROPS*/}
  {/*NOTES TO SELF: CREATED A HARDCODED GROCERY ITEM FIRST TO SEE IF I GOT ANYTHING BACK*/}
  let arrayOfClickableGroceryItems = props.groceries.map( ( clickableItem ) => {
    {/*NOTES TO SELF: here i worked the LONG way, NOT the way they show in the lesson yml file. i need to see the steps one by one*/}
    {/*then i FIRST: returned one complete GroceryItem*/}
    {/*after that i returned a UL to hold that new array*/}
    return(
        <GroceryItem
        itemName={clickableItem.name}
        eventHandler={ () => {alert(`${clickableItem.id}. ${clickableItem.name} was clicked`)} }
      />
      )
    })
    return(
      <ul>
        {arrayOfClickableGroceryItems}
      </ul>

  )



}




export default GroceryList;
