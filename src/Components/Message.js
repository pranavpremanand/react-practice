import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome user",
      button:"Subscribe"
    };
  }
    changeStatus = () =>{
        this.setState ({
            message:"Thank you for subscribing.",
            button:"Subscribed",
            count:0
        })
  }
  changeCount = (num) => {
    // this.setState({count:this.state.count + num},
    //     ()=>console.log('Count changed',this.state.count))
    //     console.log('Count',this.state.count)
    this.setState((prevState)=>({
        count:prevState.count + num
    }))
  }
  changeCountFive(num){
    this.changeCount(num)
    this.changeCount(num)
    this.changeCount(num)
    this.changeCount(num)
    this.changeCount(num)
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeStatus()}>{this.state.button}</button>
        {this.state.button === "Subscribed" && 
        <div style={{display:"block",marginTop:"20px"}}>
        <button onClick={()=>this.changeCountFive(-1)}>-</button>
        <h4>Count : {this.state.count}</h4>
        <button onClick={()=>this.changeCountFive(1)}>+</button>
        </div>
        }
      </div>
    );
  }
}

export default Message;
