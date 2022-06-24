import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '100px' }}>
        {/* <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span> */}
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Reinicia com o timer alterando o valor para 3 minutos 
        const time = new Date();
        time.setSeconds(time.getSeconds() + 180);
        restart(time)
      }}>Restart</button>
    </div>
  );
}

export default MyTimer;
