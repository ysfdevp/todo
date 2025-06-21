import React from "react";
import '@ant-design/v5-patch-for-react-19';
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, done, modify } from "../Redux/actions"; 
import { SlNote } from "react-icons/sl";
import { message, Button, Space , Input } from "antd";
import "./ToDo.jsx";

const ToDoList = () => {
  const dispatch = useDispatch();
  const Tasks = useSelector((state) => state.Tasks);
  const [messageApi, contextHolder] = message.useMessage();

  const successDelete = () => {
    messageApi.open({
      type: "success",
      content: "Task deleted successfully",
    });
  };
 const failedDone = () => {
   messageApi.open({
      type: "warning",
      content: "Task not done",
    });
 };
  const successDone = () => {
    messageApi.open({
      type: "success",
      content: "Task done ",
    });
  };
  const handleDone = (completed, id) => {
    dispatch(done(id));
    if (!completed) {
      successDone();
    } else if (completed) {
      failedDone();
    }
  };

  const handleDelete = (id, completed) => {
    dispatch(deleteTask(id));
    successDelete();
  };



    const handleModify = (id) => {
    dispatch(modify(id));
    
  };
  
// dispatch(modify(item.id)


return (
  <div className="todo-list-wrapper">
    {contextHolder}
    <ul>
      {Tasks.map((item) => (
        <li key={item.id} style={{display : 'flex' , marginBottom:13, justifyContent : 'space-between' , alignItems : 'center'}}>
          <span className="span" style={{textDecoration : item.completed ? 'line-through' : 'none'}}>{item.text}</span>
          <div>
            <Space>
              <Button className="Button" onClick={() => handleDelete(item.id)}>❌</Button>
              <Button className="Button" onClick={() => handleModify(item.id)}><SlNote /></Button>
              <Input
                type="checkbox"
                onChange={() => handleDone(item.completed , item.id)}
                checked={item.completed}
                className="checkbox"
              />
            </Space>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
};

export default ToDoList;
// bch n3ml ki tbda fma tasks bnfs el ism y5rjlk popconfirm wla 7aja