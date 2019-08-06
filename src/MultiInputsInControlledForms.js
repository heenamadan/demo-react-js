import React, { Component } from 'react';  
class MultiInputsInControlledForms extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            personGoing: true,  
            numberOfPersons: 12  
        };  
        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);  
 
   }  
   handleInputChange(event) {  
       const target = event.target;  
       const value = target.type === 'checkbox' ? target.checked : target.value; 
       const name = target.name;      
       this.setState({  
           [name]: value  
       });  
  }  

  handleSubmit(event) {  
      alert("Number of persons going..."+this.state.numberOfPersons + "  checkbox value"+this.state.personGoing);
      event.preventDefault();  
  }  

  render() {  
      return (  
          <form onSubmit={this.handleSubmit}>  
              <h1>Multiple Input Controlled Form Example</h1>  
              <label>  
                  Is Person going:  
                  <input  
                    name="personGoing"  
                    type="checkbox"  
                    checked={this.state.personGoing}  
                    onChange={this.handleInputChange} />  
             </label>  
             <br />  
             <label>  
                 Number of persons:  
                 <input  
                 name="numberOfPersons"  
                 type="number"  
                 value={this.state.numberOfPersons}  
                 onChange={this.handleInputChange} />  
             </label>  

             <input type="submit" value="Submit" />  

         </form>  
     );  
  }  
}  
export default MultiInputsInControlledForms;  
