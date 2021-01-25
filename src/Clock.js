import React, { Fragment, useEffect, useState } from 'react';
import myStyle from './myStyle.js';

const Clock=()=>{
  const[date,setDate]=useState(new Date());

  useEffect(()=>
  {
    var timer = setInterval(
      () => sec(),1000
    );

    return function clean() {
      clearInterval(timer);
    };
    
  });

  const sec=()=> {
    setDate(new Date());
  }

  return (
    <div>
      <h5 style={myStyle.ClockStyle}>Time is {date.toLocaleTimeString()}</h5>
    </div>
  );
}

export default Clock;