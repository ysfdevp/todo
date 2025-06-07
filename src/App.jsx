import { useState } from 'react'
import './App.css'
import React from 'react'
import ToDo from './Components/ToDo'
import ToDoList from './Components/ToDoList'  

const App = () => {


  return (

    <div className='container'>
      <ToDo/>  
      <ToDoList/>  
    </div>
  )
}

export default App
