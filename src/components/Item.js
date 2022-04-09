import React, {useState} from "react";
import items from "../data/items";


function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)

  const appClass = isInCart ? 'in-cart' : "";
  const btnClass = isInCart ? "remove" : "add"
  const text = isInCart ? "Remove from" : "Add to"

  function handleItem(){
    setIsInCart(isInCart => !isInCart)
  }
  
    return (
      <li className={appClass}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button className={btnClass} onClick={handleItem} >{text} Cart</button>
      </li>
    );
  }
  
  export default Item;
  

// function Item({ name, category }) {
  
// const [isInCart, setIsInCart] = useState(false)
// const itemClass = isInCart ? "in-cart" : ""
// const buttonText = isInCart ? "Remove from Cart" : "Add to Cart"

// function handleItem(){
//   setIsInCart((isInCart) => !isInCart)
//   console.log(isInCart)
// }

//   return (
//     <li className={itemClass}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button onClick={handleItem} className="add">{buttonText}</button>
//     </li>
//   );
// }

// export default Item;
