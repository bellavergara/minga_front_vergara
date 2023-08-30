import React from 'react'
// PROPS es una propiedad que sirve  para pasar datos de componente padre a componente hijo //
const Arrow = (props) => {
    return (
        <img className='cursor-pointer' src={props.src} onClick={props.onClick} alt="" />
    )
}

export default Arrow