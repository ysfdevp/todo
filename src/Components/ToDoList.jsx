import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteTask , toggle} from "../Redux/actions";

const ToDoList = () => {

        const dispatch = useDispatch();
        const Tasks = useSelector((state) => state.Tasks);
  return (
    <div style={{padding:"10px" , margin:"10px" , width:"500px" , justifyContent:"center"}}>
         <ul>
                {Tasks.map(item => (
                    <li style={{listStyleType:"none"}}>
                        <span style={{textDecoration: item.completed ? "line-through" : "none"}}>{item.text} </span>
                        <div>
                    <button onClick={() => dispatch(deleteTask(item.id))}>❌</button>
                    <input type="checkbox" onChange={() => dispatch(toggle(item.id))} value={item.completed}/>
                        </div>
                    </li>
                    ))}
            </ul>
    </div>
  )
}

export default ToDoList