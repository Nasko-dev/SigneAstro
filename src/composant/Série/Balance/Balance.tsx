import { useState } from "react";
import QuestionProps from "../../questionProps/QuestionProps";
import Line from "../../line/Line";
import ButtonChoix from "../../buttonChoix/buttonChoix";
import "./Balance.css";

interface BalanceProps {
  onReturn: () => void;
}

export default function Balance({ onReturn }: BalanceProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // Liste des questions spécifiques à la Balance
  const questions = [
    {
      question: "Aimez-vous l'harmonie et l'équilibre dans votre vie ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez être entouré(e) de belles choses ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous avez du mal à prendre des décisions ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous évitez les conflits autant que possible ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez travailler en équipe ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous préférez une approche diplomatique plutôt que frontale ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous aimez analyser toutes les perspectives avant de trancher ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "L'injustice vous dérange profondément ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous aimez vous entourer de personnes sociables et cultivées ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous appréciez l'art et l'esthétique ?",
      choices: ["Oui", "Non"],
    },
  ];

  // Gestion du passage à la question suivante
  const handleNextQuestion = (selectedChoice: string) => {
    console.log("Choix sélectionné :", selectedChoice);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Fin du quiz Balance ! 🎉");
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
    <div className="balance-container">
      <h1 className="title">♎ Balance</h1>
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
