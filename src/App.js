import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

// import About from './components/About';
import './App.css';

function App() {
  const[mode,setMode]=useState('dark');//Wheter dark mode is enabled or not 
  const toggleMode=()=>{
    if(mode==="light"){
    setMode('dark')
  }
  else{
    setMode('light')
  }
}
  return (
    <>
      <Navbar title="TextUtils" home="Home" mode="mode" toggleMode="toggleMode"/>
      <div className="container my-3">
        <Textform heading="Enter the text to analyze below" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
