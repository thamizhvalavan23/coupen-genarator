import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=' bg-gray-50 flex'>
     <div className='my-5'>
        <ul>
       <Link to="/add-token"><li className='border cursor-pointer text-md font-bold rounded-sm p-2 text-start my-4 w-[200px]'>Add_Token</li></Link>
        <Link to = "/all-token"> <li  className='border cursor-pointer text-md font-bold rounded-sm p-2 text-start my-4 w-[200px]'>All_Token</li> </Link>
        <Link to = "/claimd-token"> <li  className='border cursor-pointer text-md font-bold rounded-sm p-2 text-start my-4 w-[200px]'>Claimd_Token</li>
        </Link>
        </ul>
     </div>
     <hr className=' h-[610px] border border-gray-400 ml-5' ></hr>
    </div>
  )
}

export default Sidebar
