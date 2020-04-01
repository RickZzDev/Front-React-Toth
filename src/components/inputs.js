import React, { Component } from 'react'
import './css/style.css'

class Inputs extends Component {

    render() {
        return(
            <div className="col-12">
                <div className="container-toth-input">
                    <label></label>
                    <input type={this.props.type} name={this.props.name} required className="input-toth"/>
                    <span className={"placeholder-" + this.props.placeholder}></span>
                </div>
            </div>
        )
    }

}

export default Inputs