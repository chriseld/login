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

      <LoginModal title="Login" onClose={() => setLogin(false)} show={login}>
        <p>LoginModal content</p>
      </LoginModal>

      <RegisterModal title="Register" onClose={() => setRegister(false)} show={register}>
        <p>RegisterModal content</p>
      </RegisterModal>
   </div>
  );
}

export default App;
