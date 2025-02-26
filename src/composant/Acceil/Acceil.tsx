import { useState } from "react";

import Line from "../line/Line";
import QuestionProps from "../questionProps/QuestionProps";
import ButtonContinuer from "../buttonContinuer/buttonContinuer";

import Belier from "../Série/Belier/Belier";
import Taureau from "../Série/Taureau/Taureau";
import Gemeaux from "../Série/Gemeaux/Gemeaux";
import Cancer from "../Série/Cancer/Cancer";
import Lion from "../Série/Lion/Lion";
import Vierge from "../Série/Vierge/Vierge";
import Balance from "../Série/Balance/Balance";
import Scorpion from "../Série/Scorpion/Scorpion";
import Sagittaire from "../Série/Sagittaire/Sagittaire";
import Capricorne from "../Série/Capricorne/Capricorne";
import Verseau from "../Série/Verseau/Verseau";
import Poissons from "../Série/Poissons/Poissons";

import "./Acceil.css";

export default function Acceil() {
  const signesAstrologiques = [
    "Bélier",
    "Taureau",
    "Gémeaux",
    "Cancer",
    "Lion",
    "Vierge",
    "Balance",
    "Scorpion",
    "Sagittaire",
    "Capricorne",
    "Verseau",
    "Poissons",
  ];

  // 'selection' stocke le signe choisi, 'quizActive' détermine si l'on affiche le quiz
  const [selection, setSelection] = useState<string | null>(null);
  const [quizActive, setQuizActive] = useState(false);

  const handleCheckboxChange = (signe: string) => {
    setSelection(selection === signe ? null : signe);
  };

  const handleContinue = () => {
    if (selection) {
      setQuizActive(true);
    }
  };

  // **Affichage du quiz en fonction du signe sélectionné**
  if (quizActive && selection) {
    let QuizComponent: React.FC<{ onReturn: () => void }> | null = null;
    switch (selection) {
      case "Bélier":
        QuizComponent = Belier;
        break;
      case "Taureau":
        QuizComponent = Taureau;
        break;
      case "Gémeaux":
        QuizComponent = Gemeaux;
        break;
      case "Cancer":
        QuizComponent = Cancer;
        break;
      case "Lion":
        QuizComponent = Lion;
        break;
      case "Vierge":
        QuizComponent = Vierge;
        break;
      case "Balance":
        QuizComponent = Balance;
        break;
      case "Scorpion":
        QuizComponent = Scorpion;
        break;
      case "Sagittaire":
        QuizComponent = Sagittaire;
        break;
      case "Capricorne":
        QuizComponent = Capricorne;
        break;
      case "Verseau":
        QuizComponent = Verseau;
        break;
      case "Poissons":
        QuizComponent = Poissons;
        break;
      default:
        QuizComponent = null;
    }

    return (
      <div className="choix-astro">
        {QuizComponent ? (
          <QuizComponent
            onReturn={() => {
              setQuizActive(false);
              setSelection(null);
            }}
          />
        ) : (
          <>
            <h1>Le quiz pour {selection} n'est pas encore disponible.</h1>
            <button
              type="button"
              onClick={() => {
                setQuizActive(false);
                setSelection(null);
              }}
            >
              ← Retour
            </button>
          </>
        )}
      </div>
    );
  }

  // **Affichage de la page d'accueil avec la sélection des signes**
  return (
    <div className="choix-astro">
      <QuestionProps title="Quelle est votre astrologie ?" />
      <Line />

      <div className="choix-astro-options">
        {signesAstrologiques.map((signe) => (
          <label key={signe}>
            <input
              type="checkbox"
              className="choix"
              value={signe}
              checked={selection === signe}
              onChange={() => handleCheckboxChange(signe)}
              disabled={selection !== null && selection !== signe}
            />
            {signe}
          </label>
        ))}
      </div>

      {selection && <ButtonContinuer onClick={handleContinue} />}
    </div>
  );
}
