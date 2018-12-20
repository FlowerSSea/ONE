import {fetch} from "whatwg-fetch";

export const get_data_action = ()=>({
    type:"GET_DATA_ACTION",
    payload:new Promise(resolve=>{
     let url = "/movie"
     fetch(url)
     .then(res=>res.json())
     .then((data)=>{
        console.log(data)
        resolve(data);
     })
 })
 })