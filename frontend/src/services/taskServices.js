import axios from "axios";
const API = "http://localhost:5001/api/tasks";
export const getTask = ()=>{
    return axios.get(API);
};
export const getTasks = ()=>{
    return axios.get(API);
};
export const getTaskById = (id)=>{
    return axios.get(API+"/"+id);
};
export const createTask = (task)=>{
    return axios.post(API,task);
};
export const updateTask = (id,task) =>{
    return axios.put(API+"/"+id,task);
};
export const deleteTask = (id)=>{
    return axios.delete(API+"/"+id);
};