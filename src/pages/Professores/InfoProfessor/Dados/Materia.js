import React from 'react'
import IconeMateria from '../../../components/IconeMateria'

const Materia = ({materias}) => {

    console.log(materias)

    const materiasIcons = () => {

        return materias.map(materia => {
            return  <div className="containerMateria">
                        <div className="materia d-flex flex-row justify-content-start align-items-center p-3">
                            <IconeMateria materia={materia} />
                            <p>{materia.nome}</p>
                        </div>
                    </div>
        })

    }

    return (
        <div className="container-materia d-flex justify-content-between p-5">
            {materiasIcons()}
        </div>
    )

}

export default Materia