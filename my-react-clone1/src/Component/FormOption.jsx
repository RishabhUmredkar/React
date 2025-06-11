import { Component } from "react";
import Forget from "./Forget";

class FormOptions extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="form-options">
                <label><input type="checkbox"/>Remember</label>
                <Forget />
            </div>
        )
    }   
}

export default FormOptions;