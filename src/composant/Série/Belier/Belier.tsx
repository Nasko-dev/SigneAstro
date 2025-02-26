import { useState } from "react";
import "./Belier.css";
import QuestionProps from "../../questionProps/QuestionProps";
import Line from "../../line/Line";
import ButtonChoix from "../../buttonChoix/buttonChoix";

interface BelierProps {
  onReturn: () => void;
}

export default function Belier({ onReturn }: BelierProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // Liste des questions et choix de réponse
  const questions = [
    {
      question: "Préférez-vous l'action ou la réflexion ?",
      choices: ["Action", "Réflexion"],
    },
    {
      question: "Êtes-vous plutôt leader ou suiveur ?",
      choices: ["Leader", "Suiveur"],
    },
    {
      question: "Vous aimez relever les défis. Vrai ou Faux ?",
      choices: ["Vrai", "Faux"],
    },
    {
      question: "Quand vous avez une idée, vous foncez sans hésiter ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "La patience est une vertu que vous maîtrisez bien ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Êtes-vous plus motivé par la compétition ou la coopération ?",
      choices: ["Compétition", "Coopération"],
    },
    {
      question: "Quand quelqu’un vous provoque, vous répondez immédiatement ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Préférez-vous les sports extrêmes ou les jeux de société ?",
      choices: ["Sports extrêmes", "Jeux de société"],
    },
    {
      question: "L'aventure et l'inconnu vous attirent-ils ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Êtes-vous du genre à abandonner facilement un projet difficile ?",
      choices: ["Oui", "Non"],
    },
  ];

  // Gestion du passage à la question suivante en récupérant le choix cliqué
  const handleNextQuestion = (selectedChoice: string) => {
    console.log("Choix sélectionné :", selectedChoice);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Fin du quiz ! 🎉");
    }
  };

  // Gestion du retour à la question précédente
  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    } else {
      alert("Vous êtes déjà à la première question.");
    }
  };

  return (
    <div className="belier-container">
      <h1 className="title">♈ Bélier</h1>
      <QuestionProps title={questions[questionIndex].question} />
      <Line />

      <ButtonChoix
        choices={questions[questionIndex].choices}
        onChoice={handleNextQuestion}
      />

      <button
        className="question-retour-button"
        type="button"
        onClick={handlePreviousQuestion}
      >
        ← Revenir à la question précédente
      </button>

      <button className="back-button" type="button" onClick={onReturn}>
        ← Retour
      </button>
    </div>
  );
}
