import React, { Fragment, useState } from 'react';
import myStyle from './myStyle';

const Cartbtn=() =>{
  const [button,setButton]=useState("Add to Cart");
  const[count,setCount]=useState(0);

const Changed = () =>
{
  setButton("Added");
  setCount(count+1);
}
const Sepmsg=() =>
{
  setCount(count-1);
}

return (
  <div>
    {count==0?
  <button style={myStyle.Cartbtn} onClick={Changed} >{button} ({count})</button> :
  <button style={myStyle.Cartbtn} onClick={Sepmsg} >- </button>}{count!=0? count:''}{count!=0?
  <button style={myStyle.Cartbtn} onClick={Changed} >+</button>:''}
 </div>
);

}



export default Cartbtn;