import "./App.css";
import Welcome from "./Components/Welcome";
import Hello from "./Components/WithoutJSX";
//IF NAMED EXPORT
import React from "react";
import { Greet } from "./Components/Greet";
import Message from "./Components/Message";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";
import Stylesheet from "./Components/Stylesheet";
import InlineStyle from "./Components/InlineStyle";
import Form from "./Components/Form";
import LifecycleA from "./Components/LifecycleA";
import LifecycleB from "./Components/LifecycleB";
import FragmentDemo from "./Components/FragmentDemo";
import PureComp from "./Components/PureComp";
import ParentComp from "./Components/ParentComp";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import Context from "./Components/Context";
import UseRef from "./Components/UseRef";
//ELSE
// import Greet from './Components/Greet';

export const userContext = React.createContext();

function App() {
  return (
    <div className="App">
      <userContext.Provider value={"Hello World"}>
        {/* <Message/> */}
        {/* <Hello/> */}
        {/* <Greet name={'Bruce'} superHero={'Batman'}>
        <p>This is children props.</p>
      </Greet> */}
        {/* <Greet name={'Clark'} superHero={'Superman'}/> */}
        {/* <Greet name={'Diana'} superHero={'Wonder Woman'}/>
      <Welcome name={'Bruce'} superHero={'Batman'}/>
    <Welcome name={'Clark'} superHero={'Superman'}/> */}
        {/* <Welcome name={'Diana'} superHero={'Wonder Woman'}/> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        {/* <NameList/> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <InlineStyle/> */}
        {/* <Form/> */}
        {/* <LifecycleA/> */}
        {/* <LifecycleB/> */}
        {/* <FragmentDemo/> */}
        {/* <ParentComp/> */}
        {/* <ClickCounter/> */}
        {/* <HoverCounter/> */}
        {/* <Context /> */}
        <UseRef/>
      </userContext.Provider>
    </div>
  );
}

export default App;
