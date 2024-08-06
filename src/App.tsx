import { useEffect, useState } from "react";
import "./App.css";
import { ProgressBar } from "./components/ProgressBar";

const MIN_PROGRESS = 0;
const MAX_PROGRESS = 100;
const STEP = 4;
const INCREMENT_INTERVAL = 70;

function App() {
  const [currentProgress, setCurrentProgress] = useState(MIN_PROGRESS);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProgress((prevProgress) => {
        if (prevProgress >= MAX_PROGRESS) {
          clearInterval(interval);
        }
        return Math.min(prevProgress + STEP, MAX_PROGRESS);
      });
    }, INCREMENT_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <ProgressBar progress={currentProgress} progressColor="yellow" width="300px" />;
}

export default App;
