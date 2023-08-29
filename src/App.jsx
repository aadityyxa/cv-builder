// import { useState } from 'react'
import {PersonalDetails, Education, WorkExperience} from './components/personal'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'; 

function App() {

  const [edArray, setEdArray] = useState([]);
  const array = [...edArray]; 
  const [workArray, setWorkArray] = useState([]);
  const array2 = [...workArray];
  const [personalObject, setPersonalObject] = useState({name:'Aditya Oza', email:'aditya.oza256@gmail.com', phone:'7359744XXX', address:'Pune'}); 


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

  

  function saveWorkDetails() {
    const newWorkExperience = {
      id:uuidv4(),
      name:document.querySelector('#company').value,
      position:document.querySelector('#job').value,
      start:document.querySelector('#start').value,
      location:document.querySelector('#area').value,
      end:document.querySelector('#end').value,
      description:document.querySelector('#job-desc').value

      }
        
      array2.push(newWorkExperience); 
      setWorkArray(array2); 

  }
  

  function savePersonalDetails() {
    const newPersonalDetails = {
      name:document.querySelector('#name').value,
      email:document.querySelector('#email').value,
      phone:document.querySelector('#phone').value,
      address:document.querySelector('#address').value,

    }

    setPersonalObject(newPersonalDetails); 
  }

  
  function deleteEdItem(id) {
    const newArray = array.filter((item) => 
    {
      return item.id !== id
    })
    setEdArray(newArray); 
  }

  function deleteWorkItem(id) {
    const newArray = array2.filter((item) => {
      return item.id!==id
    })
    setWorkArray(newArray); 
  }

  

  return (
    <>
      <PersonalDetails handleChange={savePersonalDetails}/>
      <Education array={edArray} onChange={saveEducationDetails} onDelete={deleteEdItem}/>
      <WorkExperience array={workArray} onChange={saveWorkDetails} onDelete={deleteWorkItem}/>
      <Cv personal={personalObject} education={edArray} work={workArray}/>
    </>
  )
}

export default App
