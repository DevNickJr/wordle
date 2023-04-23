import React, { useState } from "react";
import GameKeyboard from "../../components/GameKeyboard.tsx";
import GameBoxes from "../../components/GameBoxes.tsx";

const Home = () => {
  const [words, setWords] = useState<string[]>(["HOUSE", "Rosek", "jnj"]);
  const [word, setWord] = useState<number>(0);

  const handleDelete = () => {
    const newWords = [...words];
    if (newWords[word].length === 0) return;
    newWords[word] = newWords[word].slice(0, -1);
    setWords(newWords);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-8">
      <h1 className="mb-4 text-3xl font-extrabold">Wordle</h1>
      <GameBoxes word={word} words={words} />
      <GameKeyboard handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
