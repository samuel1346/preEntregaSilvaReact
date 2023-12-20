import React from 'react'
import { useState } from 'react'

const BurgerBtnComponents = (props) => {
    const [btnDisplaied, setBtnDisplaied]= useState("=")

    return (
    <div onClick={props.handleDisplayBar}>
        {btnDisplaied}
    </div>
    )
}

export default BurgerBtnComponents