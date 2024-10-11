function Fun5()
{
  var name="ram"
  function hello()
  {
    name="syam"
  }
  return(
    <div>
        <h1>my name is {name}</h1>
        <button onclick={hello}>submit</button>
    </div>
  )
}
export default Fun5
