import { useState } from 'react';
import { arr } from './template.js';

function findMemeIndexById(idToFind) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === idToFind) {
      return i; // Return the index where the id is found
    }
  }
  return -1; // Return -1 if the id is not found
}
export default function App() {
  const [topText, setTopText] = useState('Top Text');
  const [bottomText, setBottomText] = useState('Bottom Text');
  const [memeId, setMemeId] = useState('aag'); // Default meme ID

  const memeIndex = findMemeIndexById(memeId);

  const url = memeIndex !== -1 ? arr[memeIndex].blank : ''; // Check if memeIndex is valid
  const imageUrl = `${url.slice(0, -4)}/${topText}/${bottomText}`;
  return (
    <>
      <label>
        Top text
        <br />
        <input onChange={(event) => setTopText(event.currentTarget.value)} />
      </label>
      <br />
      <label>
        Bottom text
        <br />
        <input onChange={(event) => setBottomText(event.currentTarget.value)} />
      </label>
      <br />
      <label>
        Meme Template:
        <br />
        <input onChange={(event) => setMemeId(event.currentTarget.value)} />
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
