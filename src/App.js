import React, { Component } from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
            <h1> Welcome to { this.props.name } </h1>    
            <p> <h4> hello test </h4> </p>          
          </div>  
      );  
   }  
}  

App.defaultProps = {  
   name: "Default Props"  
}  

export default App;  