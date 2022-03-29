import React, {useRef, useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import Lottie from "lottie-web"
import {  handleRegister } from './handleRegister'
import { Modal } from 'antd'

const SplashScreen = () => {

    const [ showPassword, setShowPassword ] = useState(false)

    const container1 = useRef(null)
    const container2 = useRef(null)

    useEffect(()=>{
        
        Lottie.loadAnimation({
            container: container1.current,
            renderer : "svg",
            loop : true,
            autoplay : true,
            animationData : require("../../assets/100592-3d-ice-cream.json")
        })

        Lottie.loadAnimation({
            container: container2.current,
            renderer : "svg",
            loop : true,
            autoplay : true,
            animationData : require("../../assets/duit.json")
        })

    },[])

    const submitRegister = (e)=>{
        handleRegister(e)
        .then(res => {
            if(res){
                Modal.success({
                    content : "Registrasi Berhasil",
                    onOk : ()=>{
                        window.location.href = "/dashboard/home"
                    }
                })
            }
        })
        .catch(err =>{
            console.error(err)
        })
    }

  return (

        <Swiper slidesPerView={1} spaceBetween={0} className="w-screen h-screen" >

            <SwiperSlide className='w-full h-full flex flex-col justify-start items-start bg-orange-300 text-white p-10'>
                <h1 className='text-6xl font-bold text-white'>Aplikasi Note App Karya Anak Bangsa</h1>
                <div ref={container1} className="mt-4 rounded-lg"></div>

                <div className='w-full flex justify-center gap-4 items-center h-12 mt-auto'>
                    <span className='bg-white w-3 h-3 rounded-full'></span>
                    <span className='bg-white/50 w-3 h-3 rounded-full'></span>
                    <span className='bg-white/50 w-3 h-3 rounded-full'></span>
                </div>
            </SwiperSlide>

            <SwiperSlide className='w-full h-full flex flex-col justify-start items-start bg-blue-300 text-white p-10'>
                <h1 className='text-6xl font-bold text-white'>Gratis Digunakan untuk Semuanya..</h1>
                <div ref={container2} className="mt-4 rounded-lg"></div>

                <div className='w-full flex justify-center gap-4 items-center h-12 mt-auto'>
                    <span className='bg-white/50 w-3 h-3 rounded-full'></span>
                    <span className='bg-white w-3 h-3 rounded-full'></span>
                    <span className='bg-white/50 w-3 h-3 rounded-full'></span>
                </div>
            </SwiperSlide>

            <SwiperSlide className='w-full h-full flex flex-col justify-start items-start bg-green-300 text-white p-10'>
                <h1 className='text-6xl font-bold text-white'>Register Sekarang..</h1>

                <form className='w-full flex flex-col mt-4 gap-4' onSubmit={submitRegister}>
                    
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="email" className='text-white uppercase font-bold' >Email</label>
                        <input type="email" id='email' name='email' className='w-full h-12 px-4 outline-none border-none bg-white text-gray-500' />
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="password" className='text-white uppercase font-bold' >password</label>

                        <div className='relative flex'>
                            <span className='absolute right-4 self-center text-xl' onClick={ ()=>{ setShowPassword(!showPassword) }}> 
                                {showPassword ? <> 🌝 </> : <> 🌓 </> }
                            </span>
                            <input type={ showPassword ? "text" : "password" } id='password' name='password' className='w-full h-12 px-4 outline-none border-none bg-white text-gray-500' />
                        </div>
                    </div>

                    <button className='w-full h-12 bg-orange-400 text-white' type='submit'>
                        register
                    </button>

                </form>

                <div className='w-full flex justify-center gap-4 items-center h-12 mt-auto'>
                    <span className='bg-white/50 w-3 h-3 rounded-full'></span>
                    <span className='bg-white/50 w-3 h-3 rounded-full'></span>
                    <span className='bg-white w-3 h-3 rounded-full'></span>
                </div>
            </SwiperSlide>

        </Swiper>

  )
}

export default SplashScreen