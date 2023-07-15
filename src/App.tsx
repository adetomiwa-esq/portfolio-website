import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main'

function App() {
  // useEffect(() => {
  //   const mainBody = document.querySelector('#main-body')
  //   mainBody?.addEventListener('onmouseover', displayGradient)

  //   function displayGradient(){
  //     mainBody.style.background = ''
  //   }
  // })
  const [mouseActive, setMouseActive] = useState(false)
  function displayGradient(){
    setMouseActive(true)
  }
  return (
    <div id='main-body' className={`bg-slate-900 text-slate-400 min-h-screen ${mouseActive ? 'bg-[radical-gradient(600px at 226px 701px, rgba(29,78,216,0.15), transparent 80%)]' : ''}`} onMouseOver={displayGradient}>
      <Main />
    </div>
  );
}

export default App;
