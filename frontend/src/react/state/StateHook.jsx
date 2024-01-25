import { useState } from 'react';

const CounterIncrementWithoutState = () => {
  const counter = 0;
  const increaseCounter = () => counter + 1;
  return (
    <>
      <h4>• Counter without State Hook</h4>
      <p>Current Counter Value: {counter}</p>
      <button onClick={increaseCounter}>Increase Counter (without State)</button>
    </>
  );
}

const CounterIncrementWithState = () => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    const newCounterValue = counter + 1;
    setCounter(newCounterValue);
    // Log the updated counter value to the console
    console.log('State Hook - value:', newCounterValue);
  };
  return (
    <>
      <h4>• Counter with State Hook</h4>
      <p>Current Counter Value: {counter}</p>
      <button onClick={increaseCounter}>Increase Counter (with State)</button>
    </>
  );
}

const ListOfNotes = () => {
  const [inputValue, setInputValue] = useState('');
  const [itemList, setItemList] = useState([]);
  const handleInputChange = (event) => setInputValue(event.target.value);
  const handleAddItem = () => {
    // Check if the input value is not empty
    if (inputValue.trim() !== '') {
      // Append the input value to the list
      setItemList((prevList) => [...prevList, inputValue]);
      // Clear the input box
      setInputValue('');
    }
  };
  return (
    <>
      <h4>• Updating an Array with State Hooks</h4>
      <p>List of Notes</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a note"
      />
      <button onClick={handleAddItem}>Add to List</button>
      <ul style={{margin: 12}}>
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

const UpdateObject = () => {
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe'
  });
  function handleFirstNameChange(e){
    setPerson({
      ...person,
      firstName : e.target.value
    })
  }
  function handleLastNameChange(e){
    setPerson({
      ...person,
      lastName : e.target.value
    })
  }
  return (
    <>
      <h4>• Updating Object with State Hooks</h4>
      <p style={{fontFamily:'monospace'}}>{'{'}firstName: {person.firstName}, lastName: {person.lastName}{'}'}</p>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label><br/>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  )
}

const MousePosition = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <>
    <h4>• Updating Object with State Hooks + Events</h4>
    <p>Move the cursor over the box to update the x,y position object</p>
    <p style={{fontFamily:'monospace'}}>{'{'}x: {position.x}, y: {position.y}{'}'}</p>
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '200px',
        height: '200px',
        border: '1px solid black'
      }}>
    </div>
    </>  
  )
}

export default function StateHook() {

  return (
    <div>
      <h2>State hook</h2>
      <CounterIncrementWithoutState />
      <br/><br/>

      <CounterIncrementWithState />
      <br/><br/>

      <UpdateObject/>
      <br/><br/>

      <MousePosition />
      <br/>

      <ListOfNotes />
      <br/>
    </div>
  );
}