import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
const FetchData = () => {
    const [data, setData] = useState("");
    useEffect(() => {
      const fetchData = () => {
          axios.get("http://localhost:4000/register")
              .then((res) => {
                  setData(res.data);
          })
      };
    },[]);
  return (
      <div>
          {data.map((item) => {
              <div>
                  {item.email}
              </div>
          })}
          
    </div>
  )
}

export default FetchData