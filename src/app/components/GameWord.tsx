import { useState } from 'react';

import data from '../utils/data';

interface GameWordProps {
  curWordRef: number;
  setCurWordRef: React.Dispatch<React.SetStateAction<number>>;
}

export default function GameWord({ curWordRef, setCurWordRef }: GameWordProps) {
  const [gameRound, setGameRound] = useState(1);
  const [gameScore, setGameScore] = useState(0);
  // const [highScore, setHighScore] = useState(0);

  function handleCorrectClick() {
    // console.log('correct!');
    if (curWordRef >= data.length - 1) return;
    setGameRound((curRound) => curRound + 1);
    setGameScore((curScore) => {
      const newScore = curScore + 1;
      // if (highScore < newScore) setHighScore(newScore);
      return newScore;
    });
    setCurWordRef((curWord) => curWord + 1);
  }

  function handleSkipClick() {
    if (curWordRef >= data.length - 1) return;
    setGameRound((curRound) => curRound + 1);
    setCurWordRef((curWord) => curWord + 1);
  }

  return (
    <section className="flex flex-col gap-y-4 max-w-3xl mx-auto p-6 bg-primary-container rounded-xl dark:bg-gray-800">
      <h2 className="text-2xl font-extrabold italic text-gray-900 uppercase dark:text-white">
        Round #{gameRound}
      </h2>
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
            {/* <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              Highscore: {highScore}
            </p> */}
          </div>
        </div>
      </div>
      <div className="flex gap-x-2">
        <button
          className="btn-green flex-1 flex-grow"
          onClick={handleCorrectClick}
        >
          Correct Guess &#10003;
        </button>
        <button
          className="btn-secondary flex-1 flex-grow"
          onClick={handleSkipClick}
        >
          Skip &#10132;
        </button>
      </div>
    </section>
  );
}
