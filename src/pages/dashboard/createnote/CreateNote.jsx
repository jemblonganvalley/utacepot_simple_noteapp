import React, {useEffect, useState} from 'react'
import {FcIdea} from "react-icons/fc"
import { checkNote, handleCreateNote } from './handleCreateNote'

const CreateNote = () => {

  return (
    <main className='w-full h-screen flex flex-col gap-4'>

        <form className='w-full flex flex-col gap-4' onSubmit={handleCreateNote} >
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="title">Judul Note</label>
                <input type="text" id='title' name='title' className='h-12 px-4 bg-white outline-none' />
            </div>

            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="content">Note</label>
                <textarea type="text" id='content' name='content' className='p-4 bg-white outline-none h-[200px]' ></textarea>
            </div>

            <button type='submit' className='w-full h-12 bg-orange-300 text-white uppercase text-lg flex justify-center items-center rounded-md gap-2'>
                 <FcIdea /> submit
            </button>
        </form>

    </main>
  )
}

export default CreateNote