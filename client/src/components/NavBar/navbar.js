import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div className='navbar'>
       
    <li>
    <img src="./logo.jpg"/>
    </li>
    <div className='recherche'>
    <li>
    <Link to="/">recherche</Link>
    </li>
    </div>
   <div className='matiere'>
    <li>
      <Link to="/matiere"> matiere</Link>
    </li>
    </div>
    <div className='inscription'>
    <li>
      <Link to="/inscription">inscription</Link>
    </li>
    </div>
    <div className='login'>
    <li>
      <Link to="/login">login</Link>
    </li>
    </div>
  </div>
  );
}
export default navbar;