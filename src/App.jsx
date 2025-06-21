import { useState } from 'react'
import './App.css'
import React from 'react'
import ToDo from './Components/ToDo'
import ToDoList from './Components/ToDoList'  
import '@ant-design/v5-patch-for-react-19';


const App = () => {


  return (

    <div className='container'>
      <ToDo/>  
      <ToDoList />  
    </div>
  )
}

export default App
