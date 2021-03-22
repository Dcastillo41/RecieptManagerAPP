import React, { Component } from 'react';
import './w3.css';

export class LogUser extends Component {
  static displayName = LogUser.name;

  constructor(props){
    super(props);
    this.username = {value: ''};
    this.password = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({value: event.target.value});
  }
  handleSubmit(event) {
      alert('A supplier was submitted'+ this.supplier.value);
      event.preventDefault();
  }

  render () {
    return (
        <div class="container w3-center login w3-padding-32 w3-card">
           <h1 className = "w3-text-blue"><strong>Log In</strong></h1>
        <form className = "w3-margin"  onSubmit = {this.handleSubmit}>
          <div class="form-group">
            <h5><strong>Email:</strong></h5>
            <input className = "inputclass  w3-padding-16" type = "text" onChange = {this.handleChange} />
          </div>
          <div class="form-group">
            <h5><strong>Contraseña:</strong></h5>
            <input className = "inputclass w3-padding-16" type = "text" onChange = {this.handleChange} />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <button type="submit" class="btn btn-primary w3-margin">Crear Cuenta</button>
        </form>
      </div>
    );
  }
}
