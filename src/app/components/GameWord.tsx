import data from '../utils/data';

const currentWordObj = data[0];

export default function GameWord() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-extrabold text-gray-900 uppercase mb-4 dark:text-white">
        Round #01
      </h2>
      <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
        If the word is guessed correctly, press the button "Correct Guess" below
        to score a point. If you want to skip the current word, press the button
        "Skip" to move to the next word. Each correct guess within the time
        limit scores 1 point.
      </p>
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Your word: <span className="text-brand-1">{currentWordObj.word}</span>
      </h3>
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
        Forbidden words:
      </h3>
      <ul className="space-y-2 text-base text-gray-600 list-disc list-outside px-4 dark:text-gray-400">
        {currentWordObj.forbidden.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </section>
  );
}
