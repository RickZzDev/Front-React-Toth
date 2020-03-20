import React, { Component } from 'react';

class Botao extends Component {

    render() {
        return(
            <input type="button" value={this.props.value}  className={"btn ", this.props.color}/>
        );
    }

}

export default Botao;