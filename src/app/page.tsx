import Header from './components/Header';
import GameImageGeneration from './components/GameImageGeneration';
import GameRules from './components/GameRules';

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex gap-x-10 lg:max-w-7xl lg:mx-auto px-10">
        <GameRules />
        <GameImageGeneration />
      </section>
    </>
  );
}
