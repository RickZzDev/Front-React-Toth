import React from 'react'
import './style.css'

const Ano = ({anos}) => {

    const iconAnos = () => {
        return anos.map(ano => <div className="cont-ano"><div className="ano p-3">{ano.ano}</div></div>)
    }

    return (
        <div className="container-ano p-5">
            {iconAnos()}
        </div>
    )

}

export default Ano