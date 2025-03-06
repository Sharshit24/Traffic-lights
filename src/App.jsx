import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [light, setLight] = useState('red');

  const lights = ['red', 'green', 'yellow'];
  const timings = {
    red: 200,
    green: 150,
    yellow: 100,
  };

  const lightColors = {
    red: 'bg-red-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLight((prev) => lights[(lights.indexOf(prev) + 1) % lights.length]);
    }, timings[light]);

    return () => clearTimeout(timer);
  }, [light]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-between items-center w-24 h-72 rounded-lg p-2 bg-black">
          {lights.map((col) => (
            <div
              key={col}
              className={`w-full h-20 rounded-full ${light === col ? lightColors[col] : 'bg-gray-500'} shadow-lg`}
              aria-label={col}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
