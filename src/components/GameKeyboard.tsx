import React, { useCallback, useEffect } from "react";
import clsx from "clsx";
import { gameColors, keys } from "./../../constants";

const GameKeyboard = ({
  handleInput = (key) => {},
  handleDelete = () => {},
  handleSubmit = () => {},
  correctLetters = "",
  wrongLetters = "",
  almostCorrectLetters = "",
}: {
  handleInput: (key: string) => void;
  handleDelete: () => void;
  handleSubmit: () => void;
  correctLetters: string;
  wrongLetters: string;
  almostCorrectLetters: string;
}) => {
  const keyColor = (key: string) => {
    if (wrongLetters.toUpperCase().includes(key)) {
      return `bg-[${gameColors.wrong}]`;
    } else if (correctLetters.toUpperCase().includes(key)) {
      return `bg-[${gameColors.correct}]`;
    } else if (almostCorrectLetters.toUpperCase().includes(key)) {
      return `bg-[${gameColors.almost}]`;
    } else {
      return "bg-[#818384]";
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="keyboard_row">
        {React.Children.toArray(
          keys.slice(0, 10).map((key) => (
            <button
              onClick={() => handleInput(key.toUpperCase())}
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
              onClick={() => handleInput(key)}
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
              onClick={() => handleInput(key)}
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
