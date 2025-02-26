import { useState } from "react";
import QuestionProps from "../../questionProps/QuestionProps";
import Line from "../../line/Line";
import ButtonChoix from "../../buttonChoix/buttonChoix";
import "./Scorpion.css";

interface ScorpionProps {
  onReturn: () => void;
}

export default function Scorpion({ onReturn }: ScorpionProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // Liste des questions spécifiques au Scorpion
  const questions = [
    {
      question: "Vous êtes une personne intense et passionnée ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez garder vos secrets ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes du genre à aller au bout de vos idées ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous avez un côté mystérieux et réservé ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes loyal(e) et protecteur(trice) envers vos proches ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous avez une forte intuition et ressentez facilement les émotions des autres ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous aimez analyser en profondeur avant de faire confiance à quelqu'un ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes du genre à ne jamais oublier une trahison ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous aimez relever des défis et aller au bout de vos ambitions ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez comprendre le fonctionnement profond des choses ?",
      choices: ["Oui", "Non"],
    },
  ];

  // Gestion du passage à la question suivante
  const handleNextQuestion = (selectedChoice: string) => {
    console.log("Choix sélectionné :", selectedChoice);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Fin du quiz Scorpion ! 🎉");
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
    <div className="scorpion-container">
      <h1 className="title">♏ Scorpion</h1>
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
