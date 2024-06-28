import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='w-full flex-col'>
        <div className='grid grid-rows-1 grid-cols-4 transition-all fixed w-full z-10'>
          <NavLink to={''} className={({ isActive }) => (
            isActive ? 'flex items-center justify-center h-12 bg-amber-300 border border-red-800 border-r-0 hover:bg-amber-400 duration-300' : 'flex items-center justify-center h-12 bg-slate-100 border border-red-800 border-r-0 hover:bg-slate-200 duration-300'
          )}>
            G&G DATA CENTER , WOB
          </NavLink>
          <NavLink to={'vrc'} className={({ isActive }) => (
            isActive ? 'flex items-center justify-center h-12 bg-amber-300 border border-red-800 border-r-0 hover:bg-amber-400 duration-300' : 'flex items-center justify-center h-12 bg-slate-100 border border-red-800 border-r-0 hover:bg-slate-200 duration-300'
          )}>
            VRC , WOB
          </NavLink>
          <NavLink to={'dr'} className={({ isActive }) => (
            isActive ? 'flex items-center justify-center h-12 bg-amber-300 border border-red-800 border-r-0 hover:bg-amber-400 duration-300' : 'flex items-center justify-center h-12 bg-slate-100 border border-red-800 border-r-0 hover:bg-slate-200 duration-300'
          )}>
            DR CENTER , WOB
          </NavLink>
          <NavLink to={'spic'} className={({ isActive }) => (
            isActive ? 'flex items-center justify-center h-12 bg-amber-300 border border-red-800 border-r-0 hover:bg-amber-400 duration-300' : 'flex items-center justify-center h-12 bg-slate-100 border border-red-800 border-r-0 hover:bg-slate-200 duration-300'
          )}>
            SPIC , WOB
          </NavLink>
              </div>
              
              <div className='pt-20'>
        <Outlet />
              </div> 
             
      </div>
    </>
  )
}

export default Home
