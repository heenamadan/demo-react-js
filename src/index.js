import React from 'react';  
import ReactDOM from 'react-dom';  
//import App from './App.js'; 
import Lifecycle from './Lifecycle.js'; 

import MyForm from './MyForm.js';//uncontrolled form

import ControlledForm from './ControlledForm.js';

   
  
//ReactDOM.render(<App/>, document.getElementById('app')); 

//for lifecycle
ReactDOM.render(<Lifecycle/>, document.getElementById('lifecycle')); 
//for react forms
ReactDOM.render(<MyForm/>, document.getElementById('myform')); 

ReactDOM.render(<ControlledForm/>, document.getElementById('mycontrolledform')); 


