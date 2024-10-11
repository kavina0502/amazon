import { useState } from "react"
import { useEffect } from "react"
import Table from 'react-bootstrap/Table';

function GetData()
{ 
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((result)=>{
            result.json().then((apidata)=>{
                setData(apidata)
           })
           
        })
    },[])
   return(
    <div>
    <Table striped bordered hover variant="dark">
    <tbody>
        <tr>
            <td>product id</td>
            <td>product name</td>
            <td>product price</td>
            <td>product desc</td>
            <td>product cat</td>
            <td>product image</td>
        </tr>
        {
            data.map((item)=>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price*80}Rs</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td><img src={item.image} style={{width:"100px",height:"100px"}}></img></td>
                </tr>
                  ) 
        }
    </tbody>
</Table>
    </div>
   )
}
export default GetData