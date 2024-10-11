import { useState } from "react"
function Input1()
{
    const[data,setData]=useState()
  return(
    <div>
        <h1>Input</h1>
        <input type="text" placeholder="Enter Name" onChange={(e)=>setData(e.target.value)}></input><br></br>
        <h1>{data}</h1>
    </div>
  )
}
export default Input1
