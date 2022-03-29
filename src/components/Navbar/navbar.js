import React, {useState} from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { VscThreeBars } from 'react-icons/vsc';
import {CgClose} from 'react-icons/cg';

function Navbar() {

  const [dropdown, setDropdown] = useState(false);

  const navElements = () => {
    return (
    <nav className='navigation'>      
      <Link to="/about" className='navlink'>                   
        About
      </Link>
      <Link to="/services" className='navlink'>                   
        Services
      </Link>
      <Link to="/contact-us" className='navlink'>                   
        Contact Us
      </Link>
      <Link to="/sign-up" className='navlink'>                   
        Sign Up
      </Link>
    </nav>
    );
  }

  const navMobile = () => {
    return (
      <div className={!dropdown ? 'nav-menu': 'dropdown'}>
        <Link id='navlink' to="/" className='navlink' onClick={()=>setDropdown(!dropdown)}>                   
          Home
        </Link>
        <Link id='navlink' to="/about" className='navlink' onClick={()=>setDropdown(!dropdown)}>                   
          About
        </Link>
        <Link id='navlink' to="/services" className='navlink' onClick={()=>setDropdown(!dropdown)}>                   
          Services
        </Link>
        <Link id='navlink' to="/contact-us" className='navlink' onClick={()=>setDropdown(!dropdown)}>                   
          Contact Us
        </Link>
        <Link id='navlink' to="/sign-in" className='navlink' onClick={()=>setDropdown(!dropdown)}>                   
          Sign In
        </Link>
        <Link id='navlink' to="/sign-up" className='navlink' onClick={()=>setDropdown(!dropdown)}>                   
          Sign Up
        </Link>
      </div>
    );
  }

  const changeLogo = () => {
    if(!dropdown) {
      return <CgClose className='icon' onClick={()=>setDropdown(!dropdown)}/>;
    } else {
      return <VscThreeBars className='icon' onClick={()=>setDropdown(!dropdown)}/>;
    }    
  }

  return (    
    <div className='container'>         
      <Link to="/" className='navlink'>                   
        <h1 className='logo'>Logo</h1>
      </Link>
      {changeLogo()}
      {navElements()}
      {navMobile()}
      <Link to="/sign-in" id='Button' className='Button' >
        Sign In
      </Link>
    </div>   
  )
}

export default Navbar;