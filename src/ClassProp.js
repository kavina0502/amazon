import ClassProp1 from "./ClassProp1";
const{ Component } = require("react");
class ClassProp extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            name:"ram",
            add:"indore"
        }
    }
    render()
    {
        return(
            <div>
              <ClassProp1  name={this.state.name} add={this.state.add}></ClassProp1>
              <button onClick={()=>this.setState({name:"syam",add:"bhopal"})}>submit</button>
            </div>
        )
    }

}
export default ClassProp