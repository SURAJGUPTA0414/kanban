import React, { useState } from "react";


import {
  ArrowRightSquareFill,
  ArrowLeftSquareFill,
  XSquareFill,
} from 'react-bootstrap-icons';
import "./Card.css";

const Card = (props) => {
  

  return (
    <div >
      <div className="card">
      <h4>{props.title}</h4>
      <div>
        <br/>
        <br/>
    <button>{<ArrowLeftSquareFill/>}</button>
        <button>{<ArrowRightSquareFill/>}</button>
        <button>{<XSquareFill/>}</button>
  </div>
        


       </div>
     </div>
  );
}

export default Card;