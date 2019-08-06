import React, { Component } from 'react';  
  
class App extends Component {  
  constructor(props){  
    super(props);  
    this.state = {  
         data: 'Heena'  
      }  
    this.handleEvent = this.handleEvent.bind(this);  
  }  
  handleEvent(){  
    console.log("props-->"+this.props);  
    console.log("data from state-->"+this.state.data);
  } 

  handleEventUsingArrow =() =>{
    console.log(this.state.data);
  } 
  render() {  
    return (  
      <div className="App">  
    <h2>React Constructor Example</h2>  
    <input type ="text" value={this.state.data} />  
        <button onClick={this.handleEvent}>Without Arrow Click</button> 
        <button onClick={this.handleEventUsingArrow}>Handle Event Arrow Click</button>  
      </div>  
    );  
  }  
}  
export default App;  
