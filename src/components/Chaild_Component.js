import React from 'react'

function Chaild_Component(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <button onClick={()=>props.chileEvent
            ('sreedhar')}>childbutton</button>
            
        </div>
    )
}

export default Chaild_Component
