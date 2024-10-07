'use client';

import { useState } from 'react';
import ViewGeneratedImage from './ViewGeneratedImage';
import GenerateNewImage from './GenerateNewImage';

export default function GameImageGeneration() {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col gap-y-2">
      <ViewGeneratedImage imageUrl={imageUrl} loading={loading} />
      <GenerateNewImage
        setImageUrl={setImageUrl}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}
