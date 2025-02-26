import { useState } from "react";
import QuestionProps from "../../questionProps/QuestionProps";
import Line from "../../line/Line";
import ButtonChoix from "../../buttonChoix/buttonChoix";
import "./Capricorne.css";

interface CapricorneProps {
  onReturn: () => void;
}

export default function Capricorne({ onReturn }: CapricorneProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // Liste des questions spécifiques au Capricorne
  const questions = [
    {
      question: "Avez-vous un grand sens des responsabilités ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes une personne disciplinée et organisée ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous préférez la stabilité et la sécurité plutôt que le risque ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous travaillez dur pour atteindre vos objectifs ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes une personne patiente et persévérante ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous avez un grand respect pour les traditions et les règles ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes plus logique qu’émotionnel(le) ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous préférez les relations stables et durables ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez planifier à long terme plutôt que d'improviser ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes quelqu'un de fiable et sur qui on peut compter ?",
      choices: ["Oui", "Non"],
    },
  ];

  // Gestion du passage à la question suivante
  const handleNextQuestion = (selectedChoice: string) => {
    console.log("Choix sélectionné :", selectedChoice);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Fin du quiz Capricorne ! 🎉");
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
    <div className="capricorne-container">
      <h1 className="title">♑ Capricorne</h1>
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
