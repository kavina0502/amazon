import { useState } from "react"

function Form()
{
    const[name,setName]=useState()
    const[mob,setmob]=useState()
    const[country,setCountry]=useState()
    function submitForm()
    {
      console.log(name,mob,country)
    }
   return(
    <div>
       <form onsubmit={submitForm}>

        <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}></input><br></br>
        <input type="number" placeholder="enter mobile" onChange={(e)=>setmob(e.target.value)}></input><br></br>

        <select onChange={(e)=>setCountry(e.target.value)}>
            <option>India</option>
            <option>china</option>
            <option>japan</option>
            <option>Uk</option>
            <option>Us</option>
        </select><br></br>
            <button>submit</button>

       </form>
    </div>
   )
}
export default Form