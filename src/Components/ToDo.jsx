import React from "react";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, modify } from "../Redux/actions";
import "../App.css";
import { message ,  Button ,  Space    } from 'antd';
import ToDoList from "./ToDoList";





const ToDo = (props) => {
  const dispatch = useDispatch();
  const inputRef = useRef();  
  const Tasks = useSelector(state => state.Tasks);
  const [messageApi, contextHolder] = message.useMessage();
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");



    const successCreate = () => {
      messageApi.open({
      type: 'success',
      content: 'Task added successfully',
      });
    };

    const failedAdd = () => {
      messageApi.open({
      type: "error",
      content: "Task cannot be empty",
      });
    };   


    const handleClick = () => {
      let inputValue = inputRef.current?.value.trim();
      if (!inputValue) {
        failedAdd();
        return;
      }
      dispatch(addTask(inputValue));
      inputRef.current.value = ""
      setInputValue("")
      successCreate();
      setIsFocused(false)


      
  };

  








  const taskText = isFocused || inputValue ? "Your task is" : "Enter your task";
    
  return (

      
    <div className="wrapper">
      <h1 className="heading"> To Do list</h1>
          <div className={`input-container ${isFocused ? "focused" : ""} ${inputValue ? "not-empty" : ""}`}>
          <input
            id="task-input"
            type="text"
            ref={inputRef}
            className="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            aria-describedby="task-desc"
            aria-label="Task input"/>
                  <label htmlFor="task-input" className="floating-label">
            {taskText}
          </label>
        </div>
      

      {contextHolder}
        <Space >
      <Button onClick={() => handleClick()} className="submit">  
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
            </svg></Button>
            </Space>
    </div>

  );
};

export default ToDo;
