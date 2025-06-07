export const addTask = (text) => ({ type: "ADD", payload: text });
export const deleteTask = (id) => ({ type: "DELETE", payload: id });
export const modify = (id) => ({ type: "MODIFY" , payload: id });
export const done = (id) => ({ type: "DONE", payload: id });
