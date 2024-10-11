function List()
{
    var arr=["ram","syam","mohan","sohan","raju"]
    for(var i=0;i<arr.length;i++)
        {
         console.log(arr[i])
        }
    
 return(
    <div>
        {
        
        arr.map((item)=>
        <h1>{item}</h1>
        )
    }
    </div>
 )
}
export default List