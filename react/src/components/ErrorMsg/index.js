import React from 'react'
import strings from '../../utils/constants/strings.js'

const ErrorMsg= (props) => (
  <p className="error">
    {strings.network_something_wrong} 
    <span className="error__message"> {props.message}</span>
  </p>
)

export default ErrorMsg