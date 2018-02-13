import React from 'react';
import GroceryList from './GroceryList';

const App = props => {
  let  inventoryData = [
    { id: 1, name: "Oranges" },
    { id: 2, name: "Bananas" },
    { id: 3, name: "Bread" }
  ];
  return(
    <div>
        <h1>Grocery List</h1>
        <GroceryList
          groceries={inventoryData}
        />

    </div>
  );
};

export default App;
