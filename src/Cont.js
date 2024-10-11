import { useState } from "react"
function Cont()
{
    const[name,setName]=useState()
    const[mobile,setMobile]=useState()
    function submitform(e)
    {
     e.preventDefault()
     console.log(name,mobile)
    }
 return(
    <div>
        <h1>Countrol</h1>
        <form onsubmit={submitform}>
            <input type="text" placeholder="enter Name" onChange={(e)=>setName(e.target.value)}></input><br></br>
            <input type="number" placeholder="enter mobile" onChange={(e)=>setName(e.target.value)}></input><br></br>
            <button>submit</button>
        </form>
    </div>
 )
}
export default Cont 