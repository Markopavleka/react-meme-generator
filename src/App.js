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
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
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
      <div>
        <label htmlFor="top text">Top text</label>
        <input
          name="top text"
          id="top text"
          onChange={(event) => setTopText(event.currentTarget.value)}
        />
        <br />
        <label htmlFor="bottom text">Bottom text</label>
        <br />
        <input
          name="bottom text"
          id="bottom text"
          onChange={(event) => setBottomText(event.currentTarget.value)}
        />
        <br />
        <label htmlFor="meme template">Meme Template</label>
        <br />
        <input
          name="meme template"
          id="meme template"
          onChange={(event) => setMemeId(event.currentTarget.value)}
        />
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
