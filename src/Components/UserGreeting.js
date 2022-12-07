import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true
    };
  }
  render() {
    // if (this.state.loggedIn) {
    //   return (
    //     <div>
    //       <h3>Welcome Pranav</h3>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h3>Welcome Guest</h3>
    //     </div>
    //   );
    // }

    // let message;
    // if(this.state.loggedIn){
    //     message = <h3>Welcome Pranav</h3>
    // }
    // else{
    //     message = <h3>Welcome Guest</h3>
    // }
    // return <div>{message}</div>

    //TERNARY
    // return this.state.loggedIn ? <h3>Welcome Pranav</h3> :
    // <h3>Welcome Guest</h3>

    return this.state.loggedIn && <h3>Welcome Pranav</h3>
  }
}

export default UserGreeting;
