import React, { Component } from 'react'

 class Binding_Component extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'goodmorning'
         }
        //  this.nameChangeHandler=this.nameChangeHandler.bind(this);
     }
     nameChangeHandler(){
         this.setState({
             name:'good evening'
         })
     }
     
    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <button onClick={()=>this.nameChangeHandler()}>change</button>
                
            </div>
        )
    }
}

export default Binding_Component
