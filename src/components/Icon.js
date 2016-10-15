import React from 'react'

export default ({ name, className }) => {
  return <span className={`fa fa-${name} ` + className}/>
}
