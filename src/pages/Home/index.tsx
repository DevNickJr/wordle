import React, { useState } from 'react'
import GameKeyboard from "../../components/GameKeyboard.tsx";
import GameBoxes from '../../components/GameBoxes.tsx';



const Home = () => {
  const [words, setWords] = useState<string[]>(["HOUSE", "Rosek", "jnj"])
  const [word, setWord] = useState<number>(0)
  return (
      <div className='pt-8 flex justify-center items-center flex-col gap-4'>
        <h1 className='text-3xl font-extrabold mb-4'>Wordle</h1>
        <GameBoxes word={word} words={words} />
        <GameKeyboard />
      </div>
  )
}

export default Home;