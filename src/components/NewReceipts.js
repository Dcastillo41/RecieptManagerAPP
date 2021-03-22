import React, { Component } from 'react';
import './w3.css';

export class NewReceipts extends Component {
  static displayName = NewReceipts.name;

  constructor(props){
      super(props);
      this.supplier = {value: ''};

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
        <div class="w3-center w3-card newrec">
        <h1 className = "w3-text-blue"><strong>NUEVO RECIBO</strong></h1>
        <form className = "w3-margin" onSubmit = {this.handleSubmit}>
          <div class="form-group">
            <div className = "w3-margin section3  w3-padding-32">
                <div className = "w3-third w3-padding">
                    <h5><strong>Monto:</strong></h5>
                    <input className = "inputclassNumber  w3-padding-16" type = "number" min = "0" onChange = {this.handleChange} />
                </div>
                <div className = "w3-third w3-padding">
                    <h5><strong>Moneda:</strong></h5>
                    <select className="w3-padding-16" id="sel2">
                        <option value="" disabled selected>Escoge el tipo de Moneda</option>
                        <option>CUP</option>
                        <option>MXM</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                </div>
                <div className = "w3-third w3-padding">
                    <h5><strong>Fecha:</strong></h5>
                    <input className = "w3-padding-16 dateinput" type = "date"  onChange = {this.handleChange} />
                </div>
            </div>
          </div>
          <div class="form-group">
            <h5><strong>Proveedor:</strong></h5>
            <input className = "inputclass w3-padding-16" type = "text"  onChange = {this.handleChange} />
          </div>
          <div class="form-group">
            <h5><strong>Comentario:</strong></h5>
            <input className = "inputclass w3-padding-16" rows="5" type = "text"  onChange = {this.handleChange} />
          </div>
          <a href="/user-receipts" type="submit" class="btn btn-primary w3-margin">Crear Recibo</a>
        </form>
      </div>
    );
  }
}
