import React, { Component } from 'react'
import Chaild_Component from './Chaild_Component';
import Student from './Class-Component';

class Events_Component extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'babu'
        }
        // console.log(this);
    }
    nameChangeHandler=(Studentname)=>{
        // this.setState({
        //     name:'babu'
        // alert('parent')
        // })
        this.setState({
            name:Studentname
        })
    }
    
    render() {
        return (
            <div>
                {/* <button onClick={this.nameChangeHandler}>change text</button> */}
                {/* <h2>{this.state.name}</h2> */}
                <Chaild_Component chileEvent={this.nameChangeHandler}name={this.state.name}/>
            </div>
        )
    }
}

export default Events_Component
