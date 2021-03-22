import React, { Component } from 'react';
import './w3.css';

export class UserReceipts extends Component {
  static displayName = UserReceipts.name;

  constructor(props){
    super(props)
    this.username = "David";
    this.supplier = "Banco Metropolitano jjjj";
    this.amount = "5000";
    this.coin = "CUP";
    this.date = {date: new Date()};
    this.comment = "Esta transaccion fue hecha para pagar el mes de trabajo pasado";
  }

  render () {
    return (
      <div>
          <h1 className = "w3-text-blue w3-center"><strong>Bienvenido, {this.username}!!!</strong></h1>
          <a href = "/new-receipts" type="button" className="btn btn-primary w3-margin w3-display-bottomright"><strong>+</strong></a>

          <div className = "w3-container w3-hover-shadow w3-card w3-padding-16 w3-margin">
            <div className = "w3-row-padding  w3-light-grey">
                <div class = "w3-quarter">
                    <h6><strong>Proveedor: </strong></h6>
                    <p>{this.supplier}</p>
                </div>
                <div class = "w3-quarter">
                    <h6><strong>Monto: </strong></h6>
                    <p>{this.amount}</p>
                </div>
                <div class = "w3-quarter">
                    <h6><strong>Moneda: </strong></h6>
                    <p>{this.coin}</p>
                </div>
                <div class = "w3-quarter">
                    <h6><strong>Fecha: </strong></h6>
                    <p>{this.date.date.getUTCDay()}-{this.date.date.getUTCMonth()}-{this.date.date.getUTCFullYear()}/{this.date.date.getHours()}: {this.date.date.getMinutes()}</p>
                </div>
            </div>
            <div className = "w3-center">
                <button type="button" className="btn btn-info w3-margin" data-toggle="modal" data-target="#myModal">Vista Previa</button>
                <button type="button" className="btn btn-success w3-margin">Editar</button>
                <button type="button" className="btn btn-danger w3-margin">Eliminar</button>
            </div>
            <div class="modal fade" id="myModal" role="dialog">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                      <h3>{this.date.date.getUTCDay()}-{this.date.date.getUTCMonth()}-{this.date.date.getUTCFullYear()}/{this.date.date.getHours()}: {this.date.date.getMinutes()}</h3>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div class="modal-body">
                        <h6><strong>Proveedor: </strong></h6>
                        <p>{this.supplier}</p>
                        <h6><strong>Monto: </strong></h6>
                        <p>{this.amount}</p>
                        <h6><strong>Moneda: </strong></h6>
                        <p>{this.coin}</p>
                        <h6><strong>Comentario: </strong></h6>
                        <p>{this.comment}</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" className="btn btn-success w3-margin">Editar</button>
                        <button type="button" className="btn btn-danger w3-margin">Eliminar</button>
                      </div>
                    </div>
                  </div>
                </div>
          </div>

          

      </div>
    );
  }
}
