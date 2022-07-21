import './App.css';
import Child from './components/Child';
import {CounterProvider} from './contexts/CounterContext';

function App() {
  return (

//CounterProvider ile sarmalladik.ve bununla projenin her yerine ulasabiliyorum. 
      <CounterProvider>
        <Child/>
        <Child/>
        <Child/>
      </CounterProvider>
      

  );
}

export default App;
