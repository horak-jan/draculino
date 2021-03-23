import React from "react";

const SingleFaq = (props) => {
  let { question, answer } = { ...props };
  return (
    <div className="single-faq">
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

export default SingleFaq;
