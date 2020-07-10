import React, { useState } from 'react'
import './style.css'

import seta from './image/seta.png'

import Progresso from './components/Progresso'

import Input from '../../../components/componentesUtilitarios/inputs'

const Cadastro = ({closeModal}) => {

    const [etapasCadastro, nextEtapa] = useState("1");

    return(
        <div className="container-cadastro">
            <div class="cont">
                <div className="titulo-cadastro">
                    <h1>Cadastre um novo professor</h1>
                </div>
                <div className="container-etapas p-3">
                    <div class="container-progress">
                        <Progresso />
                    </div>
                    <div className="container-steps p-3 d-flex justify-content-center align-items-center">
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                    </div>
                </div>
            </div>
            <div className="back mt-5">
                <button onClick={() => closeModal()} className="btn btn-primary mr-5" >Voltar</button>
            </div>
        </div>
    )
}

export default Cadastro