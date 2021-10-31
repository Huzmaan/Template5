import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import About from './Components/About';
import Menu from './Components/Menu';
import Where from './Components/Where';
import Footer from './Components/Footer';


function App() {
  return(
   <div className="App-css">
     <Header/>
     <Main />
     <About />
     <Menu/>
     <Where/>
     <Footer/>
   </div>
  );
}

export default App;
