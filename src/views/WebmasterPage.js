import React from "react";
import WebmasterForm from "../components/footer/WebmasterForm";

const WebmasterPage = () => {
  return (
    <div className="webmaster-page">
      <h2>Kontakt na správce webu</h2>
      <p>Našli jste chybu? Dejte nám o ní vědět pomocí formuláře níže.</p>
      <WebmasterForm />
    </div>
  );
};

export default WebmasterPage;
