import { Component } from "react"


class ClassProp1 extends Component
{
render()
{
    return(
        <div>
            <h1> my name is {this.props.name}</h1>
        </div>
    )

}
}
export default ClassProp1