import React, { useEffect, useState } from 'react';
import MyTimer from './components/Timer';


function App() {
  // const time = new Date();
  // 5 minutes timer
  // time.setSeconds(time.getSeconds() + 300);


  const [timers, setTimers] = useState([]);

  useEffect(() => {
    console.log(timers.length)
  }, [timers]);
  
  

  return (
    <div>

      <button id='btn' onClick={() => {
        const time = new Date()
        setTimers(time.setSeconds(time.getSeconds() + 300))
      }}>
        add timer
      </button>

      <div id="timers">
        {() => {
          if (timers) {
            timers.map(timer => 
              <MyTimer expiryTimestamp={timer}></MyTimer>
            )
          }
        }}
      </div>

    </div>
  );
}

export default App;
