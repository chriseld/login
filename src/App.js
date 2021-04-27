import React, { useState } from 'react';
import './App.css';
import {LoginModal} from './Components/LoginModal';
import {RegisterModal} from './Components/RegisterModal';

function App() {

  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <div className="app">
      <button id="login" onClick={() => setLogin(true)}>Login</button>
      <button id="register" onClick={() => setRegister(true)}>Register</button>

      <LoginModal onClose={() => setLogin(false)} show={login} />

      <RegisterModal onClose={() => setRegister(false)} show={register} />
   </div>
  );
}

export default App;
