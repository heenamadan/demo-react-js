import React, { Component } from 'react';
import ReactDOM from 'react-dom';  

  
class App extends Component {  
  constructor(props){  
    super(props);  
    this.state = {  
         data: 'Heena',
         color: 'pink'  
      }  
    this.handleEvent = this.handleEvent.bind(this);  
    this.updateSetState = this.updateSetState.bind(this);
    this.forceUpdateState = this.forceUpdateState.bind(this);  
    this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);
    this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);
  }  
  handleEvent(){  
    console.log("props-->"+this.props);  
    console.log("data from state-->"+this.state.data);
  } 

  handleEventUsingArrow =() =>{
    console.log(this.state.data);
  } 

  updateSetState(){
    this.setState({data:"heena madan"});
    console.log(this.state.data);
  }

  findDomNodeHandler2(){
    var div2 = document.getElementById("myDivTwo");
    ReactDOM.findDOMNode(div2).style.color = "red";
    this.setState({color:"red"});

  }

   findDomNodeHandler1(){
    var div2 = document.getElementById("myDivOne");
    ReactDOM.findDOMNode(div2).style.color = "green";
    this.setState({color:"green"});
  }

  forceUpdateState() {  
      this.forceUpdate();  
   };  
  render() {  
    return (  
      <div className="App">  
    <h2>React Constructor Example</h2>  
    <input type ="text" value={this.state.data} /> 
    

 
        <button onClick={this.handleEvent}>Without Arrow Click</button> 
        <button onClick={this.handleEventUsingArrow}>Handle Event Arrow Click</button> 
        <button onClick = {this.updateSetState}>Update STATE</button> 
        <br/>

        <div> 
        <h1>Example to generate random number</h1> 
             <h3>Random number: {Math.random()}</h3>  
             <button onClick = {this.forceUpdateState}>ForceUpdate</button>  
             </div>
            <br/>  
      

      <div>  
             <h1>ReactJS Find DOM Node Example</h1>  
             <button onClick = {this.findDomNodeHandler1}>FIND_DOM_NODE1</button>  
             <button onClick = {this.findDomNodeHandler2}>FIND_DOM_NODE2</button>  
             <h3 id = "myDivOne">FIRST DIV</h3>  
             <h3 id = "myDivTwo">SECOND DIV</h3>  

             <p>Color hua change? {this.state.color}</p>
         </div> 

         </div>   
    );  
  }  
}  
export default App;  
