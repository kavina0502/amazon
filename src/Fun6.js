import { useState } from "react"
function Fun6()
{
    const [name,setName]=useState("Ram")
    function hello()
    {
        alert("hello")
        setName("syam")
    }
    return(
        <div>
            <h1>my name is {name}</h1>
            <button onClick={hello}>submit</button>
        </div>
        )
}
export default Fun6 
//variable statelass 