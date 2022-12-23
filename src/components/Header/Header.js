import React from 'react'
import { NavLink, Link } from "react-router-dom"

export const Header = () => {
  return (
    <>
    <header className='shadow py-4'>
        <div className="container">
    <div className="d-flex justify-content-between align-items-center">
    <Link to={"/"} className="text-decoration-none fs-4">The Ricky and Morty</Link>
    
     <ul className="d-flex gap-3 list-unstyled m-0 align-items-center">
        <li>
        <NavLink to={"/"} className={({isActive}) => isActive ? "text-decoration-underline" : "text-decoration-none"}>Home</NavLink>
        </li>
          <li>
        <NavLink to={"/episodes"} className={({isActive}) => isActive ? "text-decoration-underline" : "text-decoration-none"}>Episode</NavLink>
        </li>
          <li>
        <NavLink to={"/location"} className={({isActive}) => isActive ? "text-decoration-underline" : "text-decoration-none"}>Location</NavLink>
        </li>
    </ul>
    </div>
    </div>
   
    </header>
    </>
  )
}
