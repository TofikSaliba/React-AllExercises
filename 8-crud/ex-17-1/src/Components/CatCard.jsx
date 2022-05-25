import React, { useState } from "react";

const CatCard = ({
  id,
  name,
  img,
  kind,
  phone,
  price,
  handleDelete,
  getUpdated,
}) => {
  const [editing, setEditing] = useState(false);
  const [kindS, setKindS] = useState(kind);
  const [phoneS, setPhoneS] = useState(phone);
  const [priceS, setPriceS] = useState(price.split(".")[0]);

  const handleSave = () => {
    setEditing(false);
    getUpdated(kindS, phoneS, priceS, id);
  };

  return (
    <div className="card">
      <div className="name">{name}</div>
      <img src={img} alt={name} />
      <div className="detail">
        <span className="label">Kind: </span>
        {editing ? (
          <input
            onChange={({ target }) => setKindS(target.value)}
            value={kindS}
          />
        ) : (
          <span>&nbsp;{kind}</span>
        )}
      </div>
      <div>
        <span className="label">Phone number: </span>
        {editing ? (
          <input
            value={phoneS}
            onChange={({ target }) => setPhoneS(target.value)}
          />
        ) : (
          <span>{phone}</span>
        )}
      </div>
      <div className="detail">
        <span className="label">Price: </span>

        {editing ? (
          <input
            type="number"
            value={priceS}
            onChange={({ target }) => setPriceS(target.value)}
          />
        ) : (
          <span>&nbsp;{price.split(".")[0] + "$"}</span>
        )}
      </div>
      <div className="btnsContainer">
        {!editing ? (
          <button onClick={() => setEditing(true)}>Edit</button>
        ) : (
          <button onClick={handleSave}>Save</button>
        )}
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default CatCard;
