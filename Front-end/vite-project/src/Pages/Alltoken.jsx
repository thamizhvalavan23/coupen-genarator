import React from 'react'
import { useContext,useState } from 'react'
import { Addmincontext } from '../Context/Admincontext'
import { useEffect } from 'react'
import axios from 'axios'

const Alltoken = () => {

    const [data , setData] = useState([])
    const{token} = useContext(Addmincontext)

    const fetchData = async ()=>{
        try {

                const {data} = await axios.post("http://localhost:8000/api/admin/all-coupen",{})
                if (data.success){
                    setData(data.coupenData)
                    console.log(data);
                }else{
                    console.log("try again");
                }
                
            
            
        } catch (error) {
            console.log("last error");
            
            
        }
    }

    useEffect(()=>{
        fetchData()

    },[token])


  return (

    <div className='items-center justify-center text-center '>
        <h1 className='text-center mt-10 text-2xl font-bold'>All_Token</h1>
        <div className='my-16 flex flex-wrap justify-between gap-5 text-start items-start p-3 '>
            {
                data && data.map((list,index)=>(
                    <div key={index}>
                        <p className='w-[80px] h-max p-3 border bg-black text-xl text-white cursor-pointer'>{list.code}</p>
                    </div>
                ))

            }

        </div>
    </div>
  )
}

export default Alltoken
