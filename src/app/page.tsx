import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-row items-start">
      <div className="flex flex-col">
        <h1 className="font-titillium-web font-bold italic text-[7rem] text-black uppercase">
          AI Image Taboo
        </h1>
        <p>This is an explanation text.</p>
      </div>

      <div className="xgame-container">
        <div className="image-container">
          <div className="xloading-screen xhidden">
            <svg className="xspinner">
              <use href="/img/icons.svg#icon-loader"></use>
            </svg>
          </div>
          <Image
            src="/img/sbg-_background.png"
            alt="SBG Placeholder Background"
            className="generated-img"
            fill={true}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <form className="form">
          <input
            type="text"
            className="prompt-field"
            placeholder="Enter your prompt here..."
          />
          <button className="bg-black">Generate</button>
        </form>
      </div>
    </div>
  );
}
