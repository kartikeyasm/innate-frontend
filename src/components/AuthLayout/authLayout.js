import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftAuth from './leftAuth'

function AuthLayout() {
  return (
    <div className='flex h-screen'>
        <div className='hidden lg:block w-1/2 bg-gray-100 p-6'>
            <LeftAuth/>
        </div>

        <div className='w-full lg:w-1/2 flex items-center justify-center p-6'>
            <Outlet/>
        </div>
    </div>
  )
}

export default AuthLayout