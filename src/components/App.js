import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
// create a variable for darkmode
const [darkMode, setDarkmode] = useState(false);

//event handler for the darkmode button 
const handleDarkmodeToggle = () => {
  setDarkmode(!darkMode);
}
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* //toggle for the darkmode */}
        <button onClick={handleDarkmodeToggle}>{darkMode ? 'dark mode' : 'light Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
