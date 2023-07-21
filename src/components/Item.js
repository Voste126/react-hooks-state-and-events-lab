import React, { useState } from "react";

function Item({ name, category }) {

// create a state variable to track id the item is in the cart
const [InCart, setIncart] = useState(false);

//event handler for adding and removing item from the cart
const handlecartToggle = () => {
  setIncart(!InCart)
}
  return (
    <li className={InCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* set the toogle for the display */}
      <button className="add" onClick={handlecartToggle}>
        {InCart ? "Remove from cart" : "Add to cart"}
      </button>
    </li>
  );
}

export default Item;
