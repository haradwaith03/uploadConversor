import React, { Component } from 'react';
import './Conversor.css';

export default class Conversor extends Component {
  //Construtor
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: '',
      moedaB_valor: 0,
    };

    this.converter = this.converter.bind(this);
  }

  // Methods
  converter() {
    let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
    //let url = `https://free.currencyconverterapi.com/?q=${de_para}&compacty=y`;

    /*fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        //let cotacao = json[de_para].val;
        let cotacao = 3;
        let moedaB_valor = parseFloat(
          this.state.moedaA_valor * cotacao
        ).toFixed(2);
        this.setState({ moedaB_valor });
      });
      */
    let cotacao = 3;
    let moedaB_valor = parseFloat(this.state.moedaA_valor * cotacao).toFixed(2);
    this.setState({ moedaB_valor });
  }

  //Image
  render() {
    return (
      <div className="conversor">
        <h1> Currency Exchange</h1>
        <h2>
          {' '}
          {this.props.moedaA} to {this.props.moedaB}
        </h2>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ moedaA_valor: event.target.value });
          }}
        ></input>
        <input type="button" onClick={this.converter} value="converter"></input>
        <h2>{this.state.moedaB_valor}</h2>
      </div>
    );
  }
}
