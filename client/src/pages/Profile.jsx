import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const {currentUser} = useSelector(state=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col'>
        <img src={currentUser.avatar} alt="profile" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />
        <input type="text" placeholder='username' className='border-3 p-3 rounded-lg  mt-3' id='username' />
        <input type="email" placeholder='email' className='border-3 p-3 rounded-lg mt-3' id='email' />
        <input type="text" placeholder='password' className='border-3 p-3 rounded-lg mt-3' id='password' />
        <button className='mt-3 bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80'>
          Update
        </button>
      </form>

    
    <div className='flex justify-between mt-3'>
      <span className='text-red-600 cursor-pointer'> Delete Account</span>
      <span className='text-red-600 cursor-pointer'> Sign-Out</span>
    </div>
    </div>
  )
}

export default Profile
