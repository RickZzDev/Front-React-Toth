import React from 'react'
import './style.css'

const Inputs = ({type, name, placeholder, setDados, dadosCadastro, etapa, verificarCep, disabled}) => {
    return(
        <div className="cont-input">
            <input className="edited-input"
            onBlur={e => e.target.name == "cep" ? verificarCep(e.target.value) : ''}
            onChange={(e) => {
                setDados({
                    ...dadosCadastro,
                    [etapa] : {
                        ...dadosCadastro[etapa],
                        [name] : e.target.value
                    }
                })
            }} type={type} name={name} value={dadosCadastro[etapa][name]} required disabled={disabled}/>
            <label>
                {placeholder}
            </label>
        </div>
    )

}

export default Inputs