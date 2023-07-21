import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //create a state varible for the selected variable
  const [selectedCategory, setSelectedCategory] = useState('All');

  //Event Handler for selecting a category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }
  //filter item according to the selected item in the category
  const filterItems =
    selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory);
    
  return (
    <div className="ShoppingList">
      <div className="Filter">
      {/* Use the selectedCategory state for the <select> element */}
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* filter the display */}
        {filterItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
