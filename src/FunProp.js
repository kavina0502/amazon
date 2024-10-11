import FunProp1 from "./FunProp1"
import { useState } from "react"

function FunProp()
{
 const[name,setName]=useState("ram")
 const[add,setAdd]=useState("indore")
 function hello()
 {
    setName("Rahul")
    setAdd("Bopal")
 }
 return(
    <div>
        {/* //<h1>Fun Prop</h1> */}
       {/* // <FunProp1 name="ram"></FunProp1> */}
        <FunProp1 name={name} address={add}></FunProp1>
        <button onClick={hello}>submit</button>
    </div>
 )
}
export default FunProp