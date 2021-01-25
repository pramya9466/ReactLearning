import React, { Fragment } from 'react';
import myStyle from './myStyle.js';
import Cartbtn from './Cartbtn.js';

function Output1(props){
 
    return(
      <div>
            <h2 style={myStyle.Brand}>{props.Brand}</h2>
            <h3 style={myStyle.Desc}>{props.Desc}</h3>
            <h4 style={myStyle.CurrentPrice}>${props.CurrentPrice}</h4>
            <h5><span style={myStyle.MrpPrice}>${props.MrpPrice}</span> <span style={myStyle.SaveAmount}>Save ${props.SaveAmount}</span></h5>
            <Cartbtn Brand={props.Brand}/>
       </div>
    );
  
}

export default Output1;