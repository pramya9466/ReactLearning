import React, { Fragment } from 'react';
import myStyle from './myStyle.js';

export default class Header extends React.Component{
  constructor()
  {
    super();
    this.state={
      CompanyName:"amazon",
      Login:"Hello,Sign in",
      Return:"Returns & Orders"
    }
  }
  render()
  {
    return(
      <div>
        <h1 style={myStyle.HeaderStyle}>{this.state.CompanyName}</h1> 
        <h5 style={myStyle.LoginAndReturn}>{this.state.Return}</h5>
        <h5 style={myStyle.LoginAndReturn}>{this.state.Login}</h5>
        
      </div>
      );
  }
}
