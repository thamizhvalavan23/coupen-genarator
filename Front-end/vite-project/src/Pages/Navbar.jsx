import React from 'react'
import { useContext } from 'react'
import { Addmincontext } from '../Context/Admincontext'

const Navbar = () => {
    const {setToken} = useContext(Addmincontext)
    return (
        <div>
            <div className='flex justify-between bg-gray-50 h-16 p-5'>
                <h1 className='cursor-pointer font-bold text-2xl'>Admin_Panel</h1>
                <button onClick={()=> setToken("")} className='w-28 bg-black text-white font-bold cursor-pointer rounded-sm h-10' type='button'>Logout</button>
            </div>
                <hr className='border-gray-300 border'></hr>
        </div>
    )
}

export default Navbar
