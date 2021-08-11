import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    
    return (
        <button onClick ={onClick} style = {{backgroundColor: color}} class='btn'>{text}</button>

    )
}
Button.defaultProps ={
    color: 'steelblue'
}
Button.propType ={
    text: PropTypes.string,
    color: PropTypes.string
}
export default Button