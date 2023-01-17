import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Launches = () =>{
    const [capsulesData,setlaunchesData] = useState([]);
       useEffect(()=>{
        axios 
            .get('https://api.spacexdata.com/v4/launches')
            .then((response)=>{
                setlaunchesData(response.data)
            })
          })
    return(
        
      <div className=''>
        <table>
                 <tr>
    <th>Serial</th>
    <th>Type</th>
    <th>Status</th>
    <th>ID</th>
  </tr>
        {capsulesData.map((capsule,index)=>(
            
            <tr key={index}>
                <td>{capsule.serial}</td>
                <td>{capsule.type}</td>
                <td>{capsule.status}</td>
                <td>{capsule.id}</td>

            </tr>
           
        ))}
         </table>
      </div>
      
    )
}
export default Launches;