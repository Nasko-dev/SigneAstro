import { useState } from "react";
import "./Taureau.css";
import QuestionProps from "../../questionProps/QuestionProps";
import Line from "../../line/Line";
import ButtonChoix from "../../buttonChoix/buttonChoix";
import "./Taureau.css";

interface TaureauProps {
  onReturn: () => void;
}

export default function Taureau({ onReturn }: TaureauProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // Liste des questions spécifiques au Taureau
  const questions = [
    {
      question: "Préférez-vous la stabilité ou le changement ?",
      choices: ["Stabilité", "Changement"],
    },
    {
      question: "Vous attachez beaucoup d'importance au confort matériel ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Êtes-vous plutôt patient ou impatient ?",
      choices: ["Patient", "Impatient"],
    },
    {
      question: "Quand vous commencez un projet, vous allez jusqu'au bout ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Êtes-vous une personne têtue ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous préférez prendre votre temps ou agir rapidement ?",
      choices: ["Prendre mon temps", "Agir rapidement"],
    },
    {
      question: "Vous êtes plus motivé par l'argent ou par la passion ?",
      choices: ["Argent", "Passion"],
    },
    {
      question:
        "Vous appréciez les plaisirs simples comme la bonne nourriture ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Êtes-vous du genre à être possessif en amour ou en amitié ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Préférez-vous le travail manuel ou intellectuel ?",
      choices: ["Manuel", "Intellectuel"],
    },
  ];

  // Gestion du passage à la question suivante
  const handleNextQuestion = (selectedChoice: string) => {
    console.log("Choix sélectionné :", selectedChoice);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Fin du quiz Taureau ! 🎉");
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
    <div className="taureau-container">
      <h1 className="title">♉ Taureau</h1>
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
