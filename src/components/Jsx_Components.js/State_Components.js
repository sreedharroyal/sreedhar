import React, { Component } from 'react'

export class State_Components extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'rahul'
        }
    }
    nameHandler=()=>{
        this.setState({
            name:'sreedhar'
        })
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <button onClick={this.nameHandler
                }>name change</button>
            </div>
        )
    }
}

export default State_Components
