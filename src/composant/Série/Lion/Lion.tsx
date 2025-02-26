import { useState } from "react";
import "./Lion.css";
import QuestionProps from "../../questionProps/QuestionProps";
import Line from "../../line/Line";
import ButtonChoix from "../../buttonChoix/buttonChoix";

interface LionProps {
  onReturn: () => void;
}

export default function Lion({ onReturn }: LionProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // Liste des questions spécifiques au Lion
  const questions = [
    {
      question: "Aimez-vous être au centre de l'attention ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes souvent considéré(e) comme un leader ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez recevoir des compliments et être reconnu(e) ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes plutôt extraverti(e) ou introverti(e) ?",
      choices: ["Extraverti(e)", "Introverti(e)"],
    },
    {
      question: "Aimez-vous prendre des initiatives et diriger les autres ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Êtes-vous une personne passionnée et expressive ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous avez un grand besoin de liberté et d’indépendance ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez faire plaisir et être généreux(se) ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes très ambitieux(se) et aimez atteindre des sommets ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez briller et vous démarquer des autres ?",
      choices: ["Oui", "Non"],
    },
  ];

  // Gestion du passage à la question suivante
  const handleNextQuestion = (selectedChoice: string) => {
    console.log("Choix sélectionné :", selectedChoice);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Fin du quiz Lion ! 🎉");
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
    <div className="lion-container">
      <h1 className="title">♌ Lion</h1>
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
