import React, { Component } from 'react'

class Inputs extends Component {

    render() {
        return(
            <div className="form-group">
                <label>{this.props.label}</label>
                <input type={this.props.type} name={this.props.name} onChange={this.capturarDadosCampos} className="form-control rounded-pill"/>
            </div>
        )
    }

}

export default Inputs