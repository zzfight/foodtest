import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-2xl font-mono">
      {time.toLocaleTimeString()}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">
          你好，世界！
        </h1>
        <Clock />
      </div>
    </div>
  );
}

export default App;