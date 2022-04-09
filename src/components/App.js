import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const appClass = isDarkMode ? "App dark" : "App light"
  const text = isDarkMode ? "Light" : "Dark"

  function handleDarkMode(){
    setIsDarkMode(isDarkMode => !isDarkMode)
  }


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{text} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}


// const [isDarkMode, setisDarkMode] = useState(false)

// // replace 'false' with a state variable that can be toggled between true and false
// // this will be used for the Dark Mode Toggle feature
// const appClass = isDarkMode ? "App dark" : "App light"
// const mode = isDarkMode ? "Light Mode" : "Dark Mode"
// function handleDarkMode(){
//   setisDarkMode((isDarkMode) => !isDarkMode)
// }

// return (
//   <div className={appClass}>
//     <header>
//       <h2>Shopster</h2>
//       <button onClick={handleDarkMode}>{mode}</button>
//     </header>
//     <ShoppingList items={itemData} />
//   </div>
// );
// }

export default App;
