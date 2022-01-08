import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../JS/actions/user";
import{useNavigate}from"react-router-dom";
const Dashbord =()=> {
    const dispatch = useDispatch()
    const navigate=useNavigate();
    return(
        <div>
            <button onClick={()=>{
                dispatch(logout());
            navigate.push("/");
                }} >
                    Logout</button>
         Dashbord
        </div>)

};
export default Dashbord