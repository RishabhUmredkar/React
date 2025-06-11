import { Component } from "react";
import LockItalic from "./LockItalic";

class InputGroup2 extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="input-group">
            <LockItalic />
            <input type="password"  placeholder="Password" />
            </div>
        )
    }
}

export default InputGroup2;