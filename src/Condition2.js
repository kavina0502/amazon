import { useState } from "react"
function Condition2()
{
    const [status,setStatus]=useState(true)
    return(
        <div>
            {
               status?<h1>hello world</h1>:null
            }
            <button onClick={()=>setStatus(!status)}>toggle</button>
            
      </div>
    )
}
export default Condition2