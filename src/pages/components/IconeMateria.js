import React, { useState, useEffect } from 'react'
import { getMaterias } from '../../services/escola/cadastroInfo'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faLanguage, faAtom, faHourglass, 
         faFlask, faDivide, faGlobeAfrica,
         faLightbulb, faPaintBrush, faRunning,
         faTree, faUsers, faFont} from "@fortawesome/free-solid-svg-icons"


const IconeMateria = ({materia}) => {

    const iconesDasMaterias = {
        "Português" : {
            "icone" : faFont,
            "cor" : '#f2b600',
        },
        "Matemática" : {
            "icone" : faDivide,
            "cor" : '#c71400',
        },
        "Física" : {
            "icone" : faAtom,
            "cor" : '#9342f5',
        },
        "Química" : {
            "icone" : faFlask,
            "cor" : '#00e6d2',
        },
        "Inglês" : {
            "icone" : faLanguage,
            "cor" : '#f5425d',
        },
        "Geografia" : {
            "icone" : faGlobeAfrica,
            "cor" : '#76de00',
        },
        "História" : {
            "icone" : faHourglass,
            "cor" : '#007bff',
        },
        "Filosofia" : {
            "icone" : faLightbulb,
            "cor" : '#ffed75',
        },
        "Sociologia" : {
            "icone" : faUsers,
            "cor" : '#75ffb5',
        },
        "Artes" : {
            "icone" : faPaintBrush,
            "cor" : '#ffb175',
        },
        "Educação Física" : {
            "icone" : faRunning,
            "cor" : '#ff75d1',
        },
        "Biologia" : {
            "icone" : faTree,
            "cor" : '#98c414',
        }
    }

    console.log(materia)

    return(
        <spam>
            <FontAwesomeIcon icon={iconesDasMaterias[materia.nome].icone} color={iconesDasMaterias[materia.nome].cor}/>
        </spam>
    )

}

export default IconeMateria