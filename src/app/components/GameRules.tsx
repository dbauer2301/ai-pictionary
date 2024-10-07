export default function GameRules() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-extrabold italic text-gray-900 uppercase mb-4 dark:text-white">
        Game Rules
      </h2>
      <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
        AI Pictionary puts a little twist on the classic game. Just like in
        regular Pictionary, players need to guess words or phrases based on an
        image. The twist: The pictures are not drawn by the players directly but
        by an AI based on a prompt. Here are the rules:
      </p>

      <ul className="space-y-3 text-base text-gray-600 list-disc list-outside px-4 dark:text-gray-400">
        <li>
          The prompting player cannot use words that are listed as 'forbidden'
          below.
        </li>
        <li>The guessing player can only see the generated image.</li>
        <li>
          The prompting player cannot describe, write, or gesture to explain the
          image.
        </li>
        <li>Prompts may only be written in English.</li>
        <li>You have 4 minutes.</li>
        <li>Good luck, have fun!</li>
      </ul>
    </section>
  );
}
