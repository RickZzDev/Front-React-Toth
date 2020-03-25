import React, { Component } from 'react'

class Inputs extends Component {

    render() {
        return(
            <div className="form-group col-12">
                <label>{this.props.label}</label>
                <input type={this.props.type} name={this.props.name} onChange={this.capturarDadosCampos} className="form-control"/>
            </div>
        )
    }

}

export default Inputs