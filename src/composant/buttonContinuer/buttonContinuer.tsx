import "./buttonContinuer.css";

interface buttonProps {
  onClick: () => void;
}

export default function ButtonContinuer({ onClick }: buttonProps) {
  return (
    <button type="button" className="continuer-btn" onClick={onClick}>
      Continuer
    </button>
  );
}
