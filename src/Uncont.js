const { Component, createRef } = require("react");
class Uncont extends Component
{
    constructor()
    {
        super()
        this.inputref=createRef()
    }
    hello()
    {
       // console.log(this.inputref.current.value)
       this.inputref.current.value="Hello World"
        this.inputref.current.style.color="red"
          this.inputref.current.style.backgroundColor="green"
    }
    render()
    {
        return(
            <div>
                <input type="text" placeholder="Enter Name" ref={this.inputref}></input><br></br>
                <button onClick={()=>this.hello()}>Submit</button>
            </div>
        )
    }
}
export default Uncont