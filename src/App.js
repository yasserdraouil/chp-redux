import React from 'react';
import AddTask from './Components/AddTask/AddTask' ;
import ListTask from './Components/ListTask/ListTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TODO LISTE</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App ;
