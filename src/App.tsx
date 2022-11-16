import { useEffect, useState } from "react";
import "./App.css";

const getHexColor = () => {
  const hex = [
    "A",
    "B",
    "D",
    "E",
    "C",
    "F",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  const createHexColor = new Array(6)
    .fill("")
    .map(() => hex[Math.floor(Math.random() * hex.length)])
    .join("");

  return `#${createHexColor}`;
};

enum Result {
  Right,
  Wrong,
}

function App() {
  const [color, setColor] = useState<any | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Result | null>(null);

  const generateColors = () => {
    const rightColor = getHexColor();
    setColor(rightColor);
    setAnswers(
      [rightColor, getHexColor(), getHexColor()].sort(() => 0.5 - Math.random())
    );
  };

  const buttonClicked = (answer: string) => {
    if (answer === color) {
      setResult(Result.Right);
      generateColors();
    } else {
      setResult(Result.Wrong);
    }
  };

  useEffect(() => {
    generateColors();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h2>Click the right color</h2>
        <div className="box" style={{ background: color }}>
          {" "}
        </div>
        {answers.map((answer) => (
          <button onClick={() => buttonClicked(answer)} key={answer}>
            {answer}
          </button>
        ))}
        {result === Result.Wrong ? (
          <div className="wrong">Wrong Answer!</div>
        ) : (
          <div className="right">Right Answer!</div>
        )}
      </div>
    </div>
  );
}

export default App;
