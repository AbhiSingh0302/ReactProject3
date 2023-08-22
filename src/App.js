// import { useState } from 'react';
import './App.css';
import ContactPage from './components/ContactPage';
const contacts = [
  {name: 'Abhi', age:'23', id:Math.random().toString()}
]

function App() {
  return (
    <ContactPage contacts={contacts}/>
  );
}

export default App;
