import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Hello World'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Hello Pranav'
            })
        },5000)
    }
  render() {
    console.log('***************PARENT COMPONENT****************')
    return (
        <React.Fragment>
            <div>ParentComp</div>
            <MemoComponent message={this.state.name}/>
            {/* <PureComp name={this.state.name}/>
            <RegComp name={this.state.name}/> */}
        </React.Fragment>
    )
  }
}

export default ParentComp