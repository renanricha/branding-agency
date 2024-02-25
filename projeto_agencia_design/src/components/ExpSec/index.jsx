import React from 'react'
import Card from '../Card';

export default function ExpSec() {
    return (
      <section className="exp-sec">
        <div className='text-cont-exp'>
            <h2>Experiências De Trabalho</h2>
            <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.</p>
        </div>
        <Card numeroCard={ 1 } />
        <Card numeroCard={ 2 } />
        <Card numeroCard={ 3 } />
      </section>
    );
  }