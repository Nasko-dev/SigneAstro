import { useState } from "react";
import "./Gemeaux.css";
import QuestionProps from "../../questionProps/QuestionProps";
import Line from "../../line/Line";
import ButtonChoix from "../../buttonChoix/buttonChoix";

interface GemeauxProps {
  onReturn: () => void;
}

export default function Gemeaux({ onReturn }: GemeauxProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // Liste des questions spécifiques aux Gémeaux
  const questions = [
    {
      question: "Vous aimez discuter avec tout le monde ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Préférez-vous la variété ou la routine ?",
      choices: ["Variété", "Routine"],
    },
    {
      question: "Êtes-vous souvent curieux sur de nombreux sujets ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous arrive-t-il de changer d'avis rapidement ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Êtes-vous plus intellectuel ou manuel ?",
      choices: ["Intellectuel", "Manuel"],
    },
    {
      question: "Vous aimez apprendre de nouvelles choses en permanence ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes à l'aise pour parler en public ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Aimez-vous être entouré de beaucoup de personnes ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous vous lassez rapidement de certaines activités ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez jongler entre plusieurs projets en même temps ?",
      choices: ["Oui", "Non"],
    },
  ];

  // Gestion du passage à la question suivante
  const handleNextQuestion = (selectedChoice: string) => {
    console.log("Choix sélectionné :", selectedChoice);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Fin du quiz Gémeaux ! 🎉");
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
    <div className="gemeaux-container">
      <h1 className="title">♊ Gémeaux</h1>
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
