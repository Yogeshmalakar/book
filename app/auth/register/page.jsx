'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, password });
  };

  return (
    <div className='w-full mt-4 flex justify-center items-center'>
      <div className='w-1/4 bg-indigo-600 m-auto p-5 rounded-md'>
        <h3 className='text-center text-white'>SIGN-UP</h3>
        <form onSubmit={handleSubmit}>
          <div className='mt-2'>
            <label htmlFor="name" className='block text-white'>Enter Name:</label>
            <input
              type="text"
              id='name'
              className='w-full p-2 mt-1 rounded-md'
              placeholder='Username'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mt-2'>
            <label htmlFor="email" className='block text-white'>Enter Email:</label>
            <input
              type="email"
              id='email'
              className='w-full p-2 mt-1 rounded-md'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mt-2'>
            <label htmlFor="password" className='block text-white'>Enter Password:</label>
            <input
              type="password"
              id='password'
              className='w-full p-2 mt-1 rounded-md'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='mt-2 flex items-center'>
            <input type="checkbox" className='form-check-input' id='check' /> 
            <label htmlFor="check" className='ml-2 text-white'>Remember me</label>
          </div>
          <div className='mt-3'>
            <button type='submit' className='p-2 w-full bg-gray-500 text-white rounded-md'>Sign Up</button>
          </div>
          <div className='text-center mt-4'>
            <h4 className='mt-2 text-white'>Have you already an account?</h4>
          </div>
          <div className='mt-3'>
            <Link href="/auth/login" className='block p-2 w-full bg-white text-center text-black rounded-md'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
