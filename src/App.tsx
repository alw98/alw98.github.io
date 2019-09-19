import React from 'react';
import github from './github.jpg';
import loading from './gearbox.gif';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="">
        <img src={loading} alt="WIP" style={imgStyle}/>
        <p>
          This webpage is a WIP.
        </p>
        <p>
          Check out my github while you're here!
          <a href="https://github.com/alw98"><img src={github} alt="Github Logo" style={icoStyle}></img></a>
        </p>
        <a href="./blog/">Click here for my CS371p blog</a>
      </header>
    </div>
  );
}



const imgStyle = {
  width: '100%',
  maxWidth: '250px'
}

const icoStyle = {
  width: '100%',
  maxWidth: '25px'
}



export default App;
