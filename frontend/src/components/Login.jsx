import React from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate  } from 'react-router-dom'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
      const navigate = useNavigate()

      const handleClose = () => {
        document.getElementById('my_modal_3').close()
        navigate('/')
    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white ">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm outline-none btn-ghost absolute right-2 top-2"  onClick={handleClose}>✕</button>
                    
                    <h3 className="font-bold text-lg">Login</h3>
                    {/* emali section */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span><br/>
                        <input type='email' placeholder='Enter your email' 
                        className='w-80 px-3 py-1 border rounded-md outline-none'
                        {...register("email", { required: true })}></input>
                        <br/>
                         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    {/* password section */}
                    <div className='mt-4 space-y-2'>
                        <span>Password</span><br/>
                        <input type='password' placeholder='Enter your password' 
                        className='w-80 px-3 py-1 border rounded-md outline-none' 
                        {...register("password", { required: true })}></input>
                        <br/>
                         {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    {/* button */}
                    <div className='mt-4 flex justify-around'>
                        <button type='submit'  onSubmit={handleSubmit(onSubmit)} className=' bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-secondary'>Login</button>
                        <p>Not registered?{" "} <Link to="/signup" className='text-blue-500 underline cursor-pointer' >Signup</Link></p>

                    </div>
                    </form>                   
                </div>
            </dialog>
        </div>
    )
}

export default Login