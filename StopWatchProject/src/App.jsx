import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((PrevTime) => PrevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className=" flex flex-col min-h-screen bg-blue-200 items-center justify-center py-8">
      <h1 className="text-2xl font-semibold pb-2">STOPWATCH</h1>
      <div className="text-2xl font-semibold py-4">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}:</span>
      </div>
      <div className="w-1/3 flex flex-col justify-between">
        {running ? (
          <button
            className="border rounded-lg py-1 px-3 bg-blue-400"
            onClick={() => setRunning(false)}
          >
            Stop
          </button>
        ) : (
          <button
            className="border rounded-lg py-1 px-3.5 bg-blue-400"
            onClick={() => setRunning(true)}
          >
            Start
          </button>
        )}
        <button
          className="border rounded-lg py-1 px-3 bg-blue-400"
          onClick={() => setTime(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
