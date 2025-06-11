import { Component } from "react";
import UserItalic from "./UserItalic";

class InputGroup1 extends Component{
    constructor(){
        super();
    }
    render(){
         return(
            <div className="input-group">
            <UserItalic />
            <input type="text"  placeholder="UserName" />
            </div>
        )
    }
}

export default InputGroup1;