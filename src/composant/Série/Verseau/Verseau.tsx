import { useState } from "react";
import QuestionProps from "../../questionProps/QuestionProps";
import Line from "../../line/Line";
import ButtonChoix from "../../buttonChoix/buttonChoix";
import "./Verseau.css";

interface VerseauProps {
  onReturn: () => void;
}

export default function Verseau({ onReturn }: VerseauProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // Liste des questions spécifiques au Verseau
  const questions = [
    {
      question:
        "Aimez-vous penser différemment des autres et être original(e) ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous êtes une personne indépendante et aimez votre liberté ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez apprendre et innover dans votre domaine ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous vous intéressez aux nouvelles technologies et au futur ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous préférez suivre votre propre chemin plutôt que les conventions ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez les débats et défendre vos idées ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous avez un fort esprit humanitaire et aimez aider les autres ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous aimez expérimenter et essayer de nouvelles choses ?",
      choices: ["Oui", "Non"],
    },
    {
      question:
        "Vous êtes du genre à avoir beaucoup d'amis de divers horizons ?",
      choices: ["Oui", "Non"],
    },
    {
      question: "Vous vous adaptez facilement aux nouvelles situations ?",
      choices: ["Oui", "Non"],
    },
  ];

  // Gestion du passage à la question suivante
  const handleNextQuestion = (selectedChoice: string) => {
    console.log("Choix sélectionné :", selectedChoice);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Fin du quiz Verseau ! 🎉");
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
    <div className="verseau-container">
      <h1 className="title">♒ Verseau</h1>
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
