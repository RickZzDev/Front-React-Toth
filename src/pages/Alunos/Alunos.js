import React, { useState } from 'react'

import './style.css'
import Inputs from '../components/Inputs'

import salvarAluno from '../../services/alunos/alunosService'

const Alunos = () => {

    const [dadosCadastro, setDados] = useState({
        'nome' : '',
        'acesso' : {
            "login" : '',
            "senha" : ''
        },
        'contato' : {
            'email' : '',
            'celular' : '',
            'telefone' : ''
        }
    })

    const [formInicial, setForm] = useState({
        'nome' : '',
        'acesso' : {
            "login" : '',
            "senha" : ''
        },
        'contato' : {
            'email' : '',
            'celular' : '',
            'telefone' : ''
        }
    })

    const [etapa, setEtapa] = useState({'etapa' : 'acesso', 'botao' : 'Próximo'})

    const [ botaoVoltar, setBotao ] = useState('oculto')

    const cadastrarAluno = async () => {

        const resultadoDaRequest = await salvarAluno(dadosCadastro)

        if(resultadoDaRequest.status == 200) {
            setDados(formInicial)
            setEtapa({'etapa' : 'acesso', 'botao' : 'Próximo'})
        }

    }

    const proximaEtapa = () => {
        if(etapa.etapa == 'acesso'){
            setBotao('')
            setEtapa({'etapa' : 'contato', 'botao' : 'Cadastrar'})
        }
        else
            cadastrarAluno()
    }

    const etapaAnterior = () => {
        setBotao('oculto')
        setEtapa({'etapa' : 'acesso', 'botao' : 'Próximo'})
    }

    const renderizarEtapa = () => {
        switch(etapa.etapa) {
            case 'acesso':
                return (
                    <div className="container-inputs">
                        <div className="container-input">
                            <Inputs dadosCadastro={dadosCadastro} setDados={setDados} etapa="acesso" name="login" placeholder="Login" />
                        </div>
                        <div className="container-input">
                            <Inputs dadosCadastro={dadosCadastro} setDados={setDados} etapa="acesso" name="senha" type="password" placeholder="Senha" />
                        </div>
                        <div className="container-input">
                            <Inputs dadosCadastro={dadosCadastro} setDados={setDados} etapa="acesso" name="nome" placeholder="Nome" />
                        </div>
                    </div>
                )
            case 'contato':
                return (
                    <div className="container-inputs">
                        <div className="container-input">
                            <Inputs dadosCadastro={dadosCadastro} setDados={setDados} etapa="contato" name="email" placeholder="Email" />
                        </div>
                        <div className="container-input">
                            <Inputs dadosCadastro={dadosCadastro} setDados={setDados} etapa="contato" name="celular" placeholder="Celular" />
                        </div>
                        <div className="container-input">
                            <Inputs dadosCadastro={dadosCadastro} setDados={setDados} etapa="contato" name="telefone" placeholder="Telefone" />
                        </div>
                    </div>
                )
        }
    }

    return(
        <div className="container-alunos px-5">
            <div className="container-cadastro-mensagem">
                <div className="alert alert-success">
                    Aluno cadastrado com sucesso!
                </div>
                <div className="container-cadastro-aluno d-flex flex-column justify-content-start align-items-center pt-4 px-5">
                    <h4>
                        Cadastrar Aluno
                    </h4>
                    {renderizarEtapa()}
                    <div className="container-btn">
                        <button onClick={() => etapaAnterior()} className={`btn btn-warning ${botaoVoltar} btn-voltar`}>Voltar</button>
                        <button onClick={() => proximaEtapa()} className="btn btn-success">{etapa.botao}</button>
                    </div>
                </div>
            </div>
            <div className="container-crud">
                
            </div>
        </div>
    )

}

export default Alunos