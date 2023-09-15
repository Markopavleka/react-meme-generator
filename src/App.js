import './app.css';
import { useState } from 'react';
import { arr } from './template.js';

function findMemeIndexById(idToFind) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === idToFind) {
      return i;
    }
  }
  return -1;
}
export default function App() {
  const [topText, setTopText] = useState(' ');
  const [bottomText, setBottomText] = useState(' ');
  const [memeId, setMemeId] = useState('aag');

  const memeIndex = findMemeIndexById(memeId);

  const url = memeIndex !== -1 ? arr[memeIndex].blank : '';
  const imageUrl = function () {
    if (topText < 1) {
      return `${url.slice(0, -4)}/_/${bottomText}.png`;
    } else {
      return `${url.slice(0, -4)}/${topText}/${bottomText}.png`;
    }
  };
  return (
    <>
      <div className="input">
        <label>
          Top text
          <br />
          <input onChange={(event) => setTopText(event.currentTarget.value)} />
        </label>
        <br />
        <label>
          Bottom text
          <br />
          <input
            onChange={(event) => setBottomText(event.currentTarget.value)}
          />
          <br />
          <label>
            Meme Template:
            <br />
            <input onChange={(event) => setMemeId(event.currentTarget.value)} />
          </label>
        </label>
      </div>
      <br />
      <a href={imageUrl()} download>
        Download
      </a>
      <br />
      <img data-test-id="meme-image" alt="meme" src={imageUrl()} />
      <br />
      <br />
    </>
  );
}
