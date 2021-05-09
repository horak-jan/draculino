import React from "react";
import { useForm } from "react-hook-form";

const HomeForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="home-form">
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
        {/* phone contact */}
        <label htmlFor="mobil">Telefon</label>
        <input
          name="mobil"
          ref={register({
            required: "Toto pole je nutné vyplnit.",
            minLength: { value: 9, message: "Telefoní číslo je moc krátké" },

            maxLength: { value: 9, message: "Telefoní číslo je moc dlouhé." },
          })}
        />
        {errors.mobil && <p className="form-error">{errors.mobil.message}</p>}
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

        {/* date of birth */}
        <label htmlFor="dob">Datum narození</label>
        <input
          name="dob"
          ref={register({ required: "Toto pole je nutné vyplnit." })}
        />
        {errors.dob && <p className="form-error">{errors.dob.message}</p>}

        {/* what city to train in */}
        <label htmlFor="city">Pobočka</label>
        <select name="city" ref={register({ required: true })}>
          <option value="frydek">Frýdek</option>
          <option value="malkovice">Moravské Málkovice</option>
          <option value="holesov">Holešov</option>
          <option value="olomouc">Olomouc</option>
          <option value="opava">Opava</option>
          <option value="ostrava">Ostrava</option>
          <option value="kromeriz">Kroměříž</option>
          <option value="trinec">Třinec</option>
          <option value="vyskov">Vyškov</option>
          <option value="zlin">Zlín</option>
        </select>
        {/*where did you hear from us  */}
        <label htmlFor="source">Odkud ses o nás dozvěděl?</label>
        <select name="source" ref={register({ required: true })}>
          <option value="facebook">Z Facebooku</option>
          <option value="personal">Osobní doporučení</option>
          <option value="internet">Z internetového vyhledávače</option>
          <option value="other">Jiný (uveď v poznámce)</option>
        </select>

        {/* what you wanna train */}
        <label htmlFor="sport">Jaký kurz Tě zajímá </label>
        <select name="sport" ref={register}>
          <option value="bjj">Jiu-jitsu</option>
          <option value="mma">MMA</option>
          <option value="kids">Jiu-jitsu děti</option>
          <option value="workout">Tělocvik</option>
          <option value="kettlebell">Kettlebell</option>
          <option value="box">Kondiční box</option>
        </select>
        <label htmlFor="notes">Poznámky</label>
        <input className="notes" name="notes" ref={register} />
        {/* <p>
        Uvedené údaje budou použity pouze pro účely Draculino k informování o vámi 
        vybraném kurzu. Nebudou Vám zasílány žádné newslettery. Členem spolku GB Draculino
         se stáváte až po zaplacení kurzovného. V případě, že nechcete vyplnit tuto 
         přihlášku, kontaktujte nás telefonicky na čísle +420 724 711 515.
</p> */}
        <div className="buttonWrapper">
          <button type="submit">Odeslat</button>
        </div>
      </form>
    </div>
  );
};

export default HomeForm;
