import React from "react";

const CatCard = ({ id, name, img, kind, phone, price, handleDelete }) => {
  return (
    <div className="card">
      <div className="name">{name}</div>
      <img src={img} alt={name} />
      <div>
        <span>Kind: </span>
        {kind}
      </div>
      <div>
        <span>Phone number: </span>
        {phone}
      </div>
      <div>
        <span>Price: </span>
        {price.split(".")[0] + "$"}
      </div>
      <div className="btnsContainer">
        <button>Edit</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default CatCard;
