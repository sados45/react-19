import React, {useContext} from 'react'
import GreateGrandChild from './GreateGrandChild'
import CounterContext from '../contexts/CounterContext'

export default function GrandChild() {
  const {decrease} = useContext(CounterContext);
  return (

    <>
       <button onClick= {decrease}>Decrease</button>
        <GreateGrandChild/>
    </>
  )
}
