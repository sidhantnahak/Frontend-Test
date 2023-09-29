import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Login from './Components/LoginSignup/Login';
const backend_url = "https://note-making-app.onrender.com"
function App() {
  const [name, setname] = useState("None")

  
  return (
    <>
   
    <div className="App">
      <h1>Welcome to the react app</h1>

      <p>Username :  {name} </p>

    </div>
    <Login setname={setname}/>
     </>
  );
}

export default App;
