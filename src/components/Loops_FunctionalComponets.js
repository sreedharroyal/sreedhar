import React from 'react'

function Loops_FunctionalComponets() {
    const players=['sachin','rahul','viru']
    return (
        <div>
            {
                players.map(name=><h2>{name}</h2>)
            }
        </div>
    )
    
}

export default Loops_FunctionalComponets
