import React, { useState } from 'react';

function addTimer(time) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);
  const div = document.querySelector("#timers")
  // `<MyTimer expiryTimestamp={time}></MyTimer>`
}

function App() {
  const time = new Date();
  // 5 minutes timer
  time.setSeconds(time.getSeconds() + 300);
  return (
    <div>

      <button onClick={() => addTimer()}>
        add timer
      </button>

      <div id='timers'/>

    </div>
  );
}

export default App;
