import React, { Component } from "react";
import './App.css';


const btnClick = () => {
  var btn = document.querySelector("#fnComp");
  btn.classList.toggle("active");
}

const btnClick2 = () => {
  var btn2 = document.getElementById("fnClas");
  btn2.classList.toggle("active");
}

class Head extends Component {

  render (){
    return(
      <div className="App">
        <h1 class="Head1">Styling Using Functional And Class Component</h1>
        <div class="buttons">
        <button class="btn" onClick={btnClick}>To see styling in functional component</button>
        <button class="btn" onClick={btnClick2}>To see styling in Class component</button>
        </div>
      </div>
    )
  }
}


function Functioncomponent() {
  return(
    <div id="fnComp">
      <h1>This is created using functional component</h1>
      <p>This is done using external css</p>
      <p style={{color: "blue"}}>This is done using inline css</p>
    </div>
  );
}

class ClassComponent extends Component{
  render(){
    return(
    <div id="fnClas">
      <h1>This is created using class component</h1>
      <p>This is done using external css</p>
      <p style={{color: "blue"}}>This is done using inline css</p>
    </div>
    );
  }
}

function App() {
  return(
    <div className="App">
      <Head></Head>
      <Functioncomponent></Functioncomponent>
      <ClassComponent></ClassComponent>
    </div>
  );
}

export default App;