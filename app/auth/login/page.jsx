import React from 'react'
import Link from 'next/link'

function page() {
    return (
        <>

            <div className='w-full mt-4 flex justify-center items-center'>
                <div className=' w-auto bg-blue-500 m-auto p-5 rounded-md py-12 px-8'>
                    <h3 className='text-center text-white'>LOGIN</h3>
                    <form action="">
                        <div className='mt-2'>
                            <label htmlFor="email" className='text-white block'>Enter Email:</label>
                            <input type="text" id='email' className='form-control mt-1 p-2 rounded-md' placeholder='Enter email' />
                        </div>
                        <div className='mt-2'>
                            <label htmlFor="password" className='text-white block'>Enter Password:</label>
                            <input type="password" id='password' className='form-control mt-1 p-2 rounded-md' placeholder='Password' />
                        </div>
                        <div className='mt-2 flex items-center'>
                            <input type="checkbox" className='form-check-input' id='check' />
                            <label htmlFor="check" className='form-check-label text-white ml-2'>Remember me</label>
                        </div>
                        <div className="mt-3">
                            <button className="p-2 w-full bg-blue-700 text-white rounded-md">Login</button>
                        </div>
                        <div className="text-center mt-4">
                            <h5 className="text-white">Create an account</h5>
                        </div>
                        <div className="mt-3">
                            <Link href="/auth/register" className="block p-2 w-full bg-white text-center text-black rounded-md">Sign-up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default page