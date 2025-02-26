import { useState } from "react";
import "./Vierge.css";
import QuestionProps from "../../questionProps/QuestionProps";
import Line from "../../line/Line";
import ButtonChoix from "../../buttonChoix/buttonChoix";

interface ViergeProps {
  onReturn: () => void;
}

export default function Vierge({ onReturn }: ViergeProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // Liste des questions spécifiques à la Vierge
  const questions = [
    {
      question: "Aimez-vous que tout soit bien organisé et structuré ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes du genre perfectionniste dans ce que vous faites ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous remarquez facilement les petits détails que les autres ignorent ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Êtes-vous plus logique que spontané(e) ?",
      choices: ["Logique", "Spontané(e)"],
    },
    {
      question: "Aimez-vous aider les autres et leur donner des conseils ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez planifier à l'avance et éviter les imprévus ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Avez-vous tendance à être critique envers vous-même et les autres ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Préférez-vous travailler seul(e) ou en équipe ?",
      choices: ["Seul(e)", "En équipe"],
    },
    {
      question:
        "Aimez-vous analyser les situations avant de prendre une décision ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes du genre à suivre un plan ou à improviser ?",
      choices: ["Suivre un plan", "Improviser"],
    },
  ];

  // Gestion du passage à la question suivante
  const handleNextQuestion = (selectedChoice: string) => {
    console.log("Choix sélectionné :", selectedChoice);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Fin du quiz Vierge ! 🎉");
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
    <div className="vierge-container">
      <h1 className="title">♍ Vierge</h1>
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
