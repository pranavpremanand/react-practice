////FUNCTIONAL COMPONENT

import React from 'react'

// function Greet() {
//   return <h1>Hello World!</h1>
// }

// export const Greet = () => <h1>~Functional Component~</h1>
export const Greet = (props) =>{
    const {name,superHero} = props
    return(
    <div>
    <h1>~Hello {name}~{superHero}~</h1>
    {/* {children} */}
    </div>
    )
}

// export default Greet;