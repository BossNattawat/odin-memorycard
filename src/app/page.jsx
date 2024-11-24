"use client"

import Image from "next/image";
import Header from "./components/Header";
import react, { useState, useEffect } from "react";
import cardData from "./cardData";

export default function Home() {

  const [heroData, setHeroData] = useState(cardData)
  const [selectedHero, setSelectedHero] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  function shuffleCard(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at index i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  useEffect(() => {
    setHeroData(shuffleCard(heroData))
  }, [score])

  function handleClick(id){

    setSelectedHero((prev) => [...prev, id])

    for(let i = 0; i < 12; i++){
      if(id === selectedHero[i]){
        setBestScore(score)
        setScore(0)
        return
      }
    }
    setScore(score + 1)

  }
  
  if(score === 12){
    setBestScore(score)
    setScore(0)
    const dialog = document.querySelector("#dialog")
    dialog.show()
  }

  function closeDialog(){
    const dialog = document.querySelector("#dialog")
    dialog.close()
  }

  return (
    <div className="">
      <Header score={score} bestScore={bestScore}/>
      <dialog id="dialog" className="border-4 p-6 text-center rounded-lg shadow-lg z-20 fixed top-[350px]">
        <h1 className="text-3xl font-semibold">🎉Congratulations🎉</h1>
        <h2 className="text-2xl font-semibold">You Won!</h2>
        <button onClick={() => closeDialog()} className="text-2xl mt-4 bg-red-500 text-white p-1 rounded-lg">Close</button>
      </dialog>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 justify-center items-center gap-5 p-10">
        {heroData.map((hero) => (
          <div onClick={() => handleClick(hero.id)} className="p-3 bg-[#ffffff] rounded-lg shadow-lg duration-200 cursor-pointer hover:scale-105" key={hero.id}>
            <h2 className="text-3xl font-bold text-[#000000]">{hero.heroName}</h2>
            <Image className="border-2 border-[#878787] rounded-lg" src={`/Heroes/${hero.src}`} width={300} height={300} alt="hero"/>
          </div>
        ))}
      </div>
    </div>
  );
}
