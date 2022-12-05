import Greeting from "./Greeting";
import GenerateListItems from "./GenerateListItems";
import { usestate, useRef, useState } from "react";
function App() {
  const [itemList, setItemList] = useState([]);
  const userInput = useRef();

  function addItems() {
    const acceptUserInput = userInput.current.value;

    setItemList((prevState) => {
      return [
        ...prevState,
        {
          name: acceptUserInput,
        },
      ];
    });

    userInput.current.value = null;
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <Greeting name="Caleb" />
      <h4>List</h4>
      <label>Add item:</label>
      <input type="text" ref={userInput} />
      <button onClick={addItems}>Add</button>
      <GenerateListItems listOfItems={itemList} />
    </div>
  );
}

export default App;
