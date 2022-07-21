import React, { useContext } from 'react' //bizim hook lar icindeki yeni ismimiz useContext.bizim context yapisini kullanmamizi sagliyor. 
import GrandChild from './GrandChild';
import CounterContext from '../contexts/CounterContext';

export default function Child() {

  const {counter} = useContext(CounterContext); //burada increase ve decrease vardi. sildik.
 // console.log(context);
//  const [counter, setCounter] = useState(0);

//      const decrease = () => {

//          setCounter(counter - 1) //decrease fonksiyonuyla counter imi bir azalttik. 
//      }

//      const increase = () => {

//          setCounter (counter + 1) // increase fonksiyonuyla 1 artirdik. 
//      }
  return (
    <>
    
       <h1>{counter}</h1>
        <GrandChild/>
       
        {/* <button onClick= {decrease}>Decrease</button>
        <button onClick= {increase}>Increase</button>  */}
        {/* buradaki butonlarla ekranda actigimiz sayilari artirp, azaltabiliyoruz.  */}
    </>
  )
}
