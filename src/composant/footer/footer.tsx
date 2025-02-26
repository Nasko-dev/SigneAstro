import "./footer.css";
import svg1 from "../../assets/footer.svg";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <img src={svg1} alt="Contact " />
        <div className="footer-text">
          <h2>Besoin d'un Dévelopeur ?</h2>
          <p>Site moderne, performant, sur-mesure. Contactez-moi !</p>
        </div>
        <button type="button">Share Feedback</button>
      </div>
    </>
  );
}
