import React, { useState, useEffect } from 'react'
import './style.css'

import userCinza from './images/user-cinza.png'
import userAzulGrande from './images/user-azul-grande.png'
import userAzulPequeno from './images/user-azul-pequeno.png'

import adressCinza from './images/adress-cinza.png'
import adressAmareloGrande from './images/adress-amarelo-grande.png'
import adressAmareloPequeno from './images/adress-amarelo-pequeno.png'

import teacherCinza from './images/teacher-cinza.png'
import teacherGrandeVerde from './images/teacher-verde-grande.png'
import teacherPequenoVerde from './images/teacher-verde-pequeno.png'

import materiasCinza from './images/materias-cinza.png'
import materiasGrande from './images/materias-grande.png'
import materiasPequeno from './images/materias-pequeno.png'

const Progresso = () => {

    const [etapa, setEtapa] = useState(1)

    const [progressos, setProgressos] = useState({
        "one" : {
            "img" : userCinza,
            "imgSize" : "pequeno",
            "bar" : ""
        },
        "two" : {
            "img" : adressCinza,
            "imgSize" : "pequeno",
            "bar" : ""
        },
        "three" : {
            "img" : teacherCinza,
            "imgSize" : "pequeno",
            "bar" : ""
        },
        "four" : {
            "img" : materiasCinza,
            "imgSize" : "pequeno",
            "bar" : ""
        }
    })

    useEffect(() => {
        setProgressos({...progressos, "one" : {
            "img" : userAzulGrande,
            "imgSize" : "grande",
            "bar" : "completed-bar"
        }})
    }, [])

    useEffect(() => {

        switch(etapa) {
            case 2:
                setProgressos({...progressos, "one" : {
                    "img" : userAzulPequeno,
                    "imgSize" : "pequeno",
                    "bar" : "completed-bar"
                }, 
                "two" : {
                    "img" : adressAmareloGrande,
                    "imgSize" : "grande",
                    "bar" : "completed-bar"
                }})
                break;
            case 3:
                setProgressos({...progressos, "one" : {
                    "img" : userAzulPequeno,
                    "imgSize" : "pequeno",
                    "bar" : "completed-bar"
                }, 
                    "two" : {
                        "img" : adressAmareloPequeno,
                        "imgSize" : "pequeno",
                        "bar" : "completed-bar"
                },
                    "three" : {
                        "img" : teacherGrandeVerde,
                        "imgSize" : "grande",
                        "bar" : "completed-bar"
                }
                })
                break;
            case 4:
                setProgressos({...progressos, "one" : {
                    "img" : userAzulPequeno,
                    "imgSize" : "pequeno",
                    "bar" : "completed-bar"
                }, 
                    "two" : {
                        "img" : adressAmareloPequeno,
                        "imgSize" : "pequeno",
                        "bar" : "completed-bar"
                },
                    "three" : {
                        "img" : teacherPequenoVerde,
                        "imgSize" : "pequeno",
                        "bar" : "completed-bar"
                },
                    "four" : {
                        "img" : materiasGrande,
                        "imgSize" : "grande",
                        "bar" : "completed-bar"
                }
                })
                break;
        }

    }, [etapa])

    return(
        <>
        <div className="cont-etapas">
            <div className="fasesEtapa pt-3">
                <img className={progressos.one.imgSize} src={progressos.one.img} />
                <div className="cont-progress-fragmente">
                    <div className={`progress-fragment ${progressos.one.bar} colorOne`}>

                    </div>
                </div>
            </div>
            <div className="fasesEtapa pt-3">
                <img className={progressos.two.imgSize} src={progressos.two.img} />
                <div className="cont-progress-fragmente">
                    <div className={`progress-fragment ${progressos.two.bar} colorTwo`}>

                    </div>  
                </div>
            </div>
            <div className="fasesEtapa pt-3">
                <img className={progressos.three.imgSize} src={progressos.three.img} />
                <div className="cont-progress-fragmente">
                    <div className={`progress-fragment ${progressos.three.bar} colorThree`}>

                    </div>
                </div>
            </div>
            <div className="fasesEtapa pt-3">
                <img className={progressos.four.imgSize} src={progressos.four.img} />
                <div className="cont-progress-fragmente">
                    <div className={`progress-fragment ${progressos.four.bar} colorFour`}>

                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Progresso