import Header from './components/Header';
import GameImageGeneration from './components/GameImageGeneration';
import GameDescription from './components/GameDescription';

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex gap-x-10 lg:max-w-7xl lg:mx-auto px-10">
        <div className="flex-1">
          <GameDescription />
        </div>
        <div className="flex-1">
          <GameImageGeneration />
        </div>
      </section>
    </>
  );
}
