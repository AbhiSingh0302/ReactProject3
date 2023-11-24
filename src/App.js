// import { useState } from 'react';
import './App.css';
import ContactPage from './components/ContactPage';
const contacts = [];

function App() {
  return (
    <ContactPage contacts={contacts}/>
  );
}

export default App;
