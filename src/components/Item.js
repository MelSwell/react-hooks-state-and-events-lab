import React, { useState } from "react";

function Item({ name, category }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  function addToCart() {
    setIsAddedToCart(!isAddedToCart)
  }

  return (
    <li className={isAddedToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
