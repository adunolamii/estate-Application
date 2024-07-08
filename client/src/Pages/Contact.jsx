import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

const Contact = () => {
  const [error, setError] = useState([]);
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [village, setVillage] = useState([]);

  useEffect(() => {
  
    const villageAll = async () => {
      try {
        const res = await axios.get("http://localhost:7001/adminVillageProps");
        setVillage(res.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    villageAll ();
  }, [])
  return (
    <div>Contact

<div>
          {
            village.map((village)=>(
              <div key={village._id}>
                  <img className=" mt-16 flex flex-col w-36"  src={village.picture} alt="" />
                  <p className=' justify-start flex font-bold'>{village.type}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Contact