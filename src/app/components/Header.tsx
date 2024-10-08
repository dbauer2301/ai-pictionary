'use client';

export default function Header() {
  function handlePromptClick() {
    const bottomElement = document.querySelector('.generate-btn');
    if (bottomElement) {
      bottomElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleGuessClick() {
    window.open('/guess', '_blank');
  }

  return (
    <header className="flex flex-col justify-center items-center gap-y-10 w-full py-10 mb-10 overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <h1 className="font-bold-italic font-bold italic text-5xl text-white uppercase">
        AI Pictionary
      </h1>
      <nav className="flex gap-x-2">
        <button className="btn-secondary" onClick={handlePromptClick}>
          I&#39;m prompting &#8681;
        </button>
        <button className="btn-secondary" onClick={handleGuessClick}>
          I want to guess &#8680;
        </button>
      </nav>
    </header>
  );
}
