import React from 'react';
import { Link } from 'react-router-dom';
import './pageStyles.css';

const SignIn = () => {
  return (
    <div className='container1'>
      <div className='sub-container1'>
        <form className='form'>
          <label className='labels'>
            <h5>Email/Phone:</h5>
            <input type='text' className='inputs'/>
          </label>
          <label className='labels'>
            <h5>Password:</h5>
            <input type='password' className='inputs'/>
          </label>
          <label className='labels'>
            <input type='button' value='SIGN-IN' id='button'/>            
          </label>          
        </form>
        <Link to='/forgot-password' >
          <h5>Forgot Password?</h5>
        </Link>
      </div>
    </div>
  )
}

export default SignIn;