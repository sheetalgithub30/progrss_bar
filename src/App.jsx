import { useEffect, useState } from "react";
import "./index.css";

function App() {
    let [count, setCount] = useState(0);
  const [color,setColor] = useState("");
  const [name, setName] = useState("Loading....");

  useEffect(() => {
       
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount === 100) {
          clearInterval(interval);
          setName("Completed!!!");
        }

        if(newCount < 30){
          setColor("#ff0000");
        }else if(newCount<80){
           setColor("#ffff00")
          } 
          else{
            setColor("#00ff00")
          }
        return newCount;
      });
    }, 50);

    return () => {
      clearInterval(interval); 
    };
  }, []);



  return (
    <>
      <h1>Progress Bar</h1>
      <div id="bar-outer">
      <div className="bar" style={{width:`${count}% `, backgroundColor:`${color}`}}>
        <p>{count}%</p>
      </div>
      
      </div>
      <p id="name">{name}</p>
    </>
  );
}

export default App;