function Condition1()
{
    var a=1;
   return(
   <div>
    {
         a==1?<h1>a is 1</h1>:
         a==2?<h1>a is 2</h1>:
         a==3?<h1>a is 3</h1>:<h1>Invalid No</h1>
    }
    </div>
        )
}
export default Condition1