import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        {/* <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span> */}
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 180);
        restart(time)
      }}>Restart</button>
    </div>
  );
}

function addTimer(){
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);
  
  const div = document.querySelector("#timers")
  console.log(div)
  const li = document.createElement("div")
  li.innerHTML = `<MyTimer expiryTimestamp={time} />`
  div.parentNode.insertBefore(li, div.nextSibling)
  // div.appendChild(li)
  
}

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 10 minutes timer
  return (
    <div>
      
      <div id='timers' >
        
          <button onClick={() => addTimer()}>
            add timer
          </button>
        
        {/* <li><MyTimer expiryTimestamp={time} /></li> */}
      </div>
      
    </div>
  );
}

export default App;
