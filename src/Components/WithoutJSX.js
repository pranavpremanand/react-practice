import React, {Component, createElement} from 'react'

class Hello extends Component{
    render(){
        return React.createElement('div',null, createElement('h1',{id:'sampleId',className:'sampleClass'},'~Without JSX~'))
    }
}

export default Hello;