import { Component } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

class Container extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="container">
                <LeftPanel/>
                <RightPanel />
            </div>
        )
    }
}

export default Container;