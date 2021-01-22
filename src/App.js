
import React, { Fragment } from 'react';
import './App.css';
import watch from './amazondata.json';

const myStyle={
  HeaderStyle:{
    color: "white",
    backgroundColor: "#000000",
    fontFamily: "Arial",
    textAlign:"center"
  },
  LoginAndReturn:{
    color: "white",
    backgroundColor: "#000000",
    fontFamily: "Arial",
    float:"right",
    padding:'0 20px 0 0'
  },
  Img:{
    padding:'20px'
  },
  Brand:{
    color:"#00000",
    bold:true,
    fontFamily: "Arial",
    padding: '50px'
  },
  Desc:{
    color:"#0F1111",
    padding:'5px',
    fontFamily: "Arial",
    fontSize:"15px"
  },
  CurrentPrice:{
    color:"#000000",
    padding:'10px',
    fontFamily: "Arial"
  },
  MrpPrice:{
    
    color:"#000000",
    padding:'10px',
    fontFamily: "Arial",
    textDecoration: 'line-through'
  },
  SaveAmount:{
    color:"red",
    padding:'10px',
    fontFamily: "Arial",
  },
  OutputStyle:{
    float:"right",
   
  },
  Cartbtn:{
    color: "blue",
    backgroundColor: "yellow",
    fontFamily: "Arial",
  },
  ClockStyle:{
    float:"left",
    padding:'0 0 20px 0'
  }

};

class Header extends React.Component{
  constructor()
  {
    super();
    this.state={
      CompanyName:"Amazon",
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

class Cartbtn extends React.Component {
   Addmsg= () =>{
     alert("Brand Name "+ this.props.Brand);
   }
  render() {
    return (
      
      <button style={myStyle.Cartbtn} onClick={this.Addmsg} >Add to Cart</button>
    
    );
  }
}

class Output1 extends React.Component{
  render(){
    return(
      <div>
            <h2 style={myStyle.Brand}>{this.props.Brand}</h2>
            <h3 style={myStyle.Desc}>{this.props.Desc}</h3>
            <h4 style={myStyle.CurrentPrice}>${this.props.CurrentPrice}</h4>
            <h5><span style={myStyle.MrpPrice}>${this.props.MrpPrice}</span> <span style={myStyle.SaveAmount}>Save ${this.props.SaveAmount}</span></h5>
            <Cartbtn Brand={this.props.Brand}/>
       </div>
    );
  }
}

class Output extends React.Component{
  render()
  {
    return(
      <div style={myStyle.OutputStyle}>
      <img style={myStyle.Img} src={this.props.Img}></img>
     <Output1 Brand={this.props.Brand} Desc={this.props.Desc} CurrentPrice={this.props.CurrentPrice} MrpPrice={this.props.MrpPrice} SaveAmount={this.props.SaveAmount} />
      </div>
    );

  }
}

function App()
{
  return (
    <>
    <Header/>
    {watch.amazon.map((item, index) => (
        <Output Img={item.img} Brand={item.brand} Desc={item.desc} CurrentPrice={item.currentPrice} MrpPrice={item.mrpPrice} SaveAmount={item.saveAmount} />
    ))}
 </>
  
  );


}
export default App;
