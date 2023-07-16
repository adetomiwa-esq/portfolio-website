import React from 'react';
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
  return (
    <div id='main-body' className="bg-slate-900 text-slate-400">
      <Main />
    </div>
  );
}

export default App;
