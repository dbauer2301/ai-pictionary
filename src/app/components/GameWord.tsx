import { useState, useEffect } from 'react';

import data from '../utils/data';
import { selectRandomWord } from '../utils/helpers';
import { formatTime } from '../utils/helpers';

interface GameWordProps {
  curWordRef: number;
  setCurWordRef: React.Dispatch<React.SetStateAction<number>>;
  gameRunning: boolean;
  setGameRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setImageUrl: (url: string) => void;
}

export default function GameWord({
  curWordRef,
  setCurWordRef,
  gameRunning,
  setGameRunning,
  setImageUrl,
}: GameWordProps) {
  const [gameRound, setGameRound] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [wordRefArray, setWordRefArray] = useState(() =>
    Array.from(data.keys())
  );
  const [timer, setTimer] = useState(300);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (gameRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timer === 0) {
      setGameRunning(false);
    }

    return () => clearInterval(interval);
  }, [gameRunning, timer, setGameRunning]);

  function startGame() {
    setGameRunning(true);
    setGameRound(0);
    setGameScore(0);
    setImageUrl('/img/sbg_background.png');
    setTimer(300);
    nextRound();
  }

  function resetGame() {
    setGameRunning(false);
    setGameRound(0);
    setGameScore(0);
    setImageUrl('/img/sbg_background.png');
    setTimer(300);
  }

  function nextRound() {
    setGameRound((curRound) => curRound + 1);

    const [wordRef, updatedArray] = selectRandomWord(wordRefArray);

    let newWordRefArray = updatedArray;

    if (newWordRefArray.length === 0) {
      newWordRefArray = Array.from(data.keys());
    }
    setWordRefArray(newWordRefArray);
    setCurWordRef(wordRef);
  }

  function handleCorrectClick() {
    setGameScore((curScore) => curScore + 1);
    nextRound();
  }

  function handleSkipClick() {
    nextRound();
  }

  return (
    <section className="flex flex-col gap-y-4 max-w-3xl mx-auto p-6 bg-primary-container rounded-xl dark:bg-gray-800">
      <div className="flex justify-between">
        <h2 className="text-2xl font-extrabold italic text-gray-900 uppercase dark:text-white">
          Round #{gameRound}
        </h2>
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          {formatTime(timer)}
        </p>
      </div>
      <hr></hr>
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            Your word:{' '}
            <span className="text-brand-1">{data[curWordRef].word}</span>
          </h3>
          <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300">
            Forbidden words:
          </h3>
          <ul className="space-y-2 text-base text-gray-600 list-disc list-outside px-4 dark:text-gray-400">
            {data[curWordRef].forbidden.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex flex-col items-end">
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              Your Score: {gameScore}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-2">
        <button
          className="btn-green flex-1 flex-grow"
          onClick={handleCorrectClick}
          disabled={!gameRunning}
          hidden={!gameRunning}
        >
          Correct Guess &#10003;
        </button>
        <button
          className="btn-secondary flex-1 flex-grow"
          onClick={handleSkipClick}
          disabled={!gameRunning}
          hidden={!gameRunning}
        >
          Skip &#10132;
        </button>
      </div>
      <button
        className={`${gameRunning ? 'btn-secondary' : 'btn-primary'} flex-grow`}
        onClick={gameRunning ? resetGame : startGame}
      >
        {gameRunning ? 'Reset Game' : 'Start Game'}
      </button>
    </section>
  );
}
