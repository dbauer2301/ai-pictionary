'use client';

import { useEffect, useState } from 'react';

export default function GuessImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Fetch the initial image URL from localStorage when the component mounts
    const storedImageUrl = localStorage.getItem('generatedImageUrl');
    if (storedImageUrl) {
      setImageUrl(storedImageUrl);
    }

    // Set up an event listener for changes to localStorage
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'generatedImageUrl') {
        // Update the imageUrl state when 'generatedImageUrl' is changed in localStorage
        setImageUrl(e.newValue || '');
      }
    };

    // Add the event listener for 'storage' events
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (!imageUrl) {
    return <div>No image available</div>;
  }

  return (
    <div className="flex flex-col gap-y-4 justify-center items-center w-full h-screen  relative bg-black">
      <h1 className="font-bold-italic font-bold italic text-5xl text-white uppercase">
        Guess the image!
      </h1>
      <img
        src={imageUrl}
        alt="AI Generated Image"
        style={{ width: '700px', height: '525px', objectFit: 'cover' }}
        className="rounded-[1.2rem] overflow-hidden bg-primary-container shadow-custom"
      />
    </div>
  );
}
