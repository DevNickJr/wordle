import React from "react";
import clsx from "clsx";

const GameKeyboard = ({
  handleClick = (key) => {},
  handleDelete = () => {},
  handleSubmit = () => {},
  correctLetters = "",
  wrongLetters = "",
  almostCorrectLetters = "",
}: {
  handleClick: (key: string) => void;
  handleDelete: () => void;
  handleSubmit: () => void;
  correctLetters: string;
  wrongLetters: string;
  almostCorrectLetters: string;
}) => {
  const keyColor = (key: string) => {
    if (wrongLetters.toUpperCase().includes(key)) {
      return "bg-[#3a3a3c]";
    } else if (almostCorrectLetters.toUpperCase().includes(key)) {
      return "bg-[#b59f3b]";
    } else if (correctLetters.toUpperCase().includes(key)) {
      return "bg-[#538d4e]";
    } else {
      return "bg-[#818384]";
    }
  };
  const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="keyboard_row">
        {React.Children.toArray(
          keys.slice(0, 10).map((key) => (
            <button
              onClick={() => handleClick(key.toUpperCase())}
              className={clsx("btn text-lg text-white", keyColor(key))}
            >
              {key}
            </button>
          )),
        )}
      </div>
      <div className="keyboard_row">
        {React.Children.toArray(
          keys.slice(10, 19).map((key) => (
            <button
              onClick={() => handleClick(key)}
              className={clsx("btn text-lg text-white", keyColor(key))}
            >
              {key}
            </button>
          )),
        )}
      </div>
      <div className="keyboard_row">
        <button onClick={handleSubmit} className="btn text-sm">
          ENTER
        </button>
        {React.Children.toArray(
          keys.slice(19, 26).map((key) => (
            <button
              onClick={() => handleClick(key)}
              className={clsx("btn text-lg text-white", keyColor(key))}
            >
              {key}
            </button>
          )),
        )}
        <button onClick={handleDelete} className={clsx("btn text-lg")}>
          DEL
        </button>
      </div>
    </div>
  );
};

export default GameKeyboard;
