import React from "react";
import SingleFaq from "../components/chciZacit/SingleFaq";
import Faqs from "../components/chciZacit/faq.json";

const ChciZacit = () => {
  return (
    <div className="chci-zacit">
      <p>
        <div className="buttonWrapper">
          <a href="/registrace">
            <button type="submit">Registrace</button>
          </a>
        </div>
        Je nám jasné, že dříve než se zaregistruješ, máš spoustu otázek. Tady
        jsou nejčastější z nich.
      </p>

      {Faqs.faqs.map((faq) => (
        <SingleFaq question={faq.q} answer={faq.a} key={faq.key} />
      ))}
    </div>
  );
};

export default ChciZacit;
