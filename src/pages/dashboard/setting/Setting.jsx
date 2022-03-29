import React from 'react'
import { Modal } from "antd"

const Setting = () => {

  const resetNote = ()=>{

    Modal.confirm({
      title : "Reset Note",
      content : "Yakin akan hapus semua note ?",
      onOk : ()=>{
        localStorage.setItem("_notes", "[]")
      }
    })
    
  }

  return (
    <main className='w-full h-screen flex flex-col bg-slate-100 gap-4 justify-center items-center'>
        <button className='w-full h-12 bg-orange-500 text-white uppercase rounded-md' onClick={resetNote}> 
            reset note
        </button>

        <button className='w-full h-12 bg-blue-500 text-white uppercase rounded-md'>
            logout
        </button>
    </main>
  )
}

export default Setting