import { useState } from "react";
import "./Cancer.css";
import QuestionProps from "../../questionProps/QuestionProps";
import Line from "../../line/Line";
import ButtonChoix from "../../buttonChoix/buttonChoix";

interface CancerProps {
  onReturn: () => void;
}

export default function Cancer({ onReturn }: CancerProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // Liste des questions spécifiques aux Cancer
  const questions = [
    {
      question: "Vous êtes une personne très attachée à votre famille ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous préférez la maison plutôt que sortir souvent ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous vous fiez souvent à votre intuition ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous êtes du genre à vous souvenir longtemps des blessures passées ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez prendre soin des autres et les protéger ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes sensible aux émotions des autres ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous avez tendance à être nostalgique du passé ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes plus introverti(e) qu'extraverti(e) ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous accordez une grande importance à la sécurité et à la stabilité ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous cachez souvent vos vraies émotions aux autres ?",
      choices: ["Oui", "Non"],
    },
  ];

  // Gestion du passage à la question suivante
  const handleNextQuestion = (selectedChoice: string) => {
    console.log("Choix sélectionné :", selectedChoice);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Fin du quiz Cancer ! 🎉");
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
    <div className="cancer-container">
      <h1 className="title">♋ Cancer</h1>
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
