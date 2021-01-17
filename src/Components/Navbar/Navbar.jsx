import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {MdFingerprint} from 'react-icons/md' ;
import './Navbar.css';

const Navbar = () => {

    const ActiveColor = {
        color:'#f00946'
    }

    const [click, setClick] = useState(false) ;
    const clickHandler = ()=>{
        setClick(!click)
    }
    

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                   <div className="nav-des">
                   <MdFingerprint className='navbar-icon'/>
                    <NavLink to='/' className='navbar-logo' >LAVISH</NavLink>
                   </div>
                    <div className="menu-icons" onClick={clickHandler}>
                    {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className='nav-menu' >
                        
                        <li  className="nav-item">
                            <NavLink exact activeStyle={ActiveColor} to='/' className='nav-link'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={ActiveColor} to='/services' className='nav-link'>Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={ActiveColor} to='/products' className='nav-link'>Products</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to='/sign-up' className='btn nav-btn'>SIGN UP</NavLink>
                        </li>

                    </ul>
                </div>
                {/* dropdown */}

              

            </div>
            <ul className={click ? 'dropdown' : 'none'}>
                        
                        <li className="nav-item">
                            <NavLink exact activeStyle={ActiveColor} to='/' className='nav-link'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={ActiveColor} to='/services' className='nav-link'>Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={ActiveColor} to='/products' className='nav-link'>Products</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink activeStyle={ActiveColor} to='/sign-up' className='btn nav-btn'>SIGN UP</NavLink>
                        </li>

                    </ul>

        </>
    )
}

export default Navbar;
