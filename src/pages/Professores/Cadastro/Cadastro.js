import React, { useState, useEffect } from 'react'
import './style.css'

import seta from './image/seta.png'

import Progresso from './components/Progresso'
import Inputs from '../../components/Inputs'

const Cadastro = ({closeModal}) => {

    const [etapasCadastro, nextEtapa] = useState(1);
    const [buttonsColor, setColor] = useState({
        0 : "d-none",
        1 : "colorOne",
        2 : "colorTwo",
        3 : "colorThree",
        4 : "colorFour"
    })

    useEffect(() => {
        
    }, [etapasCadastro])

    const proximaEtapa = (etapa) => {
        if(etapasCadastro < 4)
            nextEtapa(etapa)
    }

    const etapaAnterior = (etapa) => {
        nextEtapa(etapa)
    }

    return(
        <div className="container-cadastro">
            <div class="cont">
                <div className="titulo-cadastro">
                    <h1>Cadastre um novo professor</h1>
                </div>
                <div className="container-etapas">
                    <div class="container-progress">
                        <Progresso etapasCadastro={etapasCadastro} nextEtapa={nextEtapa}/>
                    </div>
                    <div className="container-steps px-5">
                        <div className="container-input">
                            <Inputs type="text" name="nome" placeholder="Nome" />
                        </div> 
                        <div className="container-input">
                            <Inputs type="text" name="rg" placeholder="RG" />
                        </div>
                        <div className="container-input">
                            <Inputs type="text" name="login" placeholder="Login" />
                        </div>
                        <div className="container-input">
                            <Inputs type="text" name="senha" placeholder="Senha" />
                        </div>
                    </div>
                    <div className="buttons px-5">
                        <button onClick={() => etapaAnterior(etapasCadastro - 1)} className={`btn ${buttonsColor[etapasCadastro - 1]}`}>Voltar</button>
                        <button onClick={() => proximaEtapa(etapasCadastro + 1)} className={`btn ${etapasCadastro <= 4 ? buttonsColor[etapasCadastro] : buttonsColor[etapasCadastro + 1]}`}>Avançar</button>
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