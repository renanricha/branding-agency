import React from 'react'
import Card from '../Card';
import './index.css'

export default function ExpSec(props) {
    return (
      <section className={props.cor ? "exp-sec" : "exp-sec-dk"}>
        <div className={props.cor ? 'text-cont-exp' : 'text-cont-exp-dk'}>
            <h2>Experiências De Trabalho</h2>
            <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.</p>
        </div>
        <div className={props.cor ? 'cards' : 'cards-dk'}>
          <Card numeroCard={ 1 } />
          <Card numeroCard={ 2 } />
          <Card numeroCard={ 3 } />
        </div>
      </section>
    );
  }