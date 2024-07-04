import React from 'react'
import { useState } from 'react';
import axios from "axios"
import { toast } from 'react-toastify';

function AdminVillageProp() {
  const [formData, setFormData] = useState({
            
    picture: "",
    type: "",
   
})
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


    const handleSubmit = async(e) => {
        e.preventDefault()
        // if (name === "") {
        //   return toast.error("input can not be empty")
        // }

     
    //      setFormData({
    //         picture: "",
    //         type: "",
    
    // });
       
        try {
            await axios.post("http://localhost:7001/adminVillageProps", formData)
        } catch (error) {
            console.log("error message")
        }
    }
  return (
    <div className=' bg-slate-300 h-screen'>AdminVillageProp
      <form className="flex flex-col gap-7 mt-6" onSubmit={handleSubmit}>
       <input
            name="picture"
            value={formData.picture}
            className="pl-10  border-2 border-blue-700 w-full rounded-md p-2 text-2xl font-bold"
            type="text"
            placeholder="picture"
            onChange={handleChange}
          />

            <input
            name="type"
            value={formData.type}
            className="pl-10  border-2 border-purple-700 w-full rounded-md p-2 text-2xl font-bold"
            type="text"
            placeholder="type"
            onChange={handleChange}
          />
          
            <button className=" border-1 w-full rounded-md p-2 font-bold text-white bg-purple-600 hover:to-red-300">
          Submit
        </button>
       </form>
    </div>
  )
}

export default AdminVillageProp