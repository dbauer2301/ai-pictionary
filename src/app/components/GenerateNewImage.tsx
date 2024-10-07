'use client';

import { useState } from 'react';

import data from '../utils/data';

interface GenerateNewImageProps {
  setImageUrl: (url: string) => void;
  loading: boolean;
  setLoading: (arg0: boolean) => void;
}

export default function GenerateNewImage({
  setImageUrl,
  loading,
  setLoading,
}: GenerateNewImageProps) {
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState<string | null>(null);

  function checkInput(prompt: string) {
    const promptArray = prompt.split(/[\s,\.]+/);
    return promptArray.some((value) => data[0].forbidden.includes(value));
  }

  async function createImage(e: React.FormEvent) {
    e.preventDefault();

    // Check prompt input for forbidden terms
    if (checkInput(prompt)) {
      setError('Your prompt contains forbidden terms. Please try again.');
      return;
    }

    setLoading(true);
    setError(null);

    const model = 'flux-realism';
    const seed = '1';

    const response = await fetch(
      `https://image.pollinations.ai/prompt/${prompt}?model=${model}&width=700&height=525&seed=${seed}&nologo=true&enhance=false`
    );

    if (response.ok) {
      const blob = await response.blob();
      const imageObjectURL = URL.createObjectURL(blob);
      setImageUrl(imageObjectURL);
      // Store the image URL in localStorage
      localStorage.setItem('generatedImageUrl', imageObjectURL);
    } else {
      console.error('Failed to fetch image');
    }
    setLoading(false);
  }

  return (
    <div className="w-full">
      <form className="form" onSubmit={createImage}>
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2">
            {error ? (
              <input
                type="text"
                id="error"
                className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                placeholder="Enter your prompt here..."
                required
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            ) : (
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your prompt here..."
                required
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            )}
            <button className="btn-primary" disabled={loading}>
              {loading ? 'Generating...' : 'Generate'}
            </button>
          </div>
          {error ? (
            <p className="text-sm text-red-600 dark:text-red-500">{error}</p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
