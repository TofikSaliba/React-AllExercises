import React from "react";

const ImgCard = ({ src, title, description, link1, link2 }) => {
  return (
    <div>
      <img src={src} style={{ width: "200px" }} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href="https://www.google.com/" style={{ marginRight: "10px" }}>
        {link1}
      </a>
      <a href="https://www.google.com/">{link2}</a>
    </div>
  );
};

const Exercise4_2 = () => {
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
};

export default Exercise4_2;
