import React from 'react'

export const FilterBTN = ({text, index, name, setState}) => {
  return (
    <div>
     <>
  <input type="radio"
  onClick={() => setState(text)}
   className="btn-check"
    id={`${name}=${index}`}
     autoComplete="off"
     name={name} />
     
  <label className="btn btn-outline-primary" htmlFor={`${name}=${index}`}>{text}</label>
</>

    </div>
  )
}
