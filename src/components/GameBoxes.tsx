import React from "react";

interface GameBoxesProps {
  words: string[];
}

const GameBoxes: React.FC<GameBoxesProps> = ({ words }) => {
//   console.log(words);
  return (
    <div className="flex flex-col gap-1">
      {words?.map((word) => {
        const wordArr = word?.split("") ;
        return (
          <div key={word} className={`flex gap-1`}>
            {[0, 1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`flex h-14 w-14 items-center justify-center border-2 border-black/20 text-3xl font-bold ${
                  false && "border-black/40"
                } ${false && "bg-[#787c7e] text-white"} ${
                  false && "bg-[#c9b458] text-white"
                } capitalize`}
              >
                {wordArr[num] ?? ""}
              </div>
            ))}
          </div>
        );
      })}
      {[...Array(6 - words?.length)]?.map((val) => (
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
