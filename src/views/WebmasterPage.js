import React from "react";
import WebmasterForm from "../components/footer/WebmasterForm";

const WebmasterPage = () => {
  return (
    <div className="webmaster-page">
      <h2>Našli jste chybu?</h2>
      <p>Dejte nám o ní vědět pomocí formuláře níže.</p>
      <WebmasterForm />
    </div>
  );
};

export default WebmasterPage;
