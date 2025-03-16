import React, { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Addmincontext } from '../Context/Admincontext';
import {toast} from 'react-toastify'

const Login = () => {
    const [email , setEmail] = useState("Appusingh423@gmail.com")
    const [password , setPassword] = useState("123456thamizh@A")
  
    const {token , setToken} = useContext(Addmincontext)

    const handleSubmite = async (event)=> {

      event.preventDefault();

      try {
    
          const {data} = await axios.post('http://localhost:8000/api/admin/login' , {email,password});
          if (data.success) {
            setToken(data.token);
            localStorage.setItem('atoken' , data.token)
            console.log(data.token);
          }else{
            console.log("error");
            toast.error("Invalid data")
            
          }
        
      } catch (error) {
        console.log("check again..");
         
     
      }

    }


  return (
    <div className='h-[600px] justify-center items-center m-auto w-full flex'>
        <form onSubmit={handleSubmite} className='w-[500px] items-center grid h-max rounded-sm p-5 shadow-xl'>
                <h1 className='text-2xl font-bold items-center text-center text-black'>Admin_Login</h1>
                <div className='my-7'>
                    <input className='w-full h-12 my-2 rounded-sm border-gray-400 pl-4 border-2' onChange={(e)=> setEmail(e.target.value)} type='email' name='email' value={email}  placeholder='Email' required autoComplete='off' />
                    <input className='w-full h-12 my-2 rounded-sm border-gray-400 pl-4 border-2' onChange={(e)=> setPassword(e.target.value)} type='password' name='password' value={password} placeholder='password' required autoComplete='off' />
                </div>
                <button className='w-full h-12 bg-black text-white cursor-pointer rounded-sm text-xl font-bold' type='submite'>login</button>
        </form>
      
    </div>
  )
}

export default Login
