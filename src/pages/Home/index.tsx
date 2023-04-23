import React from 'react'
import GameKeyboard from "../../components/GameKeyboard.tsx";
import GameBoxes from '../../components/GameBoxes.tsx';



const Home = () => {
  const word = 'LOVING'
  return (
      <div className='pt-8 flex justify-center items-center flex-col gap-4'>
        <h1 className='text-3xl font-extrabold mb-4'>Wordle</h1>
        <GameBoxes word={word} />
        <GameKeyboard />
      </div>
  )
}

export default Home;