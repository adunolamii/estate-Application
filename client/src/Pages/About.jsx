import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { URI } from '../App';


const About = () => {
  const [error, setError] = useState([]);
   const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mountain, setMountain] = useState([]);
    useEffect(() => {
  
      const mountainAll = async () => {
        try {
          const res = await axios.get(`${URI}/adminMountainProps`);
          setMountain(res.data);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
      mountainAll ();
    }, [])

  return (
    <div>About
      <div>
          {
           mountain.map((mountain)=>(
              <div key={mountain._id}>
                  <img src={mountain.picture} alt="" />
                  <p >{mountain.type}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default About