import { Component } from "react";
import LoginForm from "./LoginForm";

class RightPanel extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="right-panel">
                 <LoginForm />
            </div>
        )
    }
}

export default RightPanel;