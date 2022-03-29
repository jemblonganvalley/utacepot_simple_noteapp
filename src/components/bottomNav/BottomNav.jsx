import React from 'react'
import { Link } from 'react-router-dom'
import {FcHome, FcNews, FcPlus, FcSettings, FcSportsMode} from "react-icons/fc"

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 p-4 w-screen h-20'>
        <nav className='w-full h-full flex items-center justify-between  bg-orange-300 text-white rounded-full'>

            <Link className='h-full flex-1 flex justify-center items-center text-xl' to={"/dashboard/home"}>
                <FcHome />
            </Link>

            <Link className='h-full flex-1 flex justify-center items-center text-xl' to={"/dashboard/createnote"}>
                <FcPlus />
            </Link>

            <Link className='h-full flex-1 flex justify-center items-center text-xl' to={"/dashboard/setting"}>
                <FcSettings />
            </Link>

        </nav>
    </div>
  )
}

export default BottomNav