import "./QuestionProps.css";

interface QuestionPropsProps {
  title: string;
}

export default function QuestionProps({ title }: QuestionPropsProps) {
  return (
    <div className="choix-astro">
      <h1>{title}</h1>
    </div>
  );
}
