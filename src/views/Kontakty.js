import React from "react";
import GymContacts from "../components/kontakty/GymContacts";
import MainContact from "../components/kontakty/MainContact";

const Kontakty = () => {
  return (
    <div className="contact">
      <MainContact />
      <GymContacts />
    </div>
  );
};

export default Kontakty;
