import React, { useState } from "react";
import GameKeyboard from "../../components/GameKeyboard.tsx";
import GameBoxes from "../../components/GameBoxes.tsx";

const Home = () => {
  const [words, setWords] = useState<string[]>([]);
  const [word, setWord] = useState<number>(0);

  const handleDelete = () => {
    const newWords = [...words];
    if (newWords[word]?.length === 0) return;
    newWords[word] = newWords[word].slice(0, -1);
    setWords(newWords);
  };


  const handleInput = (key: string) => {
    const newWords = [...words]
    if (newWords[word]?.length >= 5) return;
    newWords[word] = (newWords[word] ?? "") + key
    setWords(newWords)
  }


  const handleSubmit = () => {
    if (words[word]?.length >= 5 && word < 5) {
      setWord(prev => ++prev)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-8">
      <h1 className="mb-4 text-3xl font-extrabold">Wordle</h1>
      <GameBoxes words={words} />
      <GameKeyboard handleSubmit={handleSubmit} handleInput={handleInput} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
