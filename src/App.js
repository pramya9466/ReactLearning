
import React, { Fragment } from 'react';
import './App.css';
import watch from './amazondata.json';
import Header from './Header.js';
import Output from './Output.js';
import Clock from './Clock.js';

function App()
{
  return (
    <>
    <Header/>
    <Clock/>
    {watch.amazon.map((item, index) => (
        <Output Img={item.img} Brand={item.brand} Desc={item.desc} CurrentPrice={item.currentPrice} MrpPrice={item.mrpPrice} SaveAmount={item.saveAmount} />
    ))}
 </>
  
  );


}
export default App;
