import React from 'react'

export const Button = (props) => {
  
  const {name, bgColor, bgHover} = props

  return (
    <button className={`w-full text-center py-2 text-white ${bgColor} ${bgHover} rounded shadow`}>{name}</button>
  )
}
