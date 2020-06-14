import React from 'react';
import './App.css';
import Counter  from './componentes/Counter'
import Button from './componentes/Button';
import { increment, decrement } from './actions/counter.action'
import { useDispatch } from 'react-redux';


function App() {

  const dispath = useDispatch()

  function onIncClick(){
    dispath(increment())
  }

  function onDecClick(){
    dispath(decrement())
  }

  return (
    <div className="App">
      <Counter />
      <Button name={"+"} onClick={onIncClick} />
      <Button name={"-"} onClick={onDecClick} />
    </div>
  );
}

export default App;
