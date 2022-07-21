import React, {useContext} from 'react';
import CounterContext from '../contexts/CounterContext';

export default function GreateGrandChild() {

  const { increase } = useContext (CounterContext);
  return (
    <button onClick= {increase}>Increase</button>  
      )
    }
