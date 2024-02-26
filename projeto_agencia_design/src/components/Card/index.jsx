import React from 'react'
import './index.css'

export default function Card({ numeroCard }) {
    
    let par1
    let par2
    let par3
    let subT

    switch (numeroCard) {
        case 1:
            par1 = 'JUNHO 2012 - 2016'
            subT = 'Web Designer'
            par2 = 'Pied Piper StartUp.'
            par3 = 'Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores'
        break
        case 2:
            par1 = 'AGOSTO 2016 - 2019'
            subT = 'Product Designer'
            par2 = 'E Corp.'
            par3 = 'Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra'
        break
        case 3:
            par1 = 'FEVEREIRO 2019 - 2021'
            subT = 'Digital Consulting'
            par2 = 'Arasaka Inc.'
            par3 = 'Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução'
        break
    }

    return (
      <div className="card">
        <div className='text-cont-card'>
            <p>{ par1 }</p>
            <h2>{ subT }</h2>
            <p>{ par2 }</p>
            <p>{ par3 }</p>
        </div>
      </div>
    );
  }