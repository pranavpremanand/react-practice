import React, { Component } from "react";

//MOUNTING PHASE
// export class LifecycleB extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//     };
//     console.log("LifecycleB constructor");
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("LifecycleB getDerivedStateFromProps");
//     return null;
//   }

//   componentDidMount() {
//     console.log("LifecycleB componentDidMount");
//   }

//   render() {
//     console.log("LifecycleB render");
//     return <div>LifecycleB</div>;
//   }
// }

// export default LifecycleB;

// OUTPUT:
// Order of Execution during mounting phase
// ``````````````````
// LifecycleB constructor
// LifecycleB getDerivedStateFromProps
// LifecycleB render
// LifecycleB componentDidMount


export class LifecycleB extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: "",
      };
      console.log("LifecycleB constructor");
    }
  
    static getDerivedStateFromProps(props, state) {
      console.log("LifecycleB getDerivedStateFromProps");
      return null;
    }
  
    componentDidMount() {
      console.log("LifecycleB componentDidMount");
    }
  
    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate ");
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate');
    }
    render() {
      console.log("LifecycleB render");
      return <div>LifecycleB</div>;
    }
  }
  
  export default LifecycleB;

