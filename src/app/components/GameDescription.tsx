import GameRules from './GameRules';
import GameWord from './GameWord';

export default function GameDescription() {
  return (
    <section className="space-y-2 max-w-1/2 mb-10">
      <GameRules />
      <GameWord />
    </section>
  );
}
