import { useState, useEffect } from 'react';
import homeparagraphe from '../Data/HomeParagraphe';
function Typewriter({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p style={{ color: '#183912ff' }}>
      {displayedText}
    </p>
  );
}


function Home() {
  return (
   <div
  style={{
  minHeight: '100vh',
    backgroundColor: 'black',
    display: 'flex',
    fontSize: '17px',
    fontFamily: 'monospace',
  }}
>
      <Typewriter text={homeparagraphe} speed={70} />
    </div>
  );
}

export default Home;