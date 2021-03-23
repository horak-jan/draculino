import React from "react";
import Vinicius1 from "../../images/vinicius.jpg";
import Vinicius2 from "../../images/vinicius2.jpg";
import Vinicius3 from "../../images/vinicius3.jpg";
import ReadySlider from "../ui/ReadySlider";

const StyleSettings = { width: "100%", height: "60vh" };
const Vinicius = () => {
  return (
    <div className="vinicius">
      <h2>Vinicius "Draculino" Magalhães</h2>
      <p>
        Profesor Vinicius „Draculino“ Magalhães má 6. stupeň černého pásu pod
        Carlosem Gracie Jr. (8. stupeň) a učí brazilské jiu-jitsu více než 25
        let. Je obecně považován za jednoho z předních instruktorů BJJ na světě,
        který trénoval mnoho MMA a GRAPPLING šampiónů a vytvořil jedno z nejlépe
        prodávaných BJJ instruktážních videí všech dob.
      </p>

      <img
        src={Vinicius1}
        className="small"
        alt="Vinicius Draculino Magalhaes"
      />
      <div className="large">
        <ReadySlider
          Image1={Vinicius1}
          Image2={Vinicius2}
          Image3={Vinicius3}
          StyleSettings={StyleSettings}
        />
      </div>
      <h3>DRACULINO DOSTAL SVOU PŘEZDÍVKU OD UČITELE MATEMATIKY.</h3>

      <p>
        Draculino vyrůstal s Ryanem, Ralphem a Renzem Gracie, kdy trénovali
        zároveň pod Jean Jacques Machado a taky Carlos Gracie Jr. v první Gracie
        Barra Academy. Začal soutěžit a velmi brzy vyhrávat šampionáty od
        modrého pásu směrem nahoru.
      </p>

      <p>
        Draculino je hlavní instruktor jak Gracie Barra Texas tak i známé Gracie
        Barra Belo Horizonte školy v Brazílii a má více než 30 přidružených škol
        s více než 100 černými pásy. V průběhu let vytrénoval více než 25 mistrů
        světa BJJ.
      </p>

      <p className="strong">Soutěžní úspěchy:</p>
      <ul>
        <li>4x Pan American Champion</li>
        <li>Pan American No-Gi Champion</li>
        <li>2x Brazillian National Champion</li>
        <li>2x Silver Medalist of World BJJ Championships</li>
        <li>No-Gi International Master and Senior Champion</li>
        <li>MMA Lightweight Champion</li>
        <li>Abu-Dhabi Veteran</li>
      </ul>
    </div>
  );
};

export default Vinicius;
