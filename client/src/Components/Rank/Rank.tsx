import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Rank() {
    const [userRank, setUserRank]= useState([])
    useEffect(()=>{
  fetch("/getRank/100").then((res)=>res.json()).then(data => {setUserRank(data)
  })

    },[]);
// --------------------------Navigate function to practice--------------------------------------------
    const navigate = useNavigate();
    function goToPractice() {
        navigate("/words");
      }

  return (
    <>
    <div className="row g-2 h-50 bg-white p-5 m-auto justify-content-between align-items-center overflow-auto">

      <h6 className="col-md-12 text-center">You Rank is {userRank}%</h6>
      {/* --------------------------------------Next buttons------------------------------------------ */}
      <div onClick={goToPractice} className="col-md-12 btn btn-success ms-auto">Try Again</div>
    </div>
  </>
  )
}
