import { useState } from "react"
function Condition3()
{
    const [status,setStatus]=useState(true)
    return(
        <div>
            {
               status?<h1>hello world</h1>:null
            }
            <button onClick={()=>setStatus(false)}>hide</button>
            <button onClick={()=>setStatus(true)}>show</button>

            
        </div>
    )
}
export default Condition3