import React, { useState, useEffect } from 'react'
import './style.css'

import seta from './image/seta.png'

import Progresso from './components/Progresso'
import EtapaUm from './components/EtapaUm'
import EtapaDois from './components/EtapaDois'

import professores from './image/professores.png'
import EtapaTres from './components/EtapaTres'
import EtapaQuatro from './components/EtapaQuatro'

import saveProfessor from '../../../services/professores/Cadastrar'
import { isLogged } from '../../../services/escola/loginService'

const Cadastro = ({closeModal, setAlert, setProfessores, professoresListados}) => {

    const [etapasCadastro, nextEtapa] = useState(1);

    const [mensagemDeErro, setMensagemDeErro] = useState({'ativado' : 'd-none', 'mensagem' : ''})

    const [dadosCadastro, setDados] = useState({
        1 : {
            "nome" : null,
            "rg" : null,
            "login" : null,
            "senha" : null
        },
        2 : {
            "cep" : null,
            "logradouro" : null,
            "bairro" : null,
            "numero" : null,
            "cidade" : null,
            "estado" : null,
            "complemento" : null
        },
        3 : {
            "materias" : null
        },
        4 : {
            "anos" : null
        }
    })


    const [buttonsColor, setColor] = useState({
        0 : "d-none",
        1 : "colorOne",
        2 : "colorTwo",
        3 : "colorThree",
        4 : "colorFour"
    })

    const realizarCadastro = async () => {

        const prof = {
            "nome" : dadosCadastro[1].nome,
            "rg" : dadosCadastro[1].rg,
            "acesso" : {
                "login" : dadosCadastro[1].login,
                "senha" : dadosCadastro[1].senha
            },
            "endereco" : dadosCadastro[2],
            "materias" : dadosCadastro[3].materias,
            "anos" : dadosCadastro[4].anos
        }

        const idEscolaLogada = isLogged().escola.id
        
        const resultSaveProfessor = await saveProfessor(idEscolaLogada, prof)

        if(resultSaveProfessor.status == 200) {
            closeModal()
            setAlert('ativado')
            setMensagemDeErro({'status' : 'd-none', 'mensagem' : ''})

            professoresListados = resultSaveProfessor.data.professores
            setProfessores(professoresListados)
            setTimeout(() => setAlert('d-none'), 6900)
        }
        else 
            setMensagemDeErro({'status' : '', 'mensagem' : resultSaveProfessor.data.mensagem})
        
    }

    const proximaEtapa = (etapa) => {
        if(etapasCadastro < 4)
            nextEtapa(etapa)

        if(etapasCadastro == 4) {
            realizarCadastro()
        }
    }

    const etapaAnterior = (etapa) => {
        nextEtapa(etapa)
    }

    const carregarEtapa = () => {
        
        switch(etapasCadastro) {
            case 1:
                return <EtapaUm setDados={setDados} dadosCadastro={dadosCadastro} etapa={etapasCadastro}/>
            case 2:
                return <EtapaDois setDados={setDados} dadosCadastro={dadosCadastro} etapa={etapasCadastro}/>
            case 3:
                return <EtapaTres setDados={setDados} dadosCadastro={dadosCadastro} />
            case 4:
                return <EtapaQuatro setDados={setDados} dadosCadastro={dadosCadastro} />
        }

    }

    return(
        <div className="container-cadastro">
            <div class="cont">
                <div className="titulo-cadastro">
                    <h1>Adicione um professor</h1>
                    <img src={professores} />
                </div>
                <div className="container-etapas">
                    <div class="container-progress">
                        <Progresso etapasCadastro={etapasCadastro} nextEtapa={nextEtapa}/>
                    </div>
                    <div className="container-steps px-5">
                        {carregarEtapa()}
                    </div>
                    <div className={`alert alert-danger mx-5 ${mensagemDeErro.ativado}`}>
                        {mensagemDeErro.mensagem}
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