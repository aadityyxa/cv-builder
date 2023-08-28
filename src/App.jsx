// import { useState } from 'react'
import './App.css'
import {PersonalDetails, Education} from './components/personal'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'; 

function App() {

  const [edArray, setEdArray] = useState([]);
  const array = [...edArray]; 

    function saveEducationDetails() {
    const newEducation = {
      id:uuidv4(),
      name:document.querySelector('#school').value,
      degree:document.querySelector('#degree').value,
      yog:document.querySelector('#yog').value,
      location:document.querySelector('#location').value

    }

    array.push(newEducation); 
    setEdArray(array); 

  }

  return (
    <>
      <PersonalDetails handleChange={saveEducationDetails}/>
      <Education />
    </>
  )
}

export default App
