import React from "react";
import { useForm } from "react-hook-form";

const WebmasterForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="webmaster-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* first name */}
        <label htmlFor="firstName">Jméno</label>
        <input
          name="firstName"
          ref={register({
            required: "Toto pole je nutné vyplnit.",
            minLength: { value: 3, message: "Jméno musí být delší." },
            pattern: {
              value: /^[A-Za-zěščřžýáíéů]+$/i,
              message: "Speciální znaky a čísla nejsou povoleny.",
            },
          })}
        />
        {errors.firstName && (
          <p className="form-error">{errors.firstName.message}</p>
        )}
        {/* lastname */}
        <label htmlFor="lastName">Příjmení </label>
        <input
          name="lastName"
          ref={register({
            required: "Toto pole je nutné vyplnit.",
            minLength: { value: 3, message: "Jméno musí být delší." },
            pattern: {
              value: /^[A-Za-zěščřžýáíéů]+$/i,
              message: "Speciální znaky a čísla nejsou povoleny.",
            },
          })}
        />
        {errors.lastName && (
          <p className="form-error">{errors.lastName.message}</p>
        )}

        {/* email contact */}
        <label htmlFor="email">Emailová adresa</label>
        <input
          name="email"
          ref={register({
            required: "Toto pole je nutné vyplnit.",
            minLength: { value: 8, message: "Email je moc krátký" },
          })}
        />
        {errors.email && <p className="form-error">{errors.email.message}</p>}

        <label htmlFor="notes">Poznámky</label>
        <input className="notes" name="notes" ref={register} />

        <div className="buttonWrapper">
          <button type="submit">Odeslat</button>
        </div>
      </form>
    </div>
  );
};

export default WebmasterForm;
