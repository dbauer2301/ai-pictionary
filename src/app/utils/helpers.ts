// Helper function to get a random index
export function getRandomArrIndex(array: number[]): number {
  return Math.floor(Math.random() * array.length);
}

// Helper function to select a word based on a random index and take the selected index out of the copied array
export function selectRandomWord(
  array: Array<number>
): [number, Array<number>] {
  const index = getRandomArrIndex(array);
  const wordRef = array[index];
  const updatedArray = array.filter((_, i) => i !== index);
  return [wordRef, updatedArray];
}

// Format time from seconds to format min:sec
export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

// Helper function to sanitize prompt inputs
export function sanitizePrompt(prompt: string) {
  const lowerCasePrompt = prompt.toLowerCase();
  const promptArray = lowerCasePrompt.split(/[\s.,!?;:()'"“”/$%§*#-]+/);
  const sanitizedPrompt = promptArray.join(' ');
  return sanitizedPrompt;
}
