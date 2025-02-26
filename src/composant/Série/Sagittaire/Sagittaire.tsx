import { useState } from "react";
import QuestionProps from "../../questionProps/QuestionProps";
import Line from "../../line/Line";
import ButtonChoix from "../../buttonChoix/buttonChoix";
import "./Sagittaire.css";

interface SagittaireProps {
  onReturn: () => void;
}

export default function Sagittaire({ onReturn }: SagittaireProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // Liste des questions spécifiques au Sagittaire
  const questions = [
    {
      question: "Aimez-vous l'aventure et la découverte de nouveaux horizons ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes une personne optimiste et enthousiaste ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez apprendre et vous cultiver sur divers sujets ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous préférez la liberté plutôt que la routine ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous aimez les voyages et l'exploration de nouvelles cultures ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes du genre à dire ce que vous pensez sans filtre ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous avez un esprit aventurier et curieux ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez relever des défis et vous dépasser ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous préférez l'action et l'expérimentation plutôt que la théorie ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez philosopher et débattre sur des sujets profonds ?",
      choices: ["Oui", "Non"],
    },
  ];

  // Gestion du passage à la question suivante
  const handleNextQuestion = (selectedChoice: string) => {
    console.log("Choix sélectionné :", selectedChoice);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Fin du quiz Sagittaire ! 🎉");
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
    <div className="sagittaire-container">
      <h1 className="title">♐ Sagittaire</h1>
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
