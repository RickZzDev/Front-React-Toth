import React, { Component } from 'react';

class Botao extends Component {

    render() {
        return(
            <button type="button" value={this.props.value} className="btn btn-block " className={this.props.color}/>
        );
    }

}

export default Botao;