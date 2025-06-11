import { Component } from "react";

class Count extends Component{
     constructor(){
    super();
    this.state = {
      cartItem : 0
    };
  }

  render(){
    return(
      <div>
      <h1>{this.state.cartItem}</h1>
      <button onClick={()=>{
        this.setState({cartItem : this.state.cartItem +=1})
      }}>Like</button>
      </div>
    )
  }
}

export default Count;