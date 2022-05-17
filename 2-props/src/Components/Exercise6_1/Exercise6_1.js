// refactoring the functions to Classes
import React from "react";

class ImgCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt="" style={{ width: "200px" }} />
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <a href="https://google.com" style={{ marginRight: "10px" }}>
          {this.props.link1}
        </a>
        <a href="https://google.com">{this.props.link2}</a>
      </div>
    );
  }
}

class Exercise4_2 extends React.Component {
  render() {
    return (
      <div>
        <ImgCard
          src="https://picsum.photos/199"
          title="A title"
          description="vasskhfkfla asfhgasf afsg"
          link1="click me"
          link2="me too"
        />
        <ImgCard
          src="https://picsum.photos/200"
          title="Hmmm Looks Good"
          description="mwahahahahaha"
          link1="Click me"
          link2="Or don't"
        />
        <ImgCard
          src="https://picsum.photos/201"
          title="A Controller"
          description="yes yes yes"
          link1="link 1"
          link2=" link 2"
        />
      </div>
    );
  }
}

export default Exercise4_2;
