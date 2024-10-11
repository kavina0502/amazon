function Fun4()
{
    function hello()
    {
    alert("hello world")
    }
   return(
     <div>
        <h1>Fun</h1>
        {/* <button onClick={hello}>submit</button> */}
        <button onClick={()=>hello()}>submit</button>
     </div>
   )
}
export default Fun4