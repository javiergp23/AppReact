import React from 'react'

const Card = (props) => {
    return (
        <div>
            <h3>Nombre: {props.name}</h3>
            <h3>Edad: {props.age}</h3>
        </div>
    )
}

export default Card
