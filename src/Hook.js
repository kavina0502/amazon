import { useState } from "react"
function Hook()
{
   return(
    const [name,setname]=useState("Ram")
       <div>
        <h1>my name is {name}</h1>
        <button onClick={()=>setname("Syam")}>submit</button>
        </div>
   )
}
export default Hook