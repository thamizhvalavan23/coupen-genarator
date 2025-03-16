import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const Addtoken = () => {

    const [code, setCode] = useState('')

    const handleSubmite = async (event) => {
        event.preventDefault()

        console.log(code);
        
       

        try {

            const { data } =await axios.post('http://localhost:8000/api/admin/add-coupen',{code})

            if (data.success) {
                toast.success(`${data.code}data.message`)
            }else{
                toast.success(`${code} - Added successfully`)
            }
            setCode("")

        } catch (error) {

            console.log(error);



        }



    }

    return (
        <div className='text-center items-center mt-2.5 m-auto justify-center'>
            <form onSubmit={handleSubmite}>
            <h1 className='text-2xl font-bold mt-16'>Add-Token</h1>
            <div className='mt-40'>
                <input className='border border-gray-400 pl-4 rounded-sm h-10 w-56' placeholder='code' onChange={(e) => setCode(e.target.value)} type='text' name='code' value={code} required autoComplete='off' />
                <button className='bg-black text-xl text-white font-bold cursor-pointer w-[120px] h-10 rounded-sm' type='submite'>Add</button>
            </div>
            </form>
            </div>
    )
}

export default Addtoken
