import React from 'react'
import { useState } from "react";

export default function Header(props) {

  //show data onnclick of button
  let [showData, setShowData] = useState(false);

    //useState
  let [count, setCount] = useState(1)
  let increasCount = ()=>{
    setCount(count++)
  }
    console.log(props.headerName);

  return (
    <div>
        <div>{props.propsObject.phone}</div>
        <div>{props.propsObject.email}</div>
        {count}

        {/* Conditional Statement */}
        <button className="bg-yellow-500 text-white p-2 rounded-sm ml-6" onClick={()=>setShowData(!showData)}>
          {showData ? "Hide Data" : "Show Data"}
        </button>
        {
          (showData)
          ?
          <p > 'Showing Data</p>
          :
          ''
        }

        {/* <button onClick={showDataHandler} className="bg-blue-500 p-2 text-white rounded-sm ml-6">
          showDATA
        </button> */}

    </div>

  )
}
