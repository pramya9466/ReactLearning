import React, { Fragment } from 'react';
import myStyle from './myStyle.js';
import Output1 from './Output1.js';

function Output(props){
 
    return(
      <div style={myStyle.OutputStyle}>
      <img style={myStyle.Img} src={props.Img}></img>
     <Output1 Brand={props.Brand} Desc={props.Desc} CurrentPrice={props.CurrentPrice} MrpPrice={props.MrpPrice} SaveAmount={props.SaveAmount} />
      </div>
    );

  
}

export default Output;