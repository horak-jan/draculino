import React from "react";
import SingleFaq from "../components/chciZacit/SingleFaq";
import Faqs from "../components/chciZacit/faq.json";

const ChciZacit = () => {
  return (
    <div className="chci-zacit">
      <h2>Nadpis</h2>
      <p>
        Je nám jasné, že dříve než se zaregistruješ, máš spoustu otázek. Tady
        jsou nejčastější z nich.
      </p>

      {Faqs.faqs.map((faq) => {
        return <SingleFaq question={faq.q} answer={faq.a} />;
      })}
    </div>
  );
};

export default ChciZacit;
