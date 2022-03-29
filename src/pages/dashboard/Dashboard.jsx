import React, {useEffect} from 'react'
import BottomNav from '../../components/bottomNav/BottomNav'
import { Outlet } from 'react-router-dom'
import { checkNote } from './createnote/handleCreateNote'

export const Dashboard = () => {

  useEffect(()=>{
    checkNote()
  },[])

  return (
    <main className='w-screen flex flex-col p-8 bg-slate-100'>
        
        <Outlet />

        <BottomNav />
    </main>
  )
}
