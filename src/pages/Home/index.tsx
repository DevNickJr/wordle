import React, {useState, useEffect, useReducer} from "react";
import GameKeyboard from "../../components/GameKeyboard.tsx";
import GameBoxes from "../../components/GameBoxes.tsx";
import {answer, keys} from "../../../constants/index.ts";

const Home = () => {
  const [words, setWords] = useState<string[]>([]);
  const [word, setWord] = useState<number>(0);

    const [triedletters, updateTriedLetters] = useReducer((prevState, newValue: string) => {

        return {
            wrongLetters: prevState.wrongLetters.concat(newValue.split("").filter(letter => !answer.includes(letter))),
            semiCorrectLetters: prevState.semiCorrectLetters.concat(newValue.split("").filter(letter => answer.includes(letter))),
            correctLetters: newValue.split("").map((letter, index) => answer[index] === letter ? letter : prevState?.correctLetters[index] ?? "")
        }
    }, {
        wrongLetters: [],
        semiCorrectLetters: [],
        correctLetters: []
    })

  const handleDelete = () => {
    const newWords = [...words];
    if (newWords[word]?.length === 0) return;
    newWords[word] = newWords[word].slice(0, -1);
    setWords(newWords);
  };

  const handleInput = (key: string) => {
    console.log({ key });
    const newWords = [...words];
    if (newWords[word]?.length >= 5) return;
    newWords[word] = (newWords[word] ?? "") + key;
    setWords(newWords);
  };

  const handleSubmit = () => {
    if (words[word]?.length >= 5 && word < 6) {
        updateTriedLetters(words[word])
      setWord(prev => ++prev)
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
      console.log("Key pressed:", event.keyCode);
      if (event.keyCode === 8) {
        handleDelete()
      } else if (event.keyCode === 13) {
        handleSubmit()
      } else if (keys.includes(event.key.toUpperCase())) {
        handleInput(event.key.toUpperCase())
      }
    }
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [words, word]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-8">
      <h1 className="mb-4 text-3xl font-extrabold">Wordle</h1>
      <GameBoxes words={words} word={word} />
      <GameKeyboard
          wrongLetters={triedletters.wrongLetters.join("")}
          almostCorrectLetters={triedletters.semiCorrectLetters.join('')}
          correctLetters={triedletters.correctLetters.join("")}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
