import React from 'react'

const NavBar = () => {
  return (
    <nav className='h-[10vh] w-[100vw] flex justify-around items-center bg-[lightgrey]'>
        <h1 className='text-2xl font-bold'>FitStack</h1>

        <div className='flex justify-center items-center gap-[40px]'>
            <p>Sign Up</p>
            <p>Log In</p>
        </div>
    </nav>
  )
}

export default NavBar;