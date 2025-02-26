import Acceil from "../Acceil/Acceil";
import "./cardPrincipale.css";

export default function CardPrincipale() {
  return (
    <div className="card-principale">
      <div className="card-principale-contenu">
        <Acceil />
        {/* <div className="line" /> */}
      </div>
    </div>
  );
}
