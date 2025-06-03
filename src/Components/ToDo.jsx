import React from "react";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, modify } from "../Redux/actions";
import "../App.css";
import { SlArrowRightCircle } from "react-icons/sl";



const ToDo = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleChange = () => {
    const text = inputRef.current?.value;
    if (!text) return;
    dispatch(addTask(text));
    inputRef.current.value = "";
  };

  return (
    <div className="wrapper">
      <h1 className="heading"> To Do list</h1>
        <input type="text" ref={inputRef} className="input" requiredplaceholder="Enter your task"/>
      <button onClick={() => handleChange()} className="submit">            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
            </svg></button>
    </div>
  );
};

export default ToDo;
