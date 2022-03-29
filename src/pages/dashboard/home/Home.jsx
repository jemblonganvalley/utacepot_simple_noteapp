import React, {useEffect, useState} from 'react'

const Home = () => {

    const [data ,setData] = useState([])

    useEffect(()=>{

        const getData = async()=>{
            try {
                const noteData = await localStorage.getItem("_notes")
                let parseNoteData = await JSON.parse(noteData)
                return parseNoteData
            } catch (error) {
                return error
            }
        }

        getData().then(res =>{
            setData(res)
        }).catch(err =>{
            console.error(err)
        })

    },[])

  return (
    <main className='flex flex-col gap-4 bg-slate-100 w-full min-h-screen pb-20'>
      {data && data.map((e)=>{
          return (
            <div className='w-full flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md' key={e.id}>
                <h1 className='text-gray-500 font-light text-xl'>{e.title}</h1>
                <p className='text-md text-gray-500 font-light '>
                    {e.content}
                </p>
                <small className='text-sm italic text-gray-500'>{e.createdAt}</small>
            </div>
          )
      })}

    </main>
  )
}

export default Home