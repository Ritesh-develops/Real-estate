import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to={"/"}>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Manse</span>
        <span className='text-slate-700'>Estate</span>
      </h1>
        </Link>
      
      <form className='bg-slate-100 p-3 rounded-lg flex items-center '>
        <input type="text" placeholder='Search...' className='w-24 sm:w-64 bg-transparent border-r-2 border-r-slate-300 outline-none'/>
        <button>
        <SearchOutlinedIcon className='text-slate-500 flex justify-center'/>
        </button>
      </form>
      <ul className='flex gap-4 text-slate-600 '>
        <Link to={"/"}>
        <li className='hidden sm:inline hover:text-slate-950'>Home</li>
        </Link>
        <Link to={"/about"}>
        <li className='hidden sm:inline hover:text-slate-950'>About</li>
        </Link>
        <Link to={"/signin"}>
        <li className='hover:text-slate-950'>Sign in</li>
        </Link>
        
      </ul>
      </div>
    </header>
  )
}

export default Header
