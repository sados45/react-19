import React, {useState} from 'react';


const CounterContext = React.createContext(); //bu context yapisi, eger context yapisini create etmezsek hicbir islem yapamayiz. 

export const CounterProvider = (props) =>{ //bu ise bir componenttir. bizim provider icerisinde export etmemiz gereken iki sey var. biri component digeri ise context in kendisidir. 

    const [counter, setCounter] = useState(0);

    const decrease = () => {

        setCounter(counter - 1) //decrease fonksiyonuyla counter imi bir azalttik. 
    }

    const increase = () => {

        setCounter (counter + 1) // increase fonksiyonuyla 1 artirdik. 
   }
        return (
                // biz burada kurulan bu döngü provider sayesinde her yere ulasabiliyoruz. 
        <CounterContext.Provider value= {{
            // counter: 
            counter,
            //decrease:
            decrease,
            // increase: 
            increase // normalde esittir den sonra yazilabiliyor. ama js in bize verdigi kolaylikla biz bu sekilde sadece isimlerini yazmamiz ytereli oluyor. 
        }}> 

            {props.Children}
        </CounterContext.Provider>
    )

}



export default CounterContext; 