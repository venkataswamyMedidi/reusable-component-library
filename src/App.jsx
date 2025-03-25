import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReusableButton from './components/ReusableButton'
import Modal from './components/Modal/Modal'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ReusableButton label="Open Modal" onClick={openModal} variant="primary" />
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} title="My Modal">
        <p>This is a reusable modal component!</p>
      </Modal>
    </>
  );
}

export default App
