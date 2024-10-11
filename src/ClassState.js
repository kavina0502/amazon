import { Component } from "react";

class  ClassState extends Component
{
    constructor()
    {
        super()
        this.State={
            name:"Ram"
        }
    }
    render()
    {
        return(
            <div>
            <h1>Class Component</h1>
            <h1>my name is ram {this.state.name}</h1>
            <button onClick={()=>this.setState({name:"syam"})}>submit</button>
            </div>
        )
    }

}
export default ClassState