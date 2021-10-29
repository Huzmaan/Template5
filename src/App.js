import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import About from './Components/About';
import Menu from './Components/Menu';


function App() {
  return(
   <div className="App-css">
     <Header/>
     <Main />
     <About />
     <Menu/>
   </div>
  );
}

export default App;
