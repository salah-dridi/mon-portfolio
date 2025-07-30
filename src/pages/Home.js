import { useState, useEffect } from 'react'; 
import homeparagraphe1 from '../Data/HomeParagraphe';
import BasicLineChart from '../Components/BasicLineChart';
import PieActiveArc from '../Components/PieActiveArc';

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

  const lines = displayedText.split('\n');

  return (
    <p style={{ color: '#66cee5ff', whiteSpace: 'pre-wrap', margin: 0 }}>
      {lines.map((line, index) => (
        <span key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}

function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'black',
        fontSize: '17px',
        fontFamily: 'monospace',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          minHeight: 300,
          overflow: 'hidden',
          marginBottom: 20,
        }}
      >
        <Typewriter text={homeparagraphe1} speed={70} />
      </div>

     <div 
  style={{ 
    display: 'flex', 
    flexDirection: 'row', 
    gap: '20px', 
    flexWrap: 'wrap', 
    justifyContent: 'center',
    width: 'fit-content',
    margin: '0 auto' 
  }}
>
  <BasicLineChart />
  <PieActiveArc />
</div>

    </div>
  );
}

export default Home;
