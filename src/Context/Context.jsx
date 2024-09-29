import { createContext, useState, useEffect, useRef } from "react";

const context = createContext();

let Provider = ({ children }) => {

let [data,setData]=useState([])
let [account,setAccount]=useState([])
let [id,setId]=useState("")
let info = {data,setData,id,setId}

  return <context.Provider value={info}>{children}</context.Provider>
};
export { context, Provider };
