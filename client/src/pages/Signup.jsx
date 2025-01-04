import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

function Signup() {
const [formData, setformData] = useState({})
const [error, seterror] = useState(null)
const [loading, setloading] = useState(false)
const navigate = useNavigate()

  const handleChange = (e)=>{
    setformData({
      ...formData,
      [e.target.id] : e.target.value,
    })
  }

  const handleSubmit = async (e)=>{
  e.preventDefault();
  try {
    setloading(true);
  const res = await fetch ('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  const data = await res.json();
  if(data.success === false){
    seterror(data.message);
    setloading(false);
    return;
  }
  setloading(false)
  seterror(null)
  navigate('/signin');
  } catch (error) {
    setloading(false)
    seterror(error.message)
  }
  
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
        <input type="text" placeholder='John Doe' className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type="email" placeholder='Johndoe@gmail.com' className='border p-3 rounded-lg' id='email'onChange={handleChange} />
        <input type="password" placeholder='******' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled= {loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className='flex mt-3'>
        <p>
          Have an account?
        </p>
        <Link to={"/signin"}>
        <span className='text-blue-700 hover:text-red-700 mx-1'>Sign In</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default Signup
