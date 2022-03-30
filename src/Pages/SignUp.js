import React from 'react';
import './pageStyles.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='container1'>
      <div className='sub-container1'>
        <form className='form2'>
          <label className='labels'>
            <h5>First Name:</h5>
            <input type='text' className='inputs'/>
          </label>
          <label className='labels'>
            <h5>Last Name:</h5>
            <input type='text' className='inputs'/>
          </label>
          <label className='labels'>
            <h5>Phone:</h5>
            <input type='text' className='inputs'/>
          </label>
          <label className='labels'>
            <h5>Email:</h5>
            <input type='text' className='inputs'/>
          </label>
          <label className='labels'>
            <h5>Password:</h5>
            <input type='password' className='inputs'/>
          </label>
          <label className='labels'>
            <h5>Confirm Password:</h5>
            <input type='password' className='inputs'/>
          </label>
          <label className='labels'>
            <input type='button' value='REGISTER' id='registerbtn'/>            
          </label>          
        </form>        
      </div>
    </div>
  )
}

export default SignUp;