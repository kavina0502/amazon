import Table from 'react-bootstrap/Table';

function List1()
{
    const arr=[{rollno:101,name:"ram",marks:56},
               {rollno:102,name:"sham",marks:66},
               {rollno:103,name:"mohan",marks:78},
               {rollno:101,name:"sohan",marks:56}]

return(
    <div>
    
    <Table striped bordered hover variant="dark">
            <tbody>
                <tr>
                    <td>Rollno</td>
                    <td>name</td>
                    <td>marks</td>
                </tr>
                {
                 arr.map((item)=>
              <tr>
                <td>{item.rollno}</td>
                <td>{item.name}</td>
                <td>{item.marks}</td>
              </tr>
            )
            }
     </tbody>
 </Table>
    </div>
   ) 
}
export default List1