'use client';

import { useState } from 'react';
import ViewGeneratedImage from './ViewGeneratedImage';
import GenerateNewImage from './GenerateNewImage';
import GameRules from './GameRules';
import GameWord from './GameWord';

export default function Game() {
  const [curWordRef, setCurWordRef] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [gameRunning, setGameRunning] = useState(false);

  return (
    <section className="flex flex-col gap-y-10 lg:max-w-7xl lg:mx-auto px-10 mb-10">
      <GameRules />
      <section className="flex gap-x-10">
        <div className="flex-1">
          <section className="space-y-2 max-w-1/2 mb-10">
            <GameWord
              curWordRef={curWordRef}
              setCurWordRef={setCurWordRef}
              gameRunning={gameRunning}
              setGameRunning={setGameRunning}
              setImageUrl={setImageUrl}
            />
          </section>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-y-2">
            <ViewGeneratedImage imageUrl={imageUrl} loading={loading} />
            <GenerateNewImage
              setImageUrl={setImageUrl}
              loading={loading}
              setLoading={setLoading}
              curWordRef={curWordRef}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
