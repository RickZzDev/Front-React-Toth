import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import './style.css'

import TothTitle from './components/TothTitle'
import imageFund from './images/fund.png'
import imageMedio from './images/f-medio.png'
import imageFundMedio from './images/medio.png'
import { isLogged, doLog, signOut } from '../../services/escola/loginService'
import { saveEscola, getMaterias, getAnos } from '../../services/escola/cadastroInfo'

const Index = (props) => {

    const [optionSelected, setOption] = useState()
    const [buttonDisabled, setDisabled] = useState("disabled")
    const [optionsMaterias, setOptions] = useState()
    const [step, setStep] = useState(1)
    const [fadeStep, setFade] = useState('');
    const [visibilityNone, setVisibilityNone] = useState('');
    const [valueSelect, setSelectValue] = useState(null);
    const [stepTwo, setStepTwo] = useState({displayNone: ' d-none ', opacity: ' opacity-0 '})
    const [tipoSelecionado, setTipoEscola] = useState()

    useEffect(() => {
        const pegarMaterias = async () => {
            const requisicaoMaterias =  await getMaterias()
            const materiasEncontradas = requisicaoMaterias.data

            const jsonDeOptionsDoSelect = materiasEncontradas.map(materia => {return {"value" : materia.id, "label" : materia.nome}})
            setOptions(jsonDeOptionsDoSelect)
        }

        pegarMaterias()
    }, [])

    const elementoSelecionado = (event) => {

        const elemento = event.target
        const elementoPai = elemento.parentNode
        const arrayElementos = Array.from(elementoPai.parentNode.children)
    
        if(elementoPai.classList.contains("elementSelected")){
            elementoPai.classList.remove("elementSelected")
            setTipoEscola('');
            setDisabled("disabled")
        }
        else{
            arrayElementos.forEach(element => {
                if(element.classList.contains("elementSelected"))
                    element.classList.remove("elementSelected")
            });
            elementoPai.classList.add("elementSelected")
            setTipoEscola(elemento.dataset.name)
            setDisabled("")
            setOption(elemento)
        }
    
    }

    const salvarDadosEscola = async () => {
        const escolaLogada = isLogged()

        if(escolaLogada != null){
            delete escolaLogada.jwt;

            escolaLogada.escola.tipo_escola = tipoSelecionado;
            
            let materiasSelecionadas = valueSelect.map((item) => {
                return {"id" : item.value, "nome" : item.label}
            })

            escolaLogada.escola.materias = materiasSelecionadas;

            const requisicaoAnos = await getAnos()
            const anosCadastrados = requisicaoAnos.data
            let anosFiltrados = []

            if(tipoSelecionado == "FUNDAMENTAL")
                anosFiltrados = anosCadastrados.filter(ano => ano.id <= 9)

            if(tipoSelecionado == "FUNDAMENTAL_MEDIO")
                anosFiltrados = anosCadastrados.filter(ano => ano.id <= 12)

            if(tipoSelecionado == "MEDIO")
                anosFiltrados = anosCadastrados.filter(ano => ano.id > 9 && ano.id <= 12)
            
            escolaLogada.escola.anos = anosFiltrados
            delete escolaLogada.escola.tipoDeEscola

            const salvarEscola = await saveEscola(escolaLogada.escola)
            
            if(salvarEscola == null)
                return null

            if(salvarEscola.status == 200)
                return salvarEscola.data
        }

    }

    const nextStep = async () => {
        if(buttonDisabled == "disabled")
            return null
        else if (step == 1){
            setStep(2)
            setFade("fadeStep")
            setTimeout(() => setVisibilityNone(" visibilityNone "), 1200)
            setTimeout(() => setStepTwo({displayNone: '', opacity: ' opacity-1 '}), 1200)
        }
        else if (step == 2){
            const escolaAlterada = await salvarDadosEscola()
            const jwt = isLogged().jwt
            escolaAlterada.jwt = jwt
            console.log(jwt)
            console.log(escolaAlterada)
            if(escolaAlterada != null){
                signOut()
                doLog(escolaAlterada)
                props.history.push("/home")
            }
        }
    }

    return(
        <div className="d-flex backDiv justify-content-center align-items-center">
            <div className="container text-center pb-3">
                <div className="titleToth" id="animationTitle">
                    <p className="display-4" style={{display: 'inline-block'}}>
                        <spam className="titleAnimation">
                            Bem-vindo
                        </spam>
                        <spam className="titleAnimation">
                          &nbsp;ao
                        </spam>
                    </p> <TothTitle />
                    <h5 className="font-italic mt-3">
                        {step == 1 ? <p>Qual o tipo de ensino em sua escola?</p> : <p>Selecione todas as matérias presentes em sua escola</p>}
                    </h5>
                </div>
                <div className={"etapaUm " + fadeStep + visibilityNone}>
                    <div className="d-flex justify-content-center align-items-center mt-5">
                        <div className="options-image mx-4 efectCard">
                            <img className="img-fluid imgEscola" id="optionUm" data-name="FUNDAMENTAL" onClick={elementoSelecionado} src={imageFund}/>
                        </div>
                        <div className="options-image mx-4 efectCard">
                            <img className="img-fluid imgEscola" id="optionDois" data-name="FUNDAMENTAL_MEDIO" onClick={elementoSelecionado} src={imageFundMedio} />
                        </div>
                        <div className="options-image mx-4 efectCard">
                            <img className="img-fluid imgEscola" id="optionTres" data-name="MEDIO" onClick={elementoSelecionado} src={imageMedio} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="options-text mx-4 text-center">
                            Fundamental
                        </div>
                        <div className="options-text mx-4 text-center">
                            Ensino Médio/Fundamental
                        </div>
                        <div className="options-text mx-4 text-center">
                            Ensino Médio
                        </div>
                    </div>
                </div>
                <div className="etapaDois d-flex justify-content-center align-items-center">
                    <div className={"containerSelect" + stepTwo.displayNone + stepTwo.opacity} >
                        <Select
                            placeholder="Seleciona as matérias"
                            value={valueSelect}
                            onChange={(selected) => {setSelectValue(selected)}}
                            options={optionsMaterias}
                            isMulti
                        />
                    </div>
                </div>
                <div className="p-2">
                    <button className={"btn btn-warning mt-3 " + buttonDisabled} onClick={nextStep}>
                        Próximo
                    </button>
                </div>
            </div>
        </div>
    );
}




export default Index