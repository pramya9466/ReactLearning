
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

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.sec(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  sec() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h5 style={myStyle.ClockStyle}>Time is {this.state.date.toLocaleTimeString()}</h5>
      </div>
    );
  }
}

class Cartbtn extends React.Component {
  constructor(){
    super();
    this.state={button:"Add to cart",count:0};
  }
   Addmsg= () =>{
    this.setState({button:"Added"});
    this.setState({count:this.state.count+1});
   }
   Sepmsg= () =>{
    this.setState({count:this.state.count-1});
   }
  
  render() {
    return (
      <div>
      {this.state.count==0?
      <button style={myStyle.Cartbtn} onClick={this.Addmsg.bind(this)} >{this.state.button}({this.state.count})</button>: 
      <button style={myStyle.Cartbtn} onClick={this.Sepmsg.bind(this)} >- </button> }{this.state.count!=0? this.state.count:''}{this.state.count!=0?
      <button style={myStyle.Cartbtn} onClick={this.Addmsg.bind(this)} >+</button>:''}
      </div>
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
    <Clock/>
    {watch.amazon.map((item, index) => (
        <Output Img={item.img} Brand={item.brand} Desc={item.desc} CurrentPrice={item.currentPrice} MrpPrice={item.mrpPrice} SaveAmount={item.saveAmount} />
    ))}
 </>
  
  );


}
export default App;
