import React, { useState } from 'react'
import './Thirdcontainer.css'
const Thirdcontainerresult = ({img,title,desc}) => {
    const[show,setShow] = useState(false);
  return (
    <div className='projectresult' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
      {
      show ? (
        <div>
          <h2> {title}</h2>
         <p> {desc}</p>
         <img src={img} alt="log" />
        </div>
         
      ) : (
          <img src={img} alt="log" />
      )}
    </div>
  )
}

export default Thirdcontainerresult
