import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount = () =>{
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
  render() {
    const {count} = this.state;
    return (
      <React.Fragment>
        <h3 onMouseOver={this.incrementCount}>Hovered {count} times</h3>
      </React.Fragment>
    )
  }
}

export default HoverCounter