import { useRef, useState } from 'react'

import './App.css'
import Counter from './Counter'

function App() {
  
  const [count, setCount] = useState(0);
  const timer = useRef(null);
  
 

  function startTimer(){
    if(timer.current == null){
      timer.current = setInterval(() => {
        setCount(prev => prev+1);
      }, 1000);
  }
  };

  function stopTimer(){
    if(timer.current != null){
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  function resetTimer(){
    stopTimer();
    setCount(0);
  };


  return (
    <>

      <Counter count={count}/>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={resetTimer}>reset</button>

    </>
  )
}

export default App
