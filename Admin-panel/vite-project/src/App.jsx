import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [message, setMessage] = useState('');
  const [coupon, setCoupon] = useState(null);

  const claimCoupon = async (event) => {

    event.preventDefault();

    try {
      const {data} = await axios.post('http://localhost:8000/api/admin/claim-coupen');
      setCoupon(data.code);
      setMessage(data.message);
      toast.success("succesfully claimd")
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error claiming coupon');
      toast.error("Error claiming coupon")
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold">Claim Your Coupon</h1>
        <button onClick={claimCoupon} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Claim Coupon
        </button>
        {message && <p className="mt-2 text-red-500">{message}</p>}
        {coupon && <p className="mt-2 text-green-500">Your Coupon: {coupon}</p>}
      </div>
    </>
  );

};

export default App