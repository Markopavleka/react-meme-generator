import { useState } from 'react';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const url = 'https://api.memegen.link/images/aag';
  const imageUrl = `${url}${topText}${bottomText}.png`;
  return (
    <>
      <label>
        Top text
        <br />
        <input
          onChange={(event) => setTopText('/' + event.currentTarget.value)}
        />
      </label>
      <br />
      <label>
        Bottom text
        <br />
        <input
          onChange={(event) => setBottomText('/' + event.currentTarget.value)}
        />
      </label>
      <br />
      <label>
        Meme Template:
        <br />
        <input />
      </label>
      <br />
      <br />
      <img data-test-id="meme-image" alt="meme" src={imageUrl} />
      <br />
      <br />
      <a
        href={imageUrl}
        download="meme"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Download</button>
      </a>
    </>
  );
}
