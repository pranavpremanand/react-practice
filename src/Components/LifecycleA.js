import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

//MOUNTING PHASE
// export class LifecycleA extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//     };
//     console.log("LifecycleA constructor");
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("LifecycleA getDerivedStateFromProps");
//     return null;
//   }

//   componentDidMount() {
//     console.log("LifecycleA componentDidMount");
//   }

//   render() {
//     console.log("LifecycleA render");
//     return (
//     <div>
//         <div>LifecycleA</div>
//         <LifecycleB/>
//     </div>)
//   }
// }

// export default LifecycleA;

// OUTPUT:
// Order of Execution
// ``````````````````
// LifecycleA constructor
// LifecycleA getDerivedStateFromProps
// LifecycleA render
// LifecycleA componentDidMount

export class LifecycleA extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: "",
      };
      console.log("LifecycleA constructor");
    }
  
    static getDerivedStateFromProps(props, state) {
      console.log("LifecycleA getDerivedStateFromProps");
      return null;
    }
  
    componentDidMount() {
      console.log("LifecycleA componentDidMount");
    }
  
    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate ");
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate');
    }
    changeState = () =>{
        this.setState({
            name:"Pranav"
        })
    }
    render() {
      console.log("LifecycleA render");
      return (
      <div>
          <div>LifecycleA</div>
          <button onClick={this.changeState}>Change state</button>
          <LifecycleB/>
      </div>)
    }
  }
  
  export default LifecycleA;
  
  // OUTPUT:
  // Order of Execution
  // ``````````````````
  // LifecycleA constructor
  // LifecycleA getDerivedStateFromProps
  // LifecycleA render
  // LifecycleA componentDidMount
  