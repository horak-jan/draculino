import React from "react";
import Contacts from "./Contacts.json";
import SingleContact from "./SingleContact";

const GymContacts = () => {
  return (
    <div className="gym-contacts">
      {Contacts.gyms.map((gym) => (
        <SingleContact key={gym.email} gym={gym} />
      ))}
    </div>
  );
};

export default GymContacts;
