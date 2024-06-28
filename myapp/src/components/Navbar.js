import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    const Separator = () => <div className=' mt-28'></div>

    return (
        <>
           
      <nav className=' z-50  overflow-hidden h-28   top-0 left-0  fixed  w-full opacity-100  flex justify-center items-center bg-red-800 '>
          <div className='mx-2 w-full h-5/6 bg-white flex'>
              <div className='w-5/12 h-full flex  '>
                  <div className='w-2/5 flex items-center justify-center text-center text-3xl font-medium '>
                        DATABASE GROUP
                  </div>
                  <div className='w-3/5 flex items-center text-xl font-medium justify-center'>
                        Western Offshore Basin
                  </div>
              </div>
                    <div className='w-7/12 px-6 ml-4  h-full flex justify-around items-center  '>
                        <Link to={'/'}>
              <button className=" hover:border-red-800 border-secondary hover:border-b-4 hover:rounded-sm ease-in-out delay-50 duration-100">Home</button>
                        </Link>
                        <Link to={'vendors'}>
                  <button className=" hover:border-red-800 border-secondary hover:border-b-4 hover:rounded-sm ease-in-out delay-50 duration-100">
                    Vendors
                    </button>
                        </Link>
                        <Link to={'assets'}>
                  <button className=" hover:border-red-800 border-secondary hover:border-b-4 hover:rounded-sm ease-in-out delay-50 duration-100">
                    Assets
                    </button>
                        </Link>
                        <Link to={'spares'}>
                  <button className=" hover:border-red-800 border-secondary hover:border-b-4 hover:rounded-sm ease-in-out delay-50 duration-100">
                    Spares
                    </button>
                        </Link>

                        <Link to={'amc'}>
                  <button className=" hover:border-red-800 border-secondary hover:border-b-4 hover:rounded-sm ease-in-out delay-50 duration-100">
                    AMC
                    </button>
                        </Link>

                        <Link to={'admin'}>
                  <button className=" hover:border-red-800 border-secondary hover:border-b-4 hover:rounded-sm ease-in-out delay-50 duration-100">

                  Admin
                  </button>
                        </Link>
                        <Link to={'login'}>
                  <button className=" hover:border-red-800 border-secondary hover:border-b-4 hover:rounded-sm ease-in-out delay-50 duration-100">

                  Login
                  </button>
                        </Link>
              </div>
          </div>
            </nav>
            <Separator/>
            <Outlet/>
      </>
  )
}

export default Navbar