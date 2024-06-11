import { useEffect, useState } from "react";
import "./index.css";

function App() {
  let [count, setCount] = useState(0);
  const [name, setName] = useState("Loading....");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount === 100) {
          clearInterval(interval);
          setName("Complete!");
        }
        return newCount;
      });
    }, 50);

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <>
      <h1>Progress Bar</h1>
      <div id="bar-outer">
      <div className="bar" style={{width:`${count}%` }}>
        <p>{count}%</p>
      </div>
      
      </div>
      <p>{name}</p>
    </>
  );
}

export default App;