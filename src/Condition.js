function Condition()
{
    var a=10;
    return(
        <div>
            {
                a>0?<h1>positive</h1>:<h1>nagative</h1>
            }
        </div>
    )
}
export default Condition