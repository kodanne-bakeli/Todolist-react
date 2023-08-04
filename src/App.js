import './App.css';
import React, { useState } from 'react';

function App() {
  const [newItems, setNewItems] = useState('')
  const [items, setItems] = useState([])
  function addItems() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItems
    };
    setItems(oldList => [...oldList, item]);

    setNewItems("")
  }
  function handleDelete(id) {
    const newArray = items.filter(item => item.id !== id)
    setItems(newArray)
    
  }
  return (
    <div className="App">
      {/* Header */}
      <h1>Todolist</h1>
      <input type="text" placeholder="add items" value={newItems} onChange={e => setNewItems(e.target.value)} />
      <button onClick={() => addItems()} >Add</button>
      {/* Items */}
      <ul>
        {items.map(item => {
          return (<li key={item.id}>{item.value} <button onClick={() => handleDelete(item.id)}>supprimer</button></li>

          )
        })}
      </ul>
    </div>
  );
}

export default App;
