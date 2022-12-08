import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
const FetchData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
       function getData() {
         fetch("http://localhost:4000/register").then((result) => {
           result.json().then((resp) => {
             console.log("result", resp);
             setData(resp);
           });
         });
       }
    })
  return (
      <div>
          {data.map((item) => {
              return (
                  <div>{item.email}</div>
             )
         })}
          
    </div>
  )
}

export default FetchData