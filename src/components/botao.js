import React, { Component } from 'react';

class Botao extends Component {

    render() {
        return(
            <input type="submit" value={this.props.value}  className={"btn btn-block" + this.props.color}/>
        );
    }

}

export default Botao;