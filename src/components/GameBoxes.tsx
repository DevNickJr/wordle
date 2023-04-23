import React from "react";
import clsx from "clsx";
import { answer, gameColors } from "../../constants";

interface GameBoxesProps {
  words: string[];
  word: number;
  triedletters: {
    wrongLetters: string[];
    semiCorrectLetters: string[];
    correctLetters: string[];
  };
}

const GameBoxes: React.FC<GameBoxesProps> = ({ words, word, triedletters }) => {
  console.log(triedletters);

  return (
    <div className="flex flex-col gap-1">
      {(words.slice(0, 6) ?? words)?.map((wordStr, index) => {
        const wordArr = wordStr?.split("");
        return (
          <div key={wordStr} className={`flex gap-1`}>
            {[0, 1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={clsx(
                  "flex h-14 w-14 items-center justify-center border-2 border-black/20 text-3xl font-bold capitalize",
                  wordArr[num] && "border-black/40",
                  word > index &&
                    `border-none bg-[${gameColors.wrong}] text-white`,
                  word > index && answer[num] === wordArr[num]
                    ? `bg-[${gameColors.correct}] text-white`
                    : word > index &&
                        answer.includes(wordArr[num]) &&
                        `bg-[${gameColors.almost}] text-white`,
                )}
              >
                {wordArr[num] ?? ""}
              </div>
            ))}
          </div>
        );
      })}
      {[...Array(6 - (words?.length > 6 ? 6 : words?.length))]?.map((val) => (
        <div key={val} className={`flex gap-1`}>
          {[0, 1, 2, 3, 4].map((num) => (
            <div
              key={`${val} ${num}`}
              className={`flex h-14 w-14 items-center justify-center border-2 border-black/20 text-3xl font-bold ${
                false && "border-black/40"
              } ${false && "bg-[#787c7e] text-white"} ${
                false && "bg-[#c9b458] text-white"
              }`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoxes;

{
  /* <div
key={num}
className={clsx(
  "flex h-14 w-14 items-center justify-center border-2 border-black/20 text-3xl font-bold capitalize", 
    wordArr[num] && "border-black/40"
  , ` ${word > index && "border-none bg-[#787c7e] text-white"} ${
    word > index &&
    answer.includes(wordArr[num]) &&
    "bg-[#c9b458] text-white"
  } ${
    word > index &&
    answer[num] === wordArr[num] &&
    "bg- text-white"
  } capitalize`
)}
> */
}
