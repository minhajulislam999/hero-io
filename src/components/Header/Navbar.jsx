import React from 'react'
// import { Links } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {


  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content  hover:text-[#632EE3] z-1 mt-3 w-52 p-2 rounded-xl gap-5">

            <NavLink className={({isActive}) => isActive? "tex-[#632EE3] " : "text-gray-500"}  end to = '/'>

              Home
            </NavLink>
            <NavLink className={({isActive}) => isActive? "tex-[#632EE3] " : "text-gray-500"}   to='/app'>

              App
            </NavLink>
            <NavLink className={({isActive}) => isActive? "tex-[#632EE3] " : "text-gray-500"}   to = '/installation'>

              Installation
            </NavLink>






            <a href='https://github.com/minhajulislam999' className="btn  bg-[#632EE3] text-white rounded-xl">
              <img className='w-2px h-2px bg-[#632EE3] rounded' src="https://i.ibb.co.com/bMmg01MS/fi-2111432.png" alt="" srcset="" />

              Contribute</a>





          </ul>
        </div>
        <Link to='/' className = "btn btn-ghost text-xl text-[#632EE3] w-110px h-40px rounded-xl" >
        
       
          <img className='w-40px h-40px' src="https://i.ibb.co.com/wFJP7LRh/logo-D9-NHcesw-1.png" alt="" srcset="" />

          HERO.IO
        </Link>
        
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1 rounded-xl gap-5">
          <NavLink className={({isActive}) => isActive? "tex-[#632EE3] " : "text-gray-500"}  end to = '/'>

              Home
            </NavLink>
            <NavLink className={({isActive}) => isActive? "tex-[#632EE3] " : "text-gray-500"}   to='/app'>

              App
            </NavLink>
            <NavLink className={({isActive}) => isActive? "tex-[#632EE3] " : "text-gray-500"}   to = '/installation'>

              Installation
            </NavLink>



          
        </ul>
      </div>
      <div className="navbar-end w-145px h-43px">
        <a href='https://github.com/minhajulislam999' className="btn  bg-[#632EE3] text-white rounded-xl">
          <img className='w-2px h-2px bg-[#632EE3] rounded' src="https://i.ibb.co.com/bMmg01MS/fi-2111432.png" alt="" srcset="" />

          Contribute</a>
      </div>
    </div>
  )
}

export default Navbar
