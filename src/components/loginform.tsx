"use client"

import { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  return (
    <div className=''>
      <form action="" className='contact-form'>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" name="" id="" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" name="" id="" placeholder='password' onChange={(e) => setpassword(e.target.value)} />
        </div>
        <button className='submit-btn' onClick={(e) => {
          console.log(email);
          console.log(password);
        }}>Submit</button>
      </form>
    </div>
  )
}