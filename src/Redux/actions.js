export const addTask = (text) => ({ type: "ADD", payload: text });
export const deleteTask = (id) => ({ type: "DELETE", payload: id });
export const modify = () => ({ type: "MODIFY" });
export const toggle = (id) => ({ type: "TOGGLE", payload: id });
