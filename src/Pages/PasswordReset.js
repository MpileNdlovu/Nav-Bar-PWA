import React from 'react';
import './pageStyles.css';


const PasswordReset = () => {
  return (
    <div className='container1'>
      <div className='sub-container1'>
        <h4>
          Please send us your email address so that we can 
          send you a temporal password you can use to log into your
          account. Please make sure that you change it once logged in. Thank you....
        </h4>
        <form className='form'>
          <label className='labels'>
            <h5>Email:</h5>
            <input type="email" className='inputs'/>
          </label>          
          <label className='labels'>
            <input type='submit' value='SUBMIT' id='button'/>            
          </label>          
        </form>        
      </div>
    </div>
  )
}

export default PasswordReset;