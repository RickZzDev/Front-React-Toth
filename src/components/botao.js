import React, { Component } from 'react';


function Botao({value,color,mostraJson}){
    return(
        <input type="submit" onClick={mostraJson} value={value}  className={"btn btn-block" + color}/>
    );
}
  
export default Botao;