import React from "react";

class Box1 extends React.Component {
  render(){
    return (
      <div style = {{width: "700px", height: "500px", background: "green", display: "flex", justifyContent: "center", alignItems: "center",}}><Box2/>
      </div>
    )
  }
}

class Box2 extends React.Component {
  render(){
    return (
      <div style = {{width: "600px", height: "400px", background: "blue", display: "flex", justifyContent: "center", alignItems: "center",}}><Box3/>
      </div>
    )
  }
}

class Box3 extends React.Component {
  render(){
    return (
      <div style = {{width: "500px", height: "300px", background: "pink", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "2rem"}}><Box4/><Box4/>
      </div>
    )
  }
}

class Box4 extends React.Component {
  render(){
    return (
      <div style = {{width: "300px", height: "100px", background: "purple",}}>
      </div>
    )
  }
}

export default Box1;

