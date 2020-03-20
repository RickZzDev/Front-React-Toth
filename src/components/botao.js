import React, { Component } from 'react';

class Botao extends Component {

    render() {
        return(
            <input type="submit" value={this.props.value} className="btn btn-block form-control" className={this.props.color}/>
        );
    }

}

export default Botao;