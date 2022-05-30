import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Avatars.css";
import AvatarCards from "./AvatarCards";
import InputFilter from "./InputFilter";

function Avatars() {
  const [avatars, setAvatars] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [newFetch, setNewFetch] = useState(0);

  useEffect(() => {
    const getRandomAvatars = () => {
      setAvatars([]);
      setFiltered([]);
      let random = (Math.random() * 30 + 20) | 0;
      getAvatars(random);
    };

    const getAvatars = async (random) => {
      const avatars = await axios.get(
        `https://randomuser.me/api/?results=${random}`
      );
      getAvatarObjs(avatars.data.results);
    };

    const getAvatarObjs = (objs) => {
      const cardArrOfObjs = objs.map((objData) => {
        return {
          firstName: objData.name.first,
          lastName: objData.name.last,
          picture: objData.picture.large,
          city: objData.location.city,
          country: objData.location.country,
          age: objData.dob.age + "",
          phone: objData.phone,
        };
      });
      setAvatars(cardArrOfObjs);
      setFiltered(cardArrOfObjs);
    };

    getRandomAvatars();
  }, [newFetch]);

  const getInputValue = (value) => {
    const newFiltered = avatars.filter((avatar) => {
      if (
        avatar.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        avatar.lastName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        avatar.country.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        avatar.city.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        avatar.age.toLowerCase().indexOf(value.toLowerCase()) !== -1
      ) {
        return true;
      }
      return false;
    });
    setFiltered(newFiltered);
  };

  return (
    <div className="mainContainer">
      <h1>
        Click get avatar to fetch randomly 20-50 avatars, use input to filter
        info
      </h1>
      <div className="inputDiv">
        <InputFilter getValue={getInputValue} />
        <button onClick={() => setNewFetch(newFetch + 1)}>get avatar</button>
      </div>
      {avatars.length === 0 && <div className="lds-dual-ring"></div>}
      {avatars.length > 0 && <AvatarCards avatars={filtered} />}
    </div>
  );
}

export default Avatars;
