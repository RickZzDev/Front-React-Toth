import React, { Component } from 'react';

class Botao extends Component {

    render() {
        return(
            <input type="button" value={this.props.value}  className={this.props.color, " btn btn-outline-primary "}/>
        );
    }

}

export default Botao;