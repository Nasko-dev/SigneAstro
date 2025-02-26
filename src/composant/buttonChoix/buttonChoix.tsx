import "./ButtonChoix.css";

interface ButtonChoixProps {
  choices: string[];
  onChoice: (choice: string) => void;
}

export default function ButtonChoix({
  choices = [],
  onChoice,
}: ButtonChoixProps) {
  return (
    <div className="button-choix">
      {choices.map((choice) => (
        <button
          key={choice}
          type="button"
          onClick={() => onChoice(choice)}
          className="choice-button"
        >
          {choice}
        </button>
      ))}
    </div>
  );
}
