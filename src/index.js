// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// //ReactDOM.render(<App />, document.getElementById('root'));

// const myelement = <input type="text" />;

// ReactDOM.render(myelement, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'


const stringLists = [ 'Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa' ];   
    
const updatedLists = stringLists.map((strList)=>  
    <li> {strList} </li>  
);   

ReactDOM.render(<ul>{updatedLists}</ul>, document.getElementById('list'));  

ReactDOM.render(<App/>, document.getElementById('app'));  





