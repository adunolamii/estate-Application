import React from 'react'
import { useState } from 'react';
import { useEffect} from 'react';
import axios from "axios";
import { URI } from '../App';

function Home() {
  const [error, setError] = useState([]);
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [beach, setBeach] = useState([]);

  useEffect(() => {
  
    const beachAll = async () => {
      try {
        const res = await axios.get(`${URI}/adminBeachProps`);
        setBeach(res.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    beachAll ();
  }, [])
  return (
    <div>Home

<div className='hero-container'>
    <h3>Diffrent Types Of Properties for you</h3>
    <h1>Best Types of Properties</h1>

    <div className='main-container'>
      <div className='beach-div'>Bbbb

<div>
  {
    beach.map((beach)=>(
      <div key={beach._id}>
        <img src={beach.picture} alt="" />
        <p>{beach.type}</p>
      </div>
    ))
  }
</div>
      </div>
      

    </div>
</div>
    </div>
  )
}

export default Home