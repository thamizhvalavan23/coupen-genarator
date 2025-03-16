import React,{useContext,useEffect,useState} from 'react'
import axios from 'axios'
import { Addmincontext } from '../Context/Admincontext'

const Claimd = () => {


  const [claim , setClaim] = useState([])
    const{token} = useContext(Addmincontext)

    const fetchclaim = async ()=>{
        try {

                const {data} = await axios.post("http://localhost:8000/api/admin/claim-history",{})
                if (data.success){
                    setClaim(data.claims)
                    console.log(claim);
                }else{
                    console.log("try again");
                }
                
            
            
        } catch (error) {
            console.log("last error");
            
            
        }
    }

    useEffect(()=>{
        fetchclaim()

    },[token])


  return (

    <div className='items-center justify-center text-center m-auto mt-2'>
        <h1 className='text-center mt-10 text-2xl font-bold'>Claimd_Token</h1>
        <div className='my-16 flex flex-wrap justify-between gap-5 text-start items-start p-3 '>
            {
                claim && claim.map((list,index)=>(
                    <div key={index} className='border p-3 cursor-pointer rounded-sm hover:bg-black hover:text-white'>
                        <p>couponCode: {list.couponCode}</p>
                        <p>userIP: {list.userIP}</p>
                        <p>claimedAt: {list.claimedAt}</p>
                    </div>
                ))

            }

        </div>
    </div>
  )
}


export default Claimd
