import { useState } from "react";
import QuestionProps from "../../questionProps/QuestionProps";
import Line from "../../line/Line";
import ButtonChoix from "../../buttonChoix/buttonChoix";
import "./Poissons.css";

interface PoissonsProps {
  onReturn: () => void;
}

export default function Poissons({ onReturn }: PoissonsProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // Liste des questions spécifiques aux Poissons
  const questions = [
    {
      question: "Êtes-vous une personne rêveuse et imaginative ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes très sensible et ressentez profondément les émotions ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez aider les autres sans attendre quelque chose en retour ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous vous sentez souvent connecté(e) à votre intuition ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous préférez suivre votre cœur plutôt que votre tête ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez la musique, l'art ou toute autre forme de créativité ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous avez parfois du mal à poser des limites avec les autres ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez vous évader dans des mondes imaginaires ou rêver ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes souvent perçu(e) comme une personne mystérieuse et insaisissable ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous préférez suivre le courant plutôt que de forcer les choses ?",
      choices: ["Oui", "Non"],
    },
  ];

  // Gestion du passage à la question suivante
  const handleNextQuestion = (selectedChoice: string) => {
    console.log("Choix sélectionné :", selectedChoice);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Fin du quiz Poissons ! 🎉");
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
    <div className="poissons-container">
      <h1 className="title">♓ Poissons</h1>
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
