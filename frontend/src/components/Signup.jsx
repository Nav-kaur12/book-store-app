import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Login from './Login'

function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[550px] dark:bg-slate-900 dark:text-white" >
                    <div className=" modal-box dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm outline-none btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>
                            {/* name section */}
                            <div className='mt-4 space-y-2'>
                                <span>Name</span><br />
                                <input type='text' placeholder='Enter your name'
                                    className='w-80 px-3 py-1 border rounded-md outline-none '  {...register("name", { required: true })}></input><br />
                                {errors.name && (<span className='text-sm text-red-500'>This field is required</span>)}
                            </div>

                            {/* emali section */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span><br />
                                <input type='email' placeholder='Enter your email'
                                    className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })}></input>
                                <br />
                                {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
                            </div>

                            {/* password section */}
                            <div className='mt-4 space-y-2'>
                                <span>Create Password</span><br />
                                <input type='password' placeholder='Enter your password'
                                    className='w-80 px-3 py-1 border rounded-md outline-none '{...register("password", { required: true })}></input>
                                <br />
                                {errors.password &&(<span className='text-sm text-red-500'>This field is required</span>)}
                            </div>
                            {/* button */}
                            <div className='mt-5 flex justify-around'>
                                <button className=' bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-secondary'>Signup</button>
                                <p>Have Account?{" "} 
                                <button className='text-blue-500 underline cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}> Login</button>{" "} <Login/> </p>
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Signup