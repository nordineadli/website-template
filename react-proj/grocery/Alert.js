import React, { useEffect } from 'react'

const Alert = ({ alert}) => {
  const { value, type, msg } = alert
  if (value) {
    return <p className={type}>{msg}</p>
  }
}

export default Alert
