import React,{useContext} from 'react'
import Login from './Pages/Login'
import { Addmincontext } from './Context/Admincontext'
import { ToastContainer} from 'react-toastify';
import Navbar from './Pages/Navbar';
import Sidebar from './Pages/Sidebar';
import {Route,Routes} from 'react-router-dom'
import Addtoken from './Pages/Addtoken';
import Alltoken from './Pages/Alltoken';
import Claimd from './Pages/Claimd';


const App = () => {

  const {token} = useContext(Addmincontext)

  return  token ? 
  (
     <div className='w-[98%] m-auto'>
      <ToastContainer />
      <Navbar />
      <div className='flex'>
      <Sidebar />
      <Routes>
        <Route path = '/add-token' element = {<Addtoken />} />
        <Route path = '/all-token' element = {<Alltoken />} />
        <Route path = '/claimd-token' element = {<Claimd />} />
      </Routes>
      </div>
    </div>
  ) :  (  <div>
    <ToastContainer />
    <Login />
  </div> 
)
 
}

export default App
